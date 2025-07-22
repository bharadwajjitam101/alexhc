import Image from "next/image";
import Link from "next/link";
import projectsData from '../../../../public/projects.json';

const project = {
  id: 4,
  title: "Nagaon Metro Hospital & Research Centre",
  date: "18 September 2022",
  client: "Nagaon Metro Hospital & Research Centre",
  type: "Modular OT Theatres Installation",
  heroImg: "/nagaometro0.webp",
  description: "Single modular OT with complete theatre accessories and anti-microbial flooring. Created for optimal surgical control.",
  actualWorkTitle: "Vacuum Pump Installations at Various Hospitals",
  actualWorkDesc: "Single modular OT with complete theatre accessories and anti-microbial flooring. Created for optimal surgical control.",
  about: {
    desc: "Project Scope:",
    bullets: [
      "Modular OT setup",
      "Vinyl flooring with antimicrobial properties",
      "Track and curtain installations, scrub sinks"
    ],
    img: "/nagaometro1.webp"
  },
  images: [
    "/about-carousel.jpg",
    "/custom-design-main.jpg",
    "/repairs-main.jpg"
  ],
  descBlocks: [
    {
      img: "/nagaometro2.webp",
      text: "At Nagaon Metro Hospital, Alex Healthcare focused on redesigning OT spaces for optimal sterility. Surgical zones were upgraded using hygienic surfaces and medical-grade accessories."
    },
    {
      img: "/nagaometro3.webp",
      text: "The result was an aseptic, efficient environment with minimal downtime and maximum surgical throughput."
    }
  ]
};

function getRandomProjects(projects: any, excludeId: any, count: any) {
  const filtered = projects.filter((p: any) => p.id !== excludeId);
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  return filtered.slice(0, count);
}

export default function Project4() {
  const latestProjects = getRandomProjects(projectsData, project.id, 3);
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src={project.heroImg}
          alt="Project Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:pl-28 max-w-2xl w-full pt-2 sm:pt-0">
          <div className="flex items-start mb-4 sm:mb-4">
            <div className="w-2 h-[40px] sm:h-[60px] bg-white mr-3 sm:mr-5 rounded" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
              {project.title}
            </h1>
          </div>
          {/* New Actual Work Section */}
          {project.actualWorkTitle && (
            <div className="mb-2 sm:mb-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                {project.actualWorkTitle}
              </h2>
              {project.actualWorkDesc && (
                <p className="text-white text-xs sm:text-sm md:text-base mt-1" style={{fontFamily: 'Arial, sans-serif'}}>
                  {project.actualWorkDesc}
                </p>
              )}
            </div>
          )}
        </div>
        {/* Project Info: Responsive */}
        <div>
          {/* Desktop: absolute top-right */}
          <div className="hidden md:block absolute top-8 right-8 z-20 text-white text-sm text-right" style={{fontFamily: 'Arial, sans-serif'}}>
            <div><span className="font-bold">Date:</span> {project.date}</div>
            <div><span className="font-bold">Client:</span> {project.client}</div>
            <div><span className="font-bold">Project Type:</span> {project.type}</div>
          </div>
          {/* Mobile: bottom positioned to avoid overlap */}
          <div className="block md:hidden absolute bottom-1 left-4 right-4 z-20 text-white text-xs text-center px-2" style={{fontFamily: 'Arial, sans-serif'}}>
            <div><span className="font-bold">Date:</span> {project.date}</div>
            <div><span className="font-bold">Client:</span> {project.client}</div>
            <div><span className="font-bold">Project Type:</span> {project.type}</div>
          </div>
        </div>
      </section>

      {/* About this Project */}
      <section className="w-full py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About this Project</h2>
            <p className="mb-4 text-gray-700 text-justify" style={{fontFamily: 'Arial, sans-serif'}}>{project.about.desc}</p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              {project.about.bullets.map((b: any, i: any) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          <div className="flex-1">
            <Image src={project.about.img} alt="About Project" width={400} height={220} className="object-cover rounded-lg w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Project Images and Description Blocks */}
      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 flex flex-col gap-10">
          {project.descBlocks.map((block: any, i: any) => {
            let desktopClass = '';
            if (i === 1) desktopClass = 'md:flex-row';
            else desktopClass = 'md:flex-row-reverse';
            return (
              <div key={i} className={`flex flex-col ${desktopClass} gap-8 items-center`}>
                <div className="flex-1 text-gray-700 order-1 md:order-none" style={{fontFamily: 'Arial, sans-serif'}}>
                  {block.text}
                </div>
                <div className="flex-1 order-2 md:order-none">
                  <Image src={block.img} alt="Project Detail" width={600} height={340} className="object-cover rounded-lg w-full h-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="w-full py-12 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] text-center mb-8" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Latest Projects</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {latestProjects.map((proj: any) => (
              <Link key={proj.id} href={`/projects/${proj.id}`} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[140px] relative">
                  <Image src={proj.heroImg} alt={proj.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{proj.title}</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-justify leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.description}</div>
                  <span className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto text-center" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 