import { ShoppingCart, DollarSign, Zap, BarChart3 } from 'lucide-react'

export default function EcommerceSolution() {
  const steps = [
    {
      number: '1',
      title: 'Criador Vincula Produto',
      description: 'Criador seleciona produtos para vincular ao seu vídeo'
    },
    {
      number: '2',
      title: 'Usuário Compra',
      description: 'Espectador clica no link e realiza a compra'
    },
    {
      number: '3',
      title: 'Split Automático',
      description: 'Valor é dividido entre vendedor e afiliado'
    },
    {
      number: '4',
      title: 'Recebimento Instantâneo',
      description: 'Criador recebe sua comissão imediatamente'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Monetização Justa',
      description: 'Sistema transparente de split de pagamento'
    },
    {
      icon: Zap,
      title: 'Integração Profunda',
      description: 'Conteúdo e comércio totalmente integrados'
    },
    {
      icon: BarChart3,
      title: 'Métricas Detalhadas',
      description: 'Dashboard com análise completa de vendas'
    },
    {
      icon: ShoppingCart,
      title: 'Experiência Fluida',
      description: 'Checkout otimizado e sem fricção'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Ecossistema de E-commerce</h2>
          <p className="section-subtitle">Sistema de Split de Pagamento Automatizado</p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="card">
                <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
