import React, { useState } from 'react';

function Username({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Username</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Username"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Start Quiz
        </button>
      </div>
    </form>
  );
}

export default Username;