-- Supabase Schema for Academic Planner

-- 1. Create Profiles Table (Linked to auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  student_id text unique,
  university_name text,
  department text,
  batch text,
  current_trimester text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;
create policy "Users can view own profile." on profiles for select using (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- 2. Master Data: Programmes
create table public.programmes (
  id uuid default gen_random_uuid() primary key,
  university_name text not null,
  name text not null, -- e.g. "BSc in Computer Science"
  department text,
  total_credit_requirement numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.programmes enable row level security;
create policy "Programmes are viewable by everyone." on programmes for select using (true);

-- 3. Master Data: Courses
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  programme_id uuid references public.programmes on delete cascade not null,
  code text not null, -- e.g. "CSE 2217"
  title text not null,
  credits numeric not null,
  category text default 'Core',
  suggested_trimester integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(programme_id, code)
);
alter table public.courses enable row level security;
create policy "Courses are viewable by everyone." on courses for select using (true);

-- 4. Master Data: Course Prerequisites (AND logic default)
create table public.course_prerequisites (
  id uuid default gen_random_uuid() primary key,
  course_id uuid references public.courses on delete cascade not null,
  prerequisite_course_id uuid references public.courses on delete cascade not null,
  type text default 'AND',
  unique(course_id, prerequisite_course_id)
);
alter table public.course_prerequisites enable row level security;
create policy "Prerequisites are viewable by everyone." on course_prerequisites for select using (true);

-- 5. Student Data: Academic History (Courses taken/planned)
create table public.student_courses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  course_id uuid references public.courses on delete cascade not null,
  status text not null check (status in ('Not Started', 'Planned', 'In Progress', 'Completed', 'Retake', 'Waived')),
  grade text,
  earned_credits numeric,
  term text, -- e.g. "Spring 2024"
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, course_id)
);
alter table public.student_courses enable row level security;
create policy "Users can view own courses." on student_courses for select using (auth.uid() = user_id);
create policy "Users can insert own courses." on student_courses for insert with check (auth.uid() = user_id);
create policy "Users can update own courses." on student_courses for update using (auth.uid() = user_id);
create policy "Users can delete own courses." on student_courses for delete using (auth.uid() = user_id);

-- 6. Student Data: Trimester Plans
create table public.student_trimester_plans (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  target_trimester text not null,
  desired_credit_load numeric not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table public.student_trimester_plans enable row level security;
create policy "Users can view own plans." on student_trimester_plans for select using (auth.uid() = user_id);
create policy "Users can insert own plans." on student_trimester_plans for insert with check (auth.uid() = user_id);
create policy "Users can update own plans." on student_trimester_plans for update using (auth.uid() = user_id);
create policy "Users can delete own plans." on student_trimester_plans for delete using (auth.uid() = user_id);

-- 7. Join Table: Plan to Courses
create table public.plan_courses (
  plan_id uuid references public.student_trimester_plans on delete cascade not null,
  course_id uuid references public.courses on delete cascade not null,
  primary key(plan_id, course_id)
);
alter table public.plan_courses enable row level security;
-- RLS for join table relies on user_id in student_trimester_plans. We can simplify by just allowing users to see plan_courses if they own the plan.
create policy "Users can access plan_courses for own plans." on plan_courses
  for all using (
    exists (
      select 1 from student_trimester_plans
      where student_trimester_plans.id = plan_courses.plan_id
      and student_trimester_plans.user_id = auth.uid()
    )
  );
