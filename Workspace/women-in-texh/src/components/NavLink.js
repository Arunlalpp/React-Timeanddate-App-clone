import React from "react";
import { navLinks } from "../Constants";
import ButtonBoard from "./ButtonBoard";

function NavLink() {
	return (
		<div>
			<div className="">
				<ul className="flex flex-row items-center justify-between">
					{navLinks?.map((navLink) => {
						return (
							<li className="flex flex-row items-center uppercase">
								<a href="/">{navLink.text}</a>
								<span>{navLink.icon}</span>
							</li>
						);
					})}
					<ButtonBoard />
				</ul>
			</div>
		</div>
	);
}

export default NavLink;
