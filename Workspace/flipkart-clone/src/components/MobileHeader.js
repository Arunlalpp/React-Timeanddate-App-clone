import React from "react";
import MobileNavlink from "./MobileNavlink";

function MobileHeader() {
	return (
		<div className="lg:hidden block">
			<div className="bg-[#2874f0] ">
				<div className="max-w-[95%] m-auto flex flex-row justify-between py-[14px]">
					<div className="flex flex-row items-center gap-3">
						<div>
							<svg
								width="19"
								height="16"
								viewBox="0 0 19 16"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
									stroke="#fff"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									fill="none"
								></path>
							</svg>
						</div>
						<div className="">
							<img
								className="w-[23px]"
								src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png"
								alt=""
							/>
						</div>
						<div className="text-white mt-[]">
							<span>Home Furnishing</span>
						</div>
					</div>
					<div className="flex flex-row items-center gap-7">
						<div>
							<svg
								fill="#fff"
								height="22"
								viewBox="0 0 24 24"
								width="22"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
							</svg>
						</div>
						<div>
							<svg
								width="16"
								height="16"
								viewBox="0 0 15 15"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="#fff" fill-rule="evenodd">
									<path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804"></path>
									<path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245"></path>
									<path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066"></path>
									<path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503"></path>
									<path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516"></path>
								</g>
							</svg>
						</div>
						<span className="text-white font-light">Login</span>
					</div>
				</div>
			</div>
			<MobileNavlink />
		</div>
	);
}

export default MobileHeader;
