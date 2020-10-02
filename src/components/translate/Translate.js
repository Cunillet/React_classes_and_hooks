import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import Convert from './components/Convert';

const options = [
	{
		label: 'Catalan',
		value: 'ca'
	},
	{
		label: 'English',
		value: 'en'
	},
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	}
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);


	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	});

	return (
		<div>
			<h4 className="text-center">Input Text To Translate</h4>
			<input
				className="form-control border-secondary mb-3"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Dropdown
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
				label="Select a Language"
			/>
			<Convert
				text={debouncedText}
				language={language.value}
			/>
		</div>
	);
};

export default Translate;