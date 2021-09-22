import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../components/Header";

const Login = () => {
	const history = useHistory();
	const [error, setError] = useState(null);

	return (
		<Header>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10 col-md-7 col-lg-6 col-xl-5">
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validate={values => {
								let errors = {};

								if (!values.email) {
									errors.email = "Please enter an email";
								}

								if (!values.password) {
									errors.password = "Please enter a password";
								}

								return errors;
							}}
							onSubmit={async (values, { resetForm }) => {
								const response = await axios
									.post("http://challenge-react.alkemy.org/", values)
									.catch(() => setError("Invalid email or password"));
								const token = response.data.token;
								localStorage.setItem("user", JSON.stringify(token));
								resetForm();
								history.push("/");
							}}
						>
							{({ errors }) => (
								<Form>
									<div className="mb-3">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<Field
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="Type your email"
											required
										/>
										<ErrorMessage
											name="email"
											component={() => (
												<div className="error-message">{errors.email}</div>
											)}
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="password" className="form-label">
											Password
										</label>
										<Field
											type="password"
											className="form-control"
											name="password"
											id="password"
											placeholder="Type your password"
											required
										/>
										<ErrorMessage
											name="password"
											component={() => (
												<div className="error-message">{errors.password}</div>
											)}
										/>
									</div>
									<button type="submit" className="btn col-12 btn-primary">
										Login
									</button>
									{error && (
										<div
											className="error-message mt-1"
											style={{ padding: "0.375rem 0.75rem" }}
										>
											{error}
										</div>
									)}
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</Header>
	);
};

export default Login;
