import express from 'express';
import { getProjects, getProjectById } from '../controllers/projectController';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

export default router; 