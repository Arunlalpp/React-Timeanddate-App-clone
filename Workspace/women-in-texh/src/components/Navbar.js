import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import logoWomenintech from "../images/logoWomenintech.png";
import MobileDroplist from "./MobileDroplist";

function Navbar() {
	const [state, setState] = useState(false);
	const displayBlock = () => {
		setState(true);
	};
	return (
		<div>
			<div className="bg-[#15009b]">
				<div className="max-w-[1080px] w-[78%] m-auto flex flex-row items-center justify-between py-5">
					<div className="max-w-[50%]">
						<img
							className="w-[1.7.36px] h-[43.19px]"
							src={logoWomenintech}
							alt=""
						/>
					</div>
					{state === false ? (
						<GiHamburgerMenu
							className="w-[30px] h-[80px] text-[#00f4cb]"
							onClick={displayBlock}
						/>
					) : (
						<GiHamburgerMenu
							className="w-[30px] h-[80px] text-[#00f4cb]"
							onClick={() => setState(false)}
						/>
					)}
				</div>
				{state === true ? <MobileDroplist /> : null}
			</div>
		</div>
	);
}

export default Navbar;
