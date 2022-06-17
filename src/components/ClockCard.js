import React from "react";
import { clockCards } from "../Constants";
import { MdKeyboardArrowRight } from "react-icons/md";

function ClockCard() {
	return (
		<div className="w-full bg-white md:pl-[3rem]">
			<div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:w-[30vw] w-none">
				{clockCards?.map((clockCard) => {
					return (
						<div
							className="w-[100%] hover:shadow-2xl cursor-pointer"
							style={{ backgroundColor: `${clockCard.cardbg}` }}
						>
							<div className="grid  place-items-center ">
								<img className="" src={clockCard.titel} alt="" />
								<span className="pb-3 text-[#000] font-semibold text-[18px]">
									{clockCard.text}
								</span>
							</div>
							<div
								className="grid  place-content-center p-4"
								style={{ backgroundColor: `${clockCard.bg}` }}
							>
								<span className="text-[13px]">
									{clockCard.time} <h1>{clockCard.direction}</h1>
								</span>
							</div>
						</div>
					);
				})}
			</div>
			<div className="">
				<div className="text-[15px] text-[#556bb5] font-sans pt-2 md:flex-row flex flex-col">
					<span className="flex flex-row items-center w-[60%]">
						About SGT — Singapore Time
						<span>
							<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
						</span>
					</span>

					<div>
						<span className="flex flex-row items-center">
							Set your location{" "}
							<span>
								<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClockCard;
