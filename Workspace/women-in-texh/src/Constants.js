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

const focuseDatas = [
	{
		url: "https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-advocacy.png",
		text: "Advocacy",
		title: "Summits & Events Policy change Strategic Partnerships",
	},
	{
		url: "https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-education.png",
		text: "Education",
		title: "Skilling programs Training Outreach sessions",
	},
	{
		url: "https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-enterprise.png",
		text: "Business",
		title: "Entrepreneurship Workforce development Talent Hub",
	},
	{
		url: "https://women-in-tech.org/wp-content/uploads/2021/08/womenintech-social-inclusion.png",
		text: "Social Inclusion",
		title: "Fundraising Equipping rural areas Scholarships",
	},
];
const womenCards = [
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2019/10/womenintech-north-macedonia-dina.jpg",
		title: "Skilling with Education",
		content:
			"“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
		subTextTop: "Dina Damjanovikj",
		subTextBottom: "North Macedonia",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/04/Zambia-chapter-drone-and-water.jpg",
		title: "Skilling with Education",
		content:
			"“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/08/moojan-womenintech.jpg",
		title: "Skilling with Education",
		content:
			"“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
		subTextTop: "Moojan Asghari, Cofounder Women in AI",
		subTextBottom: "France",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/08/kolinda-womenintech-story.jpg",
		title: "Skilling with Education",
		content:
			"“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
		subTextTop: "Kolinda Grabar-Kitarovic",
		subTextBottom: "Former President of Croatia",
	},
];
const newsItems = [
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2022/06/1654873011399.jpeg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Jun 10, 2022 | Global Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia Jun 10, 2022 | Global Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2022/01/womenintech-ecole-ponts-paristech-alliance-980x551.jpg",
		title:
			"Women In Tech – Global Movement Partners with École des Ponts Business School",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"We are so excited to share with you that, Women In Tech - Global Movement has partnered with École des Ponts Business School and the Circular Economy Alliance to join forces and co-create solutions and projects to support the digital transformation of public and...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2022/01/Project-Philippi-Village-scaled.jpg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/11/Fireside-Chat-ch-980x551.jpeg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/11/ReturnersWork-980x551.jpg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/11/her-hack-980x551.jpeg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/08/wit-home7-980x551.png",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2022/06/1654873011399.jpeg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
	{
		image:
			"https://women-in-tech.org/wp-content/uploads/2021/11/5-stem-niches-980x551.jpg",
		title: "A Success to the Women in Tech Global Movement Round Table!",
		subText: "Jun 10, 2022  | Global ",
		paragraph:
			"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia...",
	},
];

export { dropdownContents, navLinks, focuseDatas, womenCards, newsItems };
