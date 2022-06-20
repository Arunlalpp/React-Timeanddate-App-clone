import React from "react";

function ContactDetails() {
	return (
		<div>
			<div className="py-4">
				<span className="text-center">
					<h3 className="text-[16px] text-[#777] font-light">
						Toll free No:{" "}
						<span className="text-[18px] text-[#28497c] font-light">
							1-800-425-4747
						</span>
						(within India only)
					</h3>
				</span>
				<article className="text-center mt-2">
					<p className="text-[14px] text-[#777] font-light">
						Department of Tourism, Government of Kerala, Park
						<br className="md:hidden block"></br>
						View, Thiruvananthapuram, Kerala, India - 695 033
					</p>
					<h3 className="text-[14px] text-[#777] font-light">
						Phone: +91 471 2321132, Fax: +91 471 2322279, E-mail:
					</h3>
					<a className="text-[15px] text-[#5d95c6]" href="/">
						info@keralatourism.org
					</a>
				</article>
				<div className="text-center leading-5">
					<span className="text-[14px] text-[#777] font-light">
						All rights reserved © Kerala Tourism 2022.
					</span>
					<a className="text-[14px] text-[#5d95c6] p-1" href="/">
						Copyright |
					</a>
					<a className="text-[14px] text-[#5d95c6] p-1" href="/">
						Terms of Use |
					</a>
					<a className="text-[14px] text-[#5d95c6] p-1" href="/">
						Cookie Policy |
					</a>
					<a className="text-[14px] text-[#5d95c6] p-1" href="/">
						Contact Us
					</a>
					<br></br>
					<span className="text-[14px] text-[#777] text-center font-light">
						Developed & Maintained by Invis Multimedia.
					</span>
				</div>
			</div>
		</div>
	);
}

export default ContactDetails;
