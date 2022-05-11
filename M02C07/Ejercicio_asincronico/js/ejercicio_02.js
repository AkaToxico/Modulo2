//JavaScript Básico - Ejercicio asincrónico 02--------------------------------------------
//Ejercicio: Manipular texto y contenido--------------------------------------------------
//1. Creá un archivo HTML que, dentro de su <body> solo tenga un título <h1>.-------------
//2. Por consola, cambiá el texto del título.---------------------------------------------
//● Para cambiar el texto del título, usá la Propiedad textContent.-----------------------
//3. Por consola, cambiá el título por un párrafo con un texto a elección.
//● Para cambiar el título por un párrafo, usá la Propiedad innerHTML.
//4. Por consola, agregá otro párrafo al <body> con un texto a elección.
//● Para agregar otro párrafo al <body>, usá appendChild.

//02--03---------------------------------------------

var titulo = document.getElementById("tituloPrincipal");
titulo.textContent="Nuevo titulo"
titulo.innerHTML="<p>Esto es un parrafo en el titulo</p>";
document.body.appendChild(titulo);

//03-------------------------------------------------
//var cambioTitulo= document.createElement("p")
//cambioTitulo.innerHTML="<p>Este es mi primer parrafo</p>";
//var parrafo = document.querySelector("h1");
//document.body.append(cambioTitulo);

//04------------------------------------------

var nuevoParrafo= document.createElement("p");
nuevoParrafo.innerText="Este es el segundo parrafo";
document.body.appendChild(nuevoParrafo);



