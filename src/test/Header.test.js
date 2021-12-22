import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "../components/Header";
import Login from "../pages/Login";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Header component", () => {
	it("Should render after verifying if the user is authenticated", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find("header").length).to.equals(1);
	});
});

describe("Test Login component", () => {
	it("Should render form", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find("div").at(2).childAt(0)).to.have.lengthOf(1);
	});
});
