import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const navItems = [
	{ name: "Home" },
	{ name: "World Clock" },
	{ name: "Time Zones" },
	{ name: "Calendar" },
	{ name: "Weather" },
	{ name: "Sun & Moon" },
	{ name: "Timers" },
	{ name: "Calculators" },
	{ name: "Apps & API" },
	{ name: "Free Fun" },
];

const items = [
	{
		image: <HiUserCircle />,
		icon: <IoMdShare className="text-[24px]" />,
		search: <BiSearch className="text-[24px]" />,
	},
];
const navLinks = [
	{ title: "Time/General" },
	{ title: "Weather" },
	{ title: "Time Zone" },
	{ title: "DST Changes" },
	{ title: "Sun & Moon" },
];
export { navItems, items, navLinks };
