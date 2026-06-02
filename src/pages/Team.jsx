import Card from '../components/common/Card';
import CtaBanner from '../components/sections/CtaBanner';
import useInView from '../hooks/useInView';

const team = [
  {
    name: 'Alex Okonkwo',
    role: 'Lead Software Engineer',
    category: 'software',
    bio: 'Full-stack engineer with 6+ years building scalable web systems for startups and enterprises.',
    skills: ['React', 'Laravel', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Chisom Eze',
    role: 'IMS Architect',
    category: 'ims',
    bio: 'Database specialist focused on designing information systems that reduce operational friction.',
    skills: ['MySQL', 'System Design', 'Data Modeling', 'Laravel'],
  },
  {
    name: 'Tunde Adeyemi',
    role: 'VFX Lead',
    category: 'vfx',
    bio: 'Motion designer and video editor with a sharp eye for brand storytelling and visual impact.',
    skills: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading'],
  },
  {
    name: 'Ngozi Obi',
    role: 'Frontend Developer',
    category: 'software',
    bio: 'UI-focused developer who bridges design and engineering to deliver polished user experiences.',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Figma'],
  },
  {
    name: 'Emeka Nwosu',
    role: 'Systems Analyst',
    category: 'ims',
    bio: 'Translates complex organizational workflows into clean, maintainable digital systems.',
    skills: ['Requirements Analysis', 'SQL', 'Process Mapping', 'Laravel'],
  },
  {
    name: 'Fatima Bello',
    role: 'Visual Effects Artist',
    category: 'vfx',
    bio: 'Creates stunning visual effects and compositing work for film, ads, and digital campaigns.',
    skills: ['After Effects', 'Blender', 'DaVinci Resolve', 'Compositing'],
  },
];

const categories = [
  { label: 'Software', value: 'software' },
  { label: 'IMS', value: 'ims' },
  { label: 'VFX', value: 'vfx' },
];

function TeamSection({ label, value }) {
  const members = team.filter((m) => m.category === value);
  const [ref, inView] = useInView();

  return (
    <section className="section-padding border-t border-white/5">
      <div className="container-max">
        <h2 className="heading-md text-text-light mb-12 text-center lg:text-left">{label}</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map(({ name, role, bio, skills }, i) => (
            <div key={name} className={`fade-up delay-${(i + 1) * 100} ${inView ? 'in-view' : ''}`}>
              <Card className="flex flex-col gap-4 h-full group text-center lg:text-left items-center lg:items-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-blue/30 border border-white/10 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:border-brand-orange/30">
                  <span className="text-text-light font-fraunces font-bold text-lg">
                    {name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-text-light font-semibold text-base">{name}</h3>
                  <p className="text-brand-orange text-xs font-medium mt-0.5">{role}</p>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{bio}</p>
                <div className="flex flex-wrap gap-2 mt-auto justify-center lg:justify-start">
                  {skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 transition-colors duration-200 hover:border-brand-orange/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  const [heroRef, heroInView] = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="container-max section-padding relative z-10 pt-40 text-center lg:text-left">
          <p className={`fade-up ${heroInView ? 'in-view' : ''} text-brand-orange text-sm font-medium uppercase tracking-widest mb-4`}>The Team</p>
          <h1 className={`fade-up delay-100 ${heroInView ? 'in-view' : ''} heading-xl text-text-light max-w-3xl mx-auto lg:mx-0`}>
            The people behind the work.
          </h1>
        </div>
      </section>

      {categories.map(({ label, value }) => (
        <TeamSection key={value} label={label} value={value} />
      ))}

      <CtaBanner />
    </>
  );
}
