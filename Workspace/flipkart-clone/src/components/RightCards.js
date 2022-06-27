import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { productDatas } from "../Constants";

function RightCards() {
	return (
		<div className="bg-[#eff1f4]">
			<div className=" pt-2 bg-white">
				<div className="grid grid-cols-4  border-b-[1px] border-[#e0e0e0] pb-8 ">
					{productDatas?.map((productData) => {
						return (
							<div className="bg-white group hover:shadow-2xl transition duration-700 ease-in-out relative">
								<div className="relative block">
									<div className="w-[230px] h-[260px]   2xl:w-[280px] 2xl:h-[300px] mx-auto">
										<img
											className="opacity-100 absolute inset-0 m-auto max-w-full max-h-full px-2"
											src={productData.url}
											alt=""
										/>
									</div>
									<div className="absolute left-[85%] top-[10%] z-0">
										<AiFillHeart className="text-[#878787]" />
									</div>
								</div>
								<div className="cursor-pointer px-4">
									<p className=" text-[14px] hover:text-[#2874f0] overflow-hidden text-[#212121] pb-[5px] leading-5">
										{productData.title}
									</p>
									<span className="text-[#878787] text-[14px] pb-[8px]">
										{productData.text}
									</span>
									<div className="flex flex-row gap-2 pt-[5px]">
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
										<span className="text-[16px] pr-1">
											{productData.price}
										</span>
										<span className="text-[#878787] line-through text-[14px] pr-1">
											₹215
										</span>
										<span className="text-[#388e3c]">{productData.offer}</span>
									</div>
								</div>
								<div className="hidden group-hover:block  z-20 absolute left-0 w-full bg-white py-[10px] px-4 shadow-lg">
									<p className="ml-0.5">Size: King</p>
								</div>
							</div>
						);
					})}
				</div>
				<span>Page 1 of 2,409</span>
				<ul className="flex flex-row gap-3 justify-center">
					<li className="bg-[#2874f0] rounded-full w-[40px] h-[40px] grid place-content-center">
						1
					</li>
					<li className="mt-2">2</li>
					<li className="mt-2">3</li>
					<li className="mt-2">4</li>
					<li className="mt-2">5</li>
					<li className="mt-2">6</li>
					<li className="mt-2">7</li>
					<li className="mt-2">8</li>
					<li className="mt-2">9</li>
					<li className="mt-2">10</li>
					<span className="text-[#2874f0] ml-5 font-medium mt-2">NEXT</span>
				</ul>
			</div>
		</div>
	);
}

export default RightCards;
