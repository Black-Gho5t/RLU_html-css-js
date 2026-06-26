<?php
require_once '../../config.php';

// Verificar si el usuario está logueado
if (!isset($_SESSION[NOMBRE_SESION]) || $_SESSION[NOMBRE_SESION] !== true) {
    header('Location: ../../index.php');
    exit;
}

$usuario = $_SESSION['usuario'] ?? 'Usuario';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenida <?php echo htmlspecialchars($usuario); ?></title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      width: 100%;
    }
    h1 {
      color: #ff6b9d;
      text-align: center;
      margin-bottom: 30px;
    }
    .welcome-message {
      text-align: center;
      font-size: 1.2em;
      color: #333;
      margin-bottom: 20px;
    }
    .logout-btn {
      background: #ff6b9d;
      color: white;
      padding: 10px 30px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      display: block;
      margin: 20px auto;
      transition: background 0.3s ease;
    }
    .logout-btn:hover {
      background: #ff5588;
    }
    .content-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }
    .content-links a {
      background: #f0f0f0;
      padding: 20px;
      text-align: center;
      border-radius: 10px;
      text-decoration: none;
      color: #333;
      transition: all 0.3s ease;
    }
    .content-links a:hover {
      background: #ff6b9d;
      color: white;
      transform: translateY(-5px);
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>💗 Bienvenida mi amor 💗</h1>
    <div class="welcome-message">
      Hola <?php echo htmlspecialchars($usuario); ?>! 💗💗💗💗
    </div>

    <div class="content-links">
      <a href="../content/animated flower/animated flower.html">🌸 Flor Animada</a>
      <a href="../content/83/function-heart.html">❤️ Corazón</a>
      <a href="../content/do you love me code/do_you_love_me.html">💕 ¿Me amas?</a>
      <a href="../content/love letter2 code/love letter 2.html">💌 Carta de Amor</a>
      <a href="../content/valentine-confession/valentine-confession.html">💘 Confesión</a>
      <a href="../content/Will-you-be-my-Valentine--main/index.html">💝 San Valentín</a>
      <a href="../content/cafeteria/Will-you-be-my-Valentine--main/index.html">☕ Cafetería</a>
    </div>

    <form action="../../logout.php" method="POST">
      <button type="submit" class="logout-btn">Cerrar Sesión</button>
    </form>
  </div>

</body>
</html>
