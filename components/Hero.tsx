export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden bg-white text-center">
      {/* Decorative Background Scenery */}
      
      {/* Background Arch Overlay */}
      <div className="absolute top-0 right-0 w-full h-full -z-20 overflow-hidden pointer-events-none">
         {/* Main Red Circle Shape behind the phone */}
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full hidden md:block z-0"></div>
         {/* Blue Circle Shape on the right */}
         <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full hidden lg:block z-[-1]"></div>
      </div>

      {/* Clouds */}
      <div className="absolute left-[10%] top-[20%] text-gray-200 opacity-60 w-32 -z-10 hidden md:block">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 19c-2.48 0-4.5-2.02-4.5-4.5 0-.58.11-1.13.31-1.63C12.38 12.33 11.23 12 10 12c-2.76 0-5 2.24-5 5s2.24 5 5 5h7.5c1.38 0 2.5-1.12 2.5-2.5S18.88 19 17.5 19z" /><path d="M17.5 19H10c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.23 0 2.38.45 3.32 1.2.71-2.4 2.92-4.2 5.68-4.2 3.31 0 6 2.69 6 6s-2.69 6-6 6z" fillOpacity=".5" /></svg>
      </div>
      <div className="absolute right-[15%] top-[25%] text-gray-200 opacity-60 w-24 -z-10 hidden lg:block">
         <svg viewBox="0 0 24 24" fill="currentColor" className="transform scale-x-[-1]"><path d="M17.5 19c-2.48 0-4.5-2.02-4.5-4.5 0-.58.11-1.13.31-1.63C12.38 12.33 11.23 12 10 12c-2.76 0-5 2.24-5 5s2.24 5 5 5h7.5c1.38 0 2.5-1.12 2.5-2.5S18.88 19 17.5 19z" /><path d="M17.5 19H10c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.23 0 2.38.45 3.32 1.2.71-2.4 2.92-4.2 5.68-4.2 3.31 0 6 2.69 6 6s-2.69 6-6 6z" fillOpacity=".5" /></svg>
      </div>
      
      {/* Red Flags & Sticks */}
      <div className="absolute left-[20%] top-[35%] w-16 -z-10 hidden lg:block transform -rotate-12">
        <svg viewBox="0 0 100 200" fill="none">
           <line x1="10" y1="20" x2="40" y2="200" stroke="#333" strokeWidth="3" />
           <path d="M5 10 L60 20 L50 60 L0 50 Z" fill="#EE3E38" />
           <path d="M22 25 L35 27 L32 38 L20 36 Z" fill="white" />
           <path d="M25 21 L32 22 L29 42 L22 41 Z" fill="white" />
        </svg>
      </div>
      <div className="absolute right-[25%] top-[40%] w-16 -z-10 hidden lg:block transform rotate-12">
         <svg viewBox="0 0 100 200" fill="none" className="transform scale-x-[-1]">
           <line x1="10" y1="20" x2="40" y2="200" stroke="#333" strokeWidth="3" />
           <path d="M5 10 L60 20 L50 60 L0 50 Z" fill="#EE3E38" />
           <path d="M22 25 L35 27 L32 38 L20 36 Z" fill="white" />
           <path d="M25 21 L32 22 L29 42 L22 41 Z" fill="white" />
        </svg>
      </div>

      {/* Mascot Big Blue Character on the right edge */}
      <div className="absolute -right-10 top-[40%] w-64 -z-10 hidden xl:block drop-shadow-lg">
        <svg viewBox="0 0 200 300" fill="none">
          <path d="M100 0 C40 0, 0 60, 0 120 V300 C0 300, 100 300, 100 300 C150 300, 200 300, 200 300 V120 C200 60, 160 0, 100 0 Z" fill="#2196F3" />
          {/* Eyes */}
          <circle cx="50" cy="120" r="8" fill="#111" />
          <circle cx="110" cy="120" r="8" fill="#111" />
          {/* Mouth */}
          <path d="M60 150 Q80 170 100 150" stroke="#111" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M62 150 C70 180, 90 180, 98 150 Z" fill="#EE3E38" />
          {/* Arms */}
          <circle cx="-10" cy="200" r="24" fill="#EE3E38" />
        </svg>
      </div>

      {/* Floating Sparkles and Shapes */}
      <div className="absolute left-[5%] top-[15%] text-blue-500 hidden md:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>
      <div className="absolute left-[15%] top-[60%] text-yellow-400 hidden lg:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
      </div>
      <div className="absolute right-[5%] top-[20%] text-red-500 hidden md:block">
         <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
      </div>
      <div className="absolute right-[12%] top-[65%] text-red-500 hidden md:block opacity-80">
         <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><circle cx="12" cy="12" r="10"></circle></svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900 mb-6 drop-shadow-sm">
          Master Swiss German.<br />The Fun Way!
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10">
          Learn Schwiizertüütsch with interactive lessons, anytime, anywhere.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
          <button className="playful-button text-lg px-8 py-3 w-full sm:w-auto hover:bg-primary-dark">
            Get Started - Free
          </button>
          <button className="playful-button-secondary border-primary text-primary text-lg px-8 py-3 w-full sm:w-auto">
            Learn More
          </button>
        </div>

        {/* Center Mockup */}
        <div className="w-full max-w-sm relative mx-auto group">
          
          {/* Background Mountains */}
          <div className="absolute -left-[500px] -right-[500px] bottom-0 h-64 -z-10 pointer-events-none opacity-80 hidden md:block">
             <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full">
                {/* Back Layer Mountains */}
                <path d="M0 200 L150 50 L300 200 Z" fill="#E2E8F0" />
                <path d="M250 200 L450 80 L650 200 Z" fill="#CBD5E1" />
                <path d="M550 200 L750 40 L950 200 Z" fill="#E2E8F0" />
                <path d="M850 200 L1000 90 L1000 200 Z" fill="#CBD5E1" />
                
                {/* Front Layer Mountains (White/Lighter) */}
                <path d="M50 200 L250 120 L450 200 Z" fill="#F1F5F9" />
                <path d="M350 200 L550 100 L750 200 Z" fill="#F8FAFC" />
                <path d="M700 200 L850 140 L1000 200 Z" fill="#F1F5F9" />
                
                {/* White Snow Caps */}
                <path d="M150 50 L120 80 Q150 90 180 80 Z" fill="white" />
                <path d="M450 80 L420 110 Q450 120 480 110 Z" fill="white" />
                <path d="M750 40 L710 80 Q750 90 790 80 Z" fill="white" />
             </svg>
          </div>

          <div className="absolute -inset-20 bg-gradient-to-t from-white to-transparent bottom-0 rounded-t-full -z-10"></div>
          
          <div className="relative border-[10px] border-gray-900 rounded-[3rem] bg-white shadow-2xl overflow-hidden mx-auto aspect-[9/19] flex flex-col items-center pt-8">
            
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 w-32 h-6 bg-gray-900 mx-auto rounded-b-xl z-20"></div>

            {/* App Header */}
            <div className="w-full px-6 flex items-center justify-between mb-6">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              <div className="flex-1 mx-4 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[30%] rounded-full"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="flex-1 w-full px-6 flex flex-col text-left">
              <h2 className="text-xl font-black mb-6 text-gray-800">Building Sentences</h2>
              
              <div className="mb-8">
                <p className="font-bold text-gray-500 mb-2">Describe yourself</p>
                <p className="text-xl font-medium text-gray-800">I am happy</p>
              </div>
              
              {/* Drop Zone */}
              <div className="flex gap-2 mb-6 min-h-[50px] items-center">
                 <div className="border-2 border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 shadow-[0_3px_0_#E5E7EB]">Ich</div>
                 <div className="border-2 border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 shadow-[0_3px_0_#E5E7EB]">bin</div>
                 <div className="border-2 border-transparent bg-gray-100 rounded-xl px-4 py-2 text-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">glücklich</div>
              </div>
              
              <div className="h-px border-b-2 border-dashed border-gray-200 mb-6 w-full"></div>

              {/* Chips */}
              <div className="flex flex-wrap gap-3 mt-auto mb-8 relative">
                 <div className="border-2 border-gray-200 bg-gray-50 text-gray-400 rounded-xl px-4 py-2.5 font-bold shadow-[0_3px_0_#E5E7EB]">traurig</div>
                 <div className="border-2 border-gray-200 bg-gray-50 text-gray-400 rounded-xl px-4 py-2.5 font-bold shadow-[0_3px_0_#E5E7EB]">und</div>
                 <div className="border-2 border-gray-200 bg-gray-50 text-gray-400 rounded-xl px-4 py-2.5 font-bold shadow-[0_3px_0_#E5E7EB]">sehr</div>
                 
                 {/* Dragged Chip */}
                 <div className="absolute top-[-90px] left-[130px] border-2 border-blue-400 bg-blue-50 text-blue-500 rounded-xl px-4 py-2.5 font-bold shadow-[0_4px_0_#60A5FA] z-20 cursor-grab active:cursor-grabbing transform -rotate-3 scale-110">
                   glücklich
                 </div>

                 {/* Hand Cursor */}
                 <svg className="absolute top-[-70px] left-[200px] w-12 h-12 z-30 drop-shadow-md text-orange-200" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5">
                    <path d="M14.5 9.5V4.5a2.5 2.5 0 0 0-5 0v10l-2.06-1.03a2.5 2.5 0 0 0-3.32 1.13L3.1 16.6a1 1 0 0 0 .15 1.17l5.3 6.36c.66.79 1.64 1.25 2.68 1.25h5.42a4 4 0 0 0 3.96-3.43l.8-5.64A3 3 0 0 0 18.23 13h-1.23V11.5a2.5 2.5 0 1 0-5 0v-2Z"/>
                 </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
