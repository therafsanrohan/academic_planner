import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ICourse extends Document {
  programmeId: Types.ObjectId;
  code: string;
  title: string;
  credits: number;
  category: string;
  suggestedTrimester?: number;
  prerequisites: string[]; // Storing prerequisite course codes directly for easier NoSQL querying
}

const CourseSchema = new Schema(
  {
    programmeId: { type: Schema.Types.ObjectId, ref: 'Programme', required: true },
    code: { type: String, required: true },
    title: { type: String, required: true },
    credits: { type: Number, required: true },
    category: { type: String, default: 'Core' },
    suggestedTrimester: { type: Number },
    prerequisites: [{ type: String }],
  },
  { timestamps: true }
);

// Ensure a course code is unique within a specific programme version
CourseSchema.index({ programmeId: 1, code: 1 }, { unique: true });

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);
