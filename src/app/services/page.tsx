import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero/Carousel Section */}
      <section className="relative w-full h-[600px] sm:h-[340px] md:h-[420px] flex items-center justify-between">
        <Image
          src="/building-bg.jpg"
          alt="Services Carousel"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-8 items-center justify-between h-full">
          {/* Left: Heading, subtitle, button */}
          <div className="flex flex-col justify-center max-w-xl w-full mb-8 md:mb-0 mt-16 md:mt-0">
            <div className="flex items-start mb-4">
              <div className="w-2 h-[60px] sm:h-[90px] bg-[#3376C8] mr-4 rounded" />
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                Our Construction<br />Services
              </h1>
            </div>
            <p className="text-white text-sm sm:text-base mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.
            </p>
            <button className="bg-[#3376C8] text-white font-bold px-5 sm:px-7 py-3 rounded shadow hover:bg-[#2256a0] transition-all text-xs tracking-widest uppercase w-max" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Get a Free Quote</button>
          </div>
          {/* Right: What We Do */}
          <div className="flex flex-col items-start text-left md:ml-8 w-full md:w-auto max-w-md md:max-w-none -mt-8 md:mt-0">
            <div className="text-[#5B9DED] text-base sm:text-xl font-bold mb-3 sm:mb-4 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>What We Do</div>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 w-full">
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/services/building-construction.png" alt="Building Construction" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Construction</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center mb-1 sm:mb-2">
                <Image src="/services/building-repairs.png" alt="Building Repairs" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Repairs</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
              <div className="flex items-start sm:items-center">
                <Image src="/services/custom-design.png" alt="Custom Design" width={28} height={28} className="object-contain mt-1 sm:mt-0" />
                <div className="flex flex-col justify-center ml-2 sm:ml-3">
                  <div className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Custom Design</div>
                  <div className="text-gray-200 text-xs sm:text-xs mt-0.5" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote Bar */}
      <section className="w-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07)] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between py-7 gap-6 md:gap-56">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#232323] whitespace-nowrap mb-4 md:mb-0" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Get a Quote For Your Project
          </h2>
          <button className="border-4 border-black text-[#3376C8] font-bold px-8 sm:px-14 py-3 bg-white text-xs tracking-widest uppercase shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#f3f7fd] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.18)] cursor-pointer" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            <Link href="/contact">Free Quote</Link>
          </button>
        </div>
      </section>

      {/* Building Construction Section */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/building-construction-main.jpg" alt="Building Construction Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Building Construction
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultricies bibendum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1">
              <li>Lectus erat consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectetur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Risus dolor fermentum</li>
              <li>Massa a commodo</li>
              <li>Elit dui sit amet risus</li>
              <li>Maecenas ornare</li>
              <li>Nisi a tortor ultricies</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Bibendum nulla fermentum</li>
              <li>Metus quis sodales</li>
              <li>Tristique augue mauris</li>
              <li>Molestie augue non</li>
              <li>Feugiat ligula neque</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Repairs & Installations Section */}
      <section className="w-full py-10 flex flex-col-reverse md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="bg-white max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
              Repairs & Installations
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultricies bibendum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1">
              <li>Lectus erat consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectetur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Risus dolor fermentum</li>
              <li>Massa a commodo</li>
              <li>Elit dui sit amet risus</li>
              <li>Maecenas ornare</li>
              <li>Nisi a tortor ultricies</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Bibendum nulla fermentum</li>
              <li>Metus quis sodales</li>
              <li>Tristique augue mauris</li>
              <li>Molestie augue non</li>
              <li>Feugiat ligula neque</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[380px] flex-shrink-0 mt-8 md:mt-0">
          <img src="/repairs-main.jpg" alt="Repairs & Installations Main" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Custom Design Projects Section */}
      <section className="w-full py-10 flex flex-col md:flex-row justify-center items-stretch md:items-stretch gap-8">
        <div className="w-full md:w-[380px] flex-shrink-0 mb-8 md:mb-0">
          <img src="/custom-design-main.jpg" alt="Custom Design Projects Main" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="bg-[#F8F8F8] max-w-3xl w-full px-4 sm:px-10 pt-10 pb-0 shadow-none flex flex-col items-start">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#232323] mb-2 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Custom Design Projects
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#3376C8] mb-6 mt-1 rounded" />
          <p className="text-[#232323] text-sm mb-6 max-w-3xl text-left" style={{fontFamily: 'Arial, sans-serif'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultricies bibendum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-[#232323] text-sm text-left w-full" style={{fontFamily: 'Arial, sans-serif'}}>
            <ul className="list-disc list-inside space-y-1">
              <li>Lectus erat consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectetur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Risus dolor fermentum</li>
              <li>Massa a commodo</li>
              <li>Elit dui sit amet risus</li>
              <li>Maecenas ornare</li>
              <li>Nisi a tortor ultricies</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Bibendum nulla fermentum</li>
              <li>Metus quis sodales</li>
              <li>Tristique augue mauris</li>
              <li>Molestie augue non</li>
              <li>Feugiat ligula neque</li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-[#232323] w-full h-[56px] sm:h-[72px] flex items-center justify-center mt-0">
              <button className="border-2 border-white text-white font-bold px-8 sm:px-12 py-3 bg-[#232323] hover:bg-black transition-all text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="w-full bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Latest Projects
          </h2>
          <div className="w-8 sm:w-10 h-1 bg-[#3376C8] mb-8 sm:mb-10 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 justify-center mb-8 sm:mb-12">
            {[
              { src: '/building-construction-main.jpg', alt: 'Building Construction Main' },
              { src: '/repairs-main.jpg', alt: 'Repairs & Installations Main' },
              { src: '/custom-design-main.jpg', alt: 'Custom Design Projects Main' }
            ].map((img, idx) => (
              <div key={idx} className="bg-white border border-gray-300 flex flex-col w-full max-w-xs mx-auto">
                <div className="w-full h-[120px] sm:h-[140px] relative">
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center" />
                </div>
                <div className="flex flex-col px-4 sm:px-6 py-6 flex-1">
                  <div className="text-base sm:text-[1rem] font-bold mb-2 text-[#232323] text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Service Title</div>
                  <div className="text-sm sm:text-[0.95rem] text-gray-600 mb-4 sm:mb-6 text-left leading-[1.6]" style={{fontFamily: 'Arial, sans-serif'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, id et euismod bibendum adipiscing et orci, fermentum.
                  </div>
                  <button className="border border-gray-400 text-[#232323] font-bold px-4 sm:px-5 py-2 bg-white hover:bg-gray-100 transition-all text-xs tracking-widest uppercase mt-auto" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-black text-[#232323] font-bold px-8 sm:px-10 py-2 bg-white text-xs tracking-widest uppercase shadow-[4px_4px_0_0_rgba(0,0,0,0.18)]" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
              <Link href="/projects">View All</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 