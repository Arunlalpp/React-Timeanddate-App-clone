import React from "react";
import { navLinks } from "../Constants";

function ScrollNavlinks() {
	return (
		<div className="w-full bg-white flex flex-row">
			{navLinks?.map((navLink) => {
				return (
					<div className="p-3">
						<span className="text-[14px] font-sans whitespace-nowrap  ">
							{navLink.title}
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default ScrollNavlinks;
