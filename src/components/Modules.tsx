import { Home, Video, ShoppingCart, User, BarChart3, Settings, HelpCircle, Lock } from 'lucide-react'
import { useState } from 'react'

export default function Modules() {
  const [selectedCategory, setSelectedCategory] = useState('conteudo')

  const modules = {
    conteudo: [
      { icon: Home, name: 'Home Page', description: 'Feed principal com recomendações baseadas em IA' },
      { icon: Video, name: 'YouHub Shorts', description: 'Vídeos curtos com rolagem infinita' },
      { icon: Video, name: 'Player de Vídeo', description: 'Streaming com HLS e comentários integrados' },
      { icon: Video, name: 'Live Streaming', description: 'Transmissões ao vivo com chat e vitrine' },
      { icon: Home, name: 'Feed da Comunidade', description: 'Posts de fotos, GIFs e enquetes' },
      { icon: Video, name: 'Gerenciador de Upload', description: 'Upload e processamento de vídeos' }
    ],
    ecommerce: [
      { icon: ShoppingCart, name: 'Marketplace', description: 'Página principal com categorias e ofertas' },
      { icon: ShoppingCart, name: 'Detalhes do Produto', description: 'Fotos, descrição e vídeos de review' },
      { icon: ShoppingCart, name: 'Carrinho', description: 'Listagem com frete e cupons' },
      { icon: ShoppingCart, name: 'Checkout', description: 'Pagamento seguro com split automático' }
    ],
    gestao: [
      { icon: User, name: 'Perfil Público', description: 'Vídeos, shorts e loja do criador' },
      { icon: BarChart3, name: 'Dashboard Criador', description: 'Métricas de visualização e ganhos' },
      { icon: BarChart3, name: 'Painel Vendedor', description: 'Gestão de estoque e pedidos' },
      { icon: Home, name: 'Notificações', description: 'Alertas de novos vídeos e pedidos' },
      { icon: Settings, name: 'Configurações', description: 'Dados pessoais e preferências' },
      { icon: Home, name: 'Busca Semântica', description: 'Resultados unificados de vídeos e produtos' },
      { icon: HelpCircle, name: 'Central de Ajuda', description: 'FAQ e suporte ao usuário' },
      { icon: Lock, name: 'Painel Admin', description: 'Moderação e relatórios financeiros' }
    ]
  }

  const categories = [
    { id: 'conteudo', label: 'Conteúdo & Interação', count: 6 },
    { id: 'ecommerce', label: 'E-commerce', count: 4 },
    { id: 'gestao', label: 'Gestão & Suporte', count: 8 }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">20 Módulos Funcionais</h2>
          <p className="section-subtitle">Plataforma completa com todas as funcionalidades necessárias</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat.label} <span className="ml-2 text-sm opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules[selectedCategory as keyof typeof modules].map((module, index) => {
            const Icon = module.icon
            return (
              <div key={index} className="card group hover:bg-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600/30 to-pink-600/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-indigo-600/50 group-hover:to-pink-600/50 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{module.name}</h4>
                    <p className="text-sm text-slate-400">{module.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600/10 to-pink-600/10 border border-indigo-500/20 rounded-xl p-8 text-center">
          <p className="text-slate-300 mb-4">
            A plataforma YouHub integra <span className="font-bold text-indigo-400">20 módulos funcionais</span> organizados em três categorias principais, garantindo uma experiência completa e profissional para criadores, vendedores e consumidores.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <div>
              <div className="text-2xl font-bold text-indigo-400">6</div>
              <div className="text-sm text-slate-400">Módulos de Conteúdo</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">4</div>
              <div className="text-sm text-slate-400">Módulos E-commerce</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">8</div>
              <div className="text-sm text-slate-400">Módulos de Gestão</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
