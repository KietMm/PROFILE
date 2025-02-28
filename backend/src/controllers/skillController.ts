import { Request, Response } from 'express';
import Skill from '../models/Skill';

export const getSkills = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const skills = await Skill.find(query);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}; 