import User from '../models/userModel.js';

// Add or update portfolio project
export const updatePortfolio = async (req, res) => {
  try {
    const { projectId } = req.params;
    const projectData = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (projectId) {
      // Update existing project
      const projectIndex = user.portfolio.findIndex(p => p._id.toString() === projectId);
      if (projectIndex > -1) {
        user.portfolio[projectIndex] = { ...user.portfolio[projectIndex], ...projectData };
      }
    } else {
      // Add new project
      user.portfolio.push(projectData);
    }
    
    await user.save();
    res.json(user.portfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 