
async function obtenerFrase() {
    try {
        const response = await fetch('https://api.quotable.io/random?tags=love');
        const data = await response.json();
        const frasei = document.getElementById('frase');
        const autori = document.getElementById('autor');

        var fraseOr = data.content;
        var frase = await traducirFrase(fraseOr, "en", "es");
        var autor = data.author;

        frasei.innerText = frase;
        document.getElementById('autor').innerText = `- ${data.author}`;


    } catch (error) {
        console.error('Error obteniendo la frase:', error);
    }
}











async function traducirFrase(texto, from, to) {
    try {
        const response = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ q: texto, source: from, target: to, format: "text" })
        });

        if (!response.ok) throw new Error("Error en la traducción");

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error("Error traduciendo la frase:", error);
        return texto; // Si hay error, devuelve el texto original
    }
}















// Obtener la primera frase al cargar la página
obtenerFrase();

// Cambiar la frase cada 30 segundos
setInterval(obtenerFrase, 30000);







//--------------------collage---------------------


const collage = document.querySelector(".collage");
let totalImagenes = 167; // Número total de imágenes en la carpeta
let tiempoCambio = 1500; // Tiempo en milisegundos (5s por defecto)

function obtenerRutaImagenAleatoria() {
    let numero = Math.floor(Math.random() * totalImagenes) + 1;
    return `optimized/${numero}.webp`; // Suponiendo imágenes nombradas 1.jpg, 2.jpg, ...
}

function cargarCollage() {
    collage.innerHTML = ""; // Limpiar el collage
    for (let i = 0; i < 36; i++) {
        let img = document.createElement("img");
        img.src = obtenerRutaImagenAleatoria();
        collage.appendChild(img);
    }

    setInterval(cambiarImagenAleatoria, tiempoCambio);
}

function cambiarImagenAleatoria() {
    let imagenesEnCollage = document.querySelectorAll(".collage img");
    let indiceAleatorio = Math.floor(Math.random() * imagenesEnCollage.length);
    let nuevaImagen = obtenerRutaImagenAleatoria();

    let img = imagenesEnCollage[indiceAleatorio];
    img.style.opacity = "0"; // Transición de salida
    setTimeout(() => {
        img.src = nuevaImagen;
        img.style.opacity = "1"; // Transición de entrada
    }, 600);
}

cargarCollage();

//----------------------login----------------
// El login ahora se maneja en login.php del lado del servidor
