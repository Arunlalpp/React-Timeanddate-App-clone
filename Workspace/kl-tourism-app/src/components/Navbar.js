import React from "react";
import CardContainer from "./CardContainer";
import NavLink from "./NavLink";

function Navbar() {
	return (
		<div className="2xl:w-[70%] m-auto py-[20px] w-[95%]">
			<div className=" md:flex flex-row  items-center">
				<div className="w-[100%] text-center">
					<img
						className="md:w-[186px] md:h-[135px] w-[100px] h-[70px]"
						src="http://www.keralatourism.gov.in/new-style/images/kerala-logo.jpg"
						alt=""
					/>
				</div>
				<div className="">
					<img
						src="http://www.keralatourism.gov.in/new-style/images/title-banner.jpg"
						alt=""
					/>
				</div>
			</div>
			<NavLink />
			<CardContainer />
		</div>
	);
}

export default Navbar;
