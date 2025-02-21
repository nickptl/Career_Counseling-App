import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const CareerRecommendation = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);

  // Mock data - replace with API data in production
  const recommendedCareers = [
    {
      id: 1,
      title: "Software Engineer",
      matchScore: 95,
      description: "Design and develop software applications",
      skills: ["JavaScript", "Python", "System Design"],
      averageSalary: "$105,000",
      jobGrowth: "22%",
      marketDemand: "High",
      educationRequirements: [
        { level: "Bachelor's Degree", field: "Computer Science" },
        { level: "Master's Degree", field: "Software Engineering (Optional)" }
      ],
      certifications: [
        { name: "AWS Certified Developer", importance: "Recommended" },
        { name: "Oracle Certified Professional", importance: "Optional" }
      ],
      jobMarketInsights: {
        currentOpenings: 15000,
        topEmployers: ["Google", "Microsoft", "Amazon"],
        growthTrend: "Increasing",
        futureOutlook: "Very Positive"
      }
    },
    {
      id: 2,
      title: "Data Scientist",
      matchScore: 88,
      description: "Analyze complex data sets to inform business decisions",
      skills: ["Python", "Machine Learning", "Statistics"],
      averageSalary: "$120,000",
      jobGrowth: "28%",
      marketDemand: "Very High",
      educationRequirements: [
        { level: "Master's Degree", field: "Data Science/Statistics" }
      ],
      certifications: [
        { name: "TensorFlow Developer Certificate", importance: "Recommended" },
        { name: "IBM Data Science Professional", importance: "Recommended" }
      ],
      jobMarketInsights: {
        currentOpenings: 8000,
        topEmployers: ["Facebook", "IBM", "Netflix"],
        growthTrend: "Rapidly Increasing",
        futureOutlook: "Excellent"
      }
    }
  ];

  const renderMatchChart = (score) => {
    const data = {
      labels: ['Match', 'Gap'],
      datasets: [
        {
          data: [score, 100 - score],
          backgroundColor: ['#4F46E5', '#E5E7EB'],
          borderWidth: 0,
        },
      ],
    };

    const options = {
      cutout: '70%',
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
    };

    return (
      <div className="relative w-24 h-24">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{score}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Career Recommendations</h2>
      
      {/* Career Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendedCareers.map((career) => (
          <div 
            key={career.id}
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedCareer(career)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{career.title}</h3>
                <p className="text-gray-600 mt-1">{career.description}</p>
              </div>
              {renderMatchChart(career.matchScore)}
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Average Salary</p>
                <p className="font-semibold">{career.averageSalary}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Job Growth</p>
                <p className="font-semibold text-green-600">+{career.jobGrowth}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Career View */}
      {selectedCareer && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{selectedCareer.title}</h3>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {selectedCareer.marketDemand} Demand
            </span>
          </div>

          {/* Required Skills */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCareer.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Education Requirements</h4>
              <ul className="space-y-2">
                {selectedCareer.educationRequirements.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 text-indigo-500">•</span>
                    <span>
                      <span className="font-medium">{edu.level}</span>
                      <br />
                      <span className="text-gray-600">{edu.field}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Recommended Certifications</h4>
              <ul className="space-y-2">
                {selectedCareer.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 text-indigo-500">•</span>
                    <span>
                      <span className="font-medium">{cert.name}</span>
                      <br />
                      <span className="text-gray-600">{cert.importance}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Market Insights */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Job Market Insights</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Current Job Openings</p>
                <p className="text-xl font-bold text-gray-900">
                  {selectedCareer.jobMarketInsights.currentOpenings.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Future Outlook</p>
                <p className="text-xl font-bold text-green-600">
                  {selectedCareer.jobMarketInsights.futureOutlook}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Top Employers</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedCareer.jobMarketInsights.topEmployers.map((employer, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {employer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerRecommendation; 