#!/bin/bash

# Script simple para publicar cambios

echo "🚀 Preparando para actualizar tu sitio..."

# Añadir todos los cambios
git add .

# Preguntar por el mensaje del commit
echo "📝 Describe brevemente tus cambios (ej: 'corregir color título'):"
read msg

# Si el mensaje está vacío, usar uno por defecto
if [ -z "$msg" ]; then
    msg="Actualización del sitio"
fi

# Guardar cambios
git commit -m "$msg"

# Subir a GitHub
echo "⬆️ Subiendo cambios a GitHub..."
git push

echo "✅ ¡Listo! Vercel detectará el cambio y actualizará tu web en 1 minuto aproximadamente."
echo "🌍 Tu enlace de Vercel seguirá siendo el mismo."
