import { Globe, Sparkles, MoveRight } from "./Icons";

export default function Hero() {
  return (
    <section className="pt-24 pb-32 px-4 sm:px-6 overflow-hidden relative flex justify-center">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-primary font-bold text-sm border-2 border-red-100">
            <Sparkles className="w-4 h-4" />
            <span>The #1 Swiss German Learning App</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
            Say <span className="text-primary relative">
              Hoi!
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span><br />
            Like a Local.
          </h1>
          
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto lg:mx-0">
            Learn Schwiizertüütsch through fun, bite-sized lessons. Master the vocabulary, understand the dialects, and confidently speak with native speakers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="playful-button text-lg px-8 py-4 w-full sm:w-auto hover:bg-primary-dark">
              Start Learning Free
            </button>
            <button className="playful-button-secondary text-lg px-8 py-4 w-full sm:w-auto group">
              See How It Works
              <MoveRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Device Mockup containing 'Build a Sentence' */}
        <div className="flex-1 w-full max-w-md relative z-10 perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] blur-2xl opacity-20 transform rotate-6"></div>
          
          <div className="relative border-[12px] border-gray-900 rounded-[3rem] bg-white shadow-2xl overflow-hidden" style={{ aspectRatio: '9/19' }}>
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 w-32 h-6 bg-gray-900 mx-auto rounded-b-xl z-20"></div>
            
            {/* App UI Simulation */}
            <div className="p-6 pt-12 h-full flex flex-col bg-gray-50">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                <div className="bg-primary h-2.5 rounded-full w-[45%]"></div>
              </div>
              
              <h2 className="text-2xl font-black mb-6">Translate this sentence</h2>
              
              {/* Target Character (Animated mascot look) */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex border-2 border-blue-200 justify-center items-center shadow-sm relative overflow-hidden">
                   <div className="w-12 h-12 bg-accent-blue rounded-full relative">
                      {/* Eyes */}
                      <div className="absolute w-2 h-2 bg-gray-900 rounded-full top-3 left-2"></div>
                      <div className="absolute w-2 h-2 bg-gray-900 rounded-full top-3 right-2"></div>
                      {/* Mouth */}
                      <div className="absolute w-4 h-3 bg-gray-900 rounded-b-full bottom-2 left-4 overflow-hidden">
                          <div className="absolute bottom-0 w-full h-1.5 bg-red-400"></div>
                      </div>
                   </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl rounded-tl-none font-bold text-lg shadow-sm relative">
                  I am happy.
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-l-2 border-t-2 border-gray-200 transform -rotate-45 -translate-x-1/2 translate-y-1"></div>
                </div>
              </div>
              
              <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-8 flex gap-2 min-h-[3rem]">
                 <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-2 font-bold shadow-[0_3px_0_#E5E7EB] text-gray-800">Ich</div>
                 <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-2 font-bold shadow-[0_3px_0_#E5E7EB] text-gray-800">bin</div>
              </div>
              
              {/* Word Chips */}
              <div className="flex flex-wrap gap-3 mt-auto">
                 <div className="bg-white border-2 border-gray-200 opacity-30 rounded-xl px-4 py-3 font-bold text-gray-800">Ich</div>
                 <div className="bg-white border-2 border-primary text-primary rounded-xl px-4 py-3 font-bold shadow-[0_4px_0_#EE3E38] transform -translate-y-1">glücklich</div>
                 <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 font-bold shadow-[0_4px_0_#E5E7EB] text-gray-800">traurig</div>
                 <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 font-bold shadow-[0_4px_0_#E5E7EB] text-gray-800">und</div>
                 <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 font-bold shadow-[0_4px_0_#E5E7EB] text-gray-800">sehr</div>
                 <div className="bg-white border-2 border-gray-200 opacity-30 rounded-xl px-4 py-3 font-bold text-gray-800">bin</div>
              </div>

              <button className="playful-button w-full mt-8 py-4 opacity-50 cursor-not-allowed">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
