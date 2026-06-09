const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['Regression', 'Classification', 'Clustering', 'Neural Networks', 'Data Pipelines', 'API Development'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'Python', 'Golang', 'R', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (Lambda, EC2, RDS)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Jenkins', 'Git', 'Snowflake'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900 rounded p-6 hover:bg-zinc-800 transition-colors"
            >
              <h3 className="text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}