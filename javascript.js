alert("Jugaremos Piedra, Papel o Tijera");

let min, max;
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let computerSelection;
function computerPlay (){
    computerSelection = randomInteger(1, 3);
    return computerSelection;
}    

let playerSelection;
let mensaje;
let resultado;
function playRound(playerSelection, computerSelection) 
{
    if (playerSelection == computerSelection) 
        {mensaje = "Es un empate"; resultado = "empate";}   
        else if (playerSelection == 1 && computerSelection == 2) 
            {mensaje = "La Computadora gana con Papel"; resultado = "computadora";}
        else if (playerSelection == 1 && computerSelection == 3)    
            {mensaje = "Tu ganas y la computadora pierde con Tijera"; resultado = "gamer";}
        else if (playerSelection == 2 && computerSelection == 1)
            {mensaje = "Tu ganas y la computadora pierde con Piedra"; resultado = "gamer";}
        else if (playerSelection == 2 && computerSelection == 3)
            {mensaje = "La Computadora gana con Papel"; resultado = "computadora";}
        else if (playerSelection == 3 && computerSelection == 1)
            {mensaje = "La Computadora gana con Tijera"; resultado = "computadora";}
        else if (playerSelection == 3 && computerSelection == 2)
            {mensaje = "Tu ganas y la computadora pierde con Papel"; resultado = "gamer";}
    alert (mensaje);
    return resultado;
}

let gamer=0, compu=0, empate=0;
function game(){
    for (let i = 0; i < 5; i++){ 
        console.log (computerPlay());
        alert("Ya el computador tiene su eleccion");
        playerSelection = prompt
        ("Ingresa un número del 1 al 3, donde 1 es Piedra, 2 es Papel y 3 es Tijera");
        playRound(playerSelection, computerSelection);
        if (resultado == "computadora") compu=compu+1; 
        else if (resultado == "gamer") gamer=gamer+1;
        else empate=empate+1;
    } 
}
   
game();
console.log (gamer,compu,empate)
if (gamer > compu) {console.log("El jugador  gano con ",gamer," veces");}
if (compu > gamer) {console.log("El Computador gano con ",compu," veces");}
if (compu == gamer) {console.log("No hubo ganado, fue un empate ");}
