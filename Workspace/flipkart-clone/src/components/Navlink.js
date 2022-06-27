import React from "react";

import { navLinks } from "../Constants";

function Navlink() {
	return (
		<div className="bg-[#fff] w-full lg:block shadow-sm hidden absolute top-[58px]">
			<div
				className=" w-[81%] max-w-[1248px] m-auto  py-2 font-[550] "
				style={{
					fontFamily:
						"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
				}}
			>
				<ul className="flex flex-row justify-between">
					{navLinks?.map((navLink) => {
						return (
							<li className="flex flex-row items-center  text-[#000000] text-[14px] tracking-tighter whitespace-nowrap font- hover:text-[#2874f0]">
								<a href="/">{navLink.text}</a>
								<span className="ml-[5px] text-[15px] text-gray-400">
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
