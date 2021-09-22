import React from "react";

const Card = ({ name, alignment, image }) => {
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
			<div className="card-footer fw-bold text-center">Add to your team</div>
		</div>
	);
};

export default Card;
