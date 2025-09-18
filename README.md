<h1 align="center"> Challenge Amigo Secreto </h1>

<h4 align="center">
  🚧: Proyecto Amigo Secreto 🚧:
</h4>
# Portfolio ¡Hola, bienvenido a mi proyecto de portafolio!

🔨 Funcionalidades del proyecto
- Permite sortear al azar las personas ingresadas.
- No permite ingresar numeros, campo vacio o simbolos.
- Puedes eliminar un amigo ingresado antes de sortear.
- Permite reiniciar el juego

video-como-funciona-el-juego.mp4


## ✔️ Herramientas utilizadas

* HTML

* JavaScript

* CSS

* Flex-box

#### Un poco de codigo

```Js
**//funcion para Jugar de Nuevo**
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
```
###Images

Image:

![](https://github.com/LejImkoaj/challenge-amigo-secreto/blob/main/pagina.jpg?raw=true)



🛠️ Acceso al proyecto 🛠️ 
### descargar el proyecto de github
https://github.com/LejImkoaj/challenge-amigo-secreto.git

### Linke del Juego
https://challenge-amigo-secreto-eta-indol.vercel.app/

## Hecho por:

### Daniel Agusto Soto M

