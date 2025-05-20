const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-green-400">
          About Me
        </h2>
        <div className="bg-neutral-800 p-8 rounded-xl shadow-2xl space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            I am a seasoned Software Engineer with over 7 years of professional experience, complemented by 8 prior years in diverse IT roles, from hardware support to managing help desk teams. My journey has equipped me with a robust skill set and a deep understanding of technology solutions.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I hold Bachelor's degrees in Computer Science, Physics, and Mathematics, providing a strong theoretical foundation for my practical skills. I have expert knowledge in Apache Kafka and a comprehensive understanding of microservices architecture, Java development (including Spring Boot, Micronaut, and more), and various database technologies like MySQL, MongoDB, and DynamoDB. My experience also extends to front-end technologies such as Angular and React, and cloud platforms like AWS and GCP.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            With the rapid advancements in AI, I've dedicated personal time to exploring new models and hardware, even running a local version of DeepSeek. I am passionate about diving into this new AI era and eager to contribute to innovative projects.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            My technical acumen is backed by a commitment to Agile methodologies, Test-Driven Development (TDD), and Continuous Integration/Continuous Deployment (CI/CD) practices, ensuring high-quality, scalable, and maintainable software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 