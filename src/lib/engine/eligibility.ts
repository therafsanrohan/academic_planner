import type { Database } from '@/types/database';

export type CourseStatus = 'Not Started' | 'Planned' | 'In Progress' | 'Completed' | 'Retake' | 'Dropped' | 'Needs Review';
export type EligibilityStatus = 'Done' | 'Retake' | 'Available Now' | 'Prerequisite Pending' | 'Needs Review';

type CourseRow = Database['public']['Tables']['courses']['Row'];
type StudentCourseRow = Database['public']['Tables']['student_courses']['Row'];
type PrerequisiteRow = Database['public']['Tables']['course_prerequisites']['Row'];
type CurriculumSectionRow = Database['public']['Tables']['curriculum_sections']['Row'];
type ElectiveGroupRow = Database['public']['Tables']['elective_groups']['Row'];

export interface UnifiedCoursePlan {
  id: string; // The course id
  course_code: string;
  course_title: string;
  credits: number;
  
  // Student Context
  student_course_id?: string;
  status: CourseStatus;
  include_in_plan: boolean;
  target_trimester?: string | null;
  plan_order: number;
  personal_note?: string | null;
  original_note?: string | null;
  source: string; // 'Official Curriculum' | 'Elective' | 'Unmapped'
  
  // Grouping
  section?: CurriculumSectionRow;
  elective_group?: ElectiveGroupRow;
  
  // Calculated
  eligibility: EligibilityStatus;
  prerequisites: string[]; // Codes of prereqs
}

/**
 * Core engine logic to evaluate eligibility based on the user's specs.
 */
export function calculateEligibility(
  targetCourseId: string,
  targetStatus: CourseStatus,
  studentCourses: StudentCourseRow[],
  prerequisites: PrerequisiteRow[],
  allCourses: CourseRow[]
): { eligibility: EligibilityStatus, pending_prereqs: string[] } {
  
  if (targetStatus === 'Completed') {
    return { eligibility: 'Done', pending_prereqs: [] };
  }
  if (targetStatus === 'Retake') {
    return { eligibility: 'Retake', pending_prereqs: [] };
  }
  if (targetStatus === 'Needs Review') {
    return { eligibility: 'Needs Review', pending_prereqs: [] };
  }

  const coursePrereqs = prerequisites.filter(p => p.course_id === targetCourseId);
  if (coursePrereqs.length === 0) {
    return { eligibility: 'Available Now', pending_prereqs: [] };
  }

  const pending_prereqs: string[] = [];
  let allPrereqsMet = true;
  let hasUncertainData = false;

  for (const prereq of coursePrereqs) {
    const prereqHistory = studentCourses.find(sc => sc.course_id === prereq.prerequisite_course_id);
    const prereqCourse = allCourses.find(c => c.id === prereq.prerequisite_course_id);
    const codeName = prereqCourse ? prereqCourse.code : 'Unknown';

    if (!prereqHistory) {
      allPrereqsMet = false;
      pending_prereqs.push(codeName);
    } else if (prereqHistory.status === 'Needs Review') {
      hasUncertainData = true;
      pending_prereqs.push(codeName);
    } else if (prereqHistory.status !== 'Completed') {
      allPrereqsMet = false;
      pending_prereqs.push(codeName);
    }
  }

  if (hasUncertainData) {
    return { eligibility: 'Needs Review', pending_prereqs };
  }

  if (allPrereqsMet) {
    return { eligibility: 'Available Now', pending_prereqs: [] };
  }

  return { eligibility: 'Prerequisite Pending', pending_prereqs };
}
