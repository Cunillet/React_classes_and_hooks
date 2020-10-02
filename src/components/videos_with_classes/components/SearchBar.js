import React from 'react';

class SearchBar extends React.Component {
	state = { searchText: '' };

	onInputChange = (event) => {
		this.setState({ searchText: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.searchText);
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
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
							value={this.state.searchText}
							onChange={this.onInputChange}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default SearchBar;