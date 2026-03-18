import { BookOpen, BarChart2, Compass } from "./Icons";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white px-4 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black mb-2 text-gray-900">Features</h2>
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Horizontal Nav Bar Style Box */}
        <div className="flex flex-col md:flex-row bg-gray-50 border border-gray-100 rounded-3xl p-2 mb-10 shadow-sm relative overflow-hidden">
          
          {/* Active Tab Background (Simulated) */}
          <div className="hidden md:block absolute left-2 top-2 bottom-2 w-[32%] bg-primary rounded-2xl shadow-[0_4px_0_#D32F2F]"></div>

          <div className="flex-1 flex items-center justify-center py-4 px-6 md:text-white font-bold gap-3 relative z-10 md:bg-transparent bg-primary rounded-2xl mb-2 md:mb-0 shadow-[0_4px_0_#D32F2F] md:shadow-none">
            <BookOpen className="w-6 h-6" />
            <span className="text-lg">Phrasebook</span>
          </div>

          <div className="flex-1 flex items-center justify-center py-4 px-6 text-gray-600 font-bold gap-3 hover:text-gray-900 transition-colors">
            <BarChart2 className="w-6 h-6 text-blue-500" />
            <span className="text-lg">Stats</span>
          </div>

          <div className="flex-1 flex items-center justify-center py-4 px-6 text-gray-600 font-bold gap-3 hover:text-gray-900 transition-colors">
            <Compass className="w-6 h-6 text-[#1E3A8A]" />
            <span className="text-lg">Explore</span>
          </div>
        </div>

        {/* Features Content Columns */}
        <div className="grid md:grid-cols-3 gap-8 px-4 justify-items-center md:justify-items-start">
          
          <div className="text-center md:text-left text-sm md:text-base">
            <h3 className="font-bold text-gray-900 mb-2">Practical Phrases: Access 500+ daily expressions for travel, dining, and connections.</h3>
            <p className="text-gray-600">
              Learn essential phrases with accurate Swiss German translations and context.
            </p>
          </div>

          <div className="text-center md:text-left text-sm md:text-base">
            <h3 className="font-bold text-gray-900 mb-2">Track Your Progress:</h3>
            <p className="text-gray-600">
              Monitor your daily streaks, level up, and celebrate milestones.
            </p>
          </div>

          <div className="text-center md:text-left text-sm md:text-base">
            <h3 className="font-bold text-gray-900 mb-2">Discover Local Culture:</h3>
            <p className="text-gray-600">
              Explore Swiss German dialects, vocabulary, and cultural insights across regions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
