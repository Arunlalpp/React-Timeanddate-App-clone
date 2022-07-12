import React from "react";

function Search() {
	return (
		<div>
			<div className="flex justify-start items-center h-full min-w-[304px] ml-3 mr-auto">
				<form className="inline-block relative shadow-sm shadow-black/25 h-9 lg:w-[304px] xl:w-[534.69px] 2xl:w-[564px]">
					<div className="flex rounded-sm bg-white">
						<div className="relative flex w-full">
							<input
								placeholder="Search for product, brands and more"
								type="text"
								className="px-4  font-light leading-6 rounded-tl-sm rounded-bl-sm outline-none text-[14px] h-9 w-full"
								style={{ fontFamily: "Roboto,Arial,sans-serif" }}
							/>
							<button className="justify-end border border-white h-9 w-11 rounded-sm cursor-pointer pt-1 pr-2 pl-2">
								<svg
									width="20"
									height="20"
									viewBox="0 0 17 18"
									class=""
									xmlns="http://www.w3.org/2000/svg"
								>
									<g fill="#2874F1" fill-rule="evenodd">
										<path
											class="_34RNph"
											d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
										></path>
										<path
											class="_34RNph"
											d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
										></path>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Search;
