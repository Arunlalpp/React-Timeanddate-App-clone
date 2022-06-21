import React from "react";
import { focuseDatas } from "../Constants";

function FocuseArea() {
	return (
		<div>
			<div className="bg-[#00f4cb] w-full">
				<div className=" max-w-[1080px] w-[80%] m-auto">
					<div className="py-[30px]  2xl:w-[55vw] lg:w-[67vw]">
						<span className="text-[#15009b] text-[34px] font-extrabold">
							More than a network, since 2018 Women in Tech® has directly
							impacted over 200.000 women across the world in 4 focus areas:
						</span>
					</div>
				</div>
				<div className="py-[30px] w-[80%] max-w-[1080px] m-auto md:grid md:grid-cols-2 lg:flex lg:flex-row">
					{focuseDatas?.map((focuseData) => {
						return (
							<>
								<div className="text-center max-w-[600px] m-auto">
									<div className="grid place-content-center py-[30px]">
										<img
											className="w-[150px] h-[150px]"
											src={focuseData.url}
											alt=""
										/>
									</div>
									<div className="  text-[#15009b] text-xl font-bold pb-3">
										<h1>{focuseData.text}</h1>
										<h2 className="w-[42vw] md:w-[7vw] m-auto text-[#15009b] text-base font-bold">
											{focuseData.title}
										</h2>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FocuseArea;
