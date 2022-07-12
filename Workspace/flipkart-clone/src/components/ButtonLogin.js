import React from "react";

function ButtonLogin() {
	return (
		<div className="flex items-center min-w-[112px] mx-5 max-w-[150px] ">
			<div className="flex items-center cursor-pointer leading-5 text-base">
				<div className="inline-block relative box-border">
					<a
						href="/"
						className="text-[#2874f0] font-medium bg-white rounded-sm h-8 py-[5px] px-10 border border-[#dbdbdb]"
						style={{
							fontFamily: "Roboto,Arial,sans-serif",
							fontWeight: "bold",
						}}
					>
						Login
					</a>
				</div>
			</div>
		</div>
	);
}

export default ButtonLogin;
