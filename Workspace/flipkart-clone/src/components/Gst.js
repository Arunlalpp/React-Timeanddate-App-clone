import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

function DisclosureChecked() {
	return (
		<div className="w-full px-[5px]">
			<div className="mx-auto w-full max-w-md bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full  rounded-lg bg-white  py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring   focus-visible:ring-opacity-75">
								<div className="flex flex-row whitespace-nowrap gap-[3.6rem]">
									<span
										className="text-[#212121] text-[13px]"
										style={{
											fontFamily: "Roboto,Arial,sans-serif",
											fontWeight: "bold",
										}}
									>
										GST INVOICE AVAILABLES
									</span>
									<HiChevronDown
										className={`${
											open ? "rotate-180 transform" : "text-[#878787]"
										} h-5 w-5 text-[#000]`}
									/>
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-[3px] pt-4 pb-2 text-base text-[#000]">
								<div className="">
									<>
										<ul>
											<div class="form-check flex items-center">
												<input
													class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<li className="py-1 ">GST Invoice Available</li>
											</div>
										</ul>
									</>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
export default DisclosureChecked;
