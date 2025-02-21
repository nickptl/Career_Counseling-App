import express from 'express';
import User from '../models/userModel.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/dashboard', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Mock data for testing
    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profile: {
        age: 25,
        education: 'Bachelor of Technology',
        interests: ['Web Development', 'AI/ML', 'Cloud Computing'],
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`,
      },
      careerPreferences: {
        industries: ['Technology', 'Finance', 'Healthcare'],
        roles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
        aspirations: 'Looking to become a senior software engineer',
      },
      skills: [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Python', level: 'Advanced' },
      ],
      certifications: [
        { name: 'AWS Certified Developer', issuer: 'Amazon', date: '2023' },
        { name: 'React Developer', issuer: 'Meta', date: '2023' },
      ],
      assessmentHistory: [
        { name: 'Technical Skills Assessment', date: '2024-02-15', score: '85%', status: 'Completed' },
        { name: 'Leadership Assessment', date: '2024-02-10', score: '90%', status: 'Completed' },
      ],
    };

    res.json(userData);
  } catch (error) {
    console.error('Dashboard Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 