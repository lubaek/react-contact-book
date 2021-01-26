import React from "react";
import logo from "../img/logo.png";

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo" />
				<span className="logo-text">MyContacts</span>
			</div>
		</div>
	);
}

export default Navbar;
