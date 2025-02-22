import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Career Counselor',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
      bio: '15+ years experience in career counseling and professional development'
    },
    {
      name: 'Michael Chen',
      role: 'Industry Relations Manager',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen',
      bio: 'Former HR executive with extensive corporate networking experience'
    },
    {
      name: 'Emma Williams',
      role: 'Assessment Specialist',
      image: 'https://ui-avatars.com/api/?name=Emma+Williams',
      bio: 'Certified psychometric assessment expert and career coach'
    }
  ];

  const stats = [
    { label: 'Students Guided', value: '10,000+' },
    { label: 'Successful Placements', value: '5,000+' },
    { label: 'Corporate Partners', value: '200+' },
    { label: 'Years of Experience', value: '15+' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals to make informed career decisions and achieve their professional aspirations through expert guidance and comprehensive support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2010, Career Counseling App emerged from a vision to revolutionize career guidance through technology and expert counseling. We recognized the growing need for personalized career support in an increasingly complex job market.
            </p>
            <p className="mb-4">
              Our platform combines cutting-edge technology with human expertise to provide comprehensive career guidance solutions. We believe in empowering individuals with the tools and knowledge they need to make informed career decisions.
            </p>
            <p>
              Today, we're proud to have helped thousands of individuals discover and pursue their dream careers, while continuously evolving our services to meet the changing demands of the modern workplace.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-indigo-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-indigo-100">
                Committed to providing the highest quality career guidance services
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-indigo-100">
                Continuously evolving our approach with latest industry trends
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-indigo-100">
                Focused on creating meaningful change in people's careers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 