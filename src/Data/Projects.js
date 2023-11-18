// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Blog Site',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'Photo Gallery',
		category: 'Web Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Watch Store',
		category: 'UI Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Ecommerce App',
		category: 'Backend Design',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Dashboard',
		category: 'Web Application',
		img: WebImage1,
	},
];
