import React, { useState } from 'react';

const ResumePortfolioBuilder = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [selectedTemplate, setSelectedTemplate] = useState('professional');

  const resumeTemplates = [
    {
      id: 'professional',
      name: 'Professional',
      preview: 'https://via.placeholder.com/300x400?text=Professional+Template',
      description: 'Clean and modern design suitable for corporate roles',
    },
    {
      id: 'creative',
      name: 'Creative',
      preview: 'https://via.placeholder.com/300x400?text=Creative+Template',
      description: 'Vibrant layout perfect for design and creative positions',
    },
    {
      id: 'technical',
      name: 'Technical',
      preview: 'https://via.placeholder.com/300x400?text=Technical+Template',
      description: 'Focused on technical skills and projects',
    },
  ];

  const aiSuggestions = [
    {
      section: 'Summary',
      suggestions: [
        'Add quantifiable achievements',
        'Use more action verbs',
        'Keep it concise (3-4 lines)',
      ],
    },
    {
      section: 'Skills',
      suggestions: [
        'Group similar skills together',
        'Highlight in-demand technologies',
        'Include proficiency levels',
      ],
    },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React and Node.js',
      image: 'https://via.placeholder.com/300x200?text=Project+1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/example/project',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Developed an AI-powered chat application using OpenAI API',
      image: 'https://via.placeholder.com/300x200?text=Project+2',
      technologies: ['Python', 'Flask', 'OpenAI'],
      link: 'https://github.com/example/project2',
      featured: true,
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: 'https://via.placeholder.com/100x100?text=AWS',
      verificationLink: 'https://verify.aws.com/cert123',
    },
    {
      id: 2,
      name: 'Google Cloud Professional',
      issuer: 'Google',
      date: '2023',
      image: 'https://via.placeholder.com/100x100?text=GCP',
      verificationLink: 'https://verify.google.com/cert456',
    },
  ];

  const renderResumeBuilder = () => (
    <div className="space-y-8">
      {/* Template Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Choose a Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeTemplates.map((template) => (
            <div
              key={template.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h4 className="font-medium text-gray-900">{template.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{template.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Review & Suggestions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">AI Resume Review</h3>
        <div className="bg-blue-50 rounded-lg p-6">
          {aiSuggestions.map((section) => (
            <div key={section.section} className="mb-6 last:mb-0">
              <h4 className="text-blue-800 font-medium mb-2">{section.section}</h4>
              <ul className="space-y-2">
                {section.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-blue-900">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Get More Suggestions
          </button>
        </div>
      </div>
    </div>
  );

  const renderPortfolioBuilder = () => (
    <div className="space-y-8">
      {/* Featured Projects */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Portfolio Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
          Add New Project
        </button>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
              <div>
                <h4 className="font-medium text-gray-900">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer} • {cert.date}</p>
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Integration */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">LinkedIn Integration</h3>
            <p className="text-gray-600">Connect your LinkedIn profile to sync your professional data</p>
          </div>
          <button className="bg-[#0A66C2] text-white px-6 py-2 rounded hover:bg-[#004182] transition-colors">
            Connect LinkedIn
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`${
              activeTab === 'resume'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('resume')}
          >
            Resume Builder
          </button>
          <button
            className={`${
              activeTab === 'portfolio'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium`}
            onClick={() => setActiveTab('portfolio')}
          >
            Portfolio Builder
          </button>
        </nav>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'resume' && renderResumeBuilder()}
        {activeTab === 'portfolio' && renderPortfolioBuilder()}
      </div>
    </div>
  );
};

export default ResumePortfolioBuilder; 