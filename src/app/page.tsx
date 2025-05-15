// We'll create these component files in the next steps
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Projects from '@/components/Projects';
// import Resume from '@/components/Resume';
// import Contact from '@/components/Contact';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
} 