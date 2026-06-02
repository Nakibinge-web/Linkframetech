import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import ServicesSection from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import ProjectsSection from '../components/sections/Projects';
import Process from '../components/sections/Process';
import CtaBanner from '../components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesSection />
      <WhyUs />
      <ProjectsSection />
      <Process />
      <CtaBanner />
    </>
  );
}
