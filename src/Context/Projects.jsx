import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../Context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
