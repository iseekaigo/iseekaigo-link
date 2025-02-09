import React from "react";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-black text-center">
        <div className="mb-4">Cooking</div>
        <div className="w-48 h-1 bg-gray-800 rounded-full">
          <div
            className="h-full bg-orange-300 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-400">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;