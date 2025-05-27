import React, { useEffect, useState } from 'react';
import {
  fetchGitHubProfile,
  fetchLeetCodeProfile,
  fetchGFGProfile,
} from '../services/fetchCodingProfiles';
import { CODING_PROFILE_USER_NAME } from '../constants';


const CodingProfile = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAllProfiles = async () => {
      try {
        const [github, leetcode, gfg] = await Promise.all([
          fetchGitHubProfile(CODING_PROFILE_USER_NAME.GITHUB),
          fetchLeetCodeProfile(CODING_PROFILE_USER_NAME.LEETCODE),
          fetchGFGProfile(CODING_PROFILE_USER_NAME.GFG),
        ]);

        setGithubData(github);
        setLeetcodeData(leetcode);
        setGfgData(gfg);
      } catch (err) {
        console.log("some error occured")
        setError(err.message);
      }
    };

    fetchAllProfiles();
  }, []);

  return (
    <div className="p-6 space-y-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Coding Profile</h1>
      {error && <p className="text-red-400">{error}</p>}

      {/* GitHub */}
      {githubData && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold text-green-400">GitHub</h2>
          <p><strong>Name:</strong> {githubData.name}</p>
          <p><strong>Public Repos:</strong> {githubData.public_repos}</p>
          <p><strong>Followers:</strong> {githubData.followers}</p>
          <a href={githubData.html_url} target="_blank" rel="noreferrer" className="text-blue-400">View Profile</a>
        </div>
      )}

      {/* LeetCode */}
      {leetcodeData && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold text-yellow-400">LeetCode</h2>
          <p><strong>Username:</strong> {leetcodeData.username}</p>
          {leetcodeData.submitStats.acSubmissionNum.map(item => (
            <p key={item.difficulty}>
              <strong>{item.difficulty}:</strong> {item.count}
            </p>
          ))}
          <a href={`https://leetcode.com/${leetcodeData.username}`} target="_blank" rel="noreferrer" className="text-blue-400">View Profile</a>
        </div>
      )}

      {/* GFG */}
      {gfgData && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold text-green-300">GeeksforGeeks</h2>
          <p><strong>Username:</strong> {CODING_PROFILE_USER_NAME.GFG}</p>
          <p><strong>Score:</strong> {gfgData.score}</p>
          <p><strong>Institute Rank:</strong> {gfgData.institute_rank}</p>
          <p><strong>Global Rank:</strong> {gfgData.global_rank}</p>
          <a href={`https://auth.geeksforgeeks.org/user/${CODING_PROFILE_USER_NAME.GFG}/profile`} target="_blank" rel="noreferrer" className="text-blue-400">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default CodingProfile;
