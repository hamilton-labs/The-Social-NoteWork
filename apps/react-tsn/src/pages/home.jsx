import React, { useEffect } from "react";
import Button from "../components/Button";

const Home = () => {
	useEffect(() => {
		// update the document title
		document.title = "Home - NoteWork";
	});
	return (
		<>
			<div>
				<h2>This is the home page</h2>
				{/* add a list of links here */}
				<Button>Click me!</Button>
			</div>
		</>
	);
};
export default Home;