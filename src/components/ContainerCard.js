import React from "react";
import { cardContainers } from "../Constants";

function ContainerCard() {
	return (
		<div className="bg-white w-full md:py-[6rem]">
			<div className="m-auto 2xl:max-w-[58%]  max-w-[80%] md:flex flex-row">
				{cardContainers?.map((cardContainer) => {
					return (
						<div className="flex flex-row">
							<div className=" pt-1">
								<span className="font-semibold text-[18px] text-[#454545] font-sans">
									{cardContainer.title}
								</span>
								{cardContainer?.contents?.map((content) => {
									return (
										<div>
											<li className="text-[14px] ml-2 font-sans  text-[#556bb5] cursor-pointer  py-[6px] whitespace-nowrap flex flex-row list-disc">
												{content.text}
												<span className="whitespace-nowrap cursor-pointer">
													{content.more}
												</span>
												<span className="text-black px-1">{content.icon}</span>
												<span className="text-black">{content.flight}</span>
											</li>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ContainerCard;
