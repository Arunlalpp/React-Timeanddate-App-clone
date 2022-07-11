import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { footerLinks } from "../Constants";
import FooterSocial from "./FooterSocial";
function Footer() {
	return (
		<div className="bg-[#ecf3fc]">
			<div className="bg-[#006fb6] w-full">
				<div className=" 2xl:max-w-[58%]  max-w-[90%] m-auto flex flex-row justify-between p-2">
					<span className="text-[#f8eab9] font-sans text-[14px] flex flex-row items-center whitespace-nowrap">
						How was your experience?
						<span>
							<AiFillLike className="text-[24px] fill-current" />
						</span>
						<span>
							<AiFillDislike className="text-[24px] fill-current" />
						</span>
					</span>
					<div className=" font-sans">
						<span className="text-[#f8eab9] text-[14px] flex flex-row items-center">
							Contact US
							<span>
								<MdMail className="text-[20px] ml-1 md:block hidden" />
							</span>
						</span>
					</div>
				</div>
			</div>
			<div className="m-auto text-center max-w-7xl py-6 grid grid-cols-2 bg-[#ecf3fc] md:hidden block">
				{footerLinks?.map((footerLink) => {
					return (
						<div className=" pt-1 text-[#454545]">
							<span className="font-medium text-[16px] font-sans">
								{footerLink.title}
							</span>
							{footerLink?.contents?.map((content) => {
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
			<div className="md:block hidden pb-[2.5rem]">
				<div className="m-auto  max-w-7xl mt-5 md:flex flex-row">
					<div className="flex flex-col justify-between border-r-[1px] border-dashed border-[#ccc] pr-[8.5rem]">
						<div className=" flex flex-row pb-6 md:w-[22vw] ml-[2.5rem] mt-[0.8rem]">
							<div>
								<img
									className="w-[100px] h-[100px] cursor-pointer"
									src=" https://c.tadst.com/gfx/n/i/service__supporter.svg"
									alt=""
								/>
							</div>
							<div className="ml-[1.2rem]">
								<span className="text-[16px] font-sans text-[#556bb5] font-semibold cursor-pointer hover:underline">
									Love Our Site? Become a Supporter
								</span>
								<ul className="ml-9 text-[#454545] font-normal leading-7">
									<li className="list-disc text-[14px]">
										Browse our site
										<strong className="text-[#454545] font-sans">
											{" "}
											advert free.
										</strong>
									</li>
									<li className="list-disc text-[14px]">
										Sun & Moon times{" "}
										<strong className="text-[#454545] ">
											precise to the second.
										</strong>
									</li>
									<li className="list-disc text-[14px]">
										<strong className="text-[#454545] ">
											Exclusive calendar templates
										</strong>{" "}
										for PDF Calendar.
									</li>
								</ul>
							</div>
						</div>
						<div className="ml-[2.5rem]  leading-7">
							<div>
								<img
									className="w-[176px] h-[26px]"
									src="https://c.tadst.com/gfx/n/logo/logo-2021--horizontal-color-whitebg.svg"
									alt=""
								/>
							</div>
							<span className="text-[12px] hover:underline text-[#556bb5] cursor-pointer">
								© Time and Date AS 1995–2022
							</span>
						</div>
					</div>
					<div className="w-[25vw] pl-[4rem]">
						<div class="flex flex-row justify-between text-[#454545]">
							<div class="mb-6 leading-6">
								<h5 class="font-sans font-bold mb-1 text-[16px]">Company</h5>

								<ul class="list-none mb-0 text-[14px]">
									<li>
										<a href="#!" class="text-[#556bb5]">
											About us
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Careers/Jobs
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Contact Us
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Contact Details
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Sitemap
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Newsletter
										</a>
									</li>
								</ul>
								<div className="mt-2">
									<FooterSocial />
								</div>
							</div>
							<div class="mb-6 text-[14px]">
								<h5 class="font-sans font-bold mb-1 text-[16px]">Legal</h5>

								<ul class="list-none mb-0 text-[14px]">
									<li>
										<a href="#!" class="text-[#556bb5]">
											Link policy
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Advertising
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Disclaimer
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Terms & Conditions
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											My Privacy
										</a>
									</li>
								</ul>
								<h5 class="font-sans font-bold mb-1 text-[16px]">Sites</h5>

								<ul class="list-none mb-0 text-[14px]">
									<li>
										<a href="#!" class="text-[#556bb5]">
											timeanddate.no
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											timeanddate.de
										</a>
									</li>
								</ul>
							</div>
							<div class="mb-6">
								<h5 class="font-sans font-bold mb-1 text-[16px]">Services</h5>
								<ul class="list-none mb-0 text-[14px]">
									<li>
										<a href="#!" class="text-[#556bb5]">
											World Clock
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Time Zones
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Calendar
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Weather
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Sun & Moon
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Timers
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											Calculators
										</a>
									</li>
									<li>
										<a href="#!" class="text-[#556bb5]">
											API
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:hidden block">
				<FooterSocial />
			</div>
		</div>
	);
}

export default Footer;
