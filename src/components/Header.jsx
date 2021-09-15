import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
	const history = useHistory();
	const token = localStorage.getItem("user");

	const handleClick = () => {
		localStorage.removeItem("user");
	};

	useEffect(() => {
		if (token) {
			history.push("/");
		} else {
			history.push("/login");
		}
	}, [history, token]);

	return (
		<>
			<header className="header mb-5 d-flex align-items-center">
				<div className="header__title">
					<span>SUPER</span>
					<span>HERO</span>
				</div>
				{token && (
					<Link
						className="header__logout fs-1 ms-auto text-light"
						to="/login"
						onClick={handleClick}
					>
						<BsBoxArrowRight />
					</Link>
				)}
			</header>
			{children}
		</>
	);
};

export default Header;
