import React, { useState } from 'react';
import './App.css';
import Username from './component/Username';
import Home from './component/Home';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]); // Array of { username, score }
  const [showQuiz, setShowQuiz] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  const handleStartQuiz = () => {
    setShowUsername(true);
  };

  const handleUsernameSubmit = (name) => {
    setUsername(name);
    setShowQuiz(true);
    setShowUsername(false);
  };

  const handleQuizComplete = (score) => {
    setUsers([...users, { username, score }]);
    setShowQuiz(false);
    setUsername('');
  };

  return (
    <div>
      {/* Main Page */}
      {!showQuiz && !showUsername && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Quiz Portal</h1>
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-6"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
            <h2 className="text-xl font-bold mb-2">Participants</h2>
            {users.length === 0 ? (
              <p className="text-gray-500">No one has participated yet.</p>
            ) : (
              <ul className="divide-y">
                {users.map((u, idx) => (
                  <li key={idx} className="py-2 flex justify-between">
                    <span>{u.username}</span>
                    <span className="font-semibold">{u.score}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Username Input */}
      {showUsername && !showQuiz && (
        <Username onSubmit={handleUsernameSubmit} />
      )}

      {/* Quiz Page */}
      {showQuiz && (
        <Home username={username} onComplete={handleQuizComplete} />
      )}
    </div>
  );
}

export default App;
