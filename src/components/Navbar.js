import React from "react";
import Banner from "./Banner";
import Header from "./Header";

function Navbar() {
	return (
		<div className="w-full m-auto">
			<Banner status="true" />
			<Header />
		</div>
	);
}

export default Navbar;
