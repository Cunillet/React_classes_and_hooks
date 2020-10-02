import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="form-group">
				<form onSubmit={this.onFormSubmit}>
					<div className="form-text">
						<h4 htmlFor="search-imgs">Image Search</h4>
						<input
							id="search-imgs"
							type="text"
							className="form-control"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
							placeholder="Introduce what you want to find photos about"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
