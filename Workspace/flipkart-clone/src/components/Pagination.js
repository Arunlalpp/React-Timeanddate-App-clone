import React from "react";

function Pagination() {
	return (
		<div>
			<div className="bg-[#eff1f4] py-3">
				<div className="max-w-[70%] m-auto bg-white p-[16px]">
					<div className="flex flex-row items-center gap-5">
						<span className="text-[#000] text-[16px] font-medium">
							Did you find what you were looking for?
						</span>
						<button class="bg-[#ffffff] text-[#212121] font-medium py-[6px] px-[28px]  text-[18px] border-[1px] border-[#d7d7d7] ">
							Yes
						</button>
						<button class="bg-[#ffffff] text-[#212121] font-medium py-[6px] px-[28px]  text-[18px] border-[1px] border-[#d7d7d7] ">
							No
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pagination;
