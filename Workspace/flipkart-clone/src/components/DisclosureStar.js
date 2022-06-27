import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

function DisclosureChecked() {
	return (
		<div className="w-full px-[5px]">
			<div className="mx-auto w-full max-w-md bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full  rounded-lg bg-white  py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring   focus-visible:ring-opacity-75">
								<div className="flex flex-row whitespace-nowrap gap-[6.2rem]">
									<span
										className="text-[#212121] text-[13px]"
										style={{
											fontFamily: "Roboto,Arial,sans-serif",
											fontWeight: "bold",
										}}
									>
										CUSTUMER RATING
									</span>
									<HiChevronDown
										className={`${
											open ? "rotate-180 transform" : "text-[#878787]"
										} h-5 w-5 text-[#000]`}
									/>
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-[3px] pt-4 pb-2 text-base text-[#000]">
								<div>
									<>
										<ul>
											<div class="form-check flex items-center">
												<input
													class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<li className="py-1 flex flex-row items-center">
													<span>4</span>
													<span>
														<AiFillStar />
													</span>
													<span>& Above</span>
												</li>
											</div>
											<div class="form-check flex items-center">
												<input
													class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<li className="py-1 flex flex-row items-center">
													<span>3</span>
													<span>
														<AiFillStar />
													</span>
													<span>& Above</span>
												</li>
											</div>
											<div class="form-check flex items-center">
												<input
													class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<li className="py-1 flex flex-row items-center">
													<span>2</span>
													<span>
														<AiFillStar />
													</span>
													<span>& Above</span>
												</li>
											</div>
											<div class="form-check flex items-center">
												<input
													class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<li className="py-1 flex flex-row items-center">
													<span>1</span>
													<span>
														<AiFillStar />
													</span>
													<span>& Above</span>
												</li>
											</div>
										</ul>
									</>
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
