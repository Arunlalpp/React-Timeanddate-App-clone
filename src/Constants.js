import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

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
				text: "Contact Us",
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

const cardContainers = [
	{
		title: "Tools & Converters",
		contents: [
			{
				text: "Meeting Planner for Singapore",
				link: "",
			},
			{
				text: "Time Zone Converter for Singapore",
				link: "",
			},
			{
				text: "Event Time Announcer for Singapore",
				link: "",
			},
			{
				text: "Time difference between Singapore and other locations",
				link: "",
			},
			{
				text: "Distance calculator to/from Singapore",
				link: "",
			},
			{
				text: "Display a free clock for Singapore on your website or blog",
				link: "",
			},
		],
	},
	{
		title: "Calendar & Holidays",
		contents: [
			{
				more: "Create Singapore calendar",
				link: "",
				icon: (
					<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
				),
			},
		],
	},
	{
		title: "Upcoming Holidays",
		contents: [
			{
				text: "10 Jul - Hari Raya Haji",
				link: "",
			},
			{
				text: "11 Jul - Day off for Hari Raya Haji",
				link: "",
			},
			{
				text: "9 Aug - National Day",
				link: "",
			},
			{
				more: "More Holidays in Singapore",
				link: "",
				icon: (
					<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
				),
			},
		],
	},
	{
		title: "Airports",
		contents: [
			{
				flight: "Singapore Changi Airport,SIN About 17 km ENE of Singapore",
				link: "",
				svg: "https://c.tadst.com/gfx/n/i/wc-clc.png",
			},
			{
				flight:
					" Senai International Airport, JHB (Malaysia)About 44 km NNW of Singapore",
				link: "",
				svg: "https://c.tadst.com/gfx/n/i/wc-clc.png",
			},
			{
				flight: " Seletar Airport, XSP About 15 km N of Singapore",
				link: "",
				svg: "https://c.tadst.com/gfx/n/i/wc-clc.png",
			},
			{
				more: "Other cities near Singapore",
				link: "",
				icon: (
					<MdKeyboardArrowRight className="text-[20px] text-[#556bb5] font-semibold" />
				),
			},
		],
	},
	{
		cardsvgs: [
			{
				svg: "https://c.tadst.com/gfx/n/i/wc-cal.png",
			},
			{
				svg: "https://c.tadst.com/gfx/n/i/wc-clc.png",
			},
			{
				svg: "https://c.tadst.com/gfx/n/i/wc-clc.png",
			},
		],
	},
];
const wethearCards = [
	{
		titel: "https://c.tadst.com/gfx/n/i/wc-snr.png",
		text: "Sunrise",
		time: "06:59",
		direction: "67 East",
		bg: "#efe2b4",
		cardbg: "#fff0bd",
	},
	{
		titel: "https://c.tadst.com/gfx/n/i/wc-snr.png",
		text: "Sunrise",
		time: "19:11",
		direction: "239 Northwest",
		bg: "#efdb9b",
		cardbg: "#fff0bd",
	},
	{
		titel: "https://c.tadst.com/gfx/n/i/wc-dln.png",
		text: "Day length",
		time: "12 hours, 12 minutes",
		bg: "#efc985",
		cardbg: "#ffd589",
	},
	{
		titel:
			"https://www.timeanddate.com/scripts/moon.php?m=1&i=0.924&p=4.024&r=0.736",
		text: "Moon 92.4%",
		time: "Set-09:44",
		direction: "rise-22:21",
		bg: "#d4d3d1",
		cardbg: "#e1e0dd",
	},
	{
		titel: "https://c.tadst.com/gfx/n/tides-icon-high.svg",
		text: "Hight Tide",
		time: "Hight-00:04",
		direction: "Hight-14:19",
		bg: "#7cc4cb",
		cardbg: "#7fcfd7",
	},
	{
		titel: "https://c.tadst.com/gfx/n/tides-icon-low.svg",
		text: "Low tide",
		time: "Low-07:02",
		direction: "Low-19:19",
		bg: "#7cc4cb",
		cardbg: "#7fcfd7",
	},
];

const clockCards = [
	{
		titel: "https://c.tadst.com/gfx/n/i/wc-tmz.png",
		text: "Time Zone",
		time: "SGT (Singapore Time)",
		direction: "UTC/GMT +8 hours",
		bg: "#bfdba8",
		cardbg: "#c9e9b0",
	},
	{
		titel: "https://c.tadst.com/gfx/n/i/wc-nodst.png",
		text: "No DST",
		time: "No Daylight Saving Time in 2022",
		bg: "#a3d180",
		cardbg: "#aadd83",
	},
	{
		titel: "//c.tadst.com/gfx/n/i/wc-dff.png",
		text: "Difference",
		time: "2:30 hours ahead of",
		direction: "Tiruchirappalli",
		bg: "#64b5df",
		cardbg: "#64beed",
	},
];
export {
	navItems,
	items,
	navLinks,
	footerLinks,
	cardContainers,
	wethearCards,
	clockCards,
};
