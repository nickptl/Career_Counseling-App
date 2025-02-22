import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Career Assessment',
      description: 'Comprehensive evaluation of skills, interests, and personality to guide career choices',
      icon: '📊',
      features: [
        'Personality profiling',
        'Skills assessment',
        'Interest mapping',
        'Career compatibility testing'
      ]
    },
    {
      id: 2,
      title: 'Career Counseling',
      description: 'One-on-one guidance sessions with experienced career counselors',
      icon: '👥',
      features: [
        'Personal consultation',
        'Goal setting',
        'Career planning',
        'Decision making support'
      ]
    },
    {
      id: 3,
      title: 'Resume Building',
      description: 'Professional resume creation and optimization services',
      icon: '📝',
      features: [
        'ATS-friendly formats',
        'Custom templates',
        'Content optimization',
        'Cover letter writing'
      ]
    },
    {
      id: 4,
      title: 'Interview Preparation',
      description: 'Comprehensive interview training and mock sessions',
      icon: '🎯',
      features: [
        'Mock interviews',
        'Industry-specific preparation',
        'Feedback sessions',
        'Interview techniques'
      ]
    },
    {
      id: 5,
      title: 'Job Search Strategy',
      description: 'Strategic approach to finding and securing ideal job opportunities',
      icon: '🔍',
      features: [
        'Job market analysis',
        'Application strategy',
        'Network building',
        'Opportunity tracking'
      ]
    },
    {
      id: 6,
      title: 'Career Development',
      description: 'Long-term career growth and development planning',
      icon: '📈',
      features: [
        'Skill development plans',
        'Career progression mapping',
        'Professional development',
        'Leadership training'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive career guidance and support services to help you achieve your professional goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-indigo-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-indigo-100 mb-6">
            Schedule a free consultation with our career experts today
          </p>
          <button className="bg-white text-indigo-600 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services; 