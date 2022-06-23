import React from "react";
import ButtonLogin from "./ButtonLogin";
import { HiChevronDown } from "react-icons/hi";
import Space from "./Space";

function Header() {
	return (
		<div>
			<div className="bg-[#2874f0] w-full p-3">
				<Space />
				<div className="max-w-[1248px] m-auto  flex flex-row items-center">
					<div className="">
						<img
							className="w-[80px]"
							src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
							alt=""
						/>
						<div className="flex flex-row items-center whitespace-nowrap">
							<span className="text-[11px] text-white">
								Explore <span className="text-[#ffe500]">Pluse</span>
							</span>
							<img
								className="w-[10px] ml-[2px] mb-[2px]"
								src=" https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
								alt=""
							/>
						</div>
					</div>
					<div class=" w-95 md:w-[39.8rem]">
						<div class="input-group relative  w-full flex flex-row">
							<input
								type="search"
								class="form-control relative  min-w-0 block w-full ml-3 px-4 py-2 text-base font-normal text-black bg-white bg-clip-padding   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Search for products, brands and more"
								aria-label="Search"
								aria-describedby="button-addon2"
							/>
							<button
								class="btn px-3  bg-[#ffffff] text-[#2874f0]  font-medium text-xs leading-tight   focus:outline-none focus:ring-0 flex items-center rounded-r-sm"
								type="button"
								id="button-addon2"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="search"
									class="w-5 font-light"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
									></path>
								</svg>
							</button>
						</div>
					</div>
					<ButtonLogin />
					<div className="text-[17px] text-[#fff] font-medium flex flex-row gap-8 whitespace-nowrap">
						<span>Become a Seller</span>
						<span className="flex flex-row items-center gap-1">
							More
							<span>
								<HiChevronDown />
							</span>
						</span>
						<span className="flex flex-row items-center gap-1">
							<span>
								<svg
									class="V3C5bO"
									width="14"
									height="14"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										class="_1bS9ic"
										d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
										fill="#fff"
									></path>
								</svg>
							</span>
							Cart
						</span>
					</div>
				</div>
				<Space />
			</div>
		</div>
	);
}

export default Header;
