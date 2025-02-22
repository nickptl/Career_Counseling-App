import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CareerRecommendation from './CareerRecommendation';
import JobOpportunities from './JobOpportunities';
import MentorshipGuidance from './MentorshipGuidance';
import ResumePortfolioBuilder from './ResumePortfolioBuilder';
import NotificationsReminders from './NotificationsReminders';
import AnalyticsReports from './AnalyticsReports';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profile: {
      age: '',
      education: '',
      interests: [],
      avatar: '',
    },
    careerPreferences: {
      industries: [],
      roles: [],
      aspirations: '',
    },
    skills: [],
    certifications: [],
    assessmentHistory: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const DashboardCard = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section with Notifications */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {userData.name}!</h1>
          <p className="text-gray-600">Here's your career development overview</p>
        </div>
        <NotificationsReminders />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Overview */}
        <DashboardCard title="Profile Overview">
          <div className="flex items-center space-x-4">
            <img
              src={userData.profile?.avatar || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{userData.name}</h3>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.profile?.education || 'Education not specified'}</p>
            </div>
          </div>
        </DashboardCard>

        {/* Quick Stats */}
        <DashboardCard title="Career Progress">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-indigo-600">Skills</p>
              <p className="text-2xl font-bold">{userData.skills?.length || 0}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">Certifications</p>
              <p className="text-2xl font-bold">{userData.certifications?.length || 0}</p>
            </div>
          </div>
        </DashboardCard>

        {/* Skills Section */}
        <DashboardCard title="Skills">
          <div className="flex flex-wrap gap-2">
            {userData.skills?.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill.name} - {skill.level}
              </span>
            ))}
          </div>
        </DashboardCard>

        {/* Career Interests */}
        <DashboardCard title="Career Interests">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Preferred Industries</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {userData.careerPreferences?.industries.map((industry, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Desired Roles</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {userData.careerPreferences?.roles.map((role, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Recent Assessments */}
        <DashboardCard title="Recent Assessments">
          <div className="space-y-4">
            {userData.assessmentHistory?.slice(0, 3).map((assessment, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{assessment.name}</p>
                  <p className="text-sm text-gray-600">{assessment.date}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {assessment.score}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Certifications */}
        <DashboardCard title="Certifications">
          <div className="space-y-4">
            {userData.certifications?.map((cert, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-3">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Career Recommendations */}
      <div className="mt-8">
        <DashboardCard title="Personalized Career Recommendations">
          <CareerRecommendation userData={userData} />
        </DashboardCard>
      </div>

      {/* Job & Internship Opportunities */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job & Internship Opportunities</h2>
        <JobOpportunities />
      </div>

      {/* Mentorship & Guidance */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentorship & Guidance</h2>
        <MentorshipGuidance />
      </div>

      {/* Analytics & Reports */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Reports</h2>
        <AnalyticsReports userData={userData} />
      </div>

      {/* Resume & Portfolio Builder */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume & Portfolio Builder</h2>
        <ResumePortfolioBuilder />
      </div>
    </div>
  );
};

export default Dashboard; 