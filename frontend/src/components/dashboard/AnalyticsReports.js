import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
} from 'recharts';

const AnalyticsReports = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('careerFit');
  const [timeRange, setTimeRange] = useState('6months');

  // Sample data for Career Fit Analysis
  const careerFitData = {
    skillMatch: [
      { name: 'Technical Skills', actual: 85, required: 90 },
      { name: 'Soft Skills', actual: 75, required: 80 },
      { name: 'Leadership', actual: 70, required: 75 },
      { name: 'Domain Knowledge', actual: 80, required: 85 },
      { name: 'Industry Experience', actual: 65, required: 70 },
    ],
    roleCompatibility: [
      { role: 'Software Engineer', score: 90 },
      { role: 'Product Manager', score: 75 },
      { role: 'Data Scientist', score: 85 },
      { role: 'UX Designer', score: 60 },
    ],
  };

  // Sample data for Skill Progress
  const skillProgressData = {
    skillGrowth: [
      { month: 'Jan', score: 65 },
      { month: 'Feb', score: 68 },
      { month: 'Mar', score: 72 },
      { month: 'Apr', score: 75 },
      { month: 'May', score: 78 },
      { month: 'Jun', score: 82 },
    ],
    skillBreakdown: [
      { skill: 'Programming', score: 85 },
      { skill: 'Problem Solving', score: 80 },
      { skill: 'Communication', score: 75 },
      { skill: 'Teamwork', score: 85 },
      { skill: 'Project Management', score: 70 },
    ],
  };

  // Sample data for Market Trends
  const marketTrendsData = {
    salaryTrends: [
      { role: 'Junior', min: 50000, avg: 65000, max: 80000 },
      { role: 'Mid-Level', min: 70000, avg: 90000, max: 110000 },
      { role: 'Senior', min: 100000, avg: 130000, max: 160000 },
      { role: 'Lead', min: 130000, avg: 160000, max: 190000 },
    ],
    industryDemand: [
      { month: 'Jan', openings: 1200 },
      { month: 'Feb', openings: 1350 },
      { month: 'Mar', openings: 1500 },
      { month: 'Apr', openings: 1400 },
      { month: 'May', openings: 1600 },
      { month: 'Jun', openings: 1800 },
    ],
  };

  const renderCareerFitAnalysis = () => (
    <div className="space-y-8">
      {/* Skill Match Radar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Skill Match Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={careerFitData.skillMatch}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Your Skills"
                dataKey="actual"
                stroke="#4F46E5"
                fill="#4F46E5"
                fillOpacity={0.3}
              />
              <Radar
                name="Required Skills"
                dataKey="required"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Role Compatibility */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Role Compatibility</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={careerFitData.roleCompatibility}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderSkillProgress = () => (
    <div className="space-y-8">
      {/* Skill Growth Over Time */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Skill Growth Trajectory</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={skillProgressData.skillGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#4F46E5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skill Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Skill Breakdown</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillProgressData.skillBreakdown}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="skill" type="category" />
              <Tooltip />
              <Bar dataKey="score" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderMarketTrends = () => (
    <div className="space-y-8">
      {/* Salary Trends */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Salary Trends by Experience Level</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketTrendsData.salaryTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="min" fill="#93C5FD" name="Minimum" />
              <Bar dataKey="avg" fill="#3B82F6" name="Average" />
              <Bar dataKey="max" fill="#1D4ED8" name="Maximum" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Industry Demand */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Industry Demand Trends</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={marketTrendsData.industryDemand}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="openings"
                stroke="#4F46E5"
                fill="#4F46E5"
                fillOpacity={0.3}
                name="Job Openings"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'careerFit'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('careerFit')}
        >
          Career Fit Analysis
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'skillProgress'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('skillProgress')}
        >
          Skill Progress
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === 'marketTrends'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('marketTrends')}
        >
          Market Trends
        </button>
      </div>

      {/* Time Range Filter */}
      <div className="mb-6">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
        >
          <option value="3months">Last 3 Months</option>
          <option value="6months">Last 6 Months</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      {/* Content */}
      {activeTab === 'careerFit' && renderCareerFitAnalysis()}
      {activeTab === 'skillProgress' && renderSkillProgress()}
      {activeTab === 'marketTrends' && renderMarketTrends()}
    </div>
  );
};

export default AnalyticsReports; 