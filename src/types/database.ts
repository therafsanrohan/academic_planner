export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      institutions: {
        Row: {
          id: string;
          name: string;
          country: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          country?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          country?: string | null;
        };
      };
      departments: {
        Row: {
          id: string;
          institution_id: string;
          name: string;
          code: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          institution_id: string;
          name: string;
          code: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          code?: string;
        };
      };
      curricula: {
        Row: {
          id: string;
          department_id: string;
          batch_identifier: string;
          version: string | null;
          total_credits: number;
          is_verified: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          department_id: string;
          batch_identifier: string;
          version?: string | null;
          total_credits: number;
          is_verified?: boolean;
          created_at?: string;
        };
        Update: {
          batch_identifier?: string;
          version?: string | null;
          total_credits?: number;
          is_verified?: boolean;
        };
      };
      curriculum_sections: {
        Row: {
          id: string;
          curriculum_id: string;
          name: string;
          requirement_rule: string | null;
          required_credits: number;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          curriculum_id: string;
          name: string;
          requirement_rule?: string | null;
          required_credits: number;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          name?: string;
          requirement_rule?: string | null;
          required_credits?: number;
          display_order?: number;
        };
      };
      courses: {
        Row: {
          id: string;
          curriculum_id: string | null;
          section_id: string | null;
          normalized_code: string | null;
          programme_id: string | null;
          code: string;
          title: string;
          credits: number;
          category: string;
          suggested_trimester: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          curriculum_id?: string | null;
          section_id?: string | null;
          normalized_code?: string | null;
          programme_id?: string | null;
          code: string;
          title: string;
          credits: number;
          category?: string;
          suggested_trimester?: number | null;
          created_at?: string;
        };
        Update: {
          code?: string;
          title?: string;
          credits?: number;
          category?: string;
          suggested_trimester?: number | null;
        };
      };
      course_prerequisites: {
        Row: {
          id: string;
          course_id: string;
          prerequisite_course_id: string;
          type: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          prerequisite_course_id: string;
          type?: string;
        };
        Update: {
          type?: string;
        };
      };
      elective_groups: {
        Row: {
          id: string;
          curriculum_id: string;
          name: string;
          required_credits: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          curriculum_id: string;
          name: string;
          required_credits: number;
          created_at?: string;
        };
        Update: {
          name?: string;
          required_credits?: number;
        };
      };
      course_elective_mapping: {
        Row: {
          course_id: string;
          elective_group_id: string;
        };
        Insert: {
          course_id: string;
          elective_group_id: string;
        };
        Update: {};
      };
      student_courses: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          status: string;
          grade: string | null;
          earned_credits: number | null;
          term: string | null;
          source: string | null;
          is_demo: boolean | null;
          include_in_plan: boolean | null;
          target_trimester: string | null;
          plan_order: number | null;
          personal_note: string | null;
          original_note: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          status: string;
          grade?: string | null;
          earned_credits?: number | null;
          term?: string | null;
          source?: string | null;
          is_demo?: boolean | null;
          include_in_plan?: boolean | null;
          target_trimester?: string | null;
          plan_order?: number | null;
          personal_note?: string | null;
          original_note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: string;
          grade?: string | null;
          earned_credits?: number | null;
          term?: string | null;
          source?: string | null;
          is_demo?: boolean | null;
          include_in_plan?: boolean | null;
          target_trimester?: string | null;
          plan_order?: number | null;
          personal_note?: string | null;
          original_note?: string | null;
          updated_at?: string;
        };
      };
      course_plan_imports: {
        Row: {
          id: string;
          user_id: string;
          curriculum_id: string | null;
          source_type: string;
          source_url: string | null;
          raw_data: Json | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          curriculum_id?: string | null;
          source_type: string;
          source_url?: string | null;
          raw_data?: Json | null;
          status?: string;
          created_at?: string;
        };
        Update: {
          status?: string;
        };
      };
      preserved_unmapped_courses: {
        Row: {
          id: string;
          user_id: string;
          import_id: string | null;
          raw_course_data: Json;
          mapping_status: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          import_id?: string | null;
          raw_course_data: Json;
          mapping_status?: string | null;
          created_at?: string;
        };
        Update: {
          mapping_status?: string | null;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string;
          action: string;
          entity_type: string;
          entity_id: string | null;
          old_data: Json | null;
          new_data: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          action: string;
          entity_type: string;
          entity_id?: string | null;
          old_data?: Json | null;
          new_data?: Json | null;
          created_at?: string;
        };
        Update: {};
      };
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          student_id: string | null;
          university_name: string | null;
          department: string | null;
          batch: string | null;
          current_trimester: string | null;
          is_admin: boolean | null;
          curriculum_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          student_id?: string | null;
          university_name?: string | null;
          department?: string | null;
          batch?: string | null;
          current_trimester?: string | null;
          is_admin?: boolean | null;
          curriculum_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          full_name?: string | null;
          student_id?: string | null;
          university_name?: string | null;
          department?: string | null;
          batch?: string | null;
          current_trimester?: string | null;
          is_admin?: boolean | null;
          curriculum_id?: string | null;
          updated_at?: string;
        };
      };
    };
  };
}
