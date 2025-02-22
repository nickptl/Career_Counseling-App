import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { 
  BiUser, 
  BiFile, 
  BiBrain,
  BiSearch,
  BiFilterAlt,
  BiDownload,
  BiMessageDetail
} from 'react-icons/bi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('studentTracking');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({
    course: 'all',
    progress: 'all',
    assessment: 'all',
  });

  // Sample data for student tracking
  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      course: 'Computer Science',
      progress: 75,
      assessments: [
        { name: 'Technical Skills', score: 85 },
        { name: 'Aptitude Test', score: 78 },
        { name: 'Personality Assessment', score: 92 },
      ],
      careerPath: 'Software Development',
      interests: ['Web Development', 'AI/ML', 'Cloud Computing'],
      strengths: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration'],
      recommendations: [
        'Focus on cloud certification',
        'Join coding bootcamp',
        'Participate in hackathons',
      ],
    },
    // Add more student data as needed
  ];

  // Sample data for analytics
  const analyticsData = {
    studentProgress: [
      { month: 'Jan', avgScore: 72 },
      { month: 'Feb', avgScore: 75 },
      { month: 'Mar', avgScore: 78 },
      { month: 'Apr', avgScore: 82 },
      { month: 'May', avgScore: 85 },
      { month: 'Jun', avgScore: 88 },
    ],
    careerDistribution: [
      { name: 'Software Development', value: 35 },
      { name: 'Data Science', value: 25 },
      { name: 'UI/UX Design', value: 20 },
      { name: 'Product Management', value: 15 },
      { name: 'Others', value: 5 },
    ],
  };

  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6B7280'];

  const renderStudentTracking = () => (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <BiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-4">
          <select
            className="border rounded-lg px-4 py-2"
            value={filterCriteria.course}
            onChange={(e) => setFilterCriteria({ ...filterCriteria, course: e.target.value })}
          >
            <option value="all">All Courses</option>
            <option value="cs">Computer Science</option>
            <option value="business">Business</option>
            <option value="design">Design</option>
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={filterCriteria.progress}
            onChange={(e) => setFilterCriteria({ ...filterCriteria, progress: e.target.value })}
          >
            <option value="all">All Progress</option>
            <option value="high">High Progress</option>
            <option value="medium">Medium Progress</option>
            <option value="low">Low Progress</option>
          </select>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${student.name}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{student.progress}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Student Details */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-4/5 shadow-lg rounded-lg bg-white">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">{selectedStudent.name}'s Profile</h2>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Assessment Scores</h3>
                {selectedStudent.assessments.map((assessment, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span>{assessment.name}</span>
                    <span className="font-medium">{assessment.score}%</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Career Path</h3>
                <p>{selectedStudent.careerPath}</p>
                <h3 className="font-semibold mt-4 mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStudent.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Recommendations</h3>
              <ul className="list-disc list-inside space-y-2">
                {selectedStudent.recommendations.map((rec, index) => (
                  <li key={index} className="text-gray-700">{rec}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                <BiDownload className="mr-2" />
                Generate Report
              </button>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                <BiMessageDetail className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCareerReports = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progress Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Student Progress Over Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData.studentProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="avgScore"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  name="Average Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Career Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Career Path Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.careerDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {analyticsData.careerDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAIInsights = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Recommendations */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">AI-Powered Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-medium text-indigo-900">Trending Career Paths</h4>
              <p className="text-indigo-700 mt-2">
                Based on current market data, recommend focusing on Cloud Computing and AI/ML paths.
                75% of students in these tracks secured positions within 3 months.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">Skill Gap Analysis</h4>
              <p className="text-green-700 mt-2">
                Current student pool shows strong theoretical knowledge but lacks practical experience.
                Recommend increasing hands-on project work and internship opportunities.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-900">Industry Alignment</h4>
              <p className="text-yellow-700 mt-2">
                Local industry demands show a 30% increase in data science positions.
                Consider adjusting curriculum to include more data analysis modules.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100">
              <span className="text-indigo-900">Generate Batch Report</span>
              <BiFile className="text-indigo-600" />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100">
              <span className="text-green-900">Schedule Group Session</span>
              <BiUser className="text-green-600" />
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100">
              <span className="text-yellow-900">Update AI Models</span>
              <BiBrain className="text-yellow-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin & Counselor Dashboard</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50">
              <BiFilterAlt className="inline-block mr-2" />
              Filters
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <BiDownload className="inline-block mr-2" />
              Export Data
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <nav className="flex space-x-4 p-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'studentTracking'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('studentTracking')}
            >
              Student Tracking
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'careerReports'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('careerReports')}
            >
              Career Reports
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'aiInsights'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('aiInsights')}
            >
              AI Insights
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'studentTracking' && renderStudentTracking()}
        {activeTab === 'careerReports' && renderCareerReports()}
        {activeTab === 'aiInsights' && renderAIInsights()}
      </div>
    </div>
  );
};

export default AdminDashboard; 