import React from "react";
import { navLinks } from "../Constants";
import ContainerCard from "./ContainerCard";
import Footer from "./Footer";

function ScrollNavlinks() {
	return (
		<div className="w-full bg-[#f7f3ea] ">
			<div className=" flex flex-row md:overflow-hidden overflow-scroll md:max-w-[58%] m-auto">
				{navLinks?.map((navLink) => {
					return (
						<div className="p-2">
							<span className="text-[15px] md:py-[12px] font-sans  px-1 whitespace-nowrap text-[#556bb5] flex flex-row items-center">
								{navLink.title}
								<span className="text-black px-1 md:block hidden">
									{navLink.icon}
								</span>
							</span>
						</div>
					);
				})}
			</div>
			<ContainerCard />
			<Footer />
		</div>
	);
}

export default ScrollNavlinks;
