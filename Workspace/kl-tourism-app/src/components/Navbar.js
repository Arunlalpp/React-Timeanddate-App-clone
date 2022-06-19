import React from "react";

function Navbar() {
	return (
		<div>
			<div className=" md:flex flex-row  items-center 2xl:w-[70%] m-auto">
				<div className="w-[100%] text-center">
					<img
						className="w-[186px] h-[135px]"
						src="http://www.keralatourism.gov.in/new-style/images/kerala-logo.jpg"
						alt=""
					/>
				</div>
				<div className="">
					<img
						src="http://www.keralatourism.gov.in/new-style/images/title-banner.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
