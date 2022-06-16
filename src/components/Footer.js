import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { footerLinks } from "../Constants";
function Footer() {
	return (
		<div className="">
			<div className="bg-[#006fb6] bg-full">
				<div className=" md:w-[58%] m-auto flex flex-row justify-between p-2">
					<span className="text-[#f8eab9] font-sans text-[14px] flex flex-row items-center">
						How was your experience?
						<span>
							<AiFillLike className="text-[24px] fill-current" />
						</span>
						<span>
							<AiFillDislike className="text-[24px] fill-current" />
						</span>
					</span>
					<div className=" font-sans">
						<span className="text-[#f8eab9] text-[14px]">Contact US</span>
					</div>
				</div>
			</div>
			<div className="m-auto text-center max-w-7xl py-6 grid grid-cols-2 bg-gray-200">
				{footerLinks?.map((footerLink) => {
					return (
						<div className=" pt-1 text-[#454545]">
							<span className="font-medium text-[16px] font-sans">
								{footerLink.title}
							</span>
							{footerLink?.contents?.map((content) => {
								console.log("hai", content);
								return (
									<div
										className="max-w-xs text-[#556bb5] text-[14px]"
										key={content.text}
									>
										<button className="border-none text-left py-[6px]">
											{content.text}
										</button>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Footer;
