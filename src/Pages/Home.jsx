import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Components/Button'
import AppBanner from '../Components/AppBanner';

import ProjectsGrid from '../Projects/ProjectsGrid';
import { ProjectsProvider } from '../Context/ProjectsContext';
import AboutClientSingle from '../Context/AboutClientSingle';
import { clientsData, clientsHeading  } from '../Data/clientsData';

const Home = () => {
  return (
    <div className="container mx-auto">
			<AppBanner/>

			
		
			<ProjectsProvider>
				<ProjectsGrid/>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>

				<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-6 mt-10 sm:mt-14 gap-2">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
		</div>
  )
}

export default Home