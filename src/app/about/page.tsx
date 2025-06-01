import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero/Carousel Section */}
      <section className="relative w-full h-[420px] flex items-center justify-between">
        <Image
          src="/about-carousel.jpg" // Use your actual carousel image path
          alt="About Carousel"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex w-full max-w-7xl mx-auto px-8 items-center justify-between h-full">
          {/* Left: Heading, subtitle, button */}
          <div className="flex flex-col justify-center max-w-xl">
            <div className="flex items-start mb-4">
              <div className="w-2 h-[90px] bg-[#3376C8] mr-4 rounded" />
              <h1 className="text-5xl font-extrabold text-white leading-[1.08]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
                About Our<br />Construction<br />Company
              </h1>
            </div>
            <p className="text-white text-base mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.
            </p>
            <button className="bg-[#3376C8] text-white font-bold px-7 py-3 rounded shadow hover:bg-[#2256a0] transition-all text-xs tracking-widest uppercase w-max" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>Get a Free Quote</button>
          </div>
          {/* Right: What We Do */}
          <div className="flex flex-col items-start text-left ml-8">
            <div className="text-[#5B9DED] text-xl font-bold mb-4 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>What We Do</div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center mb-2">
                <Image src="/services/building-construction.png" alt="Building Construction" width={32} height={32} className="object-contain" />
                <div className="flex flex-col justify-center ml-3">
                  <div className="text-white font-bold text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Construction</div>
                  <div className="text-gray-200 text-xs" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/services/building-repairs.png" alt="Building Repairs" width={32} height={32} className="object-contain" />
                <div className="flex flex-col justify-center ml-3">
                  <div className="text-white font-bold text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Repairs</div>
                  <div className="text-gray-200 text-xs" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
              <div className="flex items-center">
                <Image src="/services/custom-design.png" alt="Custom Design" width={32} height={32} className="object-contain" />
                <div className="flex flex-col justify-center ml-3">
                  <div className="text-white font-bold text-base" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Custom Design</div>
                  <div className="text-gray-200 text-xs" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>About us</h2>
          <div className="w-14 h-2 bg-[#3376C8] mb-10 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-[#444] text-base leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.<br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.
            </div>
            <div className="text-[#444] text-base leading-relaxed" style={{fontFamily: 'Arial, sans-serif'}}>
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
            </div>
          </div>
        </div>
      </section>

      {/* Only the Best Section */}
      <section className="w-full flex flex-col md:flex-row min-h-[520px]">
        {/* Left: White column with points and button */}
        <div className="w-full md:w-[420px] bg-white flex flex-col justify-start px-12 pt-14 pb-24">
          <h2 className="text-3xl font-extrabold text-[#232323] mb-10 text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>
            Only the Best
          </h2>
          {[{
            title: 'Eco Friendly Construction',
            desc: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
          }, {
            title: 'The Newest Technology Repairs',
            desc: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
          }, {
            title: 'High Quality Construction Management',
            desc: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
          }].map((item, idx) => (
            <div className="flex items-start mb-10 last:mb-0" key={item.title}>
              <span className="mr-6 flex-shrink-0 flex items-center h-full">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24H40M32 16L40 24L32 32" stroke="#3376C8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 16L24 24L16 32" stroke="#3376C8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="text-lg font-bold mb-1 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{item.title}</div>
                <div className="text-sm leading-[1.7] text-[#232323]" style={{fontFamily: 'Arial, sans-serif'}}>{item.desc}</div>
              </div>
            </div>
          ))}
          <button className="mt-8 border-4 border-black text-[#3376C8] font-bold px-12 py-3 bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.18)] hover:bg-[#f3f7fd] transition-all text-base tracking-widest uppercase w-max text-left" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            Free Quote
          </button>
        </div>
        {/* Right: Image and stats bar */}
        <div className="flex-1 flex flex-col justify-end items-stretch p-0">
          <div className="relative w-full h-[420px]">
            <Image src="/about-bridge.jpg" alt="Bridge" fill className="object-cover object-center" />
            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 w-full flex h-[80px]">
              <div className="flex-1 flex flex-col items-center justify-center bg-[#3376C8]">
                <div className="text-4xl font-extrabold text-white" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>12</div>
                <div className="text-xs uppercase tracking-widest text-white mt-1" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Years Established</div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-[#232323]">
                <div className="text-4xl font-extrabold text-white" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>250</div>
                <div className="text-xs uppercase tracking-widest text-white mt-1" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Completed Projects</div>
              </div>
            </div>
          </div>
          {/* Bottom stats */}
          <div className="w-full flex justify-between mt-8 px-2">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>24</div>
              <div className="text-xs uppercase tracking-widest text-[#232323] mt-1" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Field Workers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>18</div>
              <div className="text-xs uppercase tracking-widest text-[#232323] mt-1" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Office Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-extrabold text-[#232323] mb-8" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.3}}>
            “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi. Nullam maximus lectus libero.”
          </blockquote>
          <div className="text-xs text-[#888] tracking-widest uppercase font-bold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>John Smith – CEO</div>
        </div>
      </section>
      
    </div>
  );
} 