#!/usr/bin/env python3
"""
YouHub Architecture Showcase - Production Server
Servidor Flask para servir o website de produção
"""

import os
from flask import Flask, send_from_directory, render_template_string
from pathlib import Path

app = Flask(__name__, static_folder='dist', static_url_path='')

# Diretório do build de produção
DIST_DIR = Path(__file__).parent / 'dist'


@app.route('/')
def serve_index():
    """Serve o arquivo index.html"""
    return send_from_directory(DIST_DIR, 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """Serve arquivos estáticos (CSS, JS, etc)"""
    file_path = DIST_DIR / path
    
    # Se o arquivo não existe, serve o index.html (para suportar SPA routing)
    if not file_path.exists():
        return send_from_directory(DIST_DIR, 'index.html')
    
    return send_from_directory(DIST_DIR, path)


@app.route('/health')
def health_check():
    """Endpoint de health check para monitoramento"""
    return {
        'status': 'healthy',
        'service': 'YouHub Architecture Showcase',
        'version': '1.0.0'
    }, 200


@app.errorhandler(404)
def not_found(error):
    """Redireciona 404 para index.html (SPA routing)"""
    return send_from_directory(DIST_DIR, 'index.html')


@app.errorhandler(500)
def server_error(error):
    """Tratamento de erro 500"""
    return {
        'error': 'Internal Server Error',
        'message': str(error)
    }, 500


if __name__ == '__main__':
    # Configurações de produção
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', 8000))
    debug = os.getenv('DEBUG', 'False').lower() == 'true'
    
    print(f"🚀 YouHub Architecture Showcase")
    print(f"📍 Servidor rodando em http://{host}:{port}")
    print(f"📁 Servindo arquivos de: {DIST_DIR}")
    print(f"🔍 Debug mode: {debug}")
    
    app.run(host=host, port=port, debug=debug)
