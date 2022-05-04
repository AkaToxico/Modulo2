//JavaScript Básico - Ejercicio asincrónico 04
//FizzBuzz. En este ejercicio deberás escribir un programa que imprima en la consola
//los números del 1 al 100, teniendo en cuenta estos criterios:
// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".

    var contador =1;
while(contador<=100){
    if(contador % 3 == 0 && contador%5==0){
        console.log("FizzBuzz")
    }
    else if(contador%5==0){
        console.log("Buzz")
    }
    else if(contador%3==0 ){
        console.log("Fizz")
    }
    else{
        console.log(contador)
    }
    contador++
}