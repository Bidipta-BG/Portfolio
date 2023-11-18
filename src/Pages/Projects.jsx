import React from 'react'
import ProjectsGrid from '../Projects/ProjectsGrid';
import { ProjectsProvider } from '../Context/ProjectsContext';

const Projects = () => {
  return (
    <div><ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider></div>
  )
}

export default Projects