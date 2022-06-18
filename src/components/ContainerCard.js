import React from "react";
import { cardContainers } from "../Constants";

function ContainerCard() {
	return (
		<div className="bg-white w-full md:py-[6rem]">
			<div className="m-auto 2xl:max-w-[58%]  max-w-[90%] md:flex flex-row  8xl:flex-wrap">
				{cardContainers?.map((cardContainer) => {
					return (
						<div className="flex flex-row justify-between">
							<div className=" pt-1">
								<span className="font-semibold text-[18px] text-[#454545] font-sans">
									{cardContainer.title}
								</span>
								<ul className="list-disc ml-3">
									{cardContainer?.contents?.map((content) => {
										return (
											<li className="text-[14px] ml-2 font-sans md:whitespace-nowrap whitespace-pre-line cursor-pointer hover:underline py-[6px]">
												<span className="text-[#556bb5]">{content.text}</span>
												<div className="flex flex-row">
													<span className="md:whitespace-nowrap md:list-none whitespace-pre-line cursor-pointer text-[#556bb5]">
														{content.more}
													</span>
													<span className="text-black px-1">
														{content.icon}
													</span>
													<span className="text-black md:whitespace-normal whitespace-pre-wrap">
														{content.flight}
													</span>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
							<img
								className="w-[50px] h-[50px]"
								src={cardContainer.url}
								alt=""
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ContainerCard;
