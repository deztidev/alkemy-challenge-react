import React from "react";
import { getAverageHeight, getAverageWeight, getPowerstats } from "./utils";

const ProgressBar = ({ team }) => {
	const powerstats = getPowerstats(team);
	const powerstatsNames = Object.keys(powerstats);
	const powerstatsValues = Object.values(powerstats);
	const powerstatsArray = [];
	let powerstatsObject = {
		name: "",
		value: "",
	};
	for (let i = 0; i < powerstatsValues.length; i++) {
		powerstatsObject = {
			name: powerstatsNames[i],
			value: Math.floor(powerstatsValues[i] / 6),
		};
		powerstatsArray.push(powerstatsObject);
	}

	const powerstatsOrdered = powerstatsArray.sort((a, b) => b.value - a.value);

	return (
		<div className="container my-4">
			<div className="col-lg-8 offset-lg-2">
				<div className="text-center mb-3">
					<span className="powerstats__badge badge bg-secondary rounded-0">
						Team category
					</span>
					<span className="powerstats__badge badge bg-primary rounded-0 text-capitalize">
						{powerstatsOrdered[0].name}
					</span>
				</div>
				<div className="powerstats__average text-center mb-2">
					Average Height: <strong>{getAverageHeight(team)} cm</strong> - Average
					Weight: <strong>{getAverageWeight(team)} kg</strong>
				</div>
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
							{` ${powerstat.name}: ${powerstat.value}%`}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProgressBar;
