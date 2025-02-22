import React, { useState, useEffect } from 'react';
import { BiBell, BiCalendarEvent, BiBookBookmark, BiBuildings } from 'react-icons/bi';

const NotificationsReminders = () => {
  const [notifications, setNotifications] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Move initialNotifications inside useEffect to avoid the dependency warning
    const initialNotifications = [
      {
        id: 1,
        type: 'job',
        title: 'New Job Match: Senior Software Engineer',
        company: 'Google',
        description: 'A new job matching your profile has been posted',
        timestamp: '2024-02-25T10:30:00',
        isRead: false,
        priority: 'high',
        action: {
          text: 'View Job',
          url: '/jobs/123',
        },
      },
      {
        id: 2,
        type: 'assessment',
        title: 'Complete Your Skills Assessment',
        description: 'Your technical skills assessment is pending completion',
        timestamp: '2024-02-24T15:45:00',
        isRead: false,
        priority: 'medium',
        deadline: '2024-03-01T23:59:59',
        action: {
          text: 'Take Assessment',
          url: '/assessments/456',
        },
      },
      {
        id: 3,
        type: 'event',
        title: 'Upcoming Webinar: Tech Career Transitions',
        description: 'Join industry experts for insights on career transitions in tech',
        timestamp: '2024-02-23T09:15:00',
        isRead: true,
        priority: 'medium',
        eventDate: '2024-03-05T14:00:00',
        action: {
          text: 'Register Now',
          url: '/events/789',
        },
      },
    ];
    
    setNotifications(initialNotifications);
    updateUnreadCount(initialNotifications);
  }, []); // Empty dependency array since we're only running this once

  const updateUnreadCount = (notifs) => {
    const unread = notifs.filter(notif => !notif.isRead).length;
    setUnreadCount(unread);
  };

  const markAsRead = (notificationId) => {
    const updatedNotifications = notifications.map(notif => 
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    );
    setNotifications(updatedNotifications);
    updateUnreadCount(updatedNotifications);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notif => ({ ...notif, isRead: true }));
    setNotifications(updatedNotifications);
    updateUnreadCount(updatedNotifications);
  };

  const getFilteredNotifications = () => {
    if (activeFilter === 'all') return notifications;
    return notifications.filter(notif => notif.type === activeFilter);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'job':
        return <BiBuildings className="w-6 h-6 text-blue-500" />;
      case 'assessment':
        return <BiBookBookmark className="w-6 h-6 text-purple-500" />;
      case 'event':
        return <BiCalendarEvent className="w-6 h-6 text-green-500" />;
      default:
        return <BiBell className="w-6 h-6 text-gray-500" />;
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const NotificationBell = () => (
    <button
      onClick={() => setShowNotificationPanel(!showNotificationPanel)}
      className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors"
    >
      <BiBell className="w-6 h-6" />
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </span>
      )}
    </button>
  );

  const NotificationPanel = () => (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button
            onClick={markAllAsRead}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Mark all as read
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
          {['all', 'job', 'assessment', 'event'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {getFilteredNotifications().map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
              !notification.isRead ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              {getNotificationIcon(notification.type)}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900">{notification.title}</h4>
                  <span className="text-xs text-gray-500">
                    {formatTimestamp(notification.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                {notification.eventDate && (
                  <p className="text-sm text-gray-500 mt-1">
                    Event Date: {formatTimestamp(notification.eventDate)}
                  </p>
                )}
                {notification.deadline && (
                  <p className="text-sm text-red-500 mt-1">
                    Deadline: {formatTimestamp(notification.deadline)}
                  </p>
                )}
                <div className="mt-2 flex justify-between items-center">
                  <a
                    href={notification.action.url}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    {notification.action.text}
                  </a>
                  {!notification.isRead && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <NotificationBell />
      {showNotificationPanel && <NotificationPanel />}
    </div>
  );
};

export default NotificationsReminders; 