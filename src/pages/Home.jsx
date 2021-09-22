import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
	const [searchTerm, setSearchTerm] = useState(null);
	const [heroes, setHeroes] = useState(null);
	const [submit, setSubmit] = useState(false);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			setLoading(false);
			const accesToken = 1739918699533852;
			const response = await axios.get(
				`https://superheroapi.com/api/${accesToken}/search/${searchTerm}`
			);
			setHeroes(response.data.results);
			setSubmit(false);
			if (heroes) {
				console.log(
					heroes.filter(hero => {
						return hero.name.length >= 20;
					})
				);
			}
		};
		if (submit) fetchData();
	}, [submit]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleSubmit = async e => {
		e.preventDefault();
		setSubmit(true);
	};

	return (
		<>
			<Header />
			<form className="container" onSubmit={handleSubmit}>
				<div className="row justify-content-center">
					<div className="col-10 col-md-7 col-lg-6 col-xl-5">
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
			<section className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
				{!loading ? (
					<div
						className="m-auto"
						style={{ width: "fit-content", transform: "translate(50%, 25vh)" }}
					>
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					heroes &&
					heroes.map((hero, i) => (
						<Card
							key={i}
							name={hero.name}
							alignment={hero.biography.alignment}
							image={hero.image.url}
						/>
					))
				)}
			</section>
		</>
	);
};

export default Home;
