import AboutMeBio from '../Context/AboutMeBio';
import AboutCounter from '../Context/AboutCounter';
import AboutClients from '../Context/AboutClients';
import { AboutMeProvider } from '../Context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>	<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider></div>
  )
}

export default About