import React from "react";
import { footerLinks } from "../Constants";
function Footer() {
	return (
		<div className="">
			<div className="bg-[#006fb6] bg-full">
				<div className=" md:w-[58%] m-auto flex flex-row justify-between p-2">
					<span>How was your experience?</span>
					<div className="">
						<span>Contact Us</span>
					</div>
				</div>
			</div>
			<div className="m-auto px-14 max-w-7xl py-6 grid grid-cols-2 bg-gray-200">
				{footerLinks?.map((footerLink) => {
					return (
						<div className="pl-12 pb-3 pt-1 text-[#454545]">
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
