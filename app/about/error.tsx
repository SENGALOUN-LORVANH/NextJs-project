"use client";  
import React from "react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
    console.error("Error fetching data:", error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-600">Mun mee ERROR!!!</h1>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
