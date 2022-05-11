//JavaScript Básico - Ejercicio asincrónico 02
//Seleccionar fondo
//1. Creá un input en tu HTML.
//2. Cuando el usuario ingrese un color en el input (por ejemplo, "red") y haga
//enter, el color de fondo deberá tomar ese color.
//3. Si el usuario presiona la tecla para borrar, el color deberá ser blanco otra vez.
//Extra credit
//Ahora, adapta tu código para que el usuario escriba en el input el color de fondo en
//español. Limita tu código a colores primarios.
//Desafío: Evitá usar if...else o switch... ¿Cómo lo harías?



var colorI = document.querySelector("input");


colorI.addEventListener("keydown", function(info){
    
    let fondo = document.querySelector("body")

    if(info.key == "Enter"){

        if (colorI.value == "yellow" || colorI.value == "amarillo") {
            let fondo = document.querySelector("body")
             fondo.style.backgroundColor="yellow"

        } else if (colorI.value == "blue" || colorI.value == "azul"){
            let fondo = document.querySelector("body")
            fondo.style.backgroundColor="blue"

        } else if (colorI.value == "red" || colorI.value == "rojo"){
            let fondo = document.querySelector("body")
            fondo.style.backgroundColor="red"

        } 
        
    } else if ( info.key == "Backspace") {
        let fondo = document.querySelector("body")
        fondo.style.backgroundColor="white"
    }

})
