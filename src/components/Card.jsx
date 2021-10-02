import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHero } from "../redux/actions";
import ShowError from "./ShowError";

const Card = ({ hero, name, alignment, image, isAdded }) => {
	const dispatch = useDispatch();
	const team = useSelector(state => state.team);
	const [error, setError] = useState(null);

	useEffect(() => {
		const errorMessage = document.querySelector(".error-message");
		if (errorMessage) setInterval(() => errorMessage.remove(), 5000);
	}, [error]);

	const handleClick = () => {
		const countAlignment = alignment => {
			return team.filter(hero => hero.biography.alignment === alignment);
		};

		if (team.length >= 6) {
			setError("Your team is complete. You cannot add more than 6 characters");
		} else if (team.includes(hero)) {
			setError("This character is already on your team");
		} else if (countAlignment(alignment).length >= 3) {
			setError(`You cannot add more ${alignment} characters to your team`);
		} else {
			dispatch(addHero(hero));
		}
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
			<img src={image} className="card-img-top" alt={name} />
			{!isAdded ? (
				<button
					className="card-footer fw-bold text-center"
					type="button"
					onClick={handleClick}
				>
					Add to your team
				</button>
			) : (
				<div className="btn-group" role="group" aria-label="Button group">
					<button
						type="button"
						className="card-footer fw-bold text-center"
						style={{ width: "50%" }}
					>
						Details
					</button>
					<button
						className="card-footer fw-bold text-center"
						style={{ width: "50%", display: "inline-block" }}
					>
						Delete
					</button>
				</div>
			)}
			{error && <ShowError message={error} />}
		</div>
	);
};

export default Card;
