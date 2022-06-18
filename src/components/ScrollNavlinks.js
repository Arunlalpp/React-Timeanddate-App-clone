import React from "react";
import { navLinks } from "../Constants";
import ClockContainer from "./ClockContainer";
import Footer from "./Footer";
import WeatherCards from "./WeatherCards";

function ScrollNavlinks() {
	return (
		<div className="w-full bg-[#f7f3ea] ">
			<div className=" flex flex-row md:overflow-hidden overflow-scroll 2xl:max-w-[58%] max-w-[90%] m-auto">
				{navLinks?.map((navLink) => {
					return (
						<div
							className=" md:ml-[0.5rem] hover:bg-white cursor-pointer"
							style={{ backgroundColor: `${navLink.bg}` }}
						>
							<span className="text-[16px]  font-sans px-[11px] leading-[55px] whitespace-nowrap text-[#556bb5] flex flex-row items-center">
								{navLink.title}
								<span className="text-black px-1 md:block hidden">
									{navLink.icon}
								</span>
							</span>
						</div>
					);
				})}
			</div>
			<ClockContainer />
			<WeatherCards />
			<Footer />
		</div>
	);
}

export default ScrollNavlinks;
