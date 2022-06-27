import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "./Pagination";
import RightCards from "./RightCards";

function RightContainer() {
	return (
		<div>
			<div className="bg-[#eff1f4]">
				<div className=" m-auto  bg-white py-[16px] px-[12px]">
					<div className="">
						<span className="flex flex-row items-center text-[12px] text-[#878787] pb-1 ">
							Home
							<span className="mx-1">
								<MdKeyboardArrowRight />
							</span>
							<span className="text-[12px] text-[#878787]">Home Furnis..</span>
						</span>
						<div className="py-1">
							<p className="text-[12px] text-[#878787]">
								If you have decided to buy home furnishing online, you’ve landed
								on the right page. From bed linen, curtains,
								<span className="text-[#72a4f5]">carpets</span> and floor
								covering, cushions to kitchen and{" "}
								<span className="text-[#72a4f5]">bathroom linen,</span> find it
								all under a single roof and at prices that are too hard to
								resist! Filter within colour, pattern, bank offers and discounts
								for quick customised results.
							</p>
						</div>
						<div className="flex flex-row items-center gap-2 my-2">
							<span
								className="text-[16px] text-[#212121]"
								style={{
									fontFamily: "Roboto,Arial,sans-serif",
									fontWeight: "bold",
								}}
							>
								Home Furnishing
							</span>
							<span className="text-[14px] text-[#878787] mt-1">
								(Showing 1 – 40 products of 96,358 products)
							</span>
						</div>
					</div>
					<div className="flex flex-row items-center gap-4 text-[14px] text-[#212121] border-b-[1px] border-[#f0f0f0] pb-2">
						<span className="font-medium">Sort By</span>
						<span
							className="text-[#2874f0] border-b-2 border-[#2874f0] "
							style={{
								fontFamily: "Roboto,Arial,sans-serif",
								fontWeight: "bold",
							}}
						>
							Popularity
						</span>
						<span>Price-Low to High</span>
						<span>Price-High to Low</span>
						<span>Newest First</span>
					</div>
					<RightCards />
				</div>
				<Pagination />
			</div>
		</div>
	);
}

export default RightContainer;
