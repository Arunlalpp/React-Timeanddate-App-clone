import React from "react";
import ClockCard from "./ClockCard";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function WeaherDetailsCard() {
	return (
		<div className="bg-white  pt-[0.5rem] ml-2">
			<div className="m-auto 2xl:max-w-[56.5%]  max-w-[90%]">
				<div className="flex md:flex-row flex-col leading-7">
					<div className="2xl:w-[20vw] md:w-[25vw] w-none">
						<div className="flex flex-row md:gap-[12rem] gap-[11rem] ">
							<div className="">
								<div className="flex flex-col">
									<span className="text-[20px] text-[#454545] font-medium">
										Weather
									</span>
									<span className="text-[30px] text-[#454545]">29 °C</span>
									<span className="whitespace-nowrap text-[14px] text-[#454545]">
										Partly sunny
									</span>
									<span className="text-[#777] text-[14px]">30 / 26 °C</span>
								</div>
							</div>
							<div className="flex flex-row">
								<img
									className="w-[75px] h-[75px] max-w-none"
									src="https://c.tadst.com/gfx/w/svg/wt-6.svg"
									alt=""
								/>
								<div className="text-[#556bb5]">
									<IoMdSettings className="text-[#556bb5]" />
									<span>°C</span>
								</div>
							</div>
						</div>
						<div className="border-t-[1px] border-[#ccc]">
							<div className="flex flex-row justify-between items-center text-[18px] text-[#454545]">
								<span>Sun 19.</span>
								<img
									className="w-[40px] h-[40px]"
									src="https://c.tadst.com/gfx/w/svg/wt-4.svg"
									alt=""
								/>
								<span>31 / 24 °C</span>
							</div>
						</div>
						<div className="border-t-[1px] border-[#ccc]">
							<div className="flex flex-row justify-between items-center text-[18px] text-[#454545]">
								<span>Mon 20.</span>
								<img
									className="w-[40px] h-[40px]"
									src="https://c.tadst.com/gfx/w/svg/wt-21.svg"
									alt=""
								/>
								<span>32 / 25 °C</span>
							</div>
							<span className="text-[10px] text-[#777]">
								Weather by CustomWeather, © 2022
							</span>
						</div>
						<div>
							<span className="flex flex-row items-center text-[#556bb5] hover:underline text-[15px] font-sans">
								More weather details
								<span>
									<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
								</span>
							</span>
						</div>
					</div>
					<ClockCard />
				</div>
			</div>
		</div>
	);
}

export default WeaherDetailsCard;
