import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import logoWomenintech from "../images/logoWomenintech.png";
import MobileDroplist from "./MobileDroplist";
import NavLink from "./NavLink";
import TopNavbar from "./TopNavbar";

function Navbar() {
	const [state, setState] = useState(false);
	const displayBlock = () => {
		setState(true);
	};
	return (
		<div className="w-full lg:fixed t-0 l-0 z-[99999]">
			<TopNavbar />
			<div className="lg:top-[35px]  bg-[#15009b] leading-6 font-medium w-full">
				<div className="2xl:w-[97%] w-[80%] lg:w-[95%]  lg:pt-[30px] lg:pb-[17px] text-left z-[99] m-auto ">
					<div className="lg:pt-5 w-full bg-transparent flex flex-row items-center lg:items-end justify-between">
						<a href="/">
							<img
								className="2xl:w-[7vw] w-[107.36px] h-[44.19px] lg:w-[147.64px] lg:h-[59.4px] lg:mt-2"
								src={logoWomenintech}
								alt="Logo"
							/>
						</a>
						<div className="cursor-pointer lg:hidden block">
							{state === false ? (
								<GiHamburgerMenu
									className="w-[25px] h-[80px] md:h-[80px] md:w-[25px] text-[#00f4cb]"
									onClick={displayBlock}
								/>
							) : (
								<GiHamburgerMenu
									className="w-[25px] h-[80px] text-[#00f4cb]"
									onClick={() => setState(false)}
								/>
							)}
						</div>
						<div className="float-right lg:block hidden">
							<NavLink />
						</div>
					</div>
				</div>
			</div>
			{state === true ? <MobileDroplist /> : null}
		</div>
	);
}

export default Navbar;
