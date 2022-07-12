import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function FooterSocialIcons() {
	return (
		<div className="bg-[#0d005e]">
			<div className="max-w-[1080px] w-[80%] m-auto">
				<div className="flex md:flex-row  flex-col-reverse items-center justify-center md:justify-between py-[15px]">
					<div className="text-white">
						<span className="font-extralight text-[#cccccc] text-[17px]">
							Women in Tech ® All rights reserved. Website by
							<span className="font-bold"> Social Brain</span>
						</span>
					</div>
					<ul className="list-none md:flex md:flex-cols block">
						<li className="ml-3">
							<a href="https://www.facebook.com/WomenInTechOrg/">
								<FaFacebookF className="text-[#fff] text-[25px]" />
							</a>
						</li>
						<li className="ml-3">
							<a href="https://twitter.com/womenintechorg">
								<AiOutlineTwitter className="text-[#fff] text-[25px]" />
							</a>
						</li>
						<li className="ml-3">
							<a href="https://www.facebook.com/WomenInTechOrg/">
								<AiOutlineInstagram className="text-[#fff] text-[25px]" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FooterSocialIcons;
