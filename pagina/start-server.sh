#!/bin/bash

# Script para iniciar el servidor PHP integrado
# Uso: ./start-server.sh

echo "🚀 Iniciando servidor PHP para el proyecto Nicanor..."
echo ""
echo "📌 Credenciales de acceso:"
echo "   Usuario: Nicanor"
echo "   Contraseña: niñoLloron"
echo ""
echo "🌐 El servidor estará disponible en: http://localhost:8000"
echo ""
echo "⚠️  Presiona Ctrl+C para detener el servidor"
echo ""
echo "----------------------------------------"
echo ""

# Iniciar el servidor PHP en el puerto 8000
php -S localhost:8000
