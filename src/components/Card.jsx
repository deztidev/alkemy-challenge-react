import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addHero, removeHero } from "../redux/actions";
import ShowError from "./ShowError";

const Card = ({ hero, name, alignment, image, isAdded }) => {
	const dispatch = useDispatch();
	const team = useSelector(state => state.team);
	const [error, setError] = useState(null);

	const powerstatsNames = Object.keys(hero.powerstats);
	const powerstatsValues = Object.values(hero.powerstats);
	const powerstatsArray = [];
	let powerstatsObject = {
		name: "",
		value: "",
	};
	for (let i = 0; i < powerstatsValues.length; i++) {
		if (powerstatsValues[i] === "null") powerstatsValues[i] = 0;
		powerstatsObject = {
			name: powerstatsNames[i],
			value: powerstatsValues[i],
		};
		powerstatsArray.push(powerstatsObject);
	}

	const powerstatsOrdered = powerstatsArray.sort((a, b) => b.value - a.value);

	useEffect(() => {
		const errorMessage = document.querySelector("#error");
		if (errorMessage) setInterval(() => errorMessage.remove(), 5000);
	}, [error]);

	const handleClick = () => {
		const countAlignment = alignment => {
			return team.filter(hero => hero.biography.alignment === alignment);
		};

		if (team.length >= 6) {
			setError("Your team is complete. You cannot add more than 6 characters");
		} else if (team.some(h => h.id === hero.id)) {
			setError("This character is already on your team");
		} else if (countAlignment(alignment).length >= 3) {
			setError(`You cannot add more ${alignment} characters to your team`);
		} else {
			dispatch(addHero(hero));
		}
	};

	const handleDelete = () => {
		dispatch(removeHero(hero));
	};

	return (
		<div className="card my-5 mx-3">
			<div className="card-header text-uppercase d-flex">
				<h2 className="me-2">{name}</h2>
				{alignment === "good" ? (
					<span className="badge bg-success align-self-start">Hero</span>
				) : (
					<span className="badge bg-danger align-self-start">Villain</span>
				)}
			</div>
			{!isAdded ? (
				<>
					<img src={image} className="card-img-top" alt={name} />
					<button
						className="card-footer fw-bold text-center"
						type="button"
						onClick={handleClick}
					>
						Add to your team
					</button>
				</>
			) : (
				<>
					<img src={image} className="card-img-top mb-3" alt={name} />
					{powerstatsOrdered.map((powerstat, key) => (
						<div
							className="progress mb-3"
							style={{ height: "25px", fontSize: "1rem", fontWeight: 500 }}
							key={key}
						>
							<div
								className="progress-bar"
								style={{ width: `${powerstat.value}%` }}
								role="progressbar"
								aria-valuenow={powerstat.value}
								aria-valuemin="0"
								aria-valuemax="100"
							>
								{`${powerstat.name}: ${powerstat.value}%`}
							</div>
						</div>
					))}
					<div className="btn-group" role="group" aria-label="Button group">
						<Link to={`/hero/${hero.id}`} style={{ display: "contents" }}>
							<button
								type="button"
								className="card-footer fw-bold text-center"
								style={{ width: "50%" }}
							>
								Details
							</button>
						</Link>
						<button
							className="card-footer fw-bold text-center"
							style={{ width: "50%", display: "inline-block" }}
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
				</>
			)}
			{error && <ShowError message={error} id={"error"} />}
		</div>
	);
};

export default Card;
