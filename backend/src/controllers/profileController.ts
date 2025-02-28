import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { 
      new: true,
      upsert: true 
    });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}; 