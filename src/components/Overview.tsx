import { Users, TrendingUp, Zap, Shield } from 'lucide-react'

export default function Overview() {
  const features = [
    {
      icon: Users,
      title: 'Creator Economy',
      description: 'Empodera criadores de conteúdo a monetizar sua influência de forma justa e transparente.'
    },
    {
      icon: TrendingUp,
      title: 'Social Commerce',
      description: 'Integração profunda entre conteúdo e transações de e-commerce para conversão otimizada.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Arquitetura de microsserviços escalável com streaming adaptável (HLS/DASH).'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Sistema de pagamento seguro com split automatizado e moderação por IA.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Por que YouHub?</h2>
          <p className="section-subtitle">A plataforma que une entretenimento e comércio de forma inovadora</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card group">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600/40 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
