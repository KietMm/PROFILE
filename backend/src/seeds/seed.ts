import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from '../models/Profile';
import Project from '../models/Project';
import Skill from '../models/Skill';
import { profileData, projectsData, skillsData } from './data';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Profile.deleteMany({}),
      Project.deleteMany({}),
      Skill.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Seed new data
    await Profile.create(profileData);
    await Project.insertMany(projectsData);
    await Skill.insertMany(skillsData);

    console.log('Successfully seeded database');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 