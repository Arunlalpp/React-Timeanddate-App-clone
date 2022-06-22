import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function TopNavbar() {
	return (
		<div className="w-full hidden lg:block max-w-full px-[30px] font-semibold lg:fixed bg-white">
			<div className="float-right flex flex-row items-center text-lg">
				<ul className="mr-[2.5rem] list-none flex flex-row items-center mt-[-2px]">
					<li className="ml-3">
						<a href="https://www.facebook.com/WomenInTechOrg/">
							<FaFacebookF className="text-[#15009b] text-[14px]" />
						</a>
					</li>
					<li className="ml-3">
						<a href="https://twitter.com/womenintechorg">
							<AiOutlineTwitter className="text-[#15009b]" />
						</a>
					</li>
					<li className="ml-3">
						<a href="https://www.facebook.com/WomenInTechOrg/">
							<AiOutlineInstagram className="text-[#15009b]" />
						</a>
					</li>
				</ul>
				<ul className="flex items-center flex-row text-[#15009b] mt-[0.5rem]">
					<li className="mr-[17px] text-right ">
						<a
							className="pb-[0.75em] block text-sm font-normal uppercase  "
							href="/"
						>
							News
						</a>
					</li>
					<li className="mr-[3px] text-right ">
						<a
							className="pb-[0.75em] block text-sm font-normal uppercase  "
							href="/"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TopNavbar;
