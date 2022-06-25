import React from "react";
import TopPicksCard from "./TopPicksCard";

function MobileNavlink() {
	return (
		<div>
			<div className="bg-[#ffffff] shadow-md">
				<div className="max-w-[62%] m-auto flex flex-row justify-between h-[48px]">
					<div className="flex flex-row items-center gap-2">
						<img
							className="h-[24px] w-[24px]"
							src="https://rukminim1.flixcart.com/www/50/50/promos/10/04/2019/d775ea02-5588-4cda-95ad-1ae03bb67e17.png?q=90"
							alt=""
						/>
						<span className="text-[12px]">Sort</span>
					</div>
					<div className="flex flex-row items-center gap-2">
						<img
							className="h-[24px] w-[24px]"
							src="https://rukminim1.flixcart.com/www/50/50/promos/10/04/2019/62f36a1e-caf6-4433-a848-2adb7e164a4d.png?q=90"
							alt=""
						/>
						<span className="text-[12px]">Filter</span>
					</div>
				</div>
			</div>
			<TopPicksCard />
		</div>
	);
}

export default MobileNavlink;
