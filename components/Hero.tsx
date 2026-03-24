import { Globe, Sparkles, MoveRight } from "./Icons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden bg-transparent text-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 1440 900" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Base Background Color (Light Blue/White gradient vibe) */}
          <rect width="1440" height="900" fill="#f8fbff"/>

          {/* Left Large Red Organic Blob */}
          <path d="M-50,0 C250,50 400,300 350,600 C300,900 -50,950 -150,900 Z" fill="#EE3E38" />

          {/* Right Blue Organic Character Blob */}
          <path d="M1500,100 C1100,50 1000,400 1100,700 C1200,1000 1550,950 1600,900 Z" fill="#2196F3" />
          
          {/* Eyes for Blue Character */}
          <circle cx="1150" cy="400" r="14" fill="#000" />
          <circle cx="1230" cy="400" r="14" fill="#000" />

          {/* Happy Mouth for Blue Character */}
          <path d="M1160,450 Q1190,480 1220,450 Z" fill="#EE3E38" stroke="#000" strokeWidth="4" />

          {/* Floating Elements (Flags, Suns, Sparkles) */}
          <circle cx="250" cy="150" r="40" fill="#FACC15" />
          <circle cx="1300" cy="150" r="25" fill="#FACC15" />
          
          {/* Confetti/Sparkles */}
          <circle cx="200" cy="350" r="12" fill="#3B82F6" />
          <circle cx="1200" cy="250" r="16" fill="#EE3E38" />
          
          {/* Plus / Stars */}
          <g transform="translate(400, 450) scale(1.5)">
            <path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g transform="translate(1350, 600) scale(1.5)">
            <path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#EE3E38" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Mountains Bottom Layer */}
          <path d="M-100,900 L-100,600 L150,450 L400,650 L650,400 L950,600 L1200,450 L1540,650 L1540,900 Z" fill="#E2E8F0" />
          <path d="M-100,900 L-100,650 L200,550 L450,750 L750,500 L1100,700 L1350,550 L1540,700 L1540,900 Z" fill="#F8FAFC" />

          {/* Snowcaps on Mountains Layer 1 */}
          <path d="M150,450 L110,490 Q150,510 190,490 Z" fill="#FFFFFF" />
          <path d="M650,400 L610,440 Q650,460 690,440 Z" fill="#FFFFFF" />
          <path d="M1200,450 L1160,490 Q1200,510 1240,490 Z" fill="#FFFFFF" />

          {/* Red Flags Planted on Mountains */}
          <g transform="translate(300, 560) rotate(-10)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#475569" strokeWidth="4" />
            <path d="M0,5 L35,15 L30,25 L0,30 Z" fill="#EE3E38" />
            {/* White Cross */}
            <path d="M12,14 L22,18 M16,11 L18,21" stroke="#FFFFFF" strokeWidth="3" />
          </g>
          
          <g transform="translate(850, 530) rotate(5)">
            <line x1="0" y1="0" x2="0" y2="50" stroke="#475569" strokeWidth="4" />
            <path d="M0,5 L35,15 L30,25 L0,30 Z" fill="#EE3E38" />
            {/* White Cross */}
            <path d="M12,14 L22,18 M16,11 L18,21" stroke="#FFFFFF" strokeWidth="3" />
          </g>
        </svg>

        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      {/* --- END BACKGROUND LAYER --- */}

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-5xl lg:text-[4.5rem] font-black leading-tight tracking-tighter text-gray-900 mb-4 drop-shadow-sm mt-4">
          Master Swiss German.<br />The Fun Way!
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10">
          Learn Schwiizertüütsch with interactive lessons, anytime, anywhere.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16 w-full sm:w-auto px-4 z-20 relative">
          <button className="playful-button text-xl px-10 py-5 w-full sm:w-auto hover:bg-[#D32F2F] shadow-[0_6px_0_#C62828] transform transition-transform border-[3px] border-[#EE3E38]">
            Download App
          </button>
          <button className="playful-button-secondary border-[#EE3E38] text-[#EE3E38] text-xl px-10 py-5 w-full sm:w-auto shadow-[0_6px_0_#EE3E38] border-[3px] font-black bg-white hover:bg-red-50">
            Learn More
          </button>
        </div>

        {/* Center Mockup */}
        <div className="w-full max-w-[300px] relative mx-auto group z-20">
          
          <div className="relative border-[10px] border-gray-900 rounded-[2.5rem] bg-white shadow-2xl overflow-hidden mx-auto aspect-[9/19] flex flex-col items-center pt-8">
            
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 w-32 h-6 bg-gray-900 mx-auto rounded-b-2xl z-20"></div>

            {/* App Header */}
            <div className="w-full px-6 flex items-center justify-between mb-8 mt-2">
              <div className="w-8 h-8 flex items-center justify-center text-gray-400 font-bold text-xl cursor-default">&times;</div>
              <div className="flex-1 mx-4 h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                <div className="h-full bg-[#EE3E38] w-[35%] rounded-full shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="flex-1 w-full px-6 flex flex-col text-left">
              <h2 className="text-2xl font-black mb-8 text-gray-900">Building Sentences</h2>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl border-2 border-gray-100">
                <p className="font-bold text-gray-400 mb-1 text-sm uppercase tracking-wider">Describe yourself</p>
                <p className="text-xl font-bold text-gray-800">I am happy</p>
              </div>
              
              {/* Drop Zone */}
              <div className="flex gap-2 mb-8 min-h-[50px] items-center pb-4 border-b-2 border-dashed border-gray-200">
                 <div className="border-[3px] border-gray-200 rounded-2xl px-5 py-3 font-black text-gray-800 shadow-[0_4px_0_#E5E7EB] bg-white text-lg">Ich</div>
                 <div className="border-[3px] border-gray-200 rounded-2xl px-5 py-3 font-black text-gray-800 shadow-[0_4px_0_#E5E7EB] bg-white text-lg">bin</div>
                 <div className="border-[3px] border-dashed border-gray-200 bg-gray-50 rounded-2xl px-5 py-3 text-transparent text-lg font-black min-w-[100px]">glücklich</div>
              </div>
              
              {/* Chips */}
              <div className="flex flex-wrap gap-3 mt-auto mb-10 relative">
                 <div className="border-[3px] border-gray-200 bg-white text-gray-400 opacity-60 rounded-2xl px-5 py-3 font-black shadow-[0_4px_0_#E5E7EB] text-lg">traurig</div>
                 <div className="border-[3px] border-gray-200 bg-white text-gray-400 opacity-60 rounded-2xl px-5 py-3 font-black shadow-[0_4px_0_#E5E7EB] text-lg">und</div>
                 <div className="border-[3px] border-gray-200 bg-white text-gray-400 opacity-60 rounded-2xl px-5 py-3 font-black shadow-[0_4px_0_#E5E7EB] text-lg">sehr</div>
                 
                 {/* Dragged Chip */}
                 <div className="absolute top-[-110px] left-[110px] border-[3px] border-blue-400 bg-blue-50 text-blue-500 rounded-2xl px-5 py-3 font-black shadow-[0_6px_0_#60A5FA] z-20 cursor-grab active:cursor-grabbing transform -rotate-3 scale-110 text-lg">
                   glücklich
                 </div>

                 {/* Hand Cursor */}
                 <div className="absolute top-[-90px] left-[200px] z-30 drop-shadow-xl text-[#FDBA74] w-14 h-14">
                   <svg viewBox="0 0 24 24" fill="currentColor" stroke="#7C2D12" strokeWidth="1.5">
                      <path d="M14.5 9.5V4.5a2.5 2.5 0 0 0-5 0v10l-2.06-1.03a2.5 2.5 0 0 0-3.32 1.13L3.1 16.6a1 1 0 0 0 .15 1.17l5.3 6.36c.66.79 1.64 1.25 2.68 1.25h5.42a4 4 0 0 0 3.96-3.43l.8-5.64A3 3 0 0 0 18.23 13h-1.23V11.5a2.5 2.5 0 1 0-5 0v-2Z"/>
                   </svg>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
