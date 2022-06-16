import React from "react";
import { wethearCards } from "../Constants";
import ContainerCard from "./ContainerCard";

function WeatherCards() {
	return (
		<div className="w-full bg-white">
			<div className="2xl:max-w-[58%]  max-w-[90%] m-auto py-4">
				<div className="grid grid-cols-2 gap-3 md:grid-cols-6">
					{wethearCards?.map((wethearCard) => {
						return (
							<div
								className="w-[100%] hover:shadow-2xl cursor-pointer"
								style={{ backgroundColor: `${wethearCard.cardbg}` }}
							>
								<div className="grid  place-items-center h-[12vh]">
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
			</div>
			<ContainerCard />
		</div>
	);
}

export default WeatherCards;
