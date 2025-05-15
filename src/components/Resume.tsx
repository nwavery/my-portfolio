import { FaDownload, FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa'; // Icons

// Placeholder data for skills - REPLACED WITH PARSED DATA
const skillsData = {
  "Core Java": ["OOP", "Collections", "Multithreading", "Exception Handling", "Streams API", "Functional Interfaces"],
  "Web Development": ["Spring", "Spring Boot", "Spring MVC", "Spring JDBC", "Spring Cloud", "RESTful APIs", "SOAP (Apache CXF)", "Micronaut", "Spring Data JPA", "Spring Batch"],
  "Security": ["Spring Security", "JWT", "OAuth2", "Basic Authentication"],
  "Databases & ORMs": ["MySQL", "SQL Server", "MongoDB", "DynamoDB", "AWS S3", "SQL Optimization", "Stored Procedures", "Hibernate", "Oracle DB", "PL/SQL"],
  "Microservices & Architecture": ["Microservices Architecture", "Eureka", "Apache Kafka", "RabbitMQ", "Avro", "ksqlDB"],
  "Frontend": ["Angular (Interpolation, Binding, Directives, Lifecycle Hooks, Dependency Injection)", "React", "HTML", "CSS", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "React Three Fiber", "GSAP"],
  "Testing & Tools": ["JUnit", "Mockito", "Postman", "Jenkins", "Docker", "Git", "Jira", "Maven"],
  "Cloud & Deployment": ["AWS (Lambda, SES, SNS, RDS, EC2, IAM)", "GCP", "Confluent Cloud"],
  "Methodologies": ["Agile (Scrum)", "TDD", "CI/CD"]
  // Note: J2EE is mentioned in skills chart, could be added to Web Development or a legacy section.
};

// Placeholder data for experience - REPLACED WITH PARSED DATA
const experienceData = [
  {
    role: "Microservice Team Lead",
    company: "Avenu at MainStreet Bank, Fairfax, VA",
    period: "August 2022 – November 2024", // Note: resume.txt says 2024, which is in the future.
    description: "Led a backend Java development team at Avenu (BAAS branch of MainStreet Bank) to create a streamlined system for fintechs to manage deposits and payments. Responsibilities included leading daily Scrums, full SDLC involvement, optimizing transaction processing with Apache Kafka (sub-3-second debit card swipe handling), production deployment, and stakeholder collaboration. Environment: Java 17, Micronaut, Microservices, Apache Kafka, ksqlDB, Maven, GCP."
  },
  {
    role: "Full Stack Java Developer",
    company: "DXC ASA as Gainwell Technologies, El Paso, TX",
    period: "September 2021 – August 2022",
    description: "Worked on the Medicaid Health Care Development Team for Ohio's medicaid web system. Developed the user open enrollment feature using microservices and Agile methodologies. Responsibilities included full SDLC participation, creating a notification module, allowing user objects to subscribe to microservices, interfacing with claims and payment modules, front-end development with Angular 2+ (HTTPClient, Observables), handling JWT tokens with OAuth2 for Spring Cloud services, and CI/CD with Docker and Jenkins. Environment: Java 8, SpringBoot, Microservices, J2EE, Spring data JPA, Angular 2+, Maven, Jenkins, AWS."
  },
  {
    role: "Full Stack Java Developer",
    company: "H-E-B, San Antonio, TX",
    period: "August 2020 - September 2021",
    description: "Worked on a drug prescription ordering application for H-E-B. Responsibilities included drug search functionality using RESTful web services, online prescription refill forms, and pharmacy locator. Developed using Java REST services and Angular 2+. Involved in all SDLC phases, used Spring MVC, Spring Boot for microservices, Spring Security, Spring DAO with Hibernate. Developed SPA with Angular 2+, HTML5, CSS3. Created AWS Lambda functions for notifications (SES/SNS) and worked with Oracle DB. Environment: Java, J2EE, Spring, Spring Security, MySQL Server, Angular 2+, AWS."
  },
  {
    role: "Java/Angular Developer",
    company: "GAINSCO Auto Insurance, Dallas, TX",
    period: "March 2019 - August 2020",
    description: "Upgraded an Auto Insurance Management System. Worked on customer modules for quotes, package viewing, coverage changes, and agent finding using Java REST services and Angular. Responsibilities included using Spring MVC, Spring Batch, Spring Security, developing RESTful APIs, front-end with Angular & Angular Material, JSON parsing, backend PL/SQL development, and real-time notifications with AWS RDS/Lambda. Deployed on AWS EC2. Environment: Java, J2EE, Spring, MySQL Server, Angular 7, AWS."
  },
  {
    role: "Full Stack Java Developer",
    company: "LA Fitness, Houston, TX",
    period: "November 2017 - March 2019",
    description: "Contributed to a Fitness Center Management System for member records, class booking, sales processing, and communication. Developed and deployed RESTful web services and MVC applications using Spring Boot. Involved in UI development (HTML, CSS, Angular2), creating reusable Angular components, consuming SOAP/RESTful web services, SQL script writing, and using Spring DAO with Hibernate. Environment: Java, Spring Boot, Hibernate, Angular2, Microservices, MySQL."
  }
];

// Placeholder data for education - REPLACED WITH PARSED DATA
const educationData = [
  {
    degree: "Bachelor of Science: Computer Science, Mathematics, and Physics",
    institution: "Oklahoma State University, Stillwater, OK",
    period: "", // Dates not specified in resume.txt for education
    description: ""
  }
];

const Resume = () => {
  return (
    <section id="resume" className="w-full py-16 md:py-24 bg-neutral-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">
          Resume & Experience
        </h2>

        {/* Download Button */}
        <div className="text-center mb-16">
          <a 
            href="/Java.NathanAvery.4.13.2025.docx"
            download="Java.NathanAvery.4.13.2025.docx"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload className="mr-3" /> Download Full Resume (DOCX)
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="flex items-center text-2xl font-semibold mb-8 text-green-300">
            <FaBriefcase className="mr-3" /> Professional Experience
          </h3>
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="bg-neutral-700 p-6 rounded-lg shadow-xl">
                <h4 className="text-xl font-semibold text-green-400">{exp.role}</h4>
                <p className="text-md text-gray-400 mb-1">{exp.company} | {exp.period}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="flex items-center text-2xl font-semibold mb-8 text-green-300">
            <FaGraduationCap className="mr-3" /> Education
          </h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-neutral-700 p-6 rounded-lg shadow-xl">
                <h4 className="text-xl font-semibold text-green-400">{edu.degree}</h4>
                <p className="text-md text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Skills Section */}
        <div>
          <h3 className="flex items-center text-2xl font-semibold mb-8 text-green-300">
            <FaTools className="mr-3" /> Key Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skillList]) => (
              <div key={category} className="bg-neutral-700 p-4 rounded-lg shadow-lg hover:shadow-green-400/30 transform transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-green-400 mb-3">{category}</h4>
                <ul className="space-y-1.5">
                  {skillList.map(skill => (
                    <li key={skill} className="text-gray-300 text-sm flex items-center">
                      <span className="text-green-500 mr-2 text-xs">◆</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume; 