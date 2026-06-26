<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($usuario === USUARIO_VALIDO && $password === PASSWORD_VALIDA) {
        // Login exitoso
        $_SESSION[NOMBRE_SESION] = true;
        $_SESSION['usuario'] = $usuario;
        $_SESSION['login_time'] = time();
        
        header('Location: src/content/index.php');
        exit;
    } else {
        // Login fallido
        header('Location: index.php?error=1');
        exit;
    }
} else {
    // Si se accede directamente, redirigir al index
    header('Location: index.php');
    exit;
}
?>
