import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'GoLang Developer',
    company: 'F2Onsite',
    period: 'Aug 2024 – Present',
    description: `Engineered concurrent Go microservices using goroutines and channels, boosting throughput by 25% under peak loads of 15K+ requests. Managed backend deployments on AWS ECS/EKS and Lambda, optimizing resource allocation to cut cloud costs by 18%.

Containerized services using Docker and orchestrated via Kubernetes, reducing multi-environment setup times by 30%. Built automated GitHub Actions CI/CD pipelines, accelerating delivery velocity from bi-weekly to daily production releases.

Designed robust RESTful APIs and integrated Kafka/SQS messaging queues, ensuring zero-loss distributed streaming. Optimized PostgreSQL and DynamoDB queries to achieve sub-30ms read latency while maintaining 92% test coverage.`,
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Unaport AI',
    period: 'Mar 2021 – July 2023',
    description: `Worked as a Backend Engineer at Unaport.ai, an RBI-regulated NBFC-Account Aggregator building consent-based financial data infrastructure for banks and NBFCs across India's Account Aggregator ecosystem.

Owned end-to-end backend development for the FIU platform — designing and scaling Java + Spring Boot services that integrated with 6+ Account Aggregator APIs to enable secure, consent-driven financial data access for 80+ institutions. Re-architected core platform services into microservices, significantly improving deployment speed and system maintainability.

Built and productionized backend pipelines for the Bank Statement Analyzer — powering automated income verification, cashflow analysis, and fraud signal detection used directly by NBFC underwriters in credit decisioning workflows. Integrated ML models into production systems to surface creditworthiness insights at scale.

Contributed to frontend delivery of a React-based operations dashboard with RBAC and real-time consent tracking, consolidating workflows for underwriting and compliance teams. Drove observability improvements through structured logging, metrics dashboards, and alerting — supporting both operational reliability and ISO 27001 audit requirements.`,
    stack: 'Java · Spring Boot · React · AWS Lambda · MongoDB · Microservices · Account Aggregator APIs',
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white mb-6 text-2xl sm:text-3xl">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-zinc-900 rounded p-6 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-2 md:mb-0">
                  <div className="p-2 bg-red-600/10 rounded flex-shrink-0">
                    <Briefcase className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg">{exp.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm ml-11 md:ml-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="ml-0 sm:ml-11 space-y-3">
                {exp.description.split('\n\n').map((para, index) => (
                  <p key={index} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
