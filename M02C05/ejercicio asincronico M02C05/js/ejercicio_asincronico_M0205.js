//JavaScript Básico - Ejercicio asincrónico 03
//En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de
//números y devuelva la suma de todos ellos. Usá este código para testear tu
//Función:
//sumArray([1,2,3]) // 6
//sumArray([10, 3, 10, 4]) // 27
//sumArray([-5,100]) // 95


function sumArray (arreglo){
    let inicio=0
    for(i=0;i<arreglo.length;i++){
        inicio=inicio+arreglo[i];

    }
    return inicio;
}

let ejercicio1= [1,2,3];
let ejercicio2= [10,3,10,4];
let ejercicio3= [-5,100];
console.log("la suma de todos es=" + sumArray(ejercicio1));
console.log("la suma de todos es=" + sumArray(ejercicio2));
console.log("la suma de todos es=" + sumArray(ejercicio3));