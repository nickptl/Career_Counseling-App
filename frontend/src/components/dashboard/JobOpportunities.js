import React, { useState } from 'react';

const JobOpportunities = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [applications] = useState([
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer',
      status: 'Applied',
      date: '2024-02-15',
      type: 'Full-time',
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Frontend Developer',
      status: 'Interview',
      date: '2024-02-10',
      type: 'Full-time',
    },
  ]);

  const jobListings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Amazon',
      location: 'Remote',
      salary: '$120k - $150k',
      type: 'Full-time',
      skills: ['React', 'Node.js', 'AWS'],
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Seattle, WA',
      salary: '$130k - $160k',
      type: 'Full-time',
      skills: ['Python', 'ML', 'SQL'],
      posted: '1 day ago',
    },
  ];

  const internships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Facebook',
      location: 'Menlo Park, CA',
      duration: '3 months',
      stipend: '$8000/month',
      skills: ['JavaScript', 'React'],
      posted: '3 days ago',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'IBM',
      location: 'Remote',
      duration: '6 months',
      stipend: '$6000/month',
      skills: ['Python', 'Data Analysis'],
      posted: '5 days ago',
    },
  ];

  const companyProfiles = [
    {
      id: 1,
      name: 'Google',
      industry: 'Technology',
      size: '100,000+ employees',
      rating: 4.5,
      locations: ['Mountain View', 'New York', 'London'],
      benefits: ['Health Insurance', 'Stock Options', 'Remote Work'],
    },
    {
      id: 2,
      name: 'Microsoft',
      industry: 'Technology',
      size: '150,000+ employees',
      rating: 4.3,
      locations: ['Redmond', 'Seattle', 'Dublin'],
      benefits: ['401k', 'Health Insurance', 'Flexible Hours'],
    },
  ];

  const renderJobListings = () => (
    <div className="space-y-4">
      {jobListings.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600">{job.company} • {job.location}</p>
              <p className="text-gray-600">{job.salary} • {job.type}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Apply
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">Posted {job.posted}</p>
        </div>
      ))}
    </div>
  );

  const renderInternships = () => (
    <div className="space-y-4">
      {internships.map((internship) => (
        <div key={internship.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
              <p className="text-gray-600">{internship.company} • {internship.location}</p>
              <p className="text-gray-600">{internship.duration} • {internship.stipend}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Apply
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">Posted {internship.posted}</p>
        </div>
      ))}
    </div>
  );

  const renderCompanyProfiles = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {companyProfiles.map((company) => (
        <div key={company.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
          <div className="mt-2 space-y-2">
            <p className="text-gray-600">{company.industry} • {company.size}</p>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{company.rating}/5.0</span>
            </div>
            <div>
              <p className="font-medium text-gray-700">Locations:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {company.locations.map((location) => (
                  <span key={location} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-700">Benefits:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {company.benefits.map((benefit) => (
                  <span key={benefit} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderApplicationTracker = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Position
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Applied
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {application.company}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.position}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  application.status === 'Applied' ? 'bg-yellow-100 text-yellow-800' :
                  application.status === 'Interview' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {application.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {application.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`${
              activeTab === 'jobs'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('jobs')}
          >
            Job Listings
          </button>
          <button
            className={`${
              activeTab === 'internships'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button
            className={`${
              activeTab === 'companies'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('companies')}
          >
            Company Profiles
          </button>
          <button
            className={`${
              activeTab === 'applications'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab('applications')}
          >
            Application Tracker
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'jobs' && renderJobListings()}
        {activeTab === 'internships' && renderInternships()}
        {activeTab === 'companies' && renderCompanyProfiles()}
        {activeTab === 'applications' && renderApplicationTracker()}
      </div>
    </div>
  );
};

export default JobOpportunities; 