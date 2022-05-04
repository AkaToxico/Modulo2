//JavaScript Básico - Ejercicio asincrónico 04
//FizzBuzz II : La Venganza de FizzBuzz
//En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que
//tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una
//palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
//Para completar este ejercicio, deberás:
//1. Lograr que fizzBuzz2 devuelva un String con los números separados por
//comas.
//2. Mejorar la Función para que el usuario pueda decidir hasta qué número
//tiene que contar fizzBuzz2.
//3. Mejorar la Función para que el usuario pueda ingresar fizz_num y
//buzz_num para que la sustitución de palabras ocurra en los números
//múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).
//Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.
//1
//PISTA: ¿Cuáles Eran las Instrucciones de Fizzbuzz?
//En ese ejercicio escribiste un programa que imprimía en la consola los números del
//1 al 100, teniendo en cuenta estos criterios:
//● Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
//● Si era múltiplo de 5, imprimía "Buzz".
//● Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz".

function reimplemente (palabra1 , palabra2){

    let hastaQueNum=prompt("Hasta que numero desea contar");
    let fizz_num=prompt("Ingreso un numero y descrubre de que es multiplo en la consola imprimira Fizz");
    let buzz_num=prompt("Ingreso un numero y descrubre de que es multiplo en la consola imprimira Buzz");
    let contador =1;

while(contador<=hastaQueNum){
    
    if(contador % fizz_num == 0 && contador % buzz_num==0){
        console.log(contador+";FizzBuzz")
    }
    else if(contador%buzz_num==0){
        console.log(contador+";Buzz")
    }
    else if(contador%fizz_num==0 ){
        console.log(contador+";Fizz")
    }
    else{
        console.log(contador+";")
    }
    contador++;
   
}


}

reimplemente()

