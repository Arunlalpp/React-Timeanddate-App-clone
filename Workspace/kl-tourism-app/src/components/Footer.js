import React from "react";
import { footerLinks } from "../Constants";
import CompanyLogos from "./CompanyLogos";
import ContactDetails from "./ContactDetails";

function Footer() {
	return (
		<div>
			<div className="py-6 grid grid-cols-2 bg-[#f3f3f3] md:flex flex-row justify-between md:pr-[4rem] md:pl-[4rem]">
				{footerLinks?.map((footerLink) => {
					return (
						<div className=" pt-1 text-[#30416d] ml-8 md:ml-0">
							<span className="text-[20px] font-news font-light">
								{footerLink.title}
							</span>
							{footerLink?.contents?.map((content) => {
								return (
									<div className="text-[##666] text-[14px]" key={content.text}>
										<button className="border-none  py-[6px] font-light">
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
