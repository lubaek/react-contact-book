import React, { Component } from "react";
import ContactCard from "./ContactCard";
import { connect } from "react-redux";
import Loading from "./Loading";
import { addToFavorites, setFavorites } from "../redux/actions/actions";

class ContactsContainer extends Component {
	render() {
		let content = "";
		content =
			this.props.contacts.length > 0 ? (
				this.props.contacts.map((contact) => (
					<ContactCard
						key={contact.id}
						contact={contact}
						contacts={this.props.contacts}
						favorites={this.props.favorites}
						addToFavorites={this.props.addToFavorites}
						setFavorites={this.props.setFavorites}
					/>
				))
			) : JSON.parse(localStorage.getItem("contacts")) ? (
				<div className="loader">
					<h2>NO CONTACTS</h2>
				</div>
			) : (
				<Loading />
			);
		return <div className="contacts_container container">{content}</div>;
	}
}

const mapStateToProps = (state) => ({
	contacts: state.showedContacts,
	favorites: state.favorites,
});

export default connect(mapStateToProps, { addToFavorites, setFavorites })(
	ContactsContainer
);
