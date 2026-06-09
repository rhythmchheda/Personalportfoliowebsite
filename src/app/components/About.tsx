export function About() {
  return (
    <section id="about" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">About Me</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              A software engineer focused on building scalable full-stack systems, 
              machine learning, and modern web applications. Experience spans backend development, 
              ML pipelines, and full-stack engineering, with projects designed around performance, 
              reliability, and real-world impact.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Work centers on integrating intelligent systems with robust software design—developing 
              solutions that move beyond experimentation into usable products. Projects include 
              predictive analytics platforms, recommendation systems, performance-critical backend 
              services, and ML-driven applications, always with an emphasis on clean architecture 
              and scalability.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Beyond engineering, discipline and ownership extend outside code. Competed at the 
              state level in swimming in India and worked as a Red Cross–certified lifeguard at 
              the UT Dallas UREC pool—experiences that reinforce focus, accountability, and 
              performing reliably under pressure.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-900 rounded p-4 sm:p-6">
              <p className="text-white mb-2 text-sm sm:text-base">Education</p>
              <p className="text-gray-400 text-sm sm:text-base">Master's in Information Technology Management</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">University of Texas at Dallas</p>
            </div>
            <div className="bg-zinc-900 rounded p-4 sm:p-6">
              <p className="text-white mb-2 text-sm sm:text-base">Experience</p>
              <p className="text-gray-400 text-xs sm:text-sm">Backend Engineer</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Unaport AI (2021-2023)</p>
            </div>
            <div className="bg-zinc-900 rounded p-4 sm:p-6">
              <p className="text-white mb-2 text-sm sm:text-base">Focus</p>
              <p className="text-gray-400 text-xs sm:text-sm">• Distributed Systems</p>
              <p className="text-gray-400 text-xs sm:text-sm">• Machine Learning</p>
              <p className="text-gray-400 text-xs sm:text-sm">• Web Development & Frontend Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}