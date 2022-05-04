//Parte 1:
//En este ejercicio, crearás un programa que le indique a las mujeres si están en
//edad, o no, de jubilarse.
//Importante: En Chile, las mujeres pueden jubilarse a los 60 años.

var edad = prompt("Ingresa tu edad y descubre si estas en edad de jubilarte");
alert ((edad>=60) ? "Tienes edad para jubilar" : "Te quedan" + " " + (60-edad) + " " + "años para jubilar");


//Parte 2:
//En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como
//a los hombres, si están en edad de jubilarse.
//Importante: En Chile, los hombres pueden jubilarse a los 65 años

var genero = prompt(" 1) Eres mujer  - 2) Eres Hombre ingresa")
var edadActual = prompt ("Ingresa tu edad y descubre si estas en edad de jubilarte");
var jubilacionH = 65
var jubilacionM =60


if (genero="1") {
     if (edadActual>=jubilacionM){
          alert("Tienes edad para jubilar");
     }else{
          alert("No tienes edad de jubilacion");
     }

}else if(genero="2"){
     if (edadActual>=jubilacionH) {
          alert("Tienes edad para jubilar");
     }else{
          alert("No tienes edad de jubilacion");

     }
}
