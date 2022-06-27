import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

function DisclosureCard() {
	return (
		<div className="w-full px-[5px]">
			<div className="mx-auto w-full max-w-md bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full  rounded-lg bg-white  py-2 text-left text-sm font-medium text-purple-900  focus:outline-none focus-visible:ring   focus-visible:ring-opacity-75">
								<HiChevronDown
									className={`${
										open ? "rotate-270 transform" : "rotate-90"
									} h-5 w-5 text-[#000]`}
								/>
								<span className="text-[#000] text-[14px]">Home Furnishing</span>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pb-2 ml-6 text-[14px] text-[#212121]">
								<ul>
									<li className="py-1 ">Bed Linen & Blankets</li>
									<li className="py-1 ">Curtain & Accessories</li>
									<li className="py-1 ">Bath Linen</li>
									<li className="py-1 ">Floor Coverings</li>
									<li className="py-1 ">Cushions & Pillows</li>
								</ul>
								<span className="text-[#2874f0]">Show 3 more</span>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
export default DisclosureCard;
