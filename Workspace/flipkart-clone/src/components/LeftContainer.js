import React from "react";
import DisclosureCard from "./DisclosureCard";
import DisclosureChecked from "./DisclosureChecked";
import DisclosureStar from "./DisclosureStar";
import Colors from "./Colors";
import Offers from "./Offers";
import Availability from "./Availability";
import Discount from "./Discount";
import Gst from "./Gst";
import ProgressBar from "./ProgressBar";
import RightContainer from "./RightContainer";

function LeftContainer() {
	return (
		<div className="lg:block hidden">
			<div className="bg-[#eff1f4] pt-[2.5rem] ">
				<div className=" min-w-[978px] 2xl:max-w-[80%] mx-auto p-2 flex font-roboto">
					<div className="mr-[10px] max-w-[270px] box-border ">
						<div className=" flex-[0 0 280px] flex flex-col shadow-sm  relative bg-white divide-y divide-[#f0f0f0]">
							<div className=" border-b-[1px] border-[#f0f0f0] pb-[16px]">
								<h1 className=" text-[#000] text-[18px] font-medium p-[12px]">
									Filters
								</h1>
							</div>
							<div className="border-b-[1px] border-[#f0f0f0] ">
								<span
									className="uppercase  text-[12px] p-[12px] tracking-tighter"
									style={{
										fontFamily: "Roboto,Arial,sans-serif",
										fontWeight: "bold",
									}}
								>
									Categories
								</span>
								<div className="">
									<DisclosureCard />
								</div>
							</div>
							<ProgressBar />
							<div className="border-b-[1px] border-[#f0f0f0] pb-[12px] flex flex-row justify-between ">
								<div class="flex flex-row gap-4 p-[16px]">
									<input type="checkbox" />
									<div>
										<img
											className="h-[21px] w-[77px]"
											src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
											alt=""
										/>
									</div>
								</div>
								<div className="m-[16px]">
									<span className="rounded-2xl bg-white text-[#878787] w-[20px] h-[20px] text-[11px] text-center border-[1px] border-[#e0e0e0] ">
										?
									</span>
								</div>
							</div>
							<div className="">
								<DisclosureChecked />
							</div>
							<div className="">
								<DisclosureStar />
							</div>
							<div>
								<Colors />
							</div>
							<div>
								<Offers />
							</div>
							<div>
								<Availability />
							</div>
							<div>
								<Discount />
							</div>
							<div>
								<Gst />
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
