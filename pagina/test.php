<?php
/**
 * Test de verificación del proyecto PHP
 * Ejecuta: php test.php
 */

echo "🧪 Verificando configuración del proyecto Nicanor...\n\n";

// Verificar versión de PHP
echo "✓ Versión de PHP: " . phpversion() . "\n";

if (version_compare(phpversion(), '7.4.0', '>=')) {
    echo "  ✓ Versión compatible\n\n";
} else {
    echo "  ✗ Versión incompatible (se requiere PHP 7.4+)\n\n";
}

// Verificar archivos principales
$archivos_requeridos = [
    'config.php',
    'index.php',
    'login.php',
    'logout.php',
    'src/content/index.php',
    'src/js/script.js',
    'src/css/styles.css'
];

echo "📁 Verificando archivos:\n";
$archivos_faltantes = [];

foreach ($archivos_requeridos as $archivo) {
    if (file_exists(__DIR__ . '/' . $archivo)) {
        echo "  ✓ $archivo\n";
    } else {
        echo "  ✗ $archivo (FALTANTE)\n";
        $archivos_faltantes[] = $archivo;
    }
}

echo "\n";

// Verificar directorio de imágenes
if (is_dir(__DIR__ . '/src/img')) {
    $imagenes = glob(__DIR__ . '/src/img/*.jpg');
    echo "📸 Imágenes encontradas: " . count($imagenes) . "\n\n";
} else {
    echo "⚠️  Directorio de imágenes no encontrado\n\n";
}

// Verificar que las sesiones funcionan
echo "🔐 Verificando soporte de sesiones:\n";
if (session_start()) {
    echo "  ✓ Las sesiones están habilitadas\n";
    session_destroy();
} else {
    echo "  ✗ Error al iniciar sesiones\n";
}

echo "\n";

// Resumen
if (empty($archivos_faltantes)) {
    echo "✅ TODAS LAS VERIFICACIONES PASARON\n";
    echo "🚀 Puedes iniciar el servidor con: ./start-server.sh\n";
    echo "   O ejecutar: php -S localhost:8000\n";
} else {
    echo "❌ FALTAN ARCHIVOS:\n";
    foreach ($archivos_faltantes as $archivo) {
        echo "   - $archivo\n";
    }
}

echo "\n";
?>
