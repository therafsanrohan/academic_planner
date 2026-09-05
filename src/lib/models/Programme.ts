import mongoose, { Schema, Document } from 'mongoose';

export interface IProgramme extends Document {
  universityName: string;
  name: string;
  department: string;
  totalCreditRequirement: number;
  version: string;
}

const ProgrammeSchema = new Schema(
  {
    universityName: { type: String, required: true },
    name: { type: String, required: true }, // e.g. "BSc in Computer Science"
    department: { type: String },
    totalCreditRequirement: { type: Number, required: true },
    version: { type: String, default: 'Default' }, // Allow multiple versions of a syllabus
  },
  { timestamps: true }
);

export default mongoose.models.Programme || mongoose.model<IProgramme>('Programme', ProgrammeSchema);
