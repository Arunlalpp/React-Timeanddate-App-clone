import React from "react";
import DisclosureCard from "./DisclosureCard";
import DisclosureChecked from "./DisclosureChecked";
import RightContainer from "./RightContainer";

function LeftContainer() {
	return (
		<div>
			<div className="bg-[#eff1f4] pt-2 ">
				<div className=" m-auto flex flex-row max-w-[78%] gap-3">
					<div className="">
						<div className="w-[270px] m-auto bg-white">
							<div className=" border-b-[1px] border-[#f0f0f0] pb-[12px]">
								<h1 className="p-[16px]">Filters</h1>
							</div>
							<div className="border-b-[1px] border-[#f0f0f0]">
								<span className="uppercase p-[16px]">Categories</span>
								<div className="">
									<DisclosureCard />
								</div>
							</div>
							<div className="border-b-[1px] border-[#f0f0f0] pb-[12px]">
								<span className="uppercase p-[16px]">Price</span>
								<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
									<div class="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
								</div>
							</div>
							<div className="border-b-[1px] border-[#f0f0f0] pb-[12px] flex flex-row justify-between ">
								<div class="form-check flex flex-row items-center p-[16px]">
									<input
										class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										type="checkbox"
										value=""
										id="flexCheckDefault"
									/>
									<label
										class="form-check-label inline-block text-gray-800"
										for="flexCheckDefault"
									></label>
									<div>
										<img
											className="h-[21px] w-[77px]"
											src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
											alt=""
										/>
									</div>
								</div>
								<div className="m-[16px]">
									<span className="rounded-2xl bg-white text-[#878787] w-[16px] h-[16px] text-[11px] text-center border-[1px] border[#e0e0e0] ">
										?
									</span>
								</div>
							</div>
							<div className="">
								<DisclosureChecked />
							</div>
						</div>
					</div>
					<RightContainer />
				</div>
			</div>
		</div>
	);
}

export default LeftContainer;
