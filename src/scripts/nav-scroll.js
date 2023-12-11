// Función para manejar el evento de desplazamiento
function manejarScroll() {
    var logo = document.getElementById("logo");
  
    // Verifica si la ventana tiene un ancho igual o mayor a 640 píxeles
    if (window.innerWidth >= 640) {
      // Verifica si la posición de desplazamiento ha superado un umbral (por ejemplo, 100 píxeles)
      if (window.scrollY > 100) {
        logo.classList.add("logo-scrolled");

      } else {
        logo.classList.remove("logo-scrolled");

      }
    }
  }
  
  // Asocia la función al evento de desplazamiento
  window.addEventListener("scroll", manejarScroll);
  
  // Llama a la función una vez cuando la página se carga
  window.addEventListener("load", manejarScroll);