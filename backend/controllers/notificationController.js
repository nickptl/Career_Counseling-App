import User from '../models/userModel.js';

export const createNotification = async (userId, notification) => {
  try {
    const user = await User.findById(userId);
    user.notifications.push({
      ...notification,
      date: new Date(),
      isRead: false
    });
    await user.save();
    return user.notifications;
  } catch (error) {
    console.error('Notification creation error:', error);
    throw error;
  }
};

export const markNotificationAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const user = await User.findById(req.user._id);
    
    const notification = user.notifications.id(notificationId);
    if (notification) {
      notification.isRead = true;
      await user.save();
    }
    
    res.json(user.notifications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 