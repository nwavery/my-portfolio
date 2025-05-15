import Image from 'next/image'; // Using next/image for optimized images if you have them locally

// Placeholder data - will be replaced with actual project info
const projectsData = [
  {
    title: "Appian Sink Connector",
    description: "A custom Kafka Connect sink connector that consumes messages from Kafka topics and sends them to an Appian instance via Web API to create records.",
    technologies: ["Java", "Kafka", "Maven", "Avro"],
    demoLink: null,
    repoLink: "https://github.com/nwavery/Appian-Sink-Connector/tree/AVRO",
    image: "/KafkaConnect.jpg"
  },
  {
    title: "NWA Campaign",
    description: "Official campaign website for Nathan Avery, candidate for U.S. Representative in Oklahoma's 3rd Congressional District.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Three Fiber", "GSAP"],
    demoLink: "https://averyforok.com/",
    repoLink: "https://github.com/nwavery/NWA-Campaign/tree/main",
    image: "/NWACampaign.png"
  },
  {
    title: "RepGator API Gateway",
    description: "Central API Gateway for the RepGator application ecosystem, built with Spring Cloud Gateway. It handles request routing to microservices via Kafka, JWT authentication, and implements a Kafka request/reply pattern.",
    technologies: ["Java", "Spring Boot", "Spring Cloud Gateway", "Kafka", "JWT", "Redis"],
    demoLink: null,
    repoLink: "https://github.com/nwavery/RepGator-APIGateway",
    image: "/APIGateway.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.title} 
              className="bg-neutral-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-green-400/30"
            >
              {/* Placeholder for image - using a div for now */}
              <div className="w-full h-48 bg-neutral-600 flex items-center justify-center text-gray-400">
                {project.image ? (
                  // If you have actual images in /public, next/image is good.
                  // For external URLs or if you don't want optimization, use <img>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  // <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-lg">Image Placeholder</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-green-400">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-neutral-600 text-xs text-green-300 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex space-x-3 pt-4 border-t border-neutral-600">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-neutral-600 hover:bg-neutral-500 text-gray-200 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 