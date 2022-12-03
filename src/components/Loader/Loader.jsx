import React from "react";

export const Loader = () => (
  <div className="flex  justify-center p-4 border-b border-l border-r border-gray-200 dark:border-gray-700 min-h-screen	">
    <svg className="w-8 h-8 animate-spin-fast">
      <circle
        cx={16}
        cy={16}
        fill="none"
        r={14}
        strokeWidth={4}
        style={{ stroke: "rgb(29, 161, 242)", opacity: "0.2" }}
      />
      <circle
        cx={16}
        cy={16}
        fill="none"
        r={14}
        strokeWidth={4}
        style={{
          stroke: "rgb(29, 161, 242)",
          strokeDasharray: 80,
          strokeDashoffset: 60,
        }}
      />
    </svg>
  </div>
);
