import React from "react";
import { homeDatas } from "../Constants";

function HomeTable() {
	return (
		<div className="2xl:w-[15vw]">
			<div className="border-b-[1px] border-[#e0e0e0] pb-3">
				<span className=" ">Home Furnishing Price List</span>
			</div>
			<div className="border-b-[1px] border-[#e0e0e0] py-3 flex flex-row justify-between">
				<span className="text-[12px]">Home Furnishing</span>
				<span className="text-[12px]">Price</span>
			</div>
			{homeDatas?.map((homeData) => {
				return (
					<div className="border-b-[1px] border-[#e0e0e0] py-3 flex flex-row justify-between">
						<span className="text-[12px] text-[#5792f3]">{homeData.text}</span>
						<span className="text-[12px]">{homeData.price}</span>
					</div>
				);
			})}
			<div className="mt-9">
				<span className="text-[14px] text-[#878787] font-italic">
					This data was last updated on 2022/06/24
				</span>
			</div>
		</div>
	);
}

export default HomeTable;
