import React, { useState } from 'react';
import { BiEdit, BiSave, BiX } from 'react-icons/bi';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      avatar: 'https://ui-avatars.com/api/?name=User',
      bio: ''
    },
    education: {
      tenth: {
        school: '',
        board: '',
        percentage: '',
        yearOfCompletion: '',
        subjects: [],
        rollNumber: '',
        division: '',
        schoolRank: ''
      },
      twelfth: {
        school: '',
        board: '',
        percentage: '',
        yearOfCompletion: '',
        subjects: [],
        rollNumber: '',
        division: '',
        schoolRank: '',
        stream: ''
      },
      graduation: {
        university: '',
        degree: '',
        cgpa: '',
        yearOfCompletion: '',
        achievements: []
      }
    },
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: '2023',
        credentialId: 'AWS-123456'
      },
      {
        name: 'Full Stack Development',
        issuer: 'Udacity',
        date: '2023',
        credentialId: 'UD-789012'
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform using MERN stack',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://github.com/johndoe/ecommerce'
      },
      {
        title: 'AI Image Generator',
        description: 'Developed an AI-powered image generation tool',
        technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
        link: 'https://github.com/johndoe/ai-image-gen'
      }
    ]
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
    console.log('Saving profile data:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any unsaved changes
  };

  const handleChange = (section, subsection, field, value) => {
    setProfileData(prev => ({
      ...prev,
      [section]: subsection
        ? {
            ...prev[section],
            [subsection]: {
              ...prev[section][subsection],
              [field]: value
            }
          }
        : {
            ...prev[section],
            [field]: value
          }
    }));
  };

  const renderEducationSection = (title, data) => (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">School/University</label>
            <input
              type="text"
              value={data?.school || data?.university || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'school', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Board/Degree</label>
            <input
              type="text"
              value={data?.board || data?.degree || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'board', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              value={data?.rollNumber || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'rollNumber', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Division/Rank</label>
            <input
              type="text"
              value={data?.division || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'division', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {data?.percentage !== undefined ? 'Percentage' : 'CGPA'}
            </label>
            <input
              type="number"
              value={data?.percentage || data?.cgpa || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'percentage', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Completion</label>
            <input
              type="number"
              value={data?.yearOfCompletion || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'yearOfCompletion', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        {title === 'Twelfth' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Stream</label>
            <select
              value={data?.stream || ''}
              onChange={(e) => handleChange('education', title.toLowerCase(), 'stream', e.target.value)}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Stream</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Subjects/Achievements</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(data?.subjects || data?.achievements || []).map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          {isEditing && (
            <button
              onClick={() => {
                const newItem = prompt('Enter new subject or achievement:');
                if (newItem) {
                  const key = data?.subjects ? 'subjects' : 'achievements';
                  handleChange(
                    'education',
                    title.toLowerCase(),
                    key,
                    [...(data[key] || []), newItem]
                  );
                }
              }}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
            >
              + Add {data?.subjects ? 'Subject' : 'Achievement'}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Edit Controls */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <div className="space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  <BiSave className="mr-2" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  <BiX className="mr-2" />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <BiEdit className="mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-start space-x-6">
            <img
              src={profileData.personalInfo.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={profileData.personalInfo.name}
                    onChange={(e) => handleChange('personalInfo', null, 'name', e.target.value)}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={profileData.personalInfo.email}
                    onChange={(e) => handleChange('personalInfo', null, 'email', e.target.value)}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    value={profileData.personalInfo.phone}
                    onChange={(e) => handleChange('personalInfo', null, 'phone', e.target.value)}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    value={profileData.personalInfo.location}
                    onChange={(e) => handleChange('personalInfo', null, 'location', e.target.value)}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  value={profileData.personalInfo.bio}
                  onChange={(e) => handleChange('personalInfo', null, 'bio', e.target.value)}
                  disabled={!isEditing}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education Sections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          {renderEducationSection('Tenth', profileData.education.tenth)}
          {renderEducationSection('Twelfth', profileData.education.twelfth)}
          {renderEducationSection('Graduation', profileData.education.graduation)}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="space-y-4">
            {profileData.certifications.map((cert, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-medium text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                <p className="text-sm text-gray-500">Credential ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-indigo-600 hover:text-indigo-800 text-sm inline-block"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 