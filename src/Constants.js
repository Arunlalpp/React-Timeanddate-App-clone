import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

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
	{ title: "Weather", icon: <IoIosArrowDown /> },
	{ title: "Time Zone" },
	{ title: "DST Changes" },
	{ title: "Sun & Moon", icon: <IoIosArrowDown /> },
];
const footerLinks = [
	{
		title: "company",
		contents: [
			{
				text: "About US",
				link: "",
			},
			{
				text: "Careers/Jobs",
				link: "",
			},
			{
				text: "10-Contact Us",
				link: "",
			},
			{
				text: "Contact Details",
				link: "",
			},
			{
				text: "Sitemap",
				link: "",
			},
			{
				text: "Newsletter",
				link: "",
			},
		],
	},
	{
		title: "Services",
		contents: [
			{
				text: "World Clock",
				link: "",
			},
			{
				text: "Time Zones",
				link: "",
			},
			{
				text: "Calendar",
				link: "",
			},
			{
				text: "Weather",
				link: "",
			},
			{
				text: "Sun & Moon",
				link: "",
			},
			{
				text: "Timers",
				link: "",
			},
			{
				text: "Calculators",
				link: "",
			},
			{
				text: "API",
				link: "",
			},
		],
	},
	{
		title: "Legal",
		contents: [
			{
				text: "Link policy",
				link: "",
			},
			{
				text: "Advertising",
				link: "",
			},
			{
				text: "Disclaimer",
				link: "",
			},
			{
				text: "Terms & Conditions",
				link: "",
			},
			{
				text: "Privacy Policy",
				link: "",
			},
			{
				text: "My Privacy",
				link: "",
			},
		],
	},
	{
		title: "Sites",
		contents: [
			{
				text: "Aimeanddate.no",
				link: "",
			},
			{
				text: "timeanddate.de",
				link: "",
			},
		],
	},
];
export { navItems, items, navLinks, footerLinks };
