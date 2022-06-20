import React from "react";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";

export default function CardContainer() {
	return (
		<div className="2xl:w-[69%] m-auto  w-[92%] pr-[20px] pl-[20px]">
			<div className="md:flex flex-row mt-[30px] pt-[4%] gap-[1rem]">
				<div className="mb-[30px]">
					<img
						className="w-[100%]  md:w-[40vw] min-w-[15vw]"
						src="http://www.keralatourism.gov.in/new-style/images/sub-banner.jpg"
						alt=""
					/>
				</div>
				<div className="text-[14px] text-[#333] leading-[1.42857143] font-light pl-[rem]">
					<p>
						Kerala, located on the south-western tip of India, enjoys unique
						geographical features that have made it one of the most sought-after
						tourist destinations in Asia. Fondly referred to as ‘God’s Own
						Country’, Kerala was selected by the National Geographic Traveller
						as one of the 50 destinations of a lifetime and one of the thirteen
						paradises in the world.
					</p>
					<br></br>
					<p>
						An equable climate, serene beaches, tranquil stretches of
						backwaters, lush hill stations and exotic wildlife are the major
						attractions of this land. A unique advantage of Kerala is that most
						of the destinations here are only a two - four hour drive from the
						other.
					</p>
					<br></br>
					<p>
						Classical art forms, colourful festivals, exotic cuisine are some of
						the cultural marvels that await travellers. Ayurveda, the ancient
						Indian system of medicine and Panchakarma, the rejuvenation therapy
						in Ayurveda have also helped Kerala to gain a pan-global reputation
						as a worth-visit destination.
					</p>
					<br></br>
					<p>
						Season never ends in Kerala, thanks to the year-long moderate
						climate and numerous festivals and events.
					</p>
				</div>
				<div className="my-[30px] md:hidden block">
					<img
						src="http://www.keralatourism.gov.in/new-style/images/bottom-banner.jpg"
						alt=""
					/>
				</div>
				<NewsLetter />
			</div>

			<div className="md:block hidden pb-[8%]">
				<img
					className="w-[70%]"
					src="http://www.keralatourism.gov.in/new-style/images/bottom-banner.jpg"
					alt=""
				/>
			</div>
			<Footer />
		</div>
	);
}
