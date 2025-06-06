import React, { useState } from 'react';

const questions = [
	{
		question: 'What is the capital of France?',
		options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
		answer: 2,
	},
	{
		question: 'Which planet is known as the Red Planet?',
		options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
		answer: 1,
	},
	{
		question: "Who wrote 'Hamlet'?",
		options: [
			'Charles Dickens',
			'William Shakespeare',
			'Mark Twain',
			'Jane Austen',
		],
		answer: 1,
	},
	{
		question: 'What is the largest ocean on Earth?',
		options: [
			'Atlantic Ocean',
			'Indian Ocean',
			'Arctic Ocean',
			'Pacific Ocean',
		],
		answer: 3,
	},
	{
		question: 'What is the chemical symbol for Gold?',
		options: ['Au', 'Ag', 'Gd', 'Go'],
		answer: 0,
	},
	{
		question: 'Which country hosted the 2016 Summer Olympics?',
		options: ['China', 'Brazil', 'UK', 'Russia'],
		answer: 1,
	},
	{
		question: 'What is the square root of 64?',
		options: ['6', '7', '8', '9'],
		answer: 2,
	},
	{
		question: 'Who painted the Mona Lisa?',
		options: [
			'Vincent Van Gogh',
			'Pablo Picasso',
			'Leonardo da Vinci',
			'Claude Monet',
		],
		answer: 2,
	},
	{
		question: 'What is the boiling point of water?',
		options: ['90°C', '100°C', '110°C', '120°C'],
		answer: 1,
	},
	{
		question: 'Which language is primarily spoken in Brazil?',
		options: ['Spanish', 'Portuguese', 'French', 'English'],
		answer: 1,
	},
];

function Home({ username, onComplete }) {
	const [current, setCurrent] = useState(0);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'

	const handleOptionClick = (idx) => {
		if (selected !== null) return; // Prevent multiple clicks
		setSelected(idx);
		const isCorrect = idx === questions[current].answer;
		setFeedback(isCorrect ? 'correct' : 'wrong');
		if (isCorrect) setScore(score + 1);

		setTimeout(() => {
			setSelected(null);
			setFeedback(null);
			if (current < questions.length - 1) {
				setCurrent(current + 1);
			} else {
				setShowResult(true);
			}
		}, 1000);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-6 text-center'>Quiz</h2>
				{!showResult ? (
					<>
						<div className='mb-4'>
							<p className='text-lg font-medium'>
								Question {current + 1} of {questions.length}
							</p>
							<p className='mt-2'>{questions[current].question}</p>
						</div>
						<div className='flex flex-col gap-3 mb-6'>
							{questions[current].options.map((option, idx) => {
								let btnClass =
									'bg-white text-gray-800 border-gray-300 hover:bg-blue-100';
								if (selected !== null) {
									if (idx === questions[current].answer) {
										btnClass = 'bg-green-500 text-white border-green-500';
									} else if (idx === selected) {
										btnClass = 'bg-red-500 text-white border-red-500';
									}
								}
								return (
									<button
										key={idx}
										onClick={() => handleOptionClick(idx)}
										className={`py-2 px-4 rounded border transition ${btnClass}`}
										disabled={selected !== null}
									>
										{option}
									</button>
								);
							})}
						</div>
					</>
				) : (
					<div className='text-center'>
						<h3 className='text-xl font-semibold mb-4'>Quiz Completed!</h3>
						<p className='text-lg'>
							Your Score: {score} / {questions.length}
						</p>
						<button
							className='mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
							onClick={() => onComplete(score)}
						>
							Finish
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
