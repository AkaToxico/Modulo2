function Aleatorio (minimo,maximo){
    var numero = Math.floor ( Math.random() * (2 - 0 +1) + 0 )
    return numero;
}

var piedra=0;
var papel=1;
var tijera=2;
var opciones = [" piedra " , " papel " , " tijera "];
var opcionUsuario;
var opcionJavascrip = Aleatorio (0,2);
var VolverAjugar ="1";

while(VolverAjugar=="1"){
opcionUsuario=prompt("quieres jugar? Elege! Piedra: 0 Papel: 1  Tijera: 2", 0);
alert("Elegiste" + opciones[+opcionUsuario]);
alert("Javascript eligio" + opciones[+opcionJavascrip])

if (opcionUsuario == piedra) {
    if (opcionJavascrip == piedra) {
        alert("Empate")
    }else if (opcionJavascrip == papel) {
        alert("Perdiste")
    }else if(opcionJavascrip == tijera){
        alert("Ganaste")
    }
    
} else if (opcionUsuario == papel) {

    if (opcionJavascrip == piedra) {
        alert("Ganaste")
    }else if (opcionJavascrip == papel) {
        alert("Empate")
    }else if(opcionJavascrip == tijera){
        alert("Perdiste")
    }
    
} else if (opcionUsuario == tijera) {

    if (opcionJavascrip == piedra) {
        alert("Perdiste")
    }else if (opcionJavascrip == papel) {
        alert("Ganaste")
    }else if(opcionJavascrip == tijera){
        alert("empate")
    }
    
} else {
    alert("Debes elegir una opcion valida")
}

VolverAjugar = prompt("Desea volver a jugar? 1)si 2)no");

}