# Guia de Deployment - YouHub Architecture Showcase

Este documento fornece instruções passo a passo para fazer deploy do website em diferentes plataformas.

## 📋 Índice

1. [Vercel (Recomendado)](#vercel-recomendado)
2. [Netlify](#netlify)
3. [Heroku](#heroku)
4. [AWS](#aws)
5. [Google Cloud](#google-cloud)
6. [Azure](#azure)
7. [DigitalOcean](#digitalocean)
8. [Servidor Próprio](#servidor-próprio)

---

## Vercel (Recomendado)

Vercel é a plataforma ideal para aplicações Vite/React. Deploy é automático e gratuito.

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Git configurado

### Passos

1. **Fazer push para GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/youhub-showcase.git
git push -u origin main
```

2. **Importar no Vercel**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Clique em "Import Git Repository"
   - Selecione seu repositório
   - Vercel detectará automaticamente que é um projeto Vite
   - Clique em "Deploy"

3. **Configuração Automática**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Environment: Deixar em branco

✅ **Pronto!** Seu site estará disponível em `https://youhub-showcase.vercel.app`

---

## Netlify

Alternativa popular com suporte excelente a SPA.

### Pré-requisitos
- Conta no [Netlify](https://netlify.com)
- Git configurado

### Passos

1. **Conectar repositório**
   - Acesse [app.netlify.com](https://app.netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Selecione seu repositório

2. **Configurar build**
   - Build command: `pnpm build`
   - Publish directory: `dist`

3. **Deploy automático**
   - Netlify fará deploy automaticamente a cada push

✅ **Pronto!** Seu site estará disponível em `https://youhub-showcase.netlify.app`

---

## Heroku

Para deploy com servidor Flask em produção.

### Pré-requisitos
- Conta no [Heroku](https://heroku.com)
- Heroku CLI instalado
- Git configurado

### Passos

1. **Instalar Heroku CLI**
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Linux
curl https://cli-assets.heroku.com/install.sh | sh

# Windows
# Download em https://devcenter.heroku.com/articles/heroku-cli
```

2. **Login no Heroku**
```bash
heroku login
```

3. **Criar aplicação**
```bash
heroku create youhub-showcase
```

4. **Adicionar Procfile**
```bash
echo "web: python server.py" > Procfile
```

5. **Deploy**
```bash
git push heroku main
```

6. **Abrir aplicação**
```bash
heroku open
```

✅ **Pronto!** Seu site estará disponível em `https://youhub-showcase.herokuapp.com`

---

## AWS

Deploy com EC2 ou Elastic Beanstalk.

### Opção 1: EC2 com Docker

1. **Criar instância EC2**
   - AMI: Ubuntu 22.04 LTS
   - Tipo: t3.micro (free tier)
   - Security Group: Permitir portas 80, 443

2. **Conectar via SSH**
```bash
ssh -i sua-chave.pem ubuntu@seu-ip-publico
```

3. **Instalar Docker**
```bash
sudo apt update
sudo apt install -y docker.io
sudo usermod -aG docker ubuntu
```

4. **Clonar repositório**
```bash
git clone seu-repositorio.git
cd youhub-site
```

5. **Build e run com Docker**
```bash
docker build -t youhub:latest .
docker run -d -p 80:8000 --name youhub youhub:latest
```

6. **Configurar Nginx reverse proxy** (opcional)
```bash
sudo apt install -y nginx
# Configurar nginx.conf para proxy_pass http://localhost:8000
sudo systemctl restart nginx
```

### Opção 2: Elastic Beanstalk

1. **Instalar EB CLI**
```bash
pip install awsebcli
```

2. **Inicializar aplicação**
```bash
eb init -p docker youhub-showcase
```

3. **Criar ambiente**
```bash
eb create youhub-env
```

4. **Deploy**
```bash
eb deploy
```

5. **Abrir aplicação**
```bash
eb open
```

---

## Google Cloud

Deploy com Cloud Run (serverless).

### Pré-requisitos
- Conta Google Cloud
- Google Cloud CLI instalado

### Passos

1. **Autenticar**
```bash
gcloud auth login
gcloud config set project seu-project-id
```

2. **Build e push para Container Registry**
```bash
gcloud builds submit --tag gcr.io/seu-project-id/youhub-showcase
```

3. **Deploy no Cloud Run**
```bash
gcloud run deploy youhub-showcase \
  --image gcr.io/seu-project-id/youhub-showcase \
  --platform managed \
  --region us-central1 \
  --port 8000
```

✅ **Pronto!** URL será exibida no terminal

---

## Azure

Deploy com Azure Container Instances.

### Pré-requisitos
- Conta Azure
- Azure CLI instalado

### Passos

1. **Criar grupo de recursos**
```bash
az group create --name youhub-rg --location eastus
```

2. **Criar registro de container**
```bash
az acr create --resource-group youhub-rg \
  --name youhubregistry --sku Basic
```

3. **Build e push**
```bash
az acr build --registry youhubregistry \
  --image youhub-showcase:latest .
```

4. **Deploy container**
```bash
az container create --resource-group youhub-rg \
  --name youhub-showcase \
  --image youhubregistry.azurecr.io/youhub-showcase:latest \
  --ports 8000 \
  --environment-variables PORT=8000
```

---

## DigitalOcean

Deploy com App Platform (PaaS).

### Pré-requisitos
- Conta DigitalOcean
- Repositório GitHub conectado

### Passos

1. **Criar App**
   - Acesse [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
   - Clique em "Create App"
   - Selecione seu repositório

2. **Configurar build**
   - Build command: `pnpm build`
   - Run command: `python server.py`
   - HTTP port: `8000`

3. **Deploy**
   - Clique em "Deploy"

✅ **Pronto!** App estará disponível em `https://seu-app.ondigitalocean.app`

---

## Servidor Próprio

Para máxima controle em VPS próprio.

### Pré-requisitos
- VPS com Ubuntu 22.04
- SSH acesso
- Domínio (opcional)

### Passos

1. **Conectar ao servidor**
```bash
ssh root@seu-ip-vps
```

2. **Instalar dependências**
```bash
apt update && apt upgrade -y
apt install -y git curl wget python3 python3-pip nodejs npm
pip install flask
```

3. **Clonar repositório**
```bash
cd /var/www
git clone seu-repositorio.git youhub-site
cd youhub-site
```

4. **Instalar dependências Node**
```bash
npm install -g pnpm
pnpm install
```

5. **Build**
```bash
pnpm build
```

6. **Instalar PM2 (process manager)**
```bash
npm install -g pm2
```

7. **Iniciar aplicação com PM2**
```bash
pm2 start server.py --name "youhub"
pm2 startup
pm2 save
```

8. **Configurar Nginx**
```bash
apt install -y nginx
```

Criar `/etc/nginx/sites-available/youhub`:
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

9. **Ativar site**
```bash
ln -s /etc/nginx/sites-available/youhub /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

10. **SSL com Let's Encrypt**
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d seu-dominio.com
```

---

## Comparação de Plataformas

| Plataforma | Custo | Facilidade | Escalabilidade | Recomendação |
|-----------|-------|-----------|----------------|--------------|
| Vercel | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Melhor |
| Netlify | Gratuito | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Ótimo |
| Heroku | $7+/mês | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Bom |
| AWS | Variável | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Escalável |
| Google Cloud | Variável | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Escalável |
| Azure | Variável | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Escalável |
| DigitalOcean | $5+/mês | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Bom |
| Servidor Próprio | Variável | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ Complexo |

---

## Monitoramento e Manutenção

### Health Check
```bash
curl https://seu-dominio.com/health
```

### Logs
```bash
# Vercel
vercel logs

# Heroku
heroku logs --tail

# PM2
pm2 logs youhub
```

### Atualizar aplicação
```bash
git pull origin main
pnpm build
pm2 restart youhub
```

---

## Troubleshooting

### Porta já em uso
```bash
lsof -i :8000
kill -9 <PID>
```

### Permissões negadas
```bash
chmod +x server.py
```

### Erro de módulo Python
```bash
pip install -r requirements.txt
```

---

## Suporte

Para dúvidas sobre deployment, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com)
- [Documentação Heroku](https://devcenter.heroku.com)
- [Documentação AWS](https://docs.aws.amazon.com)

---

**YouHub Architecture Showcase** - Pronto para o mundo! 🚀
