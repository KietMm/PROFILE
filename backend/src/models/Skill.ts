import mongoose, { Document, Schema } from 'mongoose';

export interface ISkill extends Document {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const SkillSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  category: { type: String, required: true }
});

export default mongoose.model<ISkill>('Skill', SkillSchema); 