import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { leftDatas } from "../Constants";

function DisclosureChecked() {
	return (
		<div className="w-full px-[5px]">
			<div className="mx-auto w-full max-w-md bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full  rounded-lg bg-white  py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring   focus-visible:ring-opacity-75">
								<div className="flex flex-row justify-between">
									<span className="text-[#000] text-[16px]">BRAND</span>
									<HiChevronDown
										className={`${
											open ? "rotate-180 transform" : ""
										} h-5 w-5 text-[#000]`}
									/>
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-[3px] pt-4 pb-2 text-base text-[#000]">
								<div className="">
									<div class=" border-b-[1px] border-[#f0f0f0]">
										<input
											class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
											type="text"
											placeholder="Search Brand"
											aria-label="Full name"
										></input>
									</div>
									{leftDatas?.map((leftData) => {
										return (
											<>
												<ul>
													<div class="form-check flex items-center">
														<input
															class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
															type="checkbox"
															value=""
															id="flexCheckDefault"
														/>
														<li className="py-1 ">{leftData.text}</li>
													</div>
												</ul>
											</>
										);
									})}
								</div>
								<span className="text-[#2874f0]">4350 MORE</span>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
export default DisclosureChecked;
