
export const fetchGitHubProfile = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error('GitHub fetch failed');
  return res.json();
};

export const fetchLeetCodeProfile = async (username) => {
  const graphqlQuery = {
    query: `
      {
        matchedUser(username: "${username}") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `,
  };

  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    }
  );

  if (!res.ok) throw new Error('LeetCode fetch failed');
  const json = await res.json();
  return json.data.matchedUser;
};

export const fetchGFGProfile = async (username) => {
  const res = await fetch(
    `https://gfg-profile-summary-api.vercel.app/api/${username}`
  );
  if (!res.ok) throw new Error('GFG fetch failed');
  return res.json();
};
