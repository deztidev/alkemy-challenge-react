import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import Header from "../components/Header";
import Card from "../components/Card";
import ShowError from "../components/ShowError";

const Home = () => {
	const team = useSelector(state => state.team);
	const [searchTerm, setSearchTerm] = useState("");
	const [heroes, setHeroes] = useState(null);
	const [submit, setSubmit] = useState(false);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			setLoading(false);
			const accesToken = 1739918699533852;
			await axios
				.get(`https://superheroapi.com/api/${accesToken}/search/${searchTerm}`)
				.then(response => setHeroes(response.data.results))
				.catch(() => setError(true));
			setSubmit(false);
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
			{/* {team.length > 0 && <button className="btn home__btn">My Team</button>} */}
			{team.length > 0 && (
				<>
					<h1 className="text-center display-5 fw-bold">My Team</h1>
					<section className="d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-center">
						{team.map((hero, i) => (
							<Card
								key={i}
								hero={hero}
								name={hero.name}
								alignment={hero.biography.alignment}
								image={hero.image.url}
							/>
						))}
					</section>
				</>
			)}
			<form className="container" onSubmit={handleSubmit}>
				<div className="my-0 mx-auto col-10 col-md-7 col-lg-6 col-xl-5">
					<div>
						<button type="submit" className="home__button">
							<BsSearch />
						</button>
						<label htmlFor="search" className="form-label home__label">
							Search character
						</label>
						<input
							type="text"
							name="search"
							className="form-control home__input"
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							placeholder="Superman"
							required
						/>
					</div>
					{heroes === undefined && (
						<ShowError message={"Character with given name not found"} />
					)}
					{heroes !== undefined && error && (
						<ShowError message={"Error fetching API"} />
					)}
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
							hero={hero}
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
