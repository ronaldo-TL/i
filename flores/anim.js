// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando te vi por primera vez, vi algo diferente en ti, algo que no veia en los demas.", time: 10 },
  { text: "Alguien tan timida que llamaba mi atención día tras día.", time: 30 },
  { text: "Aun recuerdo tu linda sonrisa, en la forma en como tratabas a los demas.", time: 50 },
  { text: "Recuerdas cuando te caíste, no supe exactamente qué hacer en ese momento, pero me procupe de que no te lastimaras.", time: 70 },
  { text: "He estado pensando en ti últimamente y me preguntaba cómo estás. ¿Estás durmiendo bien? ¿Estás comiendo bien? Al menos sé que estás bien, lo cual me tranquiliza.", time: 90 },
  { text: "Bueno, me despido y nada, desearte lo mejor, que nadie apaque el brillo en tu mirada. Te dejo escuchando me gusto el tema asi que por eso lo puse :-)", time: 110 },





];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 20
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);