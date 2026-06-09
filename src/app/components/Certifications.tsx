import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Machine Learning Foundations: A Case Study Approach',
      provider: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/certificate/VZFJ3PYE2FW8',
    },
    {
      title: 'Introduction to R',
      provider: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/9d014edf10491991d11af0ea4d5fb62b58ff696c',
    },
    {
      title: 'Intermediate R',
      provider: 'DataCamp',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/036fb66a5d24ed858f04cfb0c2d51d740f53d765',
    },
    {
      title: 'Introduction to SQL',
      provider: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/certificate/J6H2YPCH7QCL',
    },
  ];

  return (
    <section id="certifications" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-red-600" size={32} />
          <h2 className="text-white text-2xl sm:text-3xl">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 border border-gray-800 hover:border-red-600 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-red-600 flex-shrink-0" size={24} />
                  <ExternalLink className="text-gray-500 group-hover:text-red-600 transition-colors" size={16} />
                </div>
                <h3 className="text-white mb-2 group-hover:text-red-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mt-auto">{cert.provider}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}