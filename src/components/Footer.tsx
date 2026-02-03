import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Documentação', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Contato', href: '#' }
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold gradient-text">YouHub</span>
            </div>
            <p className="text-slate-400 text-sm">
              Plataforma convergente de conteúdo e e-commerce para a Creator Economy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Documentação</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Guia de Início</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Sobre</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Licenças</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} YouHub. Todos os direitos reservados. Desenvolvido como TCC de Sistemas de Informação.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
