import { Database, Server, Layers } from 'lucide-react'

export default function Architecture() {
  const layers = [
    {
      icon: Server,
      title: 'Camada de Apresentação',
      description: 'Frontend React com TypeScript, responsivo e otimizado para múltiplos dispositivos.'
    },
    {
      icon: Layers,
      title: 'Microsserviços',
      description: 'Serviços independentes para vídeo, checkout, perfil e e-commerce com Docker e Kubernetes.'
    },
    {
      icon: Database,
      title: 'Persistência Poliglota',
      description: 'PostgreSQL (transações), MongoDB (conteúdo), Redis (cache e sessões).'
    }
  ]

  const databases = [
    {
      name: 'PostgreSQL',
      use: 'Dados transacionais, usuários e pedidos',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'MongoDB',
      use: 'Posts, comentários e logs de atividade',
      color: 'from-green-600 to-green-400'
    },
    {
      name: 'Redis',
      use: 'Cache de sessões e feeds em tempo real',
      color: 'from-red-600 to-red-400'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Arquitetura do Sistema</h2>
          <p className="section-subtitle">Construída para escala, confiabilidade e performance</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{layer.title}</h3>
                    <p className="text-slate-400 text-sm">{layer.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-8">Persistência Poliglota</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {databases.map((db, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                <div className={`h-1 w-12 bg-gradient-to-r ${db.color} rounded mb-4`}></div>
                <h4 className="text-lg font-semibold text-white mb-2">{db.name}</h4>
                <p className="text-slate-400 text-sm">{db.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
