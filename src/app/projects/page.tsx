import Image from "next/image";

const projects = [
  { img: "/building-construction-main.jpg", title: "Building Construction Main", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/repairs-main.jpg", title: "Repairs & Installations Main", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/custom-design-main.jpg", title: "Custom Design Projects Main", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/4.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/5.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/6.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/7.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/8.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/9.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/10.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/11.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
  { img: "/projects/12.jpg", title: "Service Title", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum." },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src="/projects-carousel.jpg" // Replace with your actual hero image
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
              Our Construction<br />Projects
            </h1>
          </div>
          <p className="text-white text-sm sm:text-base md:text-lg" style={{fontFamily: 'Arial, sans-serif'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-14 justify-center">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[160px] relative">
                  <Image src={proj.img} alt={proj.title} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{proj.title}</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-left leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>{proj.desc}</div>
                  <button className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                    Learn More
                  </button>
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