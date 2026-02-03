import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
              🚀 Plataforma Inovadora
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">YouHub</span>
            <br />
            Convergência de Conteúdo e Comércio
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            Uma solução revolucionária que integra streaming de vídeo com e-commerce nativo, permitindo que criadores monetizem sua influência através de um sistema de afiliados inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>Explorar Arquitetura</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 border border-slate-600 hover:border-indigo-500 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Ver Demonstração</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <div className="text-2xl font-bold text-indigo-400">20</div>
              <div className="text-sm text-slate-400">Páginas Funcionais</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">∞</div>
              <div className="text-sm text-slate-400">Escalabilidade</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">AI</div>
              <div className="text-sm text-slate-400">Inteligência</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl blur-3xl opacity-20"></div>
          <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
                <p className="text-slate-300">Arquitetura YouHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
