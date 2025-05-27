const GitHub = ({ githubData, githubContributions }) => {
  const dayLabels = ["Mon", "Wed", "Fri"];
  return (
    <div className="bg-gray-800 p-4 rounded-3xl h-full flex flex-col items-center justify-center shadow-lg transform transition duration-500 hover:shadow-cyan-500/50">
      <div >
        <h2 className="text-xl font-semibold text-green-400">GitHub</h2>
        <p>
          <strong>Name:</strong> {githubData.name}
        </p>
        <p>
          <strong>Public Repos:</strong> {githubData.public_repos}
        </p>
        <p>
          <strong>Followers:</strong> {githubData.followers}
        </p>
        <a
          href={githubData.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400"
        >
          View Profile
        </a>
      </div>

      <div className="p-4 bg-gray-900 text-white rounded-3xl shadow-lg w-full">
      <h2 className="text-xl font-bold mb-4">429 contributions in the last year</h2>

      <div className="flex items-start">
        <div className="flex flex-col gap-1 mr-2 justify-evenly"  style={{height: "6.5rem"}}>
          {dayLabels.map((label, index) => (
            <div key={index} className="h-4 flex flex-col justify-evenly items-end text-xs text-gray-400">
              {label}
            </div>
          ))}
        </div>

        <div className="flex gap-1 overflow-x-auto no-scrollbar"> 
          {githubContributions.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.contributionDays.map((day, dIdx) => (
                <div
                  key={dIdx}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: day.color }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contribution settings and year selection */}
      <div className="mt-4 flex justify-end items-center text-sm text-gray-400">
        <div className="flex gap-2">
          <span>More</span>
          <div className="w-4 h-4 rounded-sm bg-[#161b22]"></div>
          <div className="w-4 h-4 rounded-sm bg-[#0e4429]"></div>
          <div className="w-4 h-4 rounded-sm bg-[#006d32]"></div>
          <div className="w-4 h-4 rounded-sm bg-[#26a641]"></div>
          <div className="w-4 h-4 rounded-sm bg-[#39d353]"></div>
          <span>Less</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GitHub;
