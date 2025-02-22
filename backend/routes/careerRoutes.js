import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Career assessment routes
router.post('/assessment/start', protect, startAssessment);
router.post('/assessment/submit', protect, submitAssessment);
router.get('/assessment/history', protect, getAssessmentHistory);

// Career recommendations
router.get('/recommendations', protect, getCareerRecommendations);
router.get('/market-trends', protect, getMarketTrends);

// Mentorship routes
router.get('/mentors', protect, getMentors);
router.post('/mentorship/request', protect, requestMentorship);
router.get('/mentorship/sessions', protect, getMentorshipSessions);

export default router; 