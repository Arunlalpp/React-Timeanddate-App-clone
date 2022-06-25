import React from "react";

function ProgressBar() {
	return (
		<div>
			<section className="p-4 relative">
				<div className="flex justify-between items-center">
					<div className="text-[13px] font-medium uppercase inline-block">
						Price
					</div>
				</div>
				<div className="h-[25px]">
					<div className="h-full relative -bottom-[6px]">
						<div className="h-[18.75px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[15.625px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[21.875px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[21.875px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[15.625px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[25px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
						<div className="h-[25px] w-[33.83px] bg-[#E0E0E0] inline-block"></div>
					</div>
				</div>
				<div>
					<div className="relative cursor-pointer">
						<div className=" ml-0.5 translate-x-0 -left-[13.5px] inline-block absolute z-10 cursor-pointer w-5 h-5 -top-[2.5] transition-transform ease-out delay-500">
							<div className="w-[13px] h-[13px] rounded-[50%] border border-[#BABABA] bg-white top-[3.5px] "></div>
						</div>
						<div className="  -tranlate-x-[1.19px] -right-[13.5px] inline-block absolute z-10 cursor-pointer w-5 h-5 -top-[2.5] transition-transform ease-out delay-500">
							<div className="w-[13px] h-[13px] rounded-[50%] border border-[#BABABA] bg-white top-[3.5px]"></div>
						</div>
						<div className="bg-[#C2C2C2] h-0.5 inline-block absolute top-1 w-full"></div>
						<div className="bg-[#2874F0] origin-left top-1 h-[6px] inline-block absolute w-full"></div>
						<div className="flex ">
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
							<div className="w-[33.83px] text-[#C2C2C2]">.</div>
						</div>
						<div className="text-sm text-[#A3A3A3] flex items-center justify-items-stretch mt-2 -ml-1">
							<div className="inline-block flex-grow">
								<select className="font-sans w-full border border-[e0e0e0] rounded-[1px] appearance-none bg-white h-6 text-sm text-[#212121] px-[5px] outline-none">
									<option value="Min" className="px-[7px]">
										Min
									</option>
									<option value="500" className="px-[7px]">
										₹500
									</option>
									<option value="1000" className="px-[7px]">
										₹1000
									</option>
									<option value="1500" className="px-[7px]">
										₹1500
									</option>
									<option value="2000" className="px-[7px]">
										₹2000
									</option>
									<option value="2500" className="px-[7px]">
										₹2500
									</option>
									<option value="3000" className="px-[7px]">
										₹3000
									</option>
								</select>
							</div>
							<div className="inline-block mx-[9px] text-[#878787] flex-1 text-center">
								to
							</div>
							<div className="inline-block  flex-grow">
								<select className="font-sans w-full border border-[e0e0e0] rounded-[1px] appearance-none bg-white h-6 text-sm text-[#212121] px-[5px] outline-none">
									<option value="500" className="px-[7px]">
										₹500
									</option>
									<option value="1000" className="px-[7px]">
										₹1000
									</option>
									<option value="1500" className="px-[7px]">
										₹1500
									</option>
									<option value="2000" className="px-[7px]">
										₹2000
									</option>
									<option value="2500" className="px-[7px]">
										₹2500
									</option>
									<option value="5000" className="px-[7px]">
										₹5000
									</option>
									<option value="5000+" className="px-[7px]">
										₹5000+
									</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ProgressBar;
