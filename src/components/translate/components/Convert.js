import axios from 'axios';
import React, { useState, useEffect } from 'react';
import google_API from '../../../files/google_API';


const Convert = ({ text, language }) => {
	const [translation, setTranslation] = useState('');

	useEffect(() => {
		const translate = async () => {
			const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: text,
						target: language,
						key: google_API
					}
				}
			);

			setTranslation(data.data.translations[0].translatedText)
		};

		if (text) {
			translate();
		}
	}, [text, language]);

	return (
		<div className="card mt-5">
			<div className="card-body">
				<p className="card-text">{translation}</p>
				<p className="card-text text-right">
					<small className="text-muted">
						Translated by @Google
				</small>
				</p>
			</div>
		</div>
	);
};

export default Convert;