import React from "react";
import { companyLogos } from "../Constants";

function CompanyLogos() {
	return (
		<div>
			<div className="bg-white  py-[50px]">
				<div className="max-w-[1080px] w-[80%] m-auto">
					<h2 className="text-[35px] text-[#000000] text-center font-extrabold">
						Global Partners
					</h2>
					<div className="lg:grid lg:grid-cols-6 gap-6 md:grid md:grid-cols-3 mt-[3rem]">
						{companyLogos?.map((companyLogo) => {
							return (
								<div>
									<img className="w-[]" src={companyLogo.Logo} alt="i" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompanyLogos;
