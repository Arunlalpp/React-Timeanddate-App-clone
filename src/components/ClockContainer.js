import React from "react";
import WeaherDetailsCard from "./WeaherDetailsCard";

function ClockContainer() {
	return (
		<div>
			<div className="bg-white w-full py-6">
				<div className="flex flex-row justify-between 2xl:max-w-[56.5%]  max-w-[90%] m-auto">
					<div className="flex md:flex-row  flex-col w-[100%] gap-5 ">
						<div className="bg-[#f0f7fd] border-l-4 border-[#c3d3e0] grid place-content-center md:w-[14vw]">
							<svg
								className="p-[0.2rem] ml-3"
								xmlns="http://www.w3.org/2000/svg"
								width="125"
								height="125"
								viewBox="0 0 120 120"
								class="analog-clock "
							>
								<g>
									<path
										d="M0 60c0 33.137 26.863 60 60 60s60-26.863 60-60S93.137 0 60 0 0 26.863 0 60z"
										class="analog-clock__face"
										fill="#454545"
									></path>
									<g
										class="analog-clock__marker analog-clock__marker-hour"
										stroke="#333"
									>
										<path d="M60.016 1.016v3"></path>
										<path d="M60.016 116.016v3"></path>
										<path d="M89.516 8.92l-1.5 2.598"></path>
										<path d="M32.016 108.513l-1.5 2.598"></path>
										<path d="M111.111 30.516l-2.598 1.5"></path>
										<path d="M11.518 88.016l-2.598 1.5"></path>
										<path d="M119.016 60.016h-3"></path>
										<path d="M4.016 60.016h-3"></path>
										<path d="M111.111 89.516l-2.598-1.5"></path>
										<path d="M11.518 32.016l-2.598-1.5"></path>
										<path d="M89.516 111.111l-1.5-2.598"></path>
										<path d="M32.016 11.518l-1.5-2.598"></path>
									</g>
									<g
										class="analog-clock__marker analog-clock__marker-second"
										stroke="#aaa"
									>
										<path d="M66.183 1.339l-.21 1.989"></path>
										<path d="M54.057 116.703l-.209 1.989"></path>
										<path d="M72.282 2.305l-.415 1.956"></path>
										<path d="M48.165 115.77l-.416 1.956"></path>
										<path d="M78.248 3.903l-.618 1.902"></path>
										<path d="M42.402 114.226l-.618 1.902"></path>
										<path d="M84.013 6.117L83.2 7.944"></path>
										<path d="M36.832 112.088l-.814 1.827"></path>
										<path d="M84.013 113.915l-.813-1.827"></path>
										<path d="M36.832 7.944l-.814-1.827"></path>
										<path d="M78.248 116.128l-.618-1.902"></path>
										<path d="M42.402 5.805l-.618-1.902"></path>
										<path d="M72.282 117.726l-.415-1.956"></path>
										<path d="M48.165 4.261l-.416-1.956"></path>
										<path d="M66.183 118.692l-.21-1.989"></path>
										<path d="M54.057 3.328l-.209-1.99"></path>
										<path d="M107.748 94.695l-1.618-1.176"></path>
										<path d="M13.902 26.512l-1.618-1.176"></path>
										<path d="M103.861 99.494l-1.486-1.338"></path>
										<path d="M17.656 21.875l-1.486-1.338"></path>
										<path d="M99.494 103.861l-1.338-1.486"></path>
										<path d="M21.875 17.656l-1.338-1.486"></path>
										<path d="M94.695 107.748l-1.176-1.618"></path>
										<path d="M26.512 13.902l-1.176-1.618"></path>
										<path d="M118.692 66.183l-1.989-.21"></path>
										<path d="M3.328 54.057l-1.99-.209"></path>
										<path d="M117.726 72.282l-1.956-.415"></path>
										<path d="M4.261 48.165l-1.956-.416"></path>
										<path d="M116.128 78.248l-1.902-.618"></path>
										<path d="M5.805 42.402l-1.902-.618"></path>
										<path d="M113.915 84.013l-1.827-.813"></path>
										<path d="M7.943 36.832l-1.827-.814"></path>
										<path d="M113.915 36.018l-1.827.814"></path>
										<path d="M7.944 83.2l-1.828.813"></path>
										<path d="M116.128 41.784l-1.902.618"></path>
										<path d="M5.805 77.63l-1.902.618"></path>
										<path d="M117.726 47.749l-1.956.416"></path>
										<path d="M4.261 71.867l-1.956.415"></path>
										<path d="M118.692 53.849l-1.989.209"></path>
										<path d="M3.328 65.974l-1.99.209"></path>
										<path d="M94.695 12.284l-1.176 1.618"></path>
										<path d="M26.512 106.13l-1.176 1.618"></path>
										<path d="M99.494 16.17l-1.338 1.486"></path>
										<path d="M21.875 102.375l-1.338 1.486"></path>
										<path d="M103.861 20.537l-1.486 1.338"></path>
										<path d="M17.656 98.156l-1.486 1.338"></path>
										<path d="M107.748 25.336l-1.618 1.176"></path>
										<path d="M13.902 93.52l-1.618 1.175"></path>
									</g>
									<g class="analog-clock__numbers analog-clock__numbers--major">
										<text
											x="60"
											y="15"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											12
										</text>
										<text
											x="105"
											y="60"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											3
										</text>
										<text
											x="60"
											y="105"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											6
										</text>
										<text
											x="15"
											y="60"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											9
										</text>
									</g>
									<g class="analog-clock__numbers analog-clock__numbers--minor">
										<text
											x="82"
											y="21"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											1
										</text>
										<text
											x="99"
											y="37"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											2
										</text>
										<text
											x="99"
											y="82"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											4
										</text>
										<text
											x="82"
											y="99"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											5
										</text>
										<text
											x="38"
											y="99"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											7
										</text>
										<text
											x="21"
											y="82"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											8
										</text>
										<text
											x="21"
											y="38"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											10
										</text>
										<text
											x="37"
											y="21"
											dominant-baseline="middle"
											text-anchor="middle"
											font-size="12"
										>
											11
										</text>
									</g>
									<g class="analog-clock__hands">
										<path
											d="M60 60V4"
											class="analog-clock__hand analog-clock__hand--minute"
											data-analogclock-type="minute"
										></path>
										<path
											d="M60 60V21"
											class="analog-clock__hand analog-clock__hand--hour"
											data-analogclock-type="hour"
										></path>
										<path
											d="M63 60a3 3 0 11-6 0 3 3 0 016 0z"
											class="analog-clock__pin"
										></path>
										<path
											d="M60 60V4"
											class="analog-clock__hand analog-clock__hand--seconds"
											data-analogclock-type="seconds"
										></path>
										<path
											d="M61 60a1 1 0 10-2 0 1 1 0 002 0z"
											class="analog-clock__pin-inner"
										></path>
									</g>
								</g>
							</svg>
							<div className="grid place-content-center">
								<span className="text-[30px] font-medium text-[#454545] font-sans">
									14:54:56{" "}
									<a
										className="text-[#556bb5] text-[14px] hover:underline"
										href="/"
									>
										SGT
									</a>
								</span>
								<span className="text-[14px] text-[#454545] font-sans text-center">
									Friday, 17 June 2022
								</span>
								<span className="text-[#556bb5] text-[14px] hover:underline text-center">
									FullScreen
								</span>
							</div>
						</div>
						<div className="md:w-[15vw] w-[full] leading-4">
							<div className=" flex flex-row gap-[3rem] items-center border-b-[1px] border-[#ccc] p-1">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Country:
								</span>
								<span>
									<a
										className="text-[#556bb5] text-[14px] hover:underline"
										href="/"
									>
										Singapore
									</a>
								</span>
							</div>
							<div className=" flex flex-row items-center gap-[2.6rem] border-b-[1px] border-[#ccc] p-1">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Lat/Long:
								</span>
								<span>
									<a className="text-[14px] text-[#454545]" href="/">
										1°17'N / 103°51'E
									</a>
								</span>
							</div>
							<div className=" flex flex-row items-center gap-[2.6rem] border-b-[1px] border-[#ccc] p-1">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Elevation:
								</span>
								<span>
									<a className="text-[14px] text-[#454545]" href="/">
										93 m
									</a>
								</span>
							</div>
							<div className=" flex flex-row items-center gap-[2.7rem] border-b-[1px] border-[#ccc] p-1">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Currency:
								</span>
								<span>
									<a className="text-[14px] text-[#454545]" href="/">
										Singapore Dollar (SGD)
									</a>
								</span>
							</div>
							<div className=" flex flex-row items-center gap-8 border-b-[1px] border-[#ccc] p-1">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Languages:
								</span>
								<span>
									<a className="text-[14px] text-[#454545]" href="/">
										English, Malay, Tamil, …
									</a>
								</span>
							</div>
							<div className=" flex flex-row items-center p-1 gap-3">
								<span className="py-1 text-[14px] text-[#454545] font-sans font-medium">
									Country Code:
								</span>
								<span>
									<a className="text-[14px] text-[#454545]" href="/">
										+65
									</a>
								</span>
							</div>
						</div>
					</div>
					<div className="bg-white md:block hidden">
						<div className="relative">
							<img
								className="w-[450px] bg-cover hover:shadow-2xl cursor-pointer"
								src="https://c.tadst.com/gfx/citymap/sg-10.png?10"
								alt=""
							/>
							<div className=" absolute top-[45%] left-[35%]">
								<img
									src="https://c.tadst.com/gfx/n/icon/icon-map-pin.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<WeaherDetailsCard />
		</div>
	);
}

export default ClockContainer;
