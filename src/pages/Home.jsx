import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Home = () => {
	const history = useHistory();

	useEffect(() => {
		const token = localStorage.getItem("user");
		if (!token) {
			history.push("/login");
		}
	});

	return (
		<div>
			<h1>SuperHero</h1>
		</div>
	);
};

export default Home;
