import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
	const team = useSelector(state => state.team);
	const id = window.location.pathname.slice(6, 9);
	const hero = team.filter(hero => hero.id === id)[0];

	return (
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={hero.image.url}
						className="img-fluid rounded-start"
						alt="..."
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{hero.name}</h5>
						<ul className="card-text">
							<li>
								Full Name: <strong>{hero.biography["full-name"]}</strong>
							</li>
							<li>
								Aliases: <strong>{hero.biography.aliases}</strong>
							</li>
							<li>
								Work base: <strong>{hero.work.base}</strong>
							</li>
							<li>
								Height: <strong>{hero.appearance.height[1]}</strong>
							</li>
							<li>
								Weight: <strong>{hero.appearance.weight[1]}</strong>
							</li>
							<li>
								Eye color: <strong>{hero.appearance["eye-color"]}</strong>
							</li>
							<li>
								Hair color: <strong>{hero.appearance["hair-color"]}</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
