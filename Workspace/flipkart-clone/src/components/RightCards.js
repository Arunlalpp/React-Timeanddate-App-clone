import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { productDatas } from "../Constants";

function RightCards() {
	return (
		<div className="bg-[#eff1f4]">
			<div className=" pt-2 bg-white">
				<div className="grid grid-cols-4 gap-1 border-b-[1px] border-[#e0e0e0] pb-8">
					{productDatas?.map((productData) => {
						return (
							<div className="bg-white max-w-[410px] group hover:shadow-2xl transition duration-700 ease-in-out">
								<div className="relative">
									<img
										className="w-[400px] h-[400px] p-3"
										src={productData.url}
										alt=""
									/>

									<div className="absolute left-[90%] top-[10%]">
										<AiFillHeart className="text-[#878787]" />
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
								<div className="absolute hidden group-hover:block box-border z-10 shadow-lg bg-white w-[16vw]">
									<span className=" px-3">size:double</span>
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
