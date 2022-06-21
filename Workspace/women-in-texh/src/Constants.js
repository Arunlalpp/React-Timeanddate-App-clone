import React from "react";
import { HiChevronDown } from "react-icons/hi";
const dropdownContents = [
	{
		title: "About us",
		contents: [
			{
				text: "Why we exist",
				link: "",
			},
			{
				text: "Who are we?",
				link: "",
			},
			{
				text: "Our Team",
				link: "",
			},
			{
				text: "Milestones",
				link: "",
			},
		],
	},
	{
		title: "What we do",
		contents: [
			{
				text: "Mentoring program",
				link: "",
			},
			{
				text: "Advocacy & Support",
				link: "",
			},
			{
				text: "Talent Hub",
				link: "",
			},
		],
	},
	{
		title: "Where we are",
		contents: [
			{
				text: "Our Chapters",
				link: "",
			},
			{
				text: "Open a Chapter",
				link: "",
			},
		],
	},
	{
		title: "Events",
	},
	{
		title: "Donate",
	},
	{
		title: "JOB BOARD",
	},
	{
		title: "News",
	},
	{
		title: "Contact",
	},
];
const navLinks = [
	{
		text: "About us",
		icon: <HiChevronDown />,
	},
	{
		text: "What we do",
		icon: <HiChevronDown />,
	},
	{
		text: "Where we are",
		icon: <HiChevronDown />,
	},
	{
		text: "Events",
	},
	{
		text: "Donate",
	},
];
export { dropdownContents, navLinks };
