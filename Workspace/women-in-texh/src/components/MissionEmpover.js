import React from "react";

function MissionEmpover() {
	return (
		<div className="bg-white pt-[3rem] lg:pt-0 2xl:py-[54px]">
			<div className="max-w-[1080px] w-[80%] m-auto">
				<div className="text-left">
					<h1 className="text-[#ff2f0e] text-[34px] 2xl:text-4xl font-extrabold leading-[1.4em]">
						On a mission to Empower 5 million Women and Girls by 2030
					</h1>
					<div className="leading-7 2xl:pt-[2rem]">
						<p>
							<strong>
								Women in Tech® is an international non-profit organization on a
								mission to close the gender gap and to help women embrace
								technology.
							</strong>
							<span className="font-light">
								We promote girls’ and women’s empowerment around the world, with
								a focus on Sustainable Development Goal 5b: harnessing
								technologies.
							</span>
						</p>
					</div>
				</div>
				<div className="py-[5rem]  max-w-[1080px] leading-3">
					<div className="w-full lg:flex lg:flex-row lg:gap-[3.5rem]">
						<iframe
							title="video"
							className="w-[80vw]  h-[30vh] md:h-[45vw] md:w-[75vw] lg:h-[22vw] lg:w-[76vw] 2xl:h-[30vh]"
							src="https://player.vimeo.com/video/531777520?h=8d296c743f&dnt=1&app_id=122963"
							height="450"
						></iframe>
						<iframe
							title="video"
							className="w-[80vw] h-[30vh] md:h-[45vw] md:w-[75vw] lg:h-[22vw] lg:w-[76vw]   2xl:h-[30vh]"
							src="https://player.vimeo.com/video/531777520?h=8d296c743f&dnt=1&app_id=122963"
							width="540"
							height="450"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MissionEmpover;
