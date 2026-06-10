import { Download, FileText } from 'lucide-react';

export function Resume() {
  // Google Drive resume PDF (converted to direct download link)
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1v5QoMqh3WvknDgVR19a3FT4g27n_Wh9Y';
  
  return (
    <section id="resume" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">Resume</h2>
        
        {/* Download Card */}
        <div className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-colors border border-gray-800 hover:border-red-600 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-red-600/10 rounded-full mb-4">
              <FileText className="text-red-600" size={48} />
            </div>
            <h3 className="text-white mb-2 text-lg sm:text-xl">Download Resume</h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Get a PDF copy of my complete resume with detailed experience and qualifications.
            </p>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Highlights */}
        <div className="mt-8 bg-zinc-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-white mb-4 text-lg sm:text-xl">Resume Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-red-600 text-2xl sm:text-3xl mb-2">MS</div>
              <p className="text-gray-400 text-xs sm:text-sm">Information Technology & Management</p>
              <p className="text-gray-500 text-xs mt-1">UT Dallas (2023-2025)</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-2xl sm:text-3xl mb-2">2.5+</div>
              <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
              <p className="text-gray-500 text-xs mt-1">Software Development</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-2xl sm:text-3xl mb-2">3+</div>
              <p className="text-gray-400 text-xs sm:text-sm">Major Projects</p>
              <p className="text-gray-500 text-xs mt-1">AI/ML & Full Stack</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-2xl sm:text-3xl mb-2">4</div>
              <p className="text-gray-400 text-xs sm:text-sm">Certifications</p>
              <p className="text-gray-500 text-xs mt-1">ML & Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}