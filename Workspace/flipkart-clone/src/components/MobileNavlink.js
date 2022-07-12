import React from "react";

function MobileNavlink() {
	return (
		<div>
			<div className="bg-[#ffffff] ">
				<div className="m-auto flex flex-row justify-between h-[45px] ">
					<div className="flex flex-row items-center justify-center gap-2 border-r-2  w-full">
						<img
							className="h-[24px] w-[24px]"
							src="https://rukminim1.flixcart.com/www/50/50/promos/10/04/2019/d775ea02-5588-4cda-95ad-1ae03bb67e17.png?q=90"
							alt=""
						/>
						<span className="text-[14px]">Sort</span>
					</div>
					<div className="flex flex-row items-center justify-center gap-2 w-full">
						<img
							className="h-[24px] w-[24px]"
							src="https://rukminim1.flixcart.com/www/50/50/promos/10/04/2019/62f36a1e-caf6-4433-a848-2adb7e164a4d.png?q=90"
							alt=""
						/>
						<span className="text-[14px]">Filter</span>
					</div>
				</div>
				<img
					className="w-full h-[4px] mt-[3px]"
					src="https://rukminim1.flixcart.com/www/30/10/promos/01/08/2018/e364d9fe-1225-4814-bfee-2c461bf1c442.png?q=90"
					alt=""
				/>
			</div>
		</div>
	);
}

export default MobileNavlink;
