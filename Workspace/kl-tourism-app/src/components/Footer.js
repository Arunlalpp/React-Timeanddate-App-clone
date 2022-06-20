import React from "react";
import { footerLinks } from "../Constants";
import CompanyLogos from "./CompanyLogos";
import ContactDetails from "./ContactDetails";

function Footer() {
	return (
		<div>
			<div className="py-6 grid grid-cols-2 bg-[#f3f3f3] md:flex flex-row justify-between md:pr-[2rem] md:pl-[2rem]">
				{footerLinks?.map((footerLink) => {
					return (
						<div className=" text-[#30416d] w-[16.66666667%]">
							<div className="mb-[20px]">
								<span className="text-[22px] font-news font-light">
									{footerLink.title}
								</span>
							</div>
							{footerLink?.contents?.map((content) => {
								return (
									<div
										className="text-[#666] text-[14px] p-[1px]"
										key={content.text}
									>
										<button className="border-none  font-light hover:text-[#337ab7]">
											{content.text}
										</button>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
			<CompanyLogos />
			<ContactDetails />
		</div>
	);
}

export default Footer;
