import React from "react";
import { AiFillStar } from "react-icons/ai";
import { cardContainers } from "../Constants";

function CardContainer() {
	return (
		<div className="lg:block hidden">
			<div className="bg-[#eff1f4] py-3">
				<div className="max-w-[98%] 2xl:w-[80%] m-auto bg-white">
					<h2
						className="text-[20px] px-[15px] py-[20px] text-[#000] font-[5600] border-b-[1px] border-[#f0f0f0]"
						style={{
							fontFamily: "Roboto,Arial,sans-serif",
						}}
					>
						Reviews for Popular Home Furnishing
					</h2>
				</div>
				<div className="max-w-[98%] 2xl:w-[80%] m-auto bg-white">
					{cardContainers?.map((CardContainer) => {
						return (
							<div className=" py-[20px] flex flex-row justify-between  border-b-[1px] border-[#f0f0f0]">
								<div className="flex flex-row gap-1">
									<div className="px-7">
										<img
											className="w-[150px] h-[150px]"
											src={CardContainer.url}
											alt=""
										/>
									</div>
									<div className="w-[13vw] lg:w-[20vw]">
										<span
											className="text-[#000] text-[18px] font-[550] hover:text-[#2874f0] cursor-pointer"
											style={{
												fontFamily: "Roboto,Arial,sans-serif",
											}}
										>
											{CardContainer.title}
										</span>
										<div className="flex flex-row gap-2">
											<span
												className="bg-[#388e3c] text-[12px] rounded-sm text-white flex flex-row items-center gap-1 font-semibold"
												style={{
													padding: "2px 4px 2px 6px",
													fontFamily: "Roboto,Arial,sans-serif",
												}}
											>
												{CardContainer.rating}{" "}
												<span>
													<AiFillStar className="text-white" />
												</span>
											</span>

											<span
												className="text-[#878787]"
												style={{ fontFamily: "Roboto,Arial,sans-serif" }}
											>
												{CardContainer.ratingText}
											</span>
										</div>
										<h3>
											<span
												className="text-[14px] text-[#000]"
												style={{ fontFamily: "Roboto,Arial,sans-serif" }}
											>
												{CardContainer.price}
											</span>{" "}
											<span className="text-[#878787]">78% off</span>
										</h3>
										<h3
											className="pb-[8px]"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											{CardContainer.size}
										</h3>
										<h3 className="pb-[8px]">Material: Cotton</h3>
										<h3 className="pb-[8px]">
											Includes: Number of Bedsheets: 1
										</h3>
									</div>
								</div>
								<div className="flex flex-row ">
									<div className="w-[23vw]">
										<span
											className="text-[#878787] text-[16px]"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											Most Helpful Review
										</span>
										<div className="flex flex-row gap-2">
											<span
												className="bg-[#388e3c] text-[12px] rounded-sm text-white flex flex-row items-center gap-1 font-semiboldgap-1"
												style={{
													padding: "2px 4px 2px 6px",
													fontFamily: "Roboto,Arial,sans-serif",
												}}
											>
												5{" "}
												<span>
													<AiFillStar className="text-white" />
												</span>
											</span>

											<span style={{ fontFamily: "Roboto,Arial,sans-serif" }}>
												Excellent
											</span>
										</div>
										<h3
											className="text-[#212121] text-[18px] my-[12px]"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											{CardContainer.review}
										</h3>
										<span
											className="text-[#878787] text-[14px] pr-2"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											sujeet kumar sinha
										</span>
										<span className="text-red-400">
											<path
												stroke="#FFF"
												stroke-width="1.5"
												d="M3 6l2 2 4-4"
												fill="#878787"
											></path>
										</span>
										<span
											className="text-[#878787] text-[14px] pr-2"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											Certified Buyer
										</span>
										<span
											className="text-[#878787] text-[14px] pr-2"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											3months ago
										</span>
									</div>
								</div>
								<div className="flex flex-row">
									<div className="w-[23vw]">
										<span
											className="text-[#878787]"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											Recent Review
										</span>
										<div className="flex flex-row gap-2">
											<span className="bg-[#ff6161] text-[12px] rounded-sm text-white flex flex-row items-center gap-1 font-semiboldgap-1">
												1{" "}
												<span>
													<AiFillStar className="text-white" />
												</span>
											</span>

											<span>Useless product</span>
										</div>
										<h3
											className="my-[12px]"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											{CardContainer.recentReview}
										</h3>
										<span className="text-[#878787] text-[14px] pr-2">
											Puja Kumari
										</span>
										<span className="text-[#878787] text-[14px] pr-2">
											Certified Buyer
										</span>
										<span
											className="text-[#878787] text-[14px] pr-2"
											style={{ fontFamily: "Roboto,Arial,sans-serif" }}
										>
											{CardContainer.days}
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CardContainer;
