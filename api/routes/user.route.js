import express from 'express';
import { getDashboard, updateDashboardData } from '../controllers/home.controller.js';
import { test } from '../controllers/user.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// router.use(requireAuth);
router.get("/", test);
//dashboard route
router.get("/Dashboard", getDashboard)
router.patch("/Dashboard/:id", updateDashboardData)

//dashboard route end
export default router;