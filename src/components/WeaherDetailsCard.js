import React from "react";
import ClockCard from "./ClockCard";
import { IoMdSettings } from "react-icons/io";

function WeaherDetailsCard() {
	return (
		<div className="bg-white w-full pt-[2rem]">
			<div className="m-auto 2xl:max-w-[58%]  max-w-[80%]">
				<div className="flex md:flex-row flex-col ">
					<div className="md:w-[19vw] w-none">
						<div className="flex flex-row md:gap-[12rem] gap-[16rem] ">
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
									className="w-[80px] h-[80px] max-w-none"
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
							<div className="flex flex-row justify-between items-center">
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
							<div className="flex flex-row justify-between items-center">
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
					</div>
					<ClockCard />
				</div>
			</div>
		</div>
	);
}

export default WeaherDetailsCard;
