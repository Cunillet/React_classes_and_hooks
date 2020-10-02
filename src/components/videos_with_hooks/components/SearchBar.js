import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="card">
				<div className="card-body search-bar">
					<label
						htmlFor="searchVideo"
						className="h5"
					>Video Search:</label>
					<input
						id="searchVideo"
						type="text"
						placeholder="Search ..."
						className="form-control"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
		</form>
	);
}

export default SearchBar;