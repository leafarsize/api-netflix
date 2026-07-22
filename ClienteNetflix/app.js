
const formulario = document.getElementById("formulario");

const titulo = document.getElementById("titulo");
const genero = document.getElementById("genero");
const año = document.getElementById("año");
const duracion = document.getElementById("duracion");
const idioma = document.getElementById("idioma");
const calificacion = document.getElementById("calificacion");
const nc = document.getElementById("nc");

const btnConsultar = document.getElementById("btnConsultar");
const listaPeliculas = document.getElementById("listaPeliculas");

// Guardar película
formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const pelicula = {
        titulo: titulo.value,
        genero: genero.value,
        año: Number(año.value),
        duracion: Number(duracion.value),
        idioma: idioma.value,
        calificacion: Number(calificacion.value),
        nc: nc.value
    };

    try {

        const respuesta = await agregarPelicula(pelicula);

        alert(respuesta.mensaje);

        formulario.reset();

    } catch (error) {

        alert(error.message);

    }

});

// Consultar películas
btnConsultar.addEventListener("click", async () => {

    try {
        const peliculas = await obtenerPeliculas();

        listaPeliculas.innerHTML = "";
        peliculas.forEach((pelicula) => {

            const li = document.createElement("li");

            const portada = document.createElement("img");
            portada.src = pelicula.portada;
            portada.classList.add("portada-pelicula");

            const info = document.createElement("div");
            info.classList.add("info-pelicula");

            const titulo = document.createElement("strong");
            titulo.textContent = pelicula.titulo;

            const genero = document.createElement("span");
            genero.textContent = "Género: " + pelicula.genero;

            const año = document.createElement("span");
            año.textContent = "Año: " + pelicula.año;

            const duracion = document.createElement("span");
            duracion.textContent = "Duración: " + pelicula.duracion;

            const idioma = document.createElement("span");
            idioma.textContent = "Idioma: " + pelicula.idioma;

            const calificacion = document.createElement("span");
            calificacion.textContent = "Calificación: " + pelicula.calificacion;

            const nc = document.createElement("span");
            nc.textContent = "Nc: " + pelicula.nc;

            info.append(titulo, genero, año, duracion, idioma, calificacion, nc);
            li.append(portada, info);
            listaPeliculas.append(li);
        });
    } catch (error) {

        alert(error.message);

    }

});
