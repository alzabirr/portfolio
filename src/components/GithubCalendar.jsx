import React from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendar() {
  // Forest Theme (Green shades)
  const forestTheme = {
    light: ['#ebedf0', '#b6e3c4', '#68bf84', '#2b8a4a', '#104f24'],
    dark: ['#161b22', '#1b4a29', '#2d6d3f', '#449e5d', '#5cd682'],
  };

  return (
    <div className="px-2 mt-4">
      <div className="flex flex-col bg-gray-100 rounded-lg px-3 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="font-medium text-lg flex items-center gap-x-2">
            GitHub Contributions
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 drop-shadow-md overflow-x-auto flex justify-center">
          <GitHubCalendar
            username="alzabirr"
            theme={forestTheme}
            colorScheme="light"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </div>
  );
}
