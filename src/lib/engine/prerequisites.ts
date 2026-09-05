export type CourseStatus = 'Not Started' | 'Planned' | 'In Progress' | 'Completed' | 'Retake' | 'Waived';

export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
}

export interface StudentCourse {
  courseId: string;
  status: CourseStatus;
}

export interface Prerequisite {
  courseId: string;
  prerequisiteCourseId: string;
  type: 'AND';
}

export interface EligibilityResult {
  isEligible: boolean;
  reasons: string[];
}

/**
 * Determines if a course is eligible to be taken based on the student's history and prerequisites.
 */
export function checkCourseEligibility(
  targetCourseId: string,
  studentCourses: StudentCourse[],
  prerequisites: Prerequisite[]
): EligibilityResult {
  const reasons: string[] = [];
  let isEligible = true;

  // 1. Find the target course in the student's history
  const history = studentCourses.find(sc => sc.courseId === targetCourseId);

  // 2. Rule: Cannot take if already completed or waived
  if (history && (history.status === 'Completed' || history.status === 'Waived')) {
    isEligible = false;
    reasons.push('Course is already completed or waived.');
    return { isEligible, reasons }; // Short-circuit, no need to check further
  }

  // 3. Rule: Cannot take if currently marked as Retake (It should go to Retake Manager)
  if (history && history.status === 'Retake') {
    isEligible = false;
    reasons.push('Course is marked as a Retake. Please check the Retake Manager.');
  }

  // 4. Rule: Cannot take if currently In Progress or Planned
  if (history && (history.status === 'In Progress' || history.status === 'Planned')) {
    isEligible = false;
    reasons.push(`Course is currently ${history.status.toLowerCase()}.`);
  }

  // 5. Check prerequisites
  const coursePrereqs = prerequisites.filter(p => p.courseId === targetCourseId);
  
  if (coursePrereqs.length > 0) {
    for (const prereq of coursePrereqs) {
      const prereqHistory = studentCourses.find(sc => sc.courseId === prereq.prerequisiteCourseId);
      
      if (!prereqHistory || (prereqHistory.status !== 'Completed' && prereqHistory.status !== 'Waived')) {
        isEligible = false;
        // In a real app, we'd look up the prerequisite course code to show a friendly name.
        reasons.push(`Missing prerequisite (ID: ${prereq.prerequisiteCourseId}). Must be Completed or Waived.`);
      }
    }
  }

  return { isEligible, reasons };
}

/**
 * Filters a list of courses to return only those that are 'Available Now'.
 */
export function getAvailableCourses(
  allCourses: Course[],
  studentCourses: StudentCourse[],
  prerequisites: Prerequisite[]
): Course[] {
  return allCourses.filter(course => {
    const result = checkCourseEligibility(course.id, studentCourses, prerequisites);
    return result.isEligible;
  });
}

/**
 * Returns courses that are marked as 'Retake'.
 */
export function getRetakeCourses(
  allCourses: Course[],
  studentCourses: StudentCourse[]
): Course[] {
  return allCourses.filter(course => {
    const history = studentCourses.find(sc => sc.courseId === course.id);
    return history?.status === 'Retake';
  });
}

/**
 * Calculates credit summaries.
 */
export function calculateCreditSummary(allCourses: Course[], studentCourses: StudentCourse[]) {
  let completed = 0;
  let retake = 0;

  studentCourses.forEach(sc => {
    const course = allCourses.find(c => c.id === sc.courseId);
    if (!course) return;

    if (sc.status === 'Completed' || sc.status === 'Waived') {
      completed += course.credits;
    } else if (sc.status === 'Retake') {
      retake += course.credits;
    }
  });

  return { completed, retake };
}
