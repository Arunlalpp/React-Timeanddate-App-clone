import React from "react";

function PastEvents() {
	return (
		<div>
			<div className="bg-white  py-[50px] ">
				<div className="max-w-[1080px] w-[80%] m-auto">
					<h2 className="text-[35px] text-[#15009b] text-center font-extrabold">
						Discover our past events
					</h2>
					<div className=" md:grid grid-cols-2 md:gap-[rem] md:mt-[4rem]">
						<div className="">
							<iframe
								title="video"
								className="w-[80vw] h-[33vh] md:w-[22vw] md:h-[13vw]"
								src="https://player.vimeo.com/video/580209521?h=c1f2760aad"
								height="450"
							></iframe>
							<div className=" md:w-none text-[#000000] font-light leading-7">
								<h2>Women in Tech South East Europe Summit</h2>
								<h1>Dubrovnik, 1st July 2021</h1>
							</div>
						</div>
						<div className="">
							<iframe
								title="video"
								className="w-[80vw] md:w-none h-[33vh]  md:w-[22vw] md:h-[13vw]"
								src="https://player.vimeo.com/video/580209521?h=c1f2760aad"
								height="450"
							></iframe>
							<div className=" text-[#000000] font-light leading-7">
								<h2>Women in Tech South East Europe Summit</h2>
								<h1>Dubrovnik, 1st July 2021</h1>
							</div>
						</div>
						<div className="">
							<iframe
								title="video"
								className="w-[80vw] h-[33vh]  md:w-[22vw] md:h-[13vw]"
								src="https://player.vimeo.com/video/580209521?h=c1f2760aad"
								height="450"
							></iframe>
							<div className=" md:w-none text-[#000000] font-light leading-7">
								<h2>Women in Tech South East Europe Summit</h2>
								<h1>Dubrovnik, 1st July 2021</h1>
							</div>
						</div>
						<div className="">
							<iframe
								title="video"
								className="w-[80vw] h-[33vh]  md:w-[22vw] md:h-[13vw] "
								src="https://player.vimeo.com/video/580209521?h=c1f2760aad"
								height="450"
							></iframe>
							<div className=" md:w-none text-[#000000] font-light leading-7">
								<h2>Women in Tech South East Europe Summit</h2>
								<h1>Dubrovnik, 1st July 2021</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PastEvents;
