import React from "react";
import FlagLogo from "../images/sg.png";

function searchBar() {
	return (
		<div className="bg-[#176db3] w-full py-3  md:h-[82px]">
			<div className="m-auto 2xl:max-w-[57%]  max-w-[80%] mt-2 md:flex flex-row justify-between md:mt-3">
				<div className="flex flex-row">
					<div className="">
						<img
							className="h-[25px] w-[48px] md:h-[26px] md:w-[40px]"
							src={FlagLogo}
							alt=""
						/>
					</div>
					<div className="text-[24px] font-semibold text-white leading-1 mb-[4px]">
						<p className="leading-[1] ml-2 md:ml-3 font-sans">
							Current Local Time in Singapore, Singapore
						</p>
					</div>
				</div>
				<div class="mb-3 w-95 md:w-[19rem]">
					<div class="input-group relative  w-full mb-4 flex flex-row">
						<input
							type="search"
							class="form-control relative  min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded rounded-r-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							placeholder="Search for city or place..."
							aria-label="Search"
							aria-describedby="button-addon2"
						/>
						<button
							class="btn px-3 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center rounded-r-sm"
							type="button"
							id="button-addon2"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="search"
								class="w-4"
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
			</div>
		</div>
	);
}

export default searchBar;
