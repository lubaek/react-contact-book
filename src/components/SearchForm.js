import React, { Component } from "react";
import sort from "../img/sort.png";
import sort2 from "../img/sort2.png";
import {
	searchContact,
	fetchContacts,
	getContacts,
	showFavorites,
	setFavorites,
	sortAscending,
	sortDescending,
} from "../redux/actions/actions";
import { connect } from "react-redux";

class SearchForm extends Component {
	componentDidMount() {
		if (
			localStorage.getItem("contacts") &&
			localStorage.getItem("contacts").length > 0
		) {
			this.props.getContacts();
		} else {
			this.props.fetchContacts();
		}

		this.props.setFavorites(this.props.contacts);
	}

	onChange = (e) => {
		this.props.searchContact(e.target.value, this.props.contacts);
	};

	showFavorites = (e) => {
		e.preventDefault();
		this.props.showFavorites();
	};

	sortAscending = (e) => {
		e.preventDefault();
		this.props.sortAscending();
	};

	sortDescending = (e) => {
		e.preventDefault();
		this.props.sortDescending();
	};
	render() {
		return (
			<div className="search-form container">
				<input
					type="text"
					name="searchText"
					placeholder="type to search..."
					onChange={this.onChange}
				/>
				<div className="search-form__buttons">
					<button className="showFav-btn" onClick={this.showFavorites}>
						<i className="fas fa-heart"></i>
					</button>
					<button onClick={this.sortAscending}>
						<img src={sort} alt="sorting a-z" />
					</button>
					<button onClick={this.sortDescending}>
						<img src={sort2} alt="sorting z-a" />
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.text,
	contacts: state.allContacts,
	favorites: state.favorites,
});

export default connect(mapStateToProps, {
	searchContact,
	fetchContacts,
	getContacts,
	showFavorites,
	setFavorites,
	sortAscending,
	sortDescending,
})(SearchForm);
