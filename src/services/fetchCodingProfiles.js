export const fetchGitHubProfile = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  if (!res.ok) throw new Error("GitHub fetch failed");
  return res.json();
};

export const fetchGitHubContributions = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        user(login: "Riu-Rathor") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data.data.user.contributionsCollection.contributionCalendar.weeks;
};


export const fetchLeetCodeProfile = async (username) => {
  const res = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${username}`,

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) throw new Error("LeetCode fetch failed");
  const json = await res.json();
  console.log(json);
  return json;
};
