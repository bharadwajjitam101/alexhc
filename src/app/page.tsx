import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white">
        <Image
          src="/hero-bg.jpg" // Placeholder: Replace with actual hero image path
          alt="Alex Healthcare System Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="w-10 h-1 bg-blue-500 mb-6"></div>
          <h1 className="text-6xl font-extrabold mb-4" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Alex Healthcare System</h1>
          <p className="text-lg mb-8 max-w-3xl px-4" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.</p>
          <button className="bg-[#5B9DED] text-white font-bold px-10 py-3 rounded shadow hover:bg-[#4a8cdb] transition-all text-sm tracking-widest uppercase" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>View Our Work</button>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/building-construction.png" alt="Building Construction Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Construction</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/building-repairs.png" alt="Building Repairs Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Building Repairs</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/demolition.png" alt="Demolition Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Demolition</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>

            {/* Service Item 4 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/foundation.png" alt="Foundation Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Foundation</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>

            {/* Service Item 5 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/painting-exterior.png" alt="Painting & Exterior Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Painting & Exterior</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>

            {/* Service Item 6 */}
            <div className="flex items-start space-x-4">
              <Image src="/services/site-management.png" alt="Site Management Icon" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Site Management</h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam lectus erat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="w-full flex flex-col md:flex-row h-[550px]">
        {/* Left: Blue section with points */}
        <div className="w-full md:w-1/3 bg-[#5B9DED] flex flex-col h-full justify-center">
          <div className="flex flex-col gap-y-12 w-full max-w-[95%] mx-auto mt-13">
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
              <div className="flex items-start self-start" key={item.title}>
                <span className="mr-4 flex-shrink-0 flex items-center mt-1">
                  <svg width="56" height="56" viewBox="10 10 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28H46M36 18L46 28L36 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 18L30 28L20 38" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="pl-1">
                  <div className="text-[1.1rem] font-bold mb-5 text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>{item.title}</div>
                  <div className="text-[0.95rem] leading-[1.5] mr-10 text-[#232323]" style={{fontFamily: 'Arial, sans-serif'}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: White section with title and two columns of text */}
        <div className="w-full md:w-2/3 bg-white flex flex-col justify-start px-16 h-full pt-20">
          <div className="text-[#232323] text-[1.7rem] font-extrabold mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.1}}>No Project Too Big Or Too Small</div>
          <div className="w-12 h-1.5 bg-[#3376C8] mb-4 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <div className="text-[#444] text-[0.98rem] leading-[1.5]" style={{fontFamily: 'Arial, sans-serif'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis 
            </div>
            <div className="text-[#444] text-[0.98rem] leading-[1.5]" style={{fontFamily: 'Arial, sans-serif'}}>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis 
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Bar */}
      <section className="w-full flex flex-row h-[100px]">
        {/* Left: Blue bar */}
        <div className="bg-[#5B9DED] w-1/3 h-full"></div>
        {/* Right: Black bar with text and button */}
        <div className="bg-[#262626] w-2/3 h-full flex items-center justify-between px-12">
          <span className="text-white text-[1.7rem] font-extrabold" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Get Free Consultation</span>
          <button className="border-4 border-blue text-[#5B9DED] font-bold px-10 py-3 bg-transparent shadow-[0_6px_16px_0_rgba(0,0,0,0.18)] text-base tracking-widest uppercase cursor-pointer transition-all duration-200 hover:bg-[#5B9DED] hover:text-white hover:border-[#5B9DED] focus:outline-none focus:ring-2 focus:ring-[#5B9DED] focus:ring-offset-2" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>
            Online Estimate Form
          </button>
        </div>
      </section>

      {/* Building Experience Section */}
      <section className="relative w-full h-[650px] flex items-center justify-center text-center">
          <Image
          src="/building-bg.jpg" // Replace with your actual image path
          alt="Building Experience Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
        <div className="relative z-20 flex flex-col items-center w-full px-4">
          <div className="w-14 h-2 bg-[#3376C8] mb-8 mt-2 mx-auto rounded"></div>
          <h2 className="text-white text-6xl font-extrabold mb-8" style={{fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.1}}>We've Been Building For<br />Over 20 years</h2>
          <p className="text-gray-200 text-2xl mb-10 max-w-3xl mx-auto" style={{fontFamily: 'Arial, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.</p>
          <button className="bg-[#5B9DED] text-white font-bold px-10 py-3 rounded shadow hover:bg-[#3376C8] transition-all text-base tracking-widest uppercase" style={{fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.08em'}}>About Us</button>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 pb-50 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-[#232323] text-center mb-2" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>Client Testimonials</h2>
          <div className="w-14 h-2 bg-[#3376C8] mb-14 mt-2 mx-auto rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-45">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="32" height="32" viewBox="0 0 24 24" fill="#3376C8" className="mx-0.5">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#555] text-base text-center mb-8" style={{fontFamily: 'Arial, sans-serif'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam."</p>
                <div className="w-full text-left font-bold text-[#232323]" style={{fontFamily: 'Montserrat, Arial, sans-serif'}}>John Smith</div>
              </div>
            ))}
          </div>
          {/* Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-y-10 gap-x-12 items-center justify-items-center opacity-70 grayscale mt-8">
            <Image src="/logos/gabo.png" alt="GABO Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/crosswill.png" alt="CROSSWILL Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/itch.png" alt="ITCH Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/jobline.png" alt="Job Line Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/loudnick.png" alt="LOUDNICK Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/realwave.png" alt="Real Wave Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/inner.png" alt="INNER Logo" width={120} height={48} className="h-12 w-auto object-contain" />
            <Image src="/logos/wire.png" alt="Wire Logo" width={120} height={48} className="h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
}
