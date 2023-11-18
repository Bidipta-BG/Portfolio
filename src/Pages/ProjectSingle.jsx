import React from 'react'
import ProjectGallery from '../Context/ProjectGallery';
import ProjectHeader from '../Context/ProjectHeader';
import ProjectInfo from '../Context/ProjectInfo';
import ProjectRelatedProjects from '../Context/ProjectRelatedProjects';
import { SingleProjectProvider } from '../Context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
  return (
    <div><motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div></div>
  )
}

export default ProjectSingle