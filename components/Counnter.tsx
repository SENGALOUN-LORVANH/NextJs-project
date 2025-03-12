'use client';
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main>
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => setCount(count - 1)}
            className="text-3xl w-[50px] h-[50px] bg-blue-500 text-white rounded-lg shadow-lg transition duration-500 ease-in-out hover:bg-blue-600 hover:shadow-xl active:bg-blue-700 active:shadow-inner active:translate-y-1"
          >
            -
          </button>
          <span className="text-3xl">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="text-3xl w-[50px] h-[50px] bg-green-500 text-white rounded-lg shadow-lg transition duration-75 ease-in-out hover:bg-green-600 hover:shadow-xl active:bg-green-700 active:shadow-inner active:translate-y-1"
          >
            +
          </button>
        </div>
      </main>
    </div>
  );
};

export default Counter;