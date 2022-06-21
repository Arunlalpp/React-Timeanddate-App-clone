import React from "react";
import { womenCards } from "../Constants";

function CardContainer() {
	return (
		<div>
			<div className="pt-[50px] bg-white">
				<div className="py-[30px] max-w-[1080px] w-[80%] m-auto">
					<div className="text-left mb-7">
						<h1 className="text-[#ff3e1e] text-4xl font-extrabold ">
							Behind the numbers, there are WOMEN and communities whose lives we
							have changed.
						</h1>
					</div>
				</div>
				<div className="py-[30px] max-w-[1080px] w-[80%] m-auto lg:grid lg:grid-cols-2 gap-[3.5rem]">
					{womenCards.map((womenCard) => {
						return (
							<div className="w-full mb-[30px]">
								<div className="mb-[30px]">
									<img src={womenCard.image} alt="s" />
								</div>
								<div>
									<h1 className="text-lg text-[#000000] text-left font-extrabold pb-4">
										{womenCard.title}
									</h1>
									<p className="font-light float-right">{womenCard.content}</p>
									<p className="font-light float-right">
										{womenCard.subTextTop}
									</p>
									<p className="font-light float-right">
										{womenCard.subTextBottom}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CardContainer;
