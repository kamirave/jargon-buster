import React from 'react';
import { BrainCog } from 'lucide-react';
import { useTerms } from '../context/TermContext';

export function Stats() {
  const { terms } = useTerms();
  const totalTerms = terms.length;
  const understoodTerms = terms.filter(term => term.understood).length;
  const progressPercentage = totalTerms === 0 ? 0 : Math.round((understoodTerms / totalTerms) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <BrainCog className="h-6 w-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold text-gray-900">Learning Progress</h2>
          <span className="text-sm text-gray-500">
            {understoodTerms} of {totalTerms} terms
          </span>
        </div>
        <div className="mt-2 relative">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="absolute right-0 top-4 text-sm font-medium text-gray-600">
            {progressPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
}