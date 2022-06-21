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
			<div className="lg:top-[35px]  bg-[#15009b] leading-6 font-medium w-full z-[99999] 2xl:h-[9vh] h-[12vh]">
				<div className="2xl:w-full w-[80%] lg:w-full max-w-[1080px] 2xl:max-w-full md:py-[30px] text-left z-[99] m-auto ">
					<div className="lg:pt-5  w-full bg-transparent flex flex-row items-center justify-between">
						<a href="/">
							<img
								className="2xl:w-[8vw] w-[21vw] md:w-[18vw] lg:w-[12vw]"
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
					</div>
					<div className="pl-[177px] pt-[35px] float-right lg:pl-0 lg:pt-6">
						<NavLink />
					</div>
				</div>
			</div>
			{state === true ? <MobileDroplist /> : null}
			<SliderShow />
		</div>
	);
}

export default Navbar;
