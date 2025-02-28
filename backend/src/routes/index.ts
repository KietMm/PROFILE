import express from 'express';
import profileRoutes from './profileRoutes';
import projectRoutes from './projectRoutes';
import skillRoutes from './skillRoutes';
import contactRoutes from './contactRoutes';

const router = express.Router();

router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/contacts', contactRoutes);

export default router; 