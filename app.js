let amigos = [];

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
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
//Valida amigos disponibles
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos los amigos ya fueron sorteados.");
        return;
    }

    // Genera índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    document.getElementById("resultado").innerHTML =
        `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

       
    // Quitar el amigo sorteado del array
    amigos.splice(indiceAleatorio, 1);

    //Limpiar lista visual
    document.getElementById("listaAmigos").innerHTML = "";

       
}