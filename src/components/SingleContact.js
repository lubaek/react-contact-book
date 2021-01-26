import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SingleContact(props) {
	const { history } = props;
	const contacts = JSON.parse(localStorage.getItem("contacts"));
	const contactId = props.match.params.id;
	const contact = contacts.find((contact) => contact.id === +contactId);
	const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
	const formik = useFormik({
		initialValues: {
			id: contact.id,
			firstName: contact.firstName,
			lastName: contact.lastName,
			city: contact.city,
			country: contact.country,
			phoneNumber: contact.phoneNumber,
			email: contact.email,
			image: contact.image,
			website: contact.website,
			isFavorite: contact.isFavorite,
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.min(2, "Minimum 2 characters")
				.max(15, "Maximum 20 characters")
				.required("First name is required"),
			lastName: Yup.string()
				.min(2, "Minimum 2 characters")
				.max(15, "Maximum 20 characters")
				.required("Last name is required"),
			city: Yup.string().required("City is required"),
			country: Yup.string().required("Country is required"),
			phoneNumber: Yup.string()
				.matches(phoneRegExp, "Phone number is not valid")
				.required("Phone number is required"),
			email: Yup.string()
				.email("Email is not valid")
				.required("Email is required"),
			website: Yup.string().required("Website is required"),
		}),
		onSubmit: (values) => {
			const contactIndex = contacts.findIndex(
				(contact) => contact.id === +contactId
			);
			contacts[contactIndex] = values;
			localStorage.setItem("contacts", JSON.stringify(contacts));
			history.push("/");
		},
	});

	return (
		<div className="container single-contact">
			<div className="single-contact__head">
				<div className="contact__img">
					<img src={formik.values.image} alt="contact" />
				</div>
				<button
					type="button"
					className={
						formik.values.isFavorite
							? "red-heart-btn big-heart"
							: "black-heart-btn big-heart"
					}
					onClick={() => {
						formik.values.isFavorite = !formik.values.isFavorite;
						formik.setValues(formik.values);
					}}
				>
					<i
						className={
							formik.values.isFavorite ? "fas fa-heart" : "far fa-heart"
						}
					></i>
				</button>
			</div>
			<form onSubmit={formik.handleSubmit} className="contact-form">
				<div className="form-field">
					<label>First name:</label>
					<input
						type="text"
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
					/>
					{formik.errors.firstName && formik.touched.firstName ? (
						<p>{formik.errors.firstName}</p>
					) : (
						<p> </p>
					)}
				</div>

				<div className="form-field">
					<label>Last name:</label>
					<input
						type="text"
						name="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
					/>
					{formik.errors.lastName && formik.touched.lastName ? (
						<p>{formik.errors.lastName}</p>
					) : (
						<p> </p>
					)}
				</div>

				<div className="form-field">
					<label>City:</label>
					<input
						type="text"
						name="city"
						value={formik.values.city}
						onChange={formik.handleChange}
					/>
					{formik.errors.city && formik.touched.city ? (
						<p>{formik.errors.city}</p>
					) : (
						<p> </p>
					)}
				</div>

				<div className="form-field">
					<label>Country:</label>
					<input
						type="text"
						name="country"
						value={formik.values.country}
						onChange={formik.handleChange}
					/>
					{formik.errors.country && formik.touched.country ? (
						<p>{formik.errors.country}</p>
					) : (
						<p> </p>
					)}
				</div>
				<div className="form-field">
					<label>Phone Number:</label>
					<input
						type="text"
						name="phoneNumber"
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
					/>
					{formik.errors.phoneNumber && formik.touched.phoneNumber ? (
						<p>{formik.errors.phoneNumber}</p>
					) : (
						<p> </p>
					)}
				</div>

				<div className="form-field">
					<label>Email:</label>
					<input
						type="text"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.errors.email && formik.touched.email ? (
						<p>{formik.errors.email}</p>
					) : (
						<p> </p>
					)}
				</div>

				<div className="form-field">
					<label>Website:</label>
					<input
						type="text"
						name="website"
						value={formik.values.website}
						onChange={formik.handleChange}
					/>
					{formik.errors.website && formik.touched.website ? (
						<p>{formik.errors.website}</p>
					) : (
						<p> </p>
					)}
				</div>
				<div className="form-field">
					<button type="submit" className="black-btn saveContact-btn">
						Save Contact
					</button>
				</div>
			</form>
		</div>
	);
}

export default SingleContact;
