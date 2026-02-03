# Guia de Deploy no Vercel - YouHub Showcase

## 🎯 Objetivo
Fazer deploy permanente do website YouHub no Vercel com HTTPS e domínio personalizado.

## ✅ Pré-requisitos
- ✓ Repositório GitHub criado: `https://github.com/David-Arruda-01/youhub-showcase`
- ✓ Código já foi feito push para o repositório
- ✓ Conta no Vercel (pode usar login com GitHub)

## 📋 Passo a Passo

### Passo 1: Acessar Vercel
1. Abra seu navegador e acesse: **https://vercel.com**
2. Clique em **"Sign Up"** ou **"Log In"**
3. Selecione **"Continue with GitHub"**
4. Autorize o Vercel a acessar sua conta GitHub

### Passo 2: Importar Repositório
1. Após fazer login, você será redirecionado para o dashboard
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Procure por **"youhub-showcase"** na lista
5. Clique em **"Import"**

### Passo 3: Configurar Projeto
A página de configuração abrirá. Verifique:

**Project Name:** `youhub-showcase` (ou customize conforme desejar)

**Framework Preset:** Vercel detectará automaticamente como **Vite**

**Build Command:** Deixar como padrão (deve ser `pnpm build`)

**Output Directory:** Deixar como padrão (deve ser `dist`)

**Environment Variables:** Deixar em branco (não há variáveis obrigatórias)

### Passo 4: Deploy
1. Clique em **"Deploy"**
2. Aguarde o build ser concluído (normalmente 2-3 minutos)
3. Você verá uma mensagem "Congratulations! Your project has been successfully deployed"

### Passo 5: Acessar o Site
Após o deploy, você receberá uma URL como:
```
https://youhub-showcase.vercel.app
```

Clique nela para acessar seu website permanente!

## 🌐 Configurar Domínio Personalizado (Opcional)

Se você tiver um domínio próprio, pode conectá-lo ao Vercel:

### Opção A: Domínio Gratuito
Vercel oferece subdomínios gratuitos. Para usar um domínio personalizado:

1. No dashboard do Vercel, vá para seu projeto
2. Clique em **"Settings"** → **"Domains"**
3. Clique em **"Add"**
4. Digite seu domínio (ex: `youhub.com`)
5. Siga as instruções para atualizar os registros DNS no seu provedor de domínio

### Opção B: Usar Domínio Existente
Se você já tem um domínio registrado:

1. Acesse o painel do seu registrador de domínio (GoDaddy, Namecheap, etc)
2. Procure por "DNS Records" ou "Nameservers"
3. Atualize os registros conforme instruído pelo Vercel
4. Aguarde a propagação (pode levar até 24 horas)

## 🔄 Deploy Automático

Depois que o repositório estiver conectado ao Vercel:

- **Toda vez que você fazer push para `master`**, o Vercel fará deploy automaticamente
- Você pode ver o status do deploy em tempo real no dashboard
- Cada deploy recebe uma URL única para preview

### Exemplo de Workflow:
```bash
# Fazer alterações no código
git add .
git commit -m "Update: nova seção adicionada"
git push origin master

# Vercel detecta o push e faz deploy automaticamente
# Seu site é atualizado em poucos minutos!
```

## 📊 Monitoramento

No dashboard do Vercel você pode:
- ✅ Ver histórico de deployments
- ✅ Visualizar logs de build
- ✅ Monitorar performance
- ✅ Configurar variáveis de ambiente
- ✅ Gerenciar domínios
- ✅ Ver analytics

## 🔒 HTTPS Automático

Vercel fornece HTTPS automaticamente para:
- Domínios `*.vercel.app`
- Domínios personalizados conectados

Certificado SSL é renovado automaticamente.

## 🚀 Próximos Passos

### 1. Fazer Deploy Agora
Siga os passos 1-5 acima para fazer o deploy imediato.

### 2. Conectar Domínio (Opcional)
Se tiver um domínio, siga a seção "Configurar Domínio Personalizado".

### 3. Compartilhar URL
Após o deploy, compartilhe a URL com:
- Professores/orientadores
- Colegas
- Redes sociais
- Portfolio profissional

### 4. Manutenção Contínua
Para fazer atualizações:
```bash
cd /home/ubuntu/youhub-site
git add .
git commit -m "Descrição da mudança"
git push origin master
# Vercel fará deploy automaticamente!
```

## 📞 Suporte

Se tiver problemas durante o deploy:

1. **Erro de Build:** Verifique os logs no Vercel Dashboard → Deployments
2. **Domínio não funciona:** Aguarde propagação DNS (até 24h)
3. **Site não carrega:** Limpe cache do navegador (Ctrl+Shift+Del)
4. **Documentação Vercel:** https://vercel.com/docs

## ✨ Resultado Final

Após completar todos os passos, você terá:

✅ Website permanente com HTTPS
✅ URL pública acessível 24/7
✅ Deploy automático a cada atualização
✅ Performance otimizada globalmente
✅ Certificado SSL gratuito
✅ Domínio personalizado (opcional)

---

**Parabéns! Seu website YouHub está pronto para o mundo! 🌍🚀**
