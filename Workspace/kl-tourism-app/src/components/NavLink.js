import React from "react";
import { navItems } from "../Constants";
import websiteBanner from "../images/websiteBanner.jpg";

function NavLink() {
	return (
		<div>
			<div className="bg-[#013567] md:my-[30px]">
				<div className="lg:flex flex-row items-center justify-between py-[15px] grid grid-cols-2 md:grid-cols-3">
					{navItems?.map((navitem) => {
						return (
							<div className="items-center">
								<span className="text-white text-[16px] whitespace-nowrap  cursor-pointer pl-[24px]">
									<span className="navlinks">{navitem.name}</span>
									<span className="navlinks">{navitem.news}</span>
									<span
										className={`lg:border-r-[2px] border-white pl-[25px] ${
											navitem.status && "border-none"
										}`}
									></span>
								</span>
							</div>
						);
					})}
				</div>
				<div className="">
					<img className="w-[100%]" src={websiteBanner} alt="" />
				</div>
			</div>
		</div>
	);
}

export default NavLink;
