import { BookOpen, Compass, BarChart2 } from "./Icons";

const features = [
  {
    icon: Compass,
    title: "Explore the Dialects",
    description: "Switzerland is diverse. Our lessons guide you through the cultural nuances and vocabulary of different regions.",
    color: "bg-blue-100",
    iconColor: "text-accent-blue",
    borderColor: "border-blue-200"
  },
  {
    icon: BookOpen,
    title: "Daily Phrasebook",
    description: "Access over 500+ essential daily expressions for travel, dining, and making connections instantly.",
    color: "bg-red-100",
    iconColor: "text-primary",
    borderColor: "border-red-200"
  },
  {
    icon: BarChart2,
    title: "Track Your Stats",
    description: "Monitor your daily streaks, level up your profile, and celebrate major learning milestones.",
    color: "bg-green-100",
    iconColor: "text-accent-green",
    borderColor: "border-green-200"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white px-4 sm:px-6 flex justify-center border-t-2 border-gray-100 rounded-t-[3rem] -mt-8 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600 font-medium">
            Designed to make language learning sticky, fun, and highly effective for everyday Swiss life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-gray-300 transition-colors shadow-sm hover:shadow-md flex flex-col items-start group">
              <div className={`w-14 h-14 rounded-2xl ${feature.color} border-2 ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
