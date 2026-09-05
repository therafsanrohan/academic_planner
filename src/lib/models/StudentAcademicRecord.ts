import mongoose, { Schema, Document, Types } from 'mongoose';

export type CourseStatus = 'Not Started' | 'Planned' | 'In Progress' | 'Completed' | 'Retake' | 'Waived';

export interface IStudentCourse {
  courseCode: string;
  status: CourseStatus;
  grade?: string;
  earnedCredits?: number;
  term?: string;
}

export interface IStudentTrimesterPlan {
  targetTrimester: string;
  desiredCreditLoad: number;
  plannedCourseCodes: string[];
}

export interface IStudentAcademicRecord extends Document {
  userId: Types.ObjectId;
  programmeId: Types.ObjectId;
  courses: IStudentCourse[];
  plans: IStudentTrimesterPlan[];
}

const StudentCourseSchema = new Schema({
  courseCode: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Not Started', 'Planned', 'In Progress', 'Completed', 'Retake', 'Waived'], 
    default: 'Not Started' 
  },
  grade: { type: String },
  earnedCredits: { type: Number },
  term: { type: String },
}, { _id: false });

const StudentTrimesterPlanSchema = new Schema({
  targetTrimester: { type: String, required: true },
  desiredCreditLoad: { type: Number, required: true },
  plannedCourseCodes: [{ type: String }],
});

const StudentAcademicRecordSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    programmeId: { type: Schema.Types.ObjectId, ref: 'Programme', required: true },
    courses: [StudentCourseSchema],
    plans: [StudentTrimesterPlanSchema],
  },
  { timestamps: true }
);

export default mongoose.models.StudentAcademicRecord || mongoose.model<IStudentAcademicRecord>('StudentAcademicRecord', StudentAcademicRecordSchema);
