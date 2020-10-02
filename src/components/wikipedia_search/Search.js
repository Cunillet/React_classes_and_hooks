import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	/**
	 * debounceTerm is used to capture term when changed only
	 * and to avoid complex if states to update in just
	 * one useEffect call. This is a more elegant way rather
	 * than just one useEffect
	 */
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	});

	useEffect(() => {
		const wikiSearch = async () => {
			const response = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				}
			});

			if (response.data.query && response.data.query.search) {
				setResults(response.data.query.search);
			}
		};

		if (debouncedTerm) {
			wikiSearch();
		}
	}, [debouncedTerm]);


	const renderedResults = results.map((result) => {
		let content = result.snippet.replaceAll('<span class="searchmatch">', '')
			.replaceAll('</span>', '');
		return (
			<div key={result.pageid} className="card">
				<div className="card-body">
					<h4 className="card-title">{result.title}</h4>
					<p className="card-text d-inline">
						{content}
					</p>
					<a
						className="btn btn-outline-primary float-right"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>Learn More</a>
				</div>
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className="form-group">
				<label htmlFor='search-term'>Introduce a Search Term</label>
				<input
					className="form-control"
					id="search-term"
					placeholder="Search"
					value={term}
					onChange={e => setTerm(e.target.value)}
				/>
			</div>
			{renderedResults}
		</React.Fragment>
	);
};

export default Search;