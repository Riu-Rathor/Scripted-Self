import React, { useEffect, useState } from "react";
import {
  fetchGitHubProfile,
  fetchLeetCodeProfile,
  fetchGFGProfile,
  fetchGitHubContributions,
} from "../services/fetchCodingProfiles";
import { CODING_PROFILE_USER_NAME, SECTION_HEADERS } from "../constants";
import LeetCode from "./Leetcode";
import GitHub from "./GitHub";

const CodingProfile = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [githubContributions, setGithubContributions] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllProfiles = async () => {
      try {
        const [github, leetcode, githubContributions] = await Promise.all([
          fetchGitHubProfile(CODING_PROFILE_USER_NAME.GITHUB),
          fetchLeetCodeProfile(CODING_PROFILE_USER_NAME.LEETCODE),
          fetchGitHubContributions()
        ]);


        setGithubData(github);
        setLeetcodeData(leetcode);
        setGithubContributions(githubContributions);
      } catch (err) {
        console.log("some error occured");
        console.log(err);
        setError(err.message);
      }
    };

    fetchAllProfiles();
  }, []);

  return (
    <div id="coding-profile" className="p-6 space-y-8 text-white bg-gray-900 pt-16">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        {SECTION_HEADERS.CODING_PROFILE}
      </h1>
      {error && <p className="text-red-400">{error}</p>}
      <div className="grid grid-cols-9 gap-10">
        {leetcodeData && <div className="col-span-3"><LeetCode leetcodeData={leetcodeData} /></div>}
        {githubData && <div className="col-span-6"><GitHub githubData={githubData} githubContributions={githubContributions}/></div>}
      </div>
    </div>
  );
};

export default CodingProfile;
