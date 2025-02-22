import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCareerAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;
    
    // Get user's skills and career preferences
    const user = await User.findById(userId);
    
    // Get relevant job market data
    const jobMarketData = await Job.aggregate([
      {
        $group: {
          _id: '$skills',
          count: { $sum: 1 },
          avgSalary: { $avg: '$salary' }
        }
      }
    ]);
    
    // Calculate skill match percentages
    const skillMatchAnalysis = calculateSkillMatch(user.skills, jobMarketData);
    
    // Generate career path recommendations
    const careerPathRecommendations = generateCareerPaths(user, jobMarketData);
    
    res.json({
      skillMatch: skillMatchAnalysis,
      recommendations: careerPathRecommendations,
      marketTrends: jobMarketData
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 