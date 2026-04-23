import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const values = [
  { title: 'Intentional', description: 'Every decision — design, architecture, copy — is made with purpose.' },
  { title: 'Transparent', description: 'We communicate openly at every stage. No surprises, no black boxes.' },
  { title: 'Rooted', description: 'We understand the African tech landscape and build for it, not around it.' },
  { title: 'Long-term', description: 'We think beyond the launch. Systems that scale, relationships that last.' },
];

export default function About() {
  const [heroRef, heroInView] = useInView();
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>About Us</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-3xl`}>
            We build things that matter.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-max">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`fade-up ${storyInView ? 'in-view' : ''}`}>
              <h2 className="heading-md text-text-light mb-6">Our story</h2>
              <p className="text-body mb-4">
                Linkframe Technologies was founded on a simple belief: that great software, smart systems, and compelling visuals shouldn't be siloed. We bring all three together under one roof.
              </p>
              <p className="text-body">
                From schools needing management systems to startups launching their brand — we've built for them all. Our team spans software engineers, data architects, and visual artists who collaborate closely on every project.
              </p>
            </div>
            <div className={`fade-up delay-200 ${storyInView ? 'in-view' : ''}`}>
              <h2 className="heading-md text-text-light mb-6">Mission & Vision</h2>
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-brand-orange pl-6 transition-all duration-300 ease-out hover:pl-8">
                  <h3 className="text-text-light font-semibold mb-2">Mission</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    To deliver integrated digital solutions that empower organizations to operate smarter, look better, and grow faster.
                  </p>
                </div>
                <div className="border-l-2 border-brand-blue pl-6 transition-all duration-300 ease-out hover:pl-8">
                  <h3 className="text-text-light font-semibold mb-2">Vision</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    To be the most trusted technology partner for growing organizations across Africa and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-max">
          <div className="max-w-xl mb-16">
            <p className="text-brand-orange text-sm font-medium uppercase tracking-widest mb-3">What drives us</p>
            <h2 className="heading-lg text-text-light">Core values</h2>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ title, description }, i) => (
              <div key={title} className={`fade-up delay-${(i + 1) * 100} ${valuesInView ? 'in-view' : ''} group`}>
                <span className="font-fraunces text-5xl font-bold text-brand-orange/15 group-hover:text-brand-orange/30 transition-colors duration-300">
                  0{i + 1}
                </span>
                <h3 className="text-text-light font-semibold text-base mt-3 mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
