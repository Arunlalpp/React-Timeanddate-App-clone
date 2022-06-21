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
		cssEase: "linear",
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
				<div>
					<h3>
						<img
							src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
							alt=""
						/>
					</h3>
				</div>
			</Slider>
		</div>
	);
}

export default SliderShow;
