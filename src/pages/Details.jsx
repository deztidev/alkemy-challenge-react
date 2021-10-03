import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Details = () => {
	const history = useHistory();
	const team = useSelector(state => state.team);
	const id = window.location.pathname.slice(6, 9);
	const hero = team.filter(hero => hero.id === id)[0];

	const handleClick = () => history.goBack();

	return (
		<div className="card details">
			<div className="row g-0">
				<div className="col-md-4 col-lg-3">
					<img
						src={hero.image.url}
						className="img-fluid rounded-start details__image"
						alt={hero.name}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h2 className="card-title details__title text-center text-uppercase">
							{hero.name}
						</h2>
						<ul className="card-text details__text">
							<li>
								<strong>Full Name: </strong>
								{hero.biography["full-name"]}
							</li>
							<li>
								<strong>Aliases: </strong>
								{hero.biography.aliases}
							</li>
							<li>
								<strong>Work base: </strong>
								{hero.work.base}
							</li>
							<li>
								<strong>Height: </strong>
								{hero.appearance.height[1]}
							</li>
							<li>
								<strong>Weight: </strong>
								{hero.appearance.weight[1]}
							</li>
							<li>
								<strong>Eye color: </strong>
								{hero.appearance["eye-color"]}
							</li>
							<li>
								<strong>Hair color: </strong>
								{hero.appearance["hair-color"]}
							</li>
						</ul>
						<button className="btn details__btn" onClick={handleClick}>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
