-- Migration 00002: Production Schema Updates

-- 1. Master Data: Institutions and Departments
CREATE TABLE public.institutions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  country text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Institutions are viewable by everyone." ON institutions FOR SELECT USING (true);

CREATE TABLE public.departments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  institution_id uuid REFERENCES public.institutions ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  code text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Departments are viewable by everyone." ON departments FOR SELECT USING (true);

-- 2. Curricula & Sections
CREATE TABLE public.curricula (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  department_id uuid REFERENCES public.departments ON DELETE CASCADE NOT NULL,
  batch_identifier text NOT NULL, -- e.g., "Summer 232"
  version text,
  total_credits numeric NOT NULL,
  is_verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.curricula ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Curricula are viewable by everyone." ON curricula FOR SELECT USING (true);

CREATE TABLE public.curriculum_sections (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  curriculum_id uuid REFERENCES public.curricula ON DELETE CASCADE NOT NULL,
  name text NOT NULL, -- e.g., "Language", "Core Courses"
  requirement_rule text, -- e.g., "All", "Any 3"
  required_credits numeric NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.curriculum_sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Curriculum sections are viewable by everyone." ON curriculum_sections FOR SELECT USING (true);

-- 3. Modify Courses
ALTER TABLE public.courses ADD COLUMN curriculum_id uuid REFERENCES public.curricula ON DELETE CASCADE;
ALTER TABLE public.courses ADD COLUMN normalized_code text;
ALTER TABLE public.courses ADD COLUMN section_id uuid REFERENCES public.curriculum_sections ON DELETE SET NULL;
ALTER TABLE public.courses ALTER COLUMN programme_id DROP NOT NULL;

-- 4. Electives
CREATE TABLE public.elective_groups (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  curriculum_id uuid REFERENCES public.curricula ON DELETE CASCADE NOT NULL,
  name text NOT NULL, -- e.g., "AI Specialisation"
  required_credits numeric NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.elective_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Elective groups viewable by everyone." ON elective_groups FOR SELECT USING (true);

CREATE TABLE public.course_elective_mapping (
  course_id uuid REFERENCES public.courses ON DELETE CASCADE NOT NULL,
  elective_group_id uuid REFERENCES public.elective_groups ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (course_id, elective_group_id)
);
ALTER TABLE public.course_elective_mapping ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Elective mappings viewable by everyone." ON course_elective_mapping FOR SELECT USING (true);

-- 5. Import and Unmapped Data
CREATE TABLE public.course_plan_imports (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  curriculum_id uuid REFERENCES public.curricula ON DELETE SET NULL,
  source_type text NOT NULL CHECK (source_type IN ('PDF', 'URL', 'MANUAL')),
  source_url text,
  raw_data jsonb,
  status text NOT NULL DEFAULT 'Pending Review',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.course_plan_imports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access own imports." ON course_plan_imports FOR ALL USING (auth.uid() = user_id);

CREATE TABLE public.preserved_unmapped_courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  import_id uuid REFERENCES public.course_plan_imports ON DELETE CASCADE,
  raw_course_data jsonb NOT NULL,
  mapping_status text DEFAULT 'Not counted until reviewed',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.preserved_unmapped_courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can access own unmapped data." ON preserved_unmapped_courses FOR ALL USING (auth.uid() = user_id);

-- 6. Modify Student Courses
ALTER TABLE public.student_courses ADD COLUMN source text DEFAULT 'Manual';
ALTER TABLE public.student_courses ADD COLUMN is_demo boolean DEFAULT false;
ALTER TABLE public.student_courses ADD COLUMN include_in_plan boolean DEFAULT true;
ALTER TABLE public.student_courses ADD COLUMN target_trimester text;
ALTER TABLE public.student_courses ADD COLUMN plan_order integer DEFAULT 0;
ALTER TABLE public.student_courses ADD COLUMN personal_note text;
ALTER TABLE public.student_courses ADD COLUMN original_note text;

-- 7. Audit Logs
CREATE TABLE public.audit_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  action text NOT NULL,
  entity_type text NOT NULL,
  entity_id uuid,
  old_data jsonb,
  new_data jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own audit logs." ON audit_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own audit logs." ON audit_logs FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 8. Profiles Additions
ALTER TABLE public.profiles ADD COLUMN is_admin boolean DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN curriculum_id uuid REFERENCES public.curricula ON DELETE SET NULL;
