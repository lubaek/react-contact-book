import React from "react";
import ContactsContainer from "./ContactsContainer";
import SearchForm from "./SearchForm";

function Landing() {
	return (
		<>
			<SearchForm></SearchForm>
			<ContactsContainer></ContactsContainer>
		</>
	);
}

export default Landing;
