import mongoose, { Document, Schema } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  location: { type: String },
  socialLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
    github: String
  }
});

export default mongoose.model<IProfile>('Profile', ProfileSchema); 