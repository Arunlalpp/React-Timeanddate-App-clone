import React from "react";
import ButtonLogin from "./ButtonLogin";
import Search from "./Search";
import Space from "./Space";

function Header() {
	return (
		<div className="hidden lg:block relative pb-14 min-w-[978px]">
			<div className="fixed flex flex-auto will-change-transform w-full h-14 bg-[#2874f0] text-[#f0f0f0] z-30">
				<Space />
				<div className="flex max-w-[1248px] w-full h-full mx-auto my-0 box-border">
					<div className="flex min-w-[137px] justify-end ">
						<div className="flex flex-col justify-center 2xl:ml-[5rem]">
							<img
								className="w-[75px]"
								src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
								alt="Flipkart"
							/>

							<span
								className="flex text-[11px] italic mt-[0.5px] hover:underline leading-4"
								style={{
									fontWeight: "bold",
								}}
							>
								Explore&nbsp;
								<span
									className="text-[#ffe500] font-medium  italic mr-0.5"
									style={{
										fontWeight: "bold",
									}}
								>
									{" "}
									Plus
								</span>
								<img
									src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
									alt="Plus"
									className="w-[10px] h-[10px] mt-[0.5px] mr-[0.5px]"
								/>
							</span>
						</div>
					</div>
					<Search />

					<ButtonLogin />
					<div className="flex items-center justify-end mx-5 max-w-[150px]">
						<a
							href="/"
							className=" flex items-center leading-5  text-white w-auto"
						>
							<span
								className="box-border whitespace-nowrap"
								style={{
									fontFamily: "Roboto,Arial,sans-serif",
									fontWeight: "bold",
								}}
							>
								Become a Seller
							</span>
						</a>
					</div>
					<div className="flex items-center justify-end mr-5 max-w-[150px]">
						<div className="flex items-center cursor-pointer h-full leading-5 font-medium text-white">
							<div
								className="inline-block relative box-border overflow-hidden max-w-[108px] text-ellipsis mx-1"
								style={{
									fontFamily: "Roboto,Arial,sans-serif",
									fontWeight: "bold",
								}}
							>
								More
							</div>
							<svg
								className="rotate-90 ml-[4px]"
								width="4.7"
								height="8"
								viewBox="0 0 16 27"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
									fill="#fff"
									class="_2gTTdy"
								></path>
							</svg>{" "}
						</div>
					</div>
					<div className="flex items-center justify-end ml-5  max-w-[150px]">
						<div className="inline-block relative">
							<a
								href="/"
								className="flex items-center leading-5 text-base font-medium text-white relative"
							>
								<svg
									className="mx-2"
									class="mx-2"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										class="_1bS9ic"
										d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
										fill="#fff"
									></path>
								</svg>
								<span
									className=""
									style={{
										fontFamily: "Roboto,Arial,sans-serif",
										fontWeight: "bold",
									}}
								>
									Cart
								</span>
							</a>
						</div>
					</div>
				</div>
				<Space />
			</div>
		</div>
	);
}

export default Header;
