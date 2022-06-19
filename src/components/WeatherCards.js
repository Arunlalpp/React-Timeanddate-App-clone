import React from "react";
import { wethearCards } from "../Constants";
import ContainerCard from "./ContainerCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

function WeatherCards() {
	return (
		<div className="w-full bg-white">
			<div className="2xl:max-w-[56.5%]  max-w-[90%] m-auto py-10">
				<div className="grid grid-cols-2 gap-2 md:grid-cols-6">
					{wethearCards?.map((wethearCard) => {
						return (
							<div
								className="w-[100%] hover:shadow-2xl cursor-pointer"
								style={{ backgroundColor: `${wethearCard.cardbg}` }}
							>
								<div className="grid  place-items-center">
									<img className="" src={wethearCard.titel} alt="" />
									<span className="pb-3 text-[#000] font-semibold text-[18px]">
										{wethearCard.text}
									</span>
								</div>
								<div
									className="grid  place-content-center p-4"
									style={{ backgroundColor: `${wethearCard.bg}` }}
								>
									<span className="text-[13px]">
										{wethearCard.time} <h1>{wethearCard.direction}</h1>
									</span>
								</div>
							</div>
						);
					})}
				</div>
				<div>
					<span className="flex flex-row items-center text-[#556bb5] text-[15px] pt-4">
						More Sun & Moon in Singapore
						<span>
							<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
						</span>
					</span>
					<span className="text-[#556bb5] text-[15px] hover:underline cursor-pointer">
						+ Show More Twilight and Moon Phase Information
					</span>
				</div>
				<div className="mt-3">
					<span className="flex flex-row items-center">
						<span>
							<AiFillQuestionCircle className="text-[#b31760] text-[25px]" />
						</span>
						<span className="text-[#b31760] ml-2 font-normal text-[17px]">
							Need some help?
						</span>
					</span>
				</div>
			</div>
			<ContainerCard />
		</div>
	);
}

export default WeatherCards;
