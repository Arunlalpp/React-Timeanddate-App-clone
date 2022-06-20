import React from "react";
import CardContainer from "./CardContainer";
import NavLink from "./NavLink";
import keralaLogo from "../images/keralaLogo.jpg";
import titleBanner from "../images/titleBanner.jpg";

function Navbar() {
	return (
		<>
			<div className="2xl:w-[68.8%] m-auto  w-[95%] pr-[20px] pl-[20px]">
				<div>
					<div className="w-[100%] text-center md:flex flex-row justify-between">
						<div className="pt-[20px] grid place-content-center md:block md:pl-[3px]">
							<img
								className="md:w-[186px] md:h-[135px] w-[100px] h-[70px]"
								src={keralaLogo}
								alt=""
							/>
						</div>
						<div className="pt-[20px]">
							<img src={titleBanner} alt="" />
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
