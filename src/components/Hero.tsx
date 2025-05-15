import MatrixRain from './MatrixRain';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center text-white overflow-hidden p-0"
    >
      <MatrixRain className="opacity-75" />
      <div className="relative z-10 p-6 bg-black/50 backdrop-blur-sm rounded-md shadow-lg">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
          Nathan Avery
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
          Full-Stack Developer | Innovator | Problem Solver
        </p>
      </div>
    </section>
  );
};

export default Hero; 