import React from "react";

const Card = ({ image, name }) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">{name}</div>
		</div>
	);
};

export default Card;
