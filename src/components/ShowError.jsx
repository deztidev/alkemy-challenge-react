import React from "react";

const ShowError = ({ message, className, styles, id }) => {
	return (
		<div className={`error-message ${className}`} style={styles} id={id}>
			{message}
		</div>
	);
};

export default ShowError;
