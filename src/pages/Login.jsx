import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
	const history = useHistory();
	const [error, setError] = useState(null);
	return (
		<div className="container mt-3">
			<div className="row justify-content-center">
				<div className="col col-md-10 col-lg-8">
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validate={values => {
							let errors = {};

							if (!values.email) {
								errors.email = "Please, enter an email";
							}

							if (!values.password) {
								errors.password = "Please, enter a password";
							}

							return errors;
						}}
						onSubmit={async (values, { resetForm }) => {
							const response = await axios
								.post("http://challenge-react.alkemy.org/", values)
								.catch(() => setError("Invalid email or password"));
							const token = response.data.token;
							console.log(response);
							localStorage.setItem("user", JSON.stringify(token));
							resetForm();
							history.push("/home");
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
										placeholder="Email"
										required
									/>
									<ErrorMessage
										name="email"
										component={() => (
											<div className="text-danger">{errors.email}</div>
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
										placeholder="Password"
										required
									/>
									<ErrorMessage
										name="password"
										component={() => (
											<div className="text-danger">{errors.password}</div>
										)}
									/>
								</div>
								<button type="submit" className="btn col-12 btn-primary">
									Enviar
								</button>
								{error && <p className="text-danger text-center">{error}</p>}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Login;
