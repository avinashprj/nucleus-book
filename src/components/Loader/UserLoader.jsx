import React from "react";

export const UserLoader = () => (
  <div className="border-b border-gray-200 dark:border-dim-200 p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-400 h-12 w-12" />
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-400 rounded" />
          <div className="h-4 bg-gray-400 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
);
