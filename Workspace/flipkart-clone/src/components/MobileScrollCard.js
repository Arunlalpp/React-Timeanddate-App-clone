import React from "react";
import { mobileCards } from "../Constants";

function MobileScrollCard() {
	return (
		<div className="lg:hidden block">
			<div className="bg-[#ffeed2]">
				<div className="max-w-[100%] m-auto">
					<div className=" flex flex-row items-center gap-7">
						<div className="p-[16px]">
							<span>Explore Best Bargains</span>
							<h3>Great products at pocket-friendly prices </h3>
						</div>
						<div className="p-16px] w-[36px] h-[36px] rounded-full bg-[#ffffff] grid place-content-center shadow-md">
							<div>
								<img
									className="w-[16px] h-[16px]"
									src="https://rukminim1.flixcart.com/www/40/40/promos/16/03/2020/14ee4679-024a-4748-bb04-0d3a378c09b4.png?q=90"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="p-[16px] bg-[#ffeed2] flex flex-row gap-1 overflow-auto overflow-y-hidden  scrollbar-hide scroll-smooth">
						{mobileCards?.map((mobileCard) => {
							return (
								<div className="bg-white max-w-[142px] rounded-md min-w-[40vw]">
									<div className=" p-1">
										<img
											className="w-[162px] h-[132px]"
											src={mobileCard.url}
											alt=""
										/>
									</div>
									<div className="p-1 text-[14px]">
										<span className="text-[16px] text-[#212121]">
											{mobileCard.title}
										</span>
										<h1 className="text-[11px] text-[#212121]">
											{mobileCard.subText}
										</h1>
										<span className="text-[11px] line-through">
											{mobileCard.price}
										</span>
										<span className="ml-1 text-[12px]">{mobileCard.rupee}</span>
										<h1 className="text-[#a7dbaa] text-[11px]">
											{mobileCard.offer}
										</h1>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileScrollCard;
