import React from "react";

function WomenTechGlobal() {
	return (
		<div>
			<div className="pt-[50px] bg-[#ff3e1e]">
				<div className="max-w-[1080px] w-[80%] m-auto">
					<div className="lg:flex flex-row gap-[4rem]">
						<div className="lg:py-[30px]">
							<h2 className=" lg:text-4xl text-[30px] lg:leading-none leading-9 font-extrabold text-white mb-[3rem]">
								Women in Tech Global Summit,<br></br>Paris 30 & 31st May, 2022
							</h2>
							<div className="pt-[8px]">
								<div className="w-full lg:flex lg:flex-row">
									<iframe
										title="video"
										className="w-[80vw] h-[26vh] lg:w-[40vw] lg:h-[30vw] 2xl:w-[25vw] 2xl:h-[15vw] md:w-[81vw] md:h-[46vw]"
										src="https://player.vimeo.com/video/531777520?h=8d296c743f&dnt=1&app_id=122963"
										height="450"
									></iframe>
								</div>
							</div>
						</div>
						<div className="text-white pt-5 text-[17px] text-justify leading-8 md:leading-6">
							<p>
								<strong>
									Women in Tech® Global Summit: HERoes Shaping Tomorrow
								</strong>
								<br></br>
								<span>
									The Women in Tech Global Summit is a 2-day event happening on
									the 30th & 31st May 2022 under the High Patronage of Ms.
									Elisabeth Moreno, French Minister for Gender Equality,
									Diversity and Equal Opportunities
								</span>
								<span>
									. The theme ‘HERoes Shaping tomorrow’, celebrates women across
									the world who are the Shakers, Makers and Innovators of our
									new society and economy. The Summit will kick off in Paris on
									Monday 30th May for 2 days of content. Its aim is to inform,
									inspire and catalyze collective efforts to reduce the gender
									and digital gap in STEAM by 2030.
								</span>
							</p>

							<div className="pt-[2rem] pb-[5rem]">
								<button class="bg-[#15009b] hover:bg-red-600 text-white font-bold py-2.5 px-7  uppercase text-[15px] transition duration-150 ease-in-out">
									take part in teh summit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WomenTechGlobal;
