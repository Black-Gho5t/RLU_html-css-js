// Función para crear mariposas
function createButterflies() {
	const butterflyContainer = $("#butterflyContainer");

	// SVG de mariposa colorida
	const butterflySvg = `
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 2C12 2 8 4 8 8C8 10 10 12 12 12C14 12 16 10 16 8C16 4 12 2 12 2Z" fill="#FF69B4"/>
			<path d="M12 12C12 12 8 14 8 18C8 20 10 22 12 22C14 22 16 20 16 18C16 14 12 12 12 12Z" fill="#FF1493"/>
			<path d="M12 2C12 2 16 4 16 8C16 10 14 12 12 12C10 12 8 10 8 8C8 4 12 2 12 2Z" fill="#FFB6C1"/>
			<path d="M12 12C12 12 16 14 16 18C16 20 14 22 12 22C10 22 8 20 8 18C8 14 12 12 12 12Z" fill="#FF69B4"/>
			<ellipse cx="12" cy="12" rx="0.5" ry="6" fill="#8B4513"/>
		</svg>
	`;

	// Crear múltiples mariposas con diferentes colores
	const colors = [
		{ wing1: "#FF69B4", wing2: "#FF1493", wing3: "#FFB6C1", wing4: "#FF69B4" },
		{ wing1: "#9370DB", wing2: "#8A2BE2", wing3: "#DDA0DD", wing4: "#9370DB" },
		{ wing1: "#00CED1", wing2: "#20B2AA", wing3: "#AFEEEE", wing4: "#00CED1" },
		{ wing1: "#FFD700", wing2: "#FFA500", wing3: "#FFFFE0", wing4: "#FFD700" },
		{ wing1: "#FF6347", wing2: "#DC143C", wing3: "#FFA07A", wing4: "#FF6347" },
		{ wing1: "#32CD32", wing2: "#228B22", wing3: "#98FB98", wing4: "#32CD32" }
	];

	for (let i = 0; i < 6; i++) {
		const butterfly = $('<div class="butterfly butterfly' + (i + 1) + '"></div>');

		// SVG personalizado con colores únicos
		const customSvg = `
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2C12 2 8 4 8 8C8 10 10 12 12 12C14 12 16 10 16 8C16 4 12 2 12 2Z" fill="${colors[i].wing1}"/>
				<path d="M12 12C12 12 8 14 8 18C8 20 10 22 12 22C14 22 16 20 16 18C16 14 12 12 12 12Z" fill="${colors[i].wing2}"/>
				<path d="M12 2C12 2 16 4 16 8C16 10 14 12 12 12C10 12 8 10 8 8C8 4 12 2 12 2Z" fill="${colors[i].wing3}"/>
				<path d="M12 12C12 12 16 14 16 18C16 20 14 22 12 22C10 22 8 20 8 18C8 14 12 12 12 12Z" fill="${colors[i].wing4}"/>
				<ellipse cx="12" cy="12" rx="0.5" ry="6" fill="#8B4513"/>
			</svg>
		`;

		butterfly.html(customSvg);

		// Posicionar mariposas alrededor del centro
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		const radius = 100;
		const angle = (i * 60) * (Math.PI / 180); // 60 grados entre cada mariposa

		const x = centerX + Math.cos(angle) * radius;
		const y = centerY + Math.sin(angle) * radius;

		butterfly.css({
			left: x + 'px',
			top: y + 'px'
		});

		butterflyContainer.append(butterfly);
	}
}

// Función para mostrar mariposas
function showButterflies() {
	$(".butterfly").addClass("butterfly-visible butterflies-enter");
}

// Función para ocultar mariposas
function hideButterflies() {
	$(".butterfly").removeClass("butterflies-enter").addClass("butterflies-exit");
	setTimeout(() => {
		$(".butterfly").removeClass("butterfly-visible butterflies-exit");
	}, 1000);
}

// Inicializar mariposas al cargar la página
$(document).ready(function () {
	createButterflies();
});

$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({ "backgroundColor": "#f48fb1" }, 2000);

		// Mostrar mariposas cuando se abra la carta
		setTimeout(() => {
			showButterflies();
		}, 500);

		console.log("Abriendo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({ "backgroundColor": "#fce4ec" }, 2000);

		// Ocultar mariposas cuando se cierre la carta
		hideButterflies();

		console.log("Cerrando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});