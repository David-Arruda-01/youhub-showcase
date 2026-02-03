import { Code2, Cloud, Database, Zap } from 'lucide-react'

export default function Technology() {
  const techStack = [
    {
      category: 'Frontend',
      icon: Code2,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Backend & Orquestração',
      icon: Cloud,
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'FastAPI']
    },
    {
      category: 'Dados',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      category: 'IA & Processamento',
      icon: Zap,
      technologies: ['Machine Learning', 'Visão Computacional', 'HLS/DASH', 'AWS Rekognition']
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-subtitle">Tecnologias modernas e escaláveis</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.technologies.map((t, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
