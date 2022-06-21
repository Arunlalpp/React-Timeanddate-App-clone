import React from "react";
import { navLinks } from "../Constants";
import ButtonBoard from "./ButtonBoard";

function NavLink() {
	return (
		<div>
			<div className="">
				<ul className="flex flex-row">
					{navLinks?.map((navLink) => {
						return (
							<li className="flex flex-row items-center uppercase text-white text-sm pr-[25px] font-bold">
								<a href="/">{navLink.text}</a>
								<span className="ml-[5px] text-[18px]">{navLink.icon}</span>
							</li>
						);
					})}
					<div className="">
						<ButtonBoard />
					</div>
				</ul>
			</div>
		</div>
	);
}

export default NavLink;
