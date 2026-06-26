# Proyecto Nicanor - Versión PHP

Este proyecto ha sido convertido de HTML/JavaScript a PHP con sistema de autenticación basado en sesiones.

## 📋 Características

- ✅ Sistema de login con PHP y sesiones
- ✅ Protección de páginas privadas
- ✅ Collage de imágenes dinámico
- ✅ Frases románticas aleatorias
- ✅ Múltiples páginas interactivas

## 🚀 Requisitos

- PHP 7.4 o superior
- Servidor web (Apache, Nginx, o PHP built-in server)

## 📦 Instalación

1. Clona o descarga el proyecto
2. Asegúrate de tener PHP instalado

## 🔧 Configuración

### Credenciales de acceso

Las credenciales se configuran en `config.php`:

- **Usuario:** Nicanor
- **Contraseña:** niñoLloron

Para cambiar las credenciales, edita las constantes en `config.php`:

```php
define('USUARIO_VALIDO', 'TuUsuario');
define('PASSWORD_VALIDA', 'TuContraseña');
```

## 🎯 Uso

### Opción 1: Servidor PHP integrado (Recomendado para desarrollo)

```bash
cd /home/yader-alvarez/Desktop/nicanor
php -S localhost:8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Apache/Nginx

1. Copia el proyecto a tu directorio web (ej: `/var/www/html/nicanor`)
2. Accede a través de tu servidor web

## 📁 Estructura del Proyecto

```
nicanor/
├── index.php              # Página de login
├── login.php             # Procesamiento de autenticación
├── logout.php            # Cierre de sesión
├── config.php            # Configuración y credenciales
├── src/
│   ├── content/
│   │   ├── index.php    # Página principal (protegida)
│   │   └── ...          # Otros contenidos
│   ├── css/
│   ├── js/
│   └── img/
└── README_PHP.md        # Este archivo
```

## 🔐 Seguridad

- Las contraseñas se validan del lado del servidor
- Las páginas protegidas verifican la sesión antes de mostrar contenido
- Sistema de logout para cerrar sesión de forma segura

## 🎨 Personalización

### Cambiar el número de imágenes del collage

Edita `config.php`:

```php
define('TOTAL_IMAGENES', 167); // Cambia este número
```

### Modificar estilos

Los estilos CSS permanecen en `src/css/styles.css`

## 📝 Notas

- El proyecto mantiene toda la funcionalidad del original
- La validación del login ahora es del lado del servidor (más segura)
- Las sesiones expiran al cerrar el navegador
- Compatible con todos los navegadores modernos

## 🐛 Solución de Problemas

### Error: "Cannot modify header information"

Asegúrate de que no haya salida antes de las llamadas a `header()` en los archivos PHP.

### Las sesiones no funcionan

Verifica que PHP tenga permisos de escritura en el directorio de sesiones.

### Las imágenes no cargan

Verifica que la carpeta `src/img/` contenga las imágenes numeradas (1.jpg, 2.jpg, etc.)

## 📞 Soporte

Para cualquier duda o problema, revisa la configuración en `config.php` y asegúrate de que el servidor PHP esté corriendo correctamente.

---

💗 Hecho con amor para Nicanor 💗
