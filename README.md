# YouHub Architecture Showcase

Plataforma convergente de conteúdo e e-commerce - Website de apresentação da arquitetura.

## 📋 Visão Geral

Este website apresenta a arquitetura completa da plataforma **YouHub**, uma solução inovadora que integra streaming de vídeo com e-commerce nativo. O site foi desenvolvido com tecnologias modernas e é totalmente responsivo.

### ✨ Características

- **20 Módulos Funcionais** organizados em 3 categorias
- **Arquitetura de Microsserviços** com persistência poliglota
- **Sistema de E-commerce** com split de pagamento automatizado
- **IA e Machine Learning** para recomendações e moderação
- **Streaming Adaptável** com HLS/DASH
- **Design Moderno** com Tailwind CSS e animações

## 🛠️ Stack Tecnológico

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (ícones)

### Backend (Produção)
- Python 3.11
- Flask
- Docker & Docker Compose

## 🚀 Início Rápido

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:5173
```

### Build de Produção

```bash
# Fazer build
pnpm build

# Servir com Flask
python server.py

# Acessar em http://localhost:8000
```

## 🐳 Docker

### Build da Imagem

```bash
docker build -t youhub-showcase:latest .
```

### Executar Container

```bash
docker run -p 8000:8000 youhub-showcase:latest
```

### Docker Compose

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f youhub-web
```

## 📁 Estrutura do Projeto

```
youhub-site/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── Architecture.tsx
│   │   ├── EcommerceSolution.tsx
│   │   ├── Features.tsx
│   │   ├── Technology.tsx
│   │   ├── Modules.tsx
│   │   └── Footer.tsx
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── dist/                   # Build de produção (gerado)
├── public/                 # Arquivos estáticos
├── index.html              # HTML principal
├── server.py               # Servidor Flask
├── Dockerfile              # Configuração Docker
├── docker-compose.yml      # Orquestração Docker
├── vite.config.ts          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências
```

## 📱 Seções do Website

### 1. Hero Section
Apresentação impactante com call-to-action e estatísticas principais.

### 2. Overview
Visão geral com 4 pilares: Creator Economy, Social Commerce, Performance e Segurança.

### 3. Arquitetura do Sistema
Detalhamento das 3 camadas (Apresentação, Microsserviços, Persistência) e bancos de dados.

### 4. Ecossistema de E-commerce
Fluxo de split de pagamento automatizado em 4 etapas.

### 5. Funcionalidades Principais
Streaming adaptável, IA, comunidade e busca semântica.

### 6. Stack Tecnológico
Tecnologias utilizadas em 4 categorias: Frontend, Backend, Dados e IA.

### 7. 20 Módulos Funcionais
Todos os módulos com abas interativas:
- 6 módulos de Conteúdo & Interação
- 4 módulos de E-commerce
- 8 módulos de Gestão & Suporte

### 8. Footer
Links, informações e redes sociais.

## 🔧 Variáveis de Ambiente

```bash
# Servidor
HOST=0.0.0.0
PORT=8000
DEBUG=False
```

## 📊 Health Check

O servidor expõe um endpoint de health check:

```bash
curl http://localhost:8000/health
```

Resposta esperada:
```json
{
  "status": "healthy",
  "service": "YouHub Architecture Showcase",
  "version": "1.0.0"
}
```

## 🌐 Deployment

### Vercel (Recomendado para Frontend)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Heroku

```bash
# Instalar Heroku CLI
# Fazer login
heroku login

# Criar app
heroku create youhub-showcase

# Deploy
git push heroku main
```

### AWS / Google Cloud / Azure

Use Docker Compose ou Kubernetes para orquestração em produção.

## 🔐 Segurança

- ✅ HTTPS recomendado em produção
- ✅ CORS configurável
- ✅ Health checks automáticos
- ✅ Sem dados sensíveis no código

## 📝 Licença

Este projeto é desenvolvido como TCC de Sistemas de Informação.

## 👨‍💻 Autor

Desenvolvido como trabalho de conclusão de curso (TCC) em Sistemas de Informação.

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos links no footer do website.

---

**YouHub** - Convergência de Conteúdo e Comércio Eletrônico 🚀
