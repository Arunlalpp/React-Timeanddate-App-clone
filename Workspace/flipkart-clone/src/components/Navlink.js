import React from "react";

import { navLinks } from "../Constants";

function Navlink() {
	return (
		<div className="bg-[#fff] w-full shadow-md">
			<div className=" 2xl:w-[55%] lg:w-[80%] m-auto  py-3">
				<ul className="flex flex-row justify-between">
					{navLinks?.map((navLink) => {
						return (
							<li className="flex flex-row items-center  text-[#000] text-[16px] whitespace-nowrap font-medium">
								<a href="/">{navLink.text}</a>
								<span className="ml-[2px] text-[15px] text-gray-400">
									{navLink.icon}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Navlink;
