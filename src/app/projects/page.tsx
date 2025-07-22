import Image from "next/image";
import Link from "next/link";
import projectsData from '../../../public/projects.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects - Hospital Construction & Healthcare Infrastructure",
  description: "Explore our completed hospital construction projects, modular OT setups, ICU installations, and healthcare infrastructure developments across Northeast India. View our portfolio of successful healthcare facilities.",
  keywords: [
    "hospital construction projects",
    "healthcare infrastructure projects",
    "modular OT projects",
    "ICU setup projects",
    "medical gas pipeline projects",
    "hospital projects Northeast India",
    "healthcare facility projects",
    "hospital construction portfolio",
    "medical equipment installation projects",
    "turnkey hospital projects"
  ],
  openGraph: {
    title: "Our Projects - Hospital Construction & Healthcare Infrastructure",
    description: "Explore our completed hospital construction projects, modular OT setups, ICU installations, and healthcare infrastructure developments across Northeast India.",
    url: "https://www.alexhealthcaresystem.com/projects",
    siteName: "Alex Healthcare System",
    images: [
      {
        url: "/projects-carousel0.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Healthcare System Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - Hospital Construction & Healthcare Infrastructure",
    description: "Explore our completed hospital construction projects and healthcare infrastructure developments across Northeast India.",
    images: ["/projects-carousel0.jpg"],
  },
  alternates: {
    canonical: "https://www.alexhealthcaresystem.com/projects",
  },
};

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

const projects: Project[] = projectsData;

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src="/projects-carousel0.jpg" // Replace with your actual hero image
          alt="Projects Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:pl-28 max-w-2xl w-full">
          <div className="flex items-start mb-4">
            <div className="w-2 h-[40px] sm:h-[60px] bg-white mr-3 sm:mr-5 rounded" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
              Our Projects
            </h1>
          </div>
          <p className="text-white text-sm sm:text-base md:text-lg" style={{fontFamily: 'Arial, sans-serif'}}>
            From hospitals to critical care units, our projects reflect innovation, precision, and trust in healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-14 justify-center">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[160px] relative">
                  <Image src={proj.heroImg} alt={proj.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{proj.title}</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-justify leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.description}</div>
                  <Link href={`/projects/${proj.id}`}>
                    <button className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-10 sm:py-16 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#232323] text-center leading-tight" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Have a Project in Mind?<br />
            Let's Get Building!
          </h2>
        </div>
      </section>
    </div>
  );
} 