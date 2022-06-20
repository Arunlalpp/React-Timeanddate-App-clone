import React from "react";
import { navItems } from "../Constants";

function NavLink() {
	return (
		<div>
			<div className="bg-[#013567] md:my-[30px]">
				<div className="md:flex flex-row items-center justify-between py-[15px] grid grid-cols-2">
					{navItems?.map((navitem) => {
						return (
							<div className="items-center">
								<span className="text-white text-[14px] font-sans whitespace-nowrap cursor-pointer px-[12px]">
									{navitem.name}
									<span className="border-r-[2px] border-[#013567]">
										{navitem.news}
									</span>
									<span className=" md:border-r-[2px] border-white px-[12px]"></span>
								</span>
							</div>
						);
					})}
				</div>
				<div className="">
					<img
						className="w-[100%]"
						src="http://www.keralatourism.gov.in/images/website-banner.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default NavLink;
