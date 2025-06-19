"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  date: string;
  client: string;
  type: string;
  heroImg: string;
  description: string;
  about: {
    desc: string;
    bullets: string[];
    img: string;
  };
  images: string[];
  descBlocks: { img: string; text: string }[];
  actualWorkTitle?: string;
  actualWorkDesc?: string;
};

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch("/projects.json");
      const data: Project[] = await res.json();
      const proj = data.find((p: any) => String(p.id) === String(id));
      setProject(proj || null);
      setAllProjects(data);
      setLoading(false);
    }
    fetchProject();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!project) return <div className="min-h-screen flex items-center justify-center text-red-600">Project not found</div>;

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
              {project.about.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
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
          {project.descBlocks.map((block: {img: string; text: string}, i: number) => {
            // For desktop: 0 (right), 1 (left), 2 (right)
            let desktopClass = '';
            if (i === 1) desktopClass = 'md:flex-row';
            else desktopClass = 'md:flex-row-reverse';
            return (
              <div key={i} className={`flex flex-col ${desktopClass} gap-8 items-center`}>
                {/* On mobile: description first, then image. On desktop: keep alternating layout. */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-14 justify-center">
            {allProjects.filter(p => String(p.id) !== String(id)).slice(0, 3).map((proj) => (
              <div key={proj.id} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[140px] relative">
                  <Image src={proj.heroImg} alt={proj.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{proj.title}</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-justify leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.description}</div>
                  <button onClick={() => router.push(`/projects/${proj.id}`)} className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 