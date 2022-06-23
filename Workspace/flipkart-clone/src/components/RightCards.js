import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { productDatas } from "../Constants";

function RightCards() {
	return (
		<div className="bg-[#eff1f4]">
			<div className="max-w-[70%] m-auto pt-2 bg-white">
				<div className="grid grid-cols-4 gap-2">
					{productDatas?.map((productData) => {
						return (
							<div className="bg-white max-w-[410px] hover:shadow-lg">
								<div className="relative">
									<img
										className="w-[400px] h-[400px] p-3"
										src={productData.url}
										alt=""
									/>

									<div className="absolute left-[90%] top-[10%]">
										<BsHeart />
									</div>
								</div>
								<div className="p-3">
									<p className="w-[15vw] text-[16px]">{productData.title}</p>
									<span>{productData.text}</span>
									<div className="flex flex-row gap-2">
										<span
											className="bg-[#388e3c] text-[12px] rounded-sm text-white flex flex-row items-center gap-1 font-semibold"
											style={{ padding: "2px 4px 2px 6px" }}
										>
											4.1
											<span>
												<AiFillStar className="text-white" />
											</span>
										</span>
										<span className="text-[#878787]">(349)</span>
										<span>
											<img
												className="h-[21px] w-[77px]"
												src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
												alt=""
											/>
										</span>
									</div>
									<div className="">
										<span>{productData.price}</span>
										<span>₹215</span>
										<span>{productData.offer}</span>
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

export default RightCards;
