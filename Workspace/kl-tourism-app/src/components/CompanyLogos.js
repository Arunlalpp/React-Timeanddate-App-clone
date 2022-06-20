import React from "react";
import { companyLogos } from "../Constants";

function CompanyLogos() {
	return (
		<div>
			<div className="md:block hidden">
				<div className="flex flex-row justify-center items-baseline mt-[30px] mb-[40px]">
					{companyLogos?.map((companyLogo) => {
						return (
							<div className="px-2">
								<a className="" href="/">
									<img className="w-[69px]" src={companyLogo.url} alt="" />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CompanyLogos;
