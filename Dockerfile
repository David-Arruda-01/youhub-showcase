# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build de produção
RUN pnpm build

# Production stage
FROM python:3.11-slim

WORKDIR /app

# Instalar Flask
RUN pip install --no-cache-dir flask

# Copiar build de produção do stage anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.py ./server.py

# Expor porta
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

# Comando de inicialização
ENV HOST=0.0.0.0
ENV PORT=8000
CMD ["python", "server.py"]
