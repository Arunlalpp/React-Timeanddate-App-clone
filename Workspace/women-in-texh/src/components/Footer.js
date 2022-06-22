import React from "react";
import { footerLinks } from "../Constants";

function Footer() {
	return (
		<div className="bg-[#0d005e]">
			<div className="max-w-[1080px] w-[80%] m-auto">
				<div className="py-6 grid grid-cols-1 md:flex flex-row justify-between md:pr-[2rem] pl-[2rem]">
					{footerLinks?.map((footerLink) => {
						return (
							<div className=" text-white md:w-[16.66666667%]">
								<div className="mb-[20px]">
									<span className="text-[22px] font-news font-bold">
										{footerLink.title}
									</span>
								</div>
								{footerLink?.contents?.map((content) => {
									return (
										<div
											className="text-white text-[17px] p-[1px]"
											key={content.text}
										>
											<button className="border-none  font-extralight">
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
			<div className="p-[15px] bg-[#190d66] md:flex flex-row flex-wrap text-center">
				<div className="text-white font-extralight uppercase text-[14px]">
					<span>cookie policy</span>
					<span>privacy policy</span>
					<span>terms of use</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
