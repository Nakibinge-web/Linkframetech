import Card from '../components/common/Card';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: '⚙️',
    title: 'Software Engineering',
    tagline: 'Custom systems built to last.',
    description:
      'We design and develop web applications, internal tools, and scalable APIs tailored to your exact workflow — not off-the-shelf templates.',
    offerings: ['Custom Web Applications', 'REST API Development', 'System Architecture', 'Third-party Integrations', 'Performance Optimization'],
    color: 'brand-blue',
  },
  {
    icon: '🗄️',
    title: 'IMS Solutions',
    tagline: 'Smarter data, better decisions.',
    description:
      'Information Management Systems for schools, NGOs, and enterprises. We design databases and workflows that reduce manual work and surface the insights you need.',
    offerings: ['School Management Systems', 'Inventory & HR Systems', 'Database Design', 'Data Migration', 'Reporting Dashboards'],
    color: 'brand-orange',
  },
  {
    icon: '🎬',
    title: 'VFX & Media',
    tagline: 'Visuals that move people.',
    description:
      'From brand films to motion graphics, we craft visual content that communicates your story with precision and style.',
    offerings: ['Motion Graphics', 'Video Editing', 'Visual Effects', 'Brand Films', 'Social Media Content'],
    color: 'brand-blue',
  },
];

function ServiceBlock({ icon, title, tagline, description, offerings, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'in-view' : ''} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
    >
      {/* Text */}
      <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
        <span className="text-4xl mb-6 block transition-transform duration-300 ease-out hover:scale-110 inline-block">{icon}</span>
        <p className="text-brand-orange text-sm font-medium uppercase tracking-widest mb-2">{tagline}</p>
        <h2 className="heading-md text-text-light mb-4">{title}</h2>
        <p className="text-body mb-8">{description}</p>
        <ul className="flex flex-col gap-3">
          {offerings.map((item) => (
            <li key={item} className="flex items-center gap-3 text-text-muted text-sm group/item">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 transition-transform duration-200 group-hover/item:scale-150" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual placeholder */}
      <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
        <Card hover={false} className="h-64 lg:h-80 flex items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent">
          <span className="text-6xl opacity-30 transition-all duration-300 ease-out hover:opacity-60 hover:scale-110">{icon}</span>
        </Card>
      </div>
    </div>
  );
}

export default function Services() {
  const [heroRef, heroInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-orange/8 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>Services</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-3xl`}>
            Three disciplines. One team.
          </h1>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding">
        <div className="container-max flex flex-col gap-24">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} {...service} index={i} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
