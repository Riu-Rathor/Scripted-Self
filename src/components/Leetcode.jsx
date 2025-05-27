import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { CODING_PROFILE_USER_NAME } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetCode = ({ leetcodeData }) => {
  if (!leetcodeData) return null;
  const username = CODING_PROFILE_USER_NAME.LEETCODE;

  const {
    totalSolved,
    totalQuestions,
    easySolved,
    mediumSolved,
    hardSolved,
    acceptanceRate,
    contributionPoints,
    ranking,
    reputation
  } = leetcodeData;

  const doughnutData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ['#58d68d', '#5dade2 ', '#a93226 '],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#fff'
            
         },
      },
    },
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-3xl max-w-3xl mx-auto shadow-lg transform transition duration-500 hover:shadow-cyan-500/50 flex items-center flex-col justify-center h-full">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">LeetCode Stats</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>

        {/* Stats */}
        <div className="md:w-1/2 space-y-2">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Total Solved:</strong> {totalSolved} / {totalQuestions}</p>
          <p><strong>Acceptance Rate:</strong> {acceptanceRate}%</p>
          <p><strong>Contribution Points:</strong> {contributionPoints}</p>
          <p><strong>Ranking:</strong> {ranking}</p>
          <p><strong>Reputation:</strong> {reputation}</p>
          <a
            href={`https://leetcode.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-blue-400 underline"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCode;
