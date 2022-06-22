import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderShow() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<div className="w-full overflow-hidden">
			<Slider {...settings}>
				<div>
					<h3>
						<img
							className="w-[100%]"
							src="https://women-in-tech.org/wp-content/uploads/2021/06/computer-lab-SA-6.jpeg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							className="w-[100%]"
							src="https://women-in-tech.org/wp-content/uploads/2021/05/Womenintech-global-24hworldtour-2021.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							className="w-[100%]"
							src="https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-uae.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							className="w-[100%]"
							src="https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-global-movement-un-women.jpg"
							alt=""
						/>
					</h3>
				</div>
			</Slider>
		</div>
	);
}

export default SliderShow;
