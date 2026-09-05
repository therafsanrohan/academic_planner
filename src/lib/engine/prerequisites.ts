import { ICourse } from '../models/Course';
import { IStudentCourse, CourseStatus } from '../models/StudentAcademicRecord';

export interface EligibilityResult {
  isEligible: boolean;
  reasons: string[];
}

/**
 * Determines if a course is eligible to be taken based on the student's history and prerequisites.
 */
export function checkCourseEligibility(
  targetCourse: ICourse,
  studentCourses: IStudentCourse[]
): EligibilityResult {
  const reasons: string[] = [];
  let isEligible = true;

  // 1. Find the target course in the student's history
  const history = studentCourses.find(sc => sc.courseCode === targetCourse.code);

  // 2. Rule: Cannot take if already completed or waived
  if (history && (history.status === 'Completed' || history.status === 'Waived')) {
    isEligible = false;
    reasons.push('Course is already completed or waived.');
    return { isEligible, reasons };
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
  if (targetCourse.prerequisites && targetCourse.prerequisites.length > 0) {
    for (const prereqCode of targetCourse.prerequisites) {
      const prereqHistory = studentCourses.find(sc => sc.courseCode === prereqCode);
      
      if (!prereqHistory || (prereqHistory.status !== 'Completed' && prereqHistory.status !== 'Waived')) {
        isEligible = false;
        reasons.push(`Missing prerequisite (${prereqCode}). Must be Completed or Waived.`);
      }
    }
  }

  return { isEligible, reasons };
}

/**
 * Filters a list of courses to return only those that are 'Available Now'.
 */
export function getAvailableCourses(
  allCourses: ICourse[],
  studentCourses: IStudentCourse[]
): ICourse[] {
  return allCourses.filter(course => {
    const result = checkCourseEligibility(course, studentCourses);
    return result.isEligible;
  });
}

/**
 * Returns courses that are marked as 'Retake'.
 */
export function getRetakeCourses(
  allCourses: ICourse[],
  studentCourses: IStudentCourse[]
): ICourse[] {
  return allCourses.filter(course => {
    const history = studentCourses.find(sc => sc.courseCode === course.code);
    return history?.status === 'Retake';
  });
}

/**
 * Calculates credit summaries.
 */
export function calculateCreditSummary(allCourses: ICourse[], studentCourses: IStudentCourse[]) {
  let completed = 0;
  let retake = 0;

  studentCourses.forEach(sc => {
    const course = allCourses.find(c => c.code === sc.courseCode);
    if (!course) return;

    if (sc.status === 'Completed' || sc.status === 'Waived') {
      completed += course.credits;
    } else if (sc.status === 'Retake') {
      retake += course.credits;
    }
  });

  return { completed, retake };
}

