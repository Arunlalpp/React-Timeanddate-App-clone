import React from "react";

function NewsLetter() {
	return (
		<div>
			<div className="bg-[#339966]">
				<ul className="py-[16px]">
					<li className="list-square text-white text-[14px] ml-8 uppercase font-semibold p-3 font-sans">
						News Letter
					</li>
					<li className="list-square text-white text-[14px] ml-8 uppercase font-semibold p-3 font-sans">
						Career
					</li>
					<li className="list-square text-white text-[14px] ml-8 uppercase font-semibold p-3 font-sans">
						Contact Us
					</li>
				</ul>
			</div>
			<div className="">
				<div className="py-[20px]">
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
