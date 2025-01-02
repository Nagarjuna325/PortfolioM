// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. 
//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");





// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github } from "../assets";

// // Individual Card Component
// const CustomCard = ({ title, description, image, githubLink, technologies }) => {
//   return (
    
//     <div className="bg-tertiary rounded-2xl p-5 hover:shadow-xl transition-all">
//       {/* Image Container */}
//       <div className="relative w-full h-[230px] mb-5">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover rounded-xl"
//         />
        
//         {/* GitHub Link */}
//         {githubLink && (
//           <div className="absolute top-3 right-3">
//             <a
//               href={githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-black rounded-full p-2 flex items-center justify-center hover:bg-gray-800 transition-colors"
//             >
//               <img src={github} alt="github" className="w-8 h-8" />
//             </a>
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="space-y-4">
//         <h3 className="text-2xl font-bold text-white">{title}</h3>
//         <p className="text-secondary text-base">{description}</p>
        
//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2">
//           {technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-black/30 rounded-full text-sm text-white"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Works = () => {
//   // You can customize your projects here
//   const myProjects = [
//     {
//       title: "Project One",
//       description: "This is a description of project one. You can write whatever you want here.",
//       image: "/path/to/your/image1.jpg", // Add your image path
//       githubLink: "https://github.com/yourusername/project1",
//       technologies: ["React", "Node.js", "MongoDB"]
//     },
//     {
//       title: "Project Two",
//       description: "Description for project two. Make it as long or short as you need.",
//       image: "/path/to/your/image2.jpg", // Add your image path
//       githubLink: "https://github.com/yourusername/project2",
//       technologies: ["Python", "Django", "PostgreSQL"]
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <section className="w-full min-h-screen">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className={styles.sectionSubText}>My work</p>
//         <h2 className={styles.sectionHeadText}>Projects.</h2>
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//       >
//         Following projects showcases my skills and experience through
//         real-world examples of my work.
//       </motion.p>

//       {/* Projects Grid */}
//       <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//         {myProjects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <CustomCard {...project} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Works;



import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import lyft from "../assets/lyft.png";
import Network from "../assets/Network.jpg";
import Machine from "../assets/Machine.webp";
import Chatbot from "../assets/Chatbot.png";


// Individual Card Component
const CustomCard = ({ title, description, image, githubLink, technologies }) => {
  return (
    <div className="bg-tertiary rounded-2xl p-5 hover:shadow-xl transition-all flex flex-col justify-center items-center w-full md:w-4/5 lg:w-5/3">
      {/* Image Container */}
      <div className="relative w-full h-[230px] mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* GitHub Link */}
        {githubLink && (
          <div className="absolute top-3 right-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-full p-2 flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <img src={github} alt="github" className="w-8 h-8" />
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 w-full text-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-secondary text-base">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black/30 rounded-full text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Works Component
const Works = () => {
  const myProjects = [
    {
      title: " LYFT Back-End Engineering Job Simulation",
      description: "Redesigned Lyft Rental backend using UML patterns, scaling for new features, and performed TDD.",
      image: lyft , // Add your image path
      githubLink: "https://github.com/Nagarjuna325",
      technologies: ["Python", "Java", "Spring" , "JavaScript"]
    },
    {
      title: "Detection of Network Intrusion Using Machine Learning",
      description: "Developed a hybrid ML model combining supervised and unsupervised techniques for intrusion detection, achieving 85% accuracy.",
      image: Network, // Add your image path
      githubLink: "https://github.com/Nagarjuna325/CS584-ML-Project-Spring23",
      technologies: ["Python", "NumPy", "SciPy", "Pandas"]
    },
    
    {
      title: " RAG LLM Chat Bot ",
      description: " Developed a Retrieval-Augmented Generation (RAG) LLM agent capable of efficiently retrieving information from provided data documents based on user queries.",
      image: Chatbot, // Add your image path
      githubLink: "https://github.com/Nagarjuna325/RAG-LLM-Chat-Bot",
      technologies: ["Python", "Ollama", "Lanagchain","Groq", "Hugging Face"]
    },
    {
      title: "Machine Learning in Software Project Management ",
      description: " Crafted an ML-Ops pipeline on a GitHub repository to automate updates, track changes, identify issues, and label them.",
      image: Machine, // Add your image path
      githubLink: "https://github.com/Nagarjuna325/Git-hub-Automation-using-ML",
      technologies: ["Python", "JavaScript", "ML-Ops"]
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
      >
        This projects showcase my skills and experience of my work.
      </motion.p>

      {/* Projects Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0.5 gap-y-0.5 justify-center items-center px-0.1">
        {myProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <CustomCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
