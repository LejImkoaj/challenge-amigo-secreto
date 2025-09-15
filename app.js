let amigos = [];
let copiaAmigosOriginal = []; //guarda la lista original

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que solo tenga letras y espacios
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert("Solo se permiten letras y espacios.");
        return;
    }

    amigos.push(nombre);

    //Guarda copia original, cuando se agregan nombres
    copiaAmigosOriginal = [...amigos];

    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.classList.add("amigo-item"); //clase al contenedor

        //nombre del amigo
        let spanNombre = document.createElement("span");
        spanNombre.textContent = amigos[i];
        spanNombre.classList.add("amigo-nombre");

        //boton eliminar amigo x
        let bootnEliminar = document.createElement("button");
        bootnEliminar.textContent = "❌";
        bootnEliminar.classList.add("button-delete"); // clase al boton
        bootnEliminar.onclick = function () {
            eliminarAmigo(i);
        }

        li.appendChild(spanNombre);
        li.appendChild(bootnEliminar);
        lista.appendChild(li);
    }
}

//funcion para eliminar amigos de la lista
function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    copiaAmigosOriginal.splice(indice, 1);

    mostrarLista();
}

//Valida amigos disponibles
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos los amigos ya fueron sorteados.");
        //Muestra boton de Nuevo juego
        document.getElementById("botonReiniciar").style.display = "inline-block";
        return;
    }

    // Genera índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
        `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

       
    // Quitar el amigo sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    //Limpiar lista visual
    document.getElementById("listaAmigos").innerHTML = "";

    //Muestra el boton si ya no quedan amigos
    if (amigos.length === 0) {
        document.getElementById("botonReiniciar").style.display = "inline-block";
    }
       
}

//funcion para Jugar de Nuevo
function jugarDeNuevo() {
    //Limpia todo
    amigos = [];
    copiaAmigosOriginal = [];

    //Limpia lista, resultado y campo de entrada
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";

    //Ocultar boton de reinicio
    document.getElementById("botonReiniciar").style.display = "none";

    alert("Juego Reiniciado. Ingrese una nueva lista de amigos. ");
}