import React from "react";
import CardContainer from "./CardContainer";
import NavLink from "./NavLink";

function Navbar() {
	return (
		<>
			<div className="2xl:w-[69%] m-auto  w-[95%] pr-[20px] pl-[20px]">
				<div>
					<div className="w-[100%] text-center md:flex flex-row justify-between">
						<div className="pt-[20px] grid place-content-center md:block">
							<img
								className="md:w-[186px] md:h-[135px] w-[100px] h-[70px]"
								src="http://www.keralatourism.gov.in/new-style/images/kerala-logo.jpg"
								alt=""
							/>
						</div>
						<div className="pt-[26px]">
							<img
								src="http://www.keralatourism.gov.in/new-style/images/title-banner.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<NavLink />
			</div>
			<CardContainer />
		</>
	);
}

export default Navbar;
