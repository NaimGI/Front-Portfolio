import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/Dashboard.png"
import project2 from "../assets/pg.jpg"
import project3 from "../assets/C2.PNG";
import project4 from "../assets/c1.PNG";
import project5 from "../assets/Capture.PNG";
import project6 from "../assets/event.jpg";
import project7 from "../assets/project-2.jpeg"
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,projectTitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <p className="mt-7">
          MY Github Repo : <a href="https://github.com/NaimGI?tab=repositories" color="red">Click Here</a>
        </p>
      </div>
      <img src={title} alt="" className="h-[300px] w-[400px]" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         here is My Latest Project If you want to get more detail about it Just Hover at the box And get the  Link of my github project.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title={project6} projectTitle="Event Mangement for Iset"/>
          <Project title={project2}  projectTitle="Psycologie Web Site"/>

          {/* ROW 2 */}
          <Project title={project3} projectTitle="Authentification for Social media app" />
          <Project title={project1} projectTitle="Dashboard To Manage the Event" />
          <Project title={project4} projectTitle="Social media App" />

          {/* ROW 3 */}
          <Project title={project5} projectTitle="MY Last Portfolio" />
          <Project title={project7}  projectTitle="Ecommerce App" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;