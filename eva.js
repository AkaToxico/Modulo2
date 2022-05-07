var palabras= ["californication","plataforma5","black","summer","flea","aeroplane","peppers",
"unlimited","arcadium","love","getaway","stadium","quixoticelixer","quarter","snow","dylan",
"zephyr","funky","chili",
]

console.log(palabras[1])


//----------------PalabrasRandom
function randomWords(palabras) {
    let palabraAleatoria= palabras[Math.floor(Math.random() * palabras.length)];
    return palabraAleatoria;
    
}
console.log(randomWords(palabras))

//----------------Insertar palabraRandom
let titulo =""
let pr = document.querySelector("h1")
function addToDOM (pr){
    titulo=(randomWords(palabras));
    pr.innerText=titulo
    
}

console.log(addToDOM(pr))

//-----------------Evento de tipo Input:


let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault()
    let text= document.getElementById("text").value;
    console.log(text);

})

//------------------Contador

let tiempoRestante=document.querySelector("#timeSpan")
var time = 10

function actualizarTiempo(){
    time--;
    tiempoRestante.innerText= time + "s";
    if(time==0){
        tiempoRestante.innerText="Game Over";
        clearInterval(idInterval);

    }

}

let idInterval = setInterval(actualizarTiempo,1000);



function updateScore(){

}

