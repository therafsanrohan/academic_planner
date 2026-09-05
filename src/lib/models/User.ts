import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  studentId?: string;
  universityName?: string;
  department?: string;
  batch?: string;
  currentTrimester?: string;
  role: 'student' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Required for credentials login, but not OAuth
    image: { type: String },
    studentId: { type: String },
    universityName: { type: String },
    department: { type: String },
    batch: { type: String },
    currentTrimester: { type: String },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
