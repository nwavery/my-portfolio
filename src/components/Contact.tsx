import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const emailAddress = "nwavette@gmail.com";
  const githubUrl = "https://github.com/nwavery";
  const linkedinUrl = "https://www.linkedin.com/in/nathan-avery-009697283/"; // Replace with your actual LinkedIn URL

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-neutral-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-green-400">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          I&apos;m always open to discussing new projects, creative ideas, or collaboration opportunities. 
          Feel free to reach out through email or connect with me on social media.
        </p>
        
        <div className="mb-12">
          <p className="text-gray-400 mb-2 text-sm">Primary Contact:</p>
          <a 
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <FaEnvelope className="mr-3" /> {emailAddress}
          </a>
        </div>

        <p className="text-gray-400 mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-8">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            title="GitHub Profile"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub size={40} />
          </a>
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        {/* 
          Placeholder for a future contact form if desired:
          <div className="mt-16 pt-12 border-t border-neutral-700">
            <h3 className="text-2xl font-semibold mb-6 text-green-300">Or Send a Message</h3>
            <form className="space-y-6 max-w-lg mx-auto text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm placeholder-gray-400" placeholder="Your message..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-green-500 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        */}
      </div>
    </section>
  );
};

export default Contact; 