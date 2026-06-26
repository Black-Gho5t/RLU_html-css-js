<?php
require_once 'config.php';

// Si ya está logueado, redirigir al contenido
if (isset($_SESSION[NOMBRE_SESION]) && $_SESSION[NOMBRE_SESION] === true) {
    header('Location: src/content/index.php');
    exit;
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andev Web</title>
    <link rel="stylesheet" href="src/css/styles.css">
</head>

<body>


    <div class="collage"></div>





    <div class="wrapper">
        <form action="login.php" method="POST">
            <?php if (isset($_GET['error'])): ?>
                <div class="error-message" style="color: #ff6b6b; margin-bottom: 15px; padding: 10px; background: rgba(255,107,107,0.1); border-radius: 5px;">
                    ❌ Te mandé el usuario y la contraseña una de esas veces que te dormiste temprano y me dejaste llorando solito.
                </div>
            <?php endif; ?>

            <div class="input-field">
                <input type="text" name="usuario" required>
                <label>Nombre</label>
            </div>
            <div class="input-field">
                <input type="password" name="password" required>
                <label>Contraseña</label>
            </div>
            <div class="forget">
                <label for="remember">
                    <p>Si no te sabes la Contraseña vas a tener que convencer al que te hizo la página. <br>(ya sabes como)</p>
                </label>
            </div>
            <button type="submit">Log In</button>

        </form>
    </div>


    <script src="src/js/script.js"></script>



</body>

</html>