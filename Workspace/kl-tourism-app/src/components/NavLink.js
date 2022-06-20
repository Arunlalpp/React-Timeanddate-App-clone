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
								<span className="text-white text-[14px] font-sans  cursor-pointer px-[12px]">
									{navitem.name}
									<span className="">{navitem.news}</span>
									<span className=" lg:border-r-[2px] border-white px-[12px]"></span>
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
