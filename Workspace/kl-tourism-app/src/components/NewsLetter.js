import React from "react";

function NewsLetter() {
	return (
		<div>
			<div className="bg-[#339966] md:min-w-[15.5vw]">
				<ul className="py-[16px]">
					<li className="list-square text-white text-[16px] ml-[45px] uppercase font-bold p-3 font-news tracking-[-1px]">
						News Letter
					</li>
					<li className="list-square text-white text-[16px] ml-[45px] uppercase font-bold p-3 font-news tracking-[-1px]">
						Career
					</li>
					<li className="list-square text-white text-[16px] ml-[45px] uppercase font-bold p-3 font-news tracking-[-1px]">
						Contact Us
					</li>
				</ul>
			</div>
			<div className="">
				<div className="py-[20px] md:mt-[0.5rem]">
					<div className="bg-[#339966] text-center py-[16px]">
						<span className="text-white text-[18px] font-semibold uppercase font-news">
							Latest news
						</span>
					</div>
					<div className="bg-[#dde9df]">
						<ul className="px-[16px]">
							<li className="list-square text-[#339966] text-[16px] ml-8 p-5 font-news font-light">
								Chief Minister's Tourism Loan Assistance Scheme - Register Now
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
