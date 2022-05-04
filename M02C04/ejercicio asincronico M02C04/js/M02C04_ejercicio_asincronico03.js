//JavaScript Básico - Ejercicio asincrónico 03
//En este ejercicio deberás escribir una función llamada contarDeA_n que tenga los
//Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los
//números desde el 1 hasta contar_hasta en intervalos de contar_de_a.
//PISTA: Si ponemos 2 y 10 como Argumentos en el llamado, la Función deberá contar de a
//dos hasta llegar a diez.

function contarDeA_n(contar_de_a,contar_hasta) {
    
    let inicio = contar_de_a;
    let contador = inicio;
    let final = contar_hasta;

    while( final > contador){

        console.log(contador);
        contador += inicio;
        
    }
    return contador;
}

console.log(contarDeA_n(2,10))
    