import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import logoWomenintech from "../images/logoWomenintech.png";
import MobileDroplist from "./MobileDroplist";
import NavLink from "./NavLink";
import SliderShow from "./SliderShow";
import TopNavbar from "./TopNavbar";

function Navbar() {
	const [state, setState] = useState(false);
	const displayBlock = () => {
		setState(true);
	};
	return (
		<div>
			<TopNavbar />
			<div className="lg:top-[35px]  bg-[#15009b] leading-6 font-medium w-full z-[99999]">
				<div className="2xl:w-[95%] w-[80%] md:w-[95%] 2xl:max-w-full md:pt-[30px] md:pb-[17px] text-left z-[99] m-auto ">
					<div className="lg:pt-5  w-full bg-transparent flex flex-row items-center md:items-end justify-between">
						<a href="/">
							<img
								className="2xl:w-[8vw] w-[21vw] md:w-[147.64px] md:h-[59.4px] md:mt-2"
								src={logoWomenintech}
								alt="Logo"
							/>
						</a>
						<div className="px-4  cursor-pointer lg:hidden block">
							{state === false ? (
								<GiHamburgerMenu
									className="w-[30px] h-[80px] text-[#00f4cb]"
									onClick={displayBlock}
								/>
							) : (
								<GiHamburgerMenu
									className="w-[30px] h-[80px] text-[#00f4cb]"
									onClick={() => setState(false)}
								/>
							)}
						</div>
						<div className="float-right md:block hidden">
							<NavLink />
						</div>
					</div>
				</div>
			</div>
			{state === true ? <MobileDroplist /> : null}
			{/* <SliderShow /> */}
		</div>
	);
}

export default Navbar;
