import React from "react";

const ShowError = ({ message, className, styles }) => {
	return (
		<div className={`error-message ${className}`} style={styles}>
			{message}
		</div>
	);
};

export default ShowError;
