import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState(null);
	const [heroes, setHeroes] = useState(null);
	const [submit, setSubmit] = useState(false);

	useEffect(() => {
		console.log("effect");
		const fetchData = async () => {
			console.log("fetch");
			const accesToken = await 1739918699533852;
			if (searchTerm && submit) {
				const response = await axios.get(
					`https://superheroapi.com/api/${accesToken}/search/${searchTerm}`
				);
				await setHeroes(response.data.results);
				// console.log(heroes.map((hero, i) => hero.image.url));
			}
		};
		fetchData();
	}, [searchTerm, submit]);

	const handleSubmit = async e => {
		e.preventDefault();
		setSubmit(true);
	};

	return (
		<>
			<Header />
			<form className="container" onSubmit={handleSubmit}>
				<div className="row justify-content-center">
					<div className="col col-sm-8 col-md-6 col-lg-5">
						<button type="submit" className="home__button">
							<BsSearch />
						</button>
						<input
							type="text"
							name="search"
							className="form-control home__input"
							onChange={e => setSearchTerm(e.target.value)}
							placeholder="Search a hero"
							required
						/>
					</div>
				</div>
			</form>
			{heroes &&
				heroes.map((hero, i) => (
					<Card key={i} image={hero.image.url} name={hero.name} />
				))}
		</>
	);
};

export default Home;
