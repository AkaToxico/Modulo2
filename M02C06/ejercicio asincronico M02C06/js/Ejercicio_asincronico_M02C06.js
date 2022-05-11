//JavaScript Básico - Ejercicio asincrónico 02
//En este ejercicio, deberás crear un Arreglo llamado películas, que tenga -por cada
//película- un Objeto con las siguientes Propiedades:
//● titulo
//● rating
//● loHasVisto
//Usá un for loop para iterar sobre el Arreglo e imprimir un resultado en la consola
//que se vea como esto:

let peliculas =[

    {loHasVisto:"viste ", titulo:"Busqueda implacable", rating:" - 5 estrellas" },
    {loHasVisto:"No viste ", titulo:"Norbit", rating:" - 3 estrellas" },
    {loHasVisto:"viste ", titulo:"Mini espias", rating:" - 2 estrellas" },
    {loHasVisto:"No viste ", titulo:"La vida es bella", rating:" - 5 estrellas" }

]

for (let i in peliculas){

    console.log(peliculas[i].loHasVisto +("''") + peliculas[i].titulo + ("''") + peliculas[i].rating);
}