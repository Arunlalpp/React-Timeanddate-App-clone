import React from "react";

function WomenTechGrowing() {
	return (
		<div>
			<div className="bg-[#15009b] py-[50px] ">
				<div className=" md:p-[25px] max-w-[1080px] w-[80%] m-auto ">
					<h2 className="text-4xl text-[#00f4cb] lg:text-[29px] md:w-[78vw] w-[80vw] text-center font-extrabold tracking-[0.8px] md:tracking-normal md:text-[30px]">
						A Growing community of <br /> 180.000 members in 6 continents
					</h2>
				</div>
				<div className="border-b-1 border-white ">
					<img
						src="https://women-in-tech.org/wp-content/uploads/2021/08/WIT-HOME-2021-carte.png"
						alt=""
					/>
				</div>
				<div className="bg-[#15009b] py-[20px] md:pb-[50px] md:pt-0 md:text-center ">
					<div className="text-center">
						<a
							className="p-[12px] border-2 border-white text-white bg-[#15009b] text-lg text-center uppercase"
							href="/"
						>
							discover our chapters
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WomenTechGrowing;
