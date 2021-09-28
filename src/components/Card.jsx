import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHero } from "../redux/actions";

const Card = ({ hero, name, alignment, image }) => {
	const dispatch = useDispatch();
	const team = useSelector(state => state.team);

	// useEffect(() => {
	// }, [team]);

	const handleClick = () => {
		console.log(team);

		const countAlignment = alignment => {
			return team.filter(hero => hero.biography.alignment === alignment);
		};

		if (team.length >= 6) {
			console.log("your team is complete. You cannot add more than 6 heroes");
		} else if (team.includes(hero)) {
			console.log("hero is already on your team");
		} else if (countAlignment(alignment).length >= 3) {
			console.log(`you cannot add more ${alignment} characters to your team`);
		} else {
			dispatch(addHero(hero));
			console.log(countAlignment(alignment).length);
		}
	};

	return (
		<div className="card my-5 mx-5">
			<div className="card-header text-uppercase d-flex">
				<h2 className="me-2">{name}</h2>
				{alignment === "good" ? (
					<span className="badge bg-success align-self-start">Hero</span>
				) : (
					<span className="badge bg-danger align-self-start">Villain</span>
				)}
			</div>
			<img src={image} className="card-img-top" alt={name} />
			<button className="card-footer fw-bold text-center" onClick={handleClick}>
				Add to your team
			</button>
		</div>
	);
};

export default Card;
