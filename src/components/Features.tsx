import { Video, MessageSquare, Sparkles, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Video,
      title: 'Streaming Adaptável',
      description: 'Protocolos HLS/DASH para melhor experiência em qualquer conexão',
      items: ['Múltiplas resoluções', 'Sem travamentos', 'Qualidade automática']
    },
    {
      icon: Sparkles,
      title: 'IA e Machine Learning',
      description: 'Recomendações personalizadas e moderação inteligente de conteúdo',
      items: ['Filtragem colaborativa', 'Visão computacional', 'Moderação automática']
    },
    {
      icon: Users,
      title: 'Comunidade Engajada',
      description: 'Ferramentas de interação para criar comunidades vibrantes',
      items: ['Comentários', 'Live streaming', 'Stories efêmeros']
    },
    {
      icon: MessageSquare,
      title: 'Busca Semântica',
      description: 'Resultados inteligentes que combinam vídeos, criadores e produtos',
      items: ['Busca unificada', 'Resultados contextuais', 'Descoberta orgânica']
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Funcionalidades Principais</h2>
          <p className="section-subtitle">Tecnologias de ponta para melhor experiência</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-indigo-600/40 group-hover:to-pink-600/40 transition-colors">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
