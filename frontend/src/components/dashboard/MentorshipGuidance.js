import React, { useState } from 'react';

const MentorshipGuidance = () => {
  const [activeTab, setActiveTab] = useState('mentors');

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      company: 'Google',
      experience: '12 years',
      expertise: ['Web Development', 'System Design', 'Career Growth'],
      availability: 'Available for 1:1 sessions',
      rating: 4.9,
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
      sessions: 156,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Data Science Lead',
      company: 'Microsoft',
      experience: '8 years',
      expertise: ['Machine Learning', 'Data Analytics', 'Team Leadership'],
      availability: 'Next available slot: March 1st',
      rating: 4.8,
      image: 'https://ui-avatars.com/api/?name=Michael+Chen',
      sessions: 98,
    },
  ];

  const webinars = [
    {
      id: 1,
      title: 'Breaking into Tech: A Complete Guide',
      speaker: 'Alex Rivera',
      date: '2024-03-15',
      time: '10:00 AM PST',
      duration: '90 minutes',
      topics: ['Career Transition', 'Skills Required', 'Job Search Strategy'],
      registeredCount: 234,
      type: 'Upcoming',
    },
    {
      id: 2,
      title: 'Advanced System Design Workshop',
      speaker: 'Priya Patel',
      date: '2024-03-20',
      time: '2:00 PM PST',
      duration: '120 minutes',
      topics: ['Architecture', 'Scalability', 'Best Practices'],
      registeredCount: 156,
      type: 'Upcoming',
    },
  ];

  const successStories = [
    {
      id: 1,
      name: 'David Kim',
      role: 'From Teacher to Software Engineer',
      company: 'Amazon',
      story: 'After 5 years as a teacher, I decided to switch careers. Through this platform\'s guidance and mentorship, I successfully transitioned into tech and now work as a Software Engineer at Amazon.',
      image: 'https://ui-avatars.com/api/?name=David+Kim',
      timeline: '12 months',
      yearCompleted: 2023,
    },
    {
      id: 2,
      name: 'Emma Wilson',
      role: 'Self-taught to Senior Developer',
      company: 'Netflix',
      story: 'Started as a self-taught developer, got mentorship through the platform, and worked my way up to a senior position at Netflix. The guidance from experienced mentors was invaluable.',
      image: 'https://ui-avatars.com/api/?name=Emma+Wilson',
      timeline: '18 months',
      yearCompleted: 2023,
    },
  ];

  const qaForum = [
    {
      id: 1,
      question: 'How do I prepare for system design interviews?',
      askedBy: 'John Doe',
      date: '2 days ago',
      answers: [
        {
          id: 1,
          author: 'Sarah Johnson',
          role: 'Senior Software Engineer at Google',
          response: 'Start by understanding basic distributed systems concepts. Practice designing real-world applications...',
          date: '1 day ago',
          upvotes: 45,
        },
      ],
      tags: ['interviews', 'system-design', 'preparation'],
    },
    {
      id: 2,
      question: 'What skills should I focus on for a data science career?',
      askedBy: 'Lisa Chen',
      date: '3 days ago',
      answers: [
        {
          id: 1,
          author: 'Michael Chen',
          role: 'Data Science Lead at Microsoft',
          response: 'Focus on statistics, Python programming, and machine learning fundamentals...',
          date: '2 days ago',
          upvotes: 32,
        },
      ],
      tags: ['data-science', 'career-advice', 'skills'],
    },
  ];

  const renderMentors = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mentors.map((mentor) => (
        <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.role} at {mentor.company}</p>
              <p className="text-sm text-gray-500">{mentor.experience} experience</p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{mentor.rating} • {mentor.sessions} sessions</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-green-600">{mentor.availability}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWebinars = () => (
    <div className="space-y-6">
      {webinars.map((webinar) => (
        <div key={webinar.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{webinar.title}</h3>
              <p className="text-gray-600">by {webinar.speaker}</p>
              <div className="mt-2 space-y-1">
                <p className="text-gray-600">
                  <span className="font-medium">Date:</span> {webinar.date} at {webinar.time}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Duration:</span> {webinar.duration}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {webinar.topics.map((topic, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {webinar.registeredCount} registered
              </span>
              <button className="mt-4 block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSuccessStories = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {successStories.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
              <p className="text-indigo-600 font-medium">{story.role}</p>
              <p className="text-gray-600">Now at {story.company}</p>
              <p className="mt-2 text-gray-700">{story.story}</p>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <span>Transition time: {story.timeline}</span>
                <span className="mx-2">•</span>
                <span>Completed {story.yearCompleted}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQAForum = () => (
    <div className="space-y-6">
      {qaForum.map((qa) => (
        <div key={qa.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{qa.question}</h3>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span>Asked by {qa.askedBy}</span>
                <span className="mx-2">•</span>
                <span>{qa.date}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {qa.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {qa.answers.map((answer) => (
              <div key={answer.id} className="ml-6 border-l-4 border-indigo-500 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{answer.author}</p>
                    <p className="text-sm text-gray-600">{answer.role}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">↑ {answer.upvotes}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{answer.response}</p>
                <p className="mt-2 text-sm text-gray-500">{answer.date}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
        Ask a Question
      </button>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['mentors', 'webinars', 'success-stories', 'qa-forum'].map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm capitalize`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.split('-').join(' ')}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'mentors' && renderMentors()}
        {activeTab === 'webinars' && renderWebinars()}
        {activeTab === 'success-stories' && renderSuccessStories()}
        {activeTab === 'qa-forum' && renderQAForum()}
      </div>
    </div>
  );
};

export default MentorshipGuidance; 