import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Portfolio',
		url: 'google-health-platform',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Portfolio',
			publishDate: 'May 9 , 2025',
			tags: 'Next.js and Tailwind CSS',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Google Health Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To create a responsive personal website that showcases my skills, projects, and achievements while demonstrating front-end development expertise using HTML, CSS, JavaScript, and Bootstrap.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Node.js',
						'TailwindCSS',
						'VS Code',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Technologies Used: HTML, CSS, JavaScript, Bootstrap, Node.js',
				},
				{
					id: uuidv4(),
					details:
						'Developed a comprehensive and responsive portfolio website to present personal background, technical skills, and major projects.',
				},
				{
					id: uuidv4(),
					details:
						'1. Implemented a multi-section layout including About, Skills, Projects, and Contact pages',
				},
				{
					id: uuidv4(),
					details:
						'2. Designed using modern UI components and Bootstrap’s grid system for a clean and adaptive layout across all devices',
				},
				{
					id: uuidv4(),
					details:
						'3. Integrated smooth navigation and animations for an engaging user experience',
				},
				{
					id: uuidv4(),
					details:
						'4. Deployed using Node.js for dynamic content handling and future scalability',
				},
			],
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Podcast Page',
		url: 'phoenix-digital-agency',
		category: 'Mobile Application',
		img: '/images/mobile-project-2.jpg',
		ProjectHeader: {
			title: 'Podcast Page',
			publishDate: 'Nov 26, 2024',
			tags: 'Bootstrap / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To build a clean, mobile-friendly webpage layout for podcast content, focusing on responsive design and modern layout techniques using Bootstrap and CSS.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'Bootstrap',
						'VS Code',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Technologies Used: HTML, CSS, Bootstrap',
				},
				{
					id: uuidv4(),
					details:
						'Created a fully responsive and visually appealing webpage for showcasing podcast content.',
				},
				{
					id: uuidv4(),
					details:
						'1. Structured the layout to highlight key podcast features such as host details, episodes, and subscription options',
				},
				{
					id: uuidv4(),
					details:
						'2. Emphasized mobile responsiveness using Bootstrap’s flex and grid utilities',
				},
				{
					id: uuidv4(),
					details:
						'3. Enhanced visual appeal with appropriate typography, color themes, and imagery',
				},
				{
					id: uuidv4(),
					details:
						'4. Ensured accessibility by following web standards and semantic HTML',
				},
			]
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'Redesigning Duolingo app using UI',
		url: 'project-management-ui',
		category: 'UI/UX Design',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'Redesigning Duolingo app using UI',
			publishDate: 'Dec 26, 2024',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Kabul Project Management UI',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			CompanyInfo: [
				
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To redesign the Duolingo app interface in Figma using key UI/UX principles to improve user experience, visual clarity, and overall usability.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'UI Designing',
						'Figma',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Tools Used: Figma, UI/UX Design Principles',
				},
				{
					id: uuidv4(),
					details:
						'Redesigned the user interface of the Duolingo app to enhance usability and visual consistency.',
				},
				{
					id: uuidv4(),
					details:
						'1. Conducted UI/UX research and identified friction points in the current user flow',
				},
				{
					id: uuidv4(),
					details:
						'2. Applied key design principles:',
				},
				{
					id: uuidv4(),
					details:
						'a. Hick’s Law to simplify choices and reduce cognitive load',
				},
				{
					id: uuidv4(),
					details:
						'b. Jakob’s Law to maintain consistency with common user expectations',
				},
				{
					id: uuidv4(),
					details:
						'c. Miller’s Law to organize information into digestible chunks',
				},
				{
					id: uuidv4(),
					details:
						'3. Created high-fidelity mockups using Figma, focusing on typography, spacing, iconography, and intuitive layouts',
				},
				{
					id: uuidv4(),
					details:
						'4. Proposed improvements in the navigation structure, content hierarchy, and engagement flow for better retention',
				},
				
			],
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
];
