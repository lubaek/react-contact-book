import React, { Component } from "react";
import location from "../img/location.png";
import mobile from "../img/smartphone.png";
import internet from "../img/internet.png";
import email from "../img/email.png";
import { Link } from "react-router-dom";

export class ContactCard extends Component {
	componentDidUpdate() {
		localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
		localStorage.setItem("favorites", JSON.stringify(this.props.favorites));
	}
	render() {
		const { contact } = this.props;

		return (
			<div className="contact">
				<div className="contact__img">
					<img src={contact.image} alt="contact" />
				</div>

				<div className="contact__info">
					<div className="contact__title">
						<h3>{contact.firstName + " " + contact.lastName}</h3>
						<button
							className={
								contact.isFavorite ? "red-heart-btn" : "black-heart-btn"
							}
							onClick={() => {
								this.props.addToFavorites(contact);
								this.props.setFavorites(this.props.contacts);
							}}
						>
							<i
								className={
									contact.isFavorite === true ? "fas fa-heart" : "far fa-heart"
								}
							></i>
						</button>
					</div>
					<ul className="contact-links">
						<li>
							<img src={location} alt="location icon" />
							<a href="/#">
								{contact.city} city, {contact.country}
							</a>
						</li>
						<li>
							<img src={mobile} alt="smartphone icon" />
							<a href="/#">{contact.phoneNumber}</a>
						</li>
						<li>
							<img src={internet} alt="internet logo" />
							<a href="/#">{contact.website}</a>
						</li>
						<li>
							<img src={email} alt="email logo" />
							<a href="/#">{contact.email}</a>
						</li>
					</ul>
					<Link
						to={"/contact/" + contact.id}
						className="black-btn showContact-btn"
					>
						show
					</Link>
				</div>
			</div>
		);
	}
}

export default ContactCard;
