import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { navItems, items } from "../Constants";
import { FiMenu } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import SerchBar from "./searchBar";
import ScrollNavlinks from "./ScrollNavlinks";

function Header() {
	return (
		<div className="bg-[#333] w-full  md:block sticky">
			<div className="2xl:max-w-[58%] m-auto max-w-[81%]  md:flex flex-row justify-between text-white items-center h-[40px] md:block hidden">
				{navItems?.map((navitem) => {
					return (
						<div className="md:flex items-center p-2">
							<span className="md:flex flex-row items-center text-[14px] font-sans whitespace-nowrap  hidden">
								{navitem.name}
								<span>
									<IoIosArrowDown className="w-[10px] text-gray-200 ml-[0.1rem]" />
								</span>
							</span>
						</div>
					);
				})}
				{items?.map((item) => {
					return (
						<div className="flex items-center flex-row">
							<span className="px-2 md:flex flex-row text-[24px]  hidden">
								{item.image}
								<span>
									<IoIosArrowDown className="w-[10px] text-gray-200" />
								</span>
							</span>

							<span className="text-white  p-2">{item.icon}</span>
							<span className="text-white  p-2">{item.search}</span>
						</div>
					);
				})}
			</div>
			<div className="md:hidden block max-w-[90%] m-auto flex flex-row  items-center justify-between p-1 mt-1 md:mt-0">
				<div className="md:hidden block">
					<FiMenu className="text-white text-[20px]" />
				</div>
				<div className="md:hidden block w-[135px]">
					<img
						src="https://c.tadst.com/gfx/n/logo/logo-2021--horizontal-inverted-darkbg.svg"
						alt=""
					/>
				</div>
				<div className="flex flex-row">
					<IoMdShare className="text-[34px] text-white p-2" />
					<BiSearch className="text-[34px] text-white p-2" />
				</div>
			</div>
			<div className="border-b-[15px] border-[#12578f]"></div>
			<SerchBar />
			<ScrollNavlinks />
		</div>
	);
}

export default Header;
