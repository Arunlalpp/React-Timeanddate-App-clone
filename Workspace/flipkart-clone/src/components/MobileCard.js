import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { productDatas } from "../Constants";

function MobileCard() {
	return (
		<div className="lg:hidden block">
			<div className="grid grid-cols-2 gap-1 border-b-[1px] border-[#e0e0e0] pb-8">
				{productDatas?.map((productData) => {
					return (
						<div className="bg-white max-w-[212.5px]">
							<div className="relative">
								<img
									className="w-[212.5px] h-[212.5px] p-1"
									src={productData.url}
									alt=""
								/>

								<div className="absolute left-[80%] top-[5%] bg-[#ffffff] rounded-full w-[36px] h-[36px] grid place-content-center">
									<AiFillHeart className="text-[#878787] w-[22px] h-[22px]" />
								</div>
							</div>
							<div className="p-3">
								<p className="w-[40vw] text-[12px]">
									KIDZEE 200 TC Cotton Queen Printed Bedsheet
								</p>
								<div className="text-[12px]">
									<span>
										699 259 <span className="text-[#4bb550]">62% off</span>
									</span>
								</div>
								<span className="text-[12px]">Free Delivery</span>
								<div className="flex flex-row gap-2">
									<span
										className="bg-[#008c00] text-[10px] rounded-sm text-white flex flex-row items-center gap-[1px] font-semibold"
										style={{ padding: "2px 4px 2px 6px" }}
									>
										4
										<span>
											<AiFillStar className="text-white" />
										</span>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MobileCard;
