let puntosUsuario= 0;
let puntosPc= 0;

let instrucciones= document.querySelector("#instrucciones");
let marcadorUsuario= document.querySelector("#marcadorUsuario");
let marcadorPc= document.querySelector("#marcadorPc");
let elegiTuArma= document.querySelector("#elegiArma")
let mensaje= document.querySelector("#mensaje");
let ganaPunto= document.querySelector("#ganaPunto");
let eleccionUsuario =document.querySelector("#eleccionUsuario");
let eleccionPc= document.querySelector("#eleccionPc");
let btnReiniciar= document.querySelector("#reiniciar")
let botonesArma = document.querySelectorAll(".arma");
botonesArma.forEach (boton =>{
    boton.addEventListener("click", iniciarTurno);
});

btnReiniciar.addEventListener("click",reiniciarJuego);



const elijeUsuario = (e)=> {
    let eleccionUsuario= e.currentTarget.id;
    return eleccionUsuario
}

const elijePc =() =>{
    let eleccionPc= Math.floor(Math.random()*3);
    if(eleccionPc==0){
        eleccionPc="piedra🪨"
    }else if(eleccionPc==1){
        eleccionPc="papel📋"
    }else{
        eleccionPc="tijera✂️"
    }
    return eleccionPc
}

function iniciarTurno(e){

    elijeUsuario(e)
    console.log(`Elegiste ${elijeUsuario(e)}`)
    elijePc()
    console.log(`La pc eligio ${elijePc()}`)
    
    if((elijeUsuario(e)=="piedra🪨" && elijePc()=="tijera✂️") || (elijeUsuario(e)=="tijera✂️" && elijePc()=="papel📋") || (elijeUsuario(e)=="papel📋" && elijePc()=="piedra🪨")){
        console.log("ganaste")
        ganaUsuario()

    } else if((elijePc()=="piedra🪨" && elijeUsuario(e) =="tijera✂️") || (elijePc()=="tijera✂️" && elijeUsuario(e)=="papel📋") || (elijePc()=="papel📋" && elijeUsuario(e)=="piedra🪨")){
        console.log("gano pc")
        ganaPc()
    }else{
        console.log("empate")
        empate()
    }
    
    mensaje.classList.remove("disabled");
    eleccionUsuario.innerText=elijeUsuario(e);
    eleccionPc.innerText=elijePc();

    terminaElJuego(puntosUsuario,puntosPc)

}

function ganaUsuario(e){
    puntosUsuario++
    marcadorUsuario.innerText = puntosUsuario
    
    ganaPunto.innerText= "¡Ganaste un Punto!🔥"
}

function ganaPc(){
    puntosPc = puntosPc +1
    marcadorPc.innerText= puntosPc
    ganaPunto.innerText= "¡La Computadora gano un Punto!😭"

}

function empate(){
    ganaPunto.innerText= "¡Empate!😯"
}
 

function terminaElJuego(puntosUsuario,puntosPc){
    let ganador= false;
    if (puntosUsuario==5){
        instrucciones.innerText="🔥¡¡Ganaste el Juego!!🔥"
        ganador= true;
    } else if(puntosPc==5){
        instrucciones.innerText="😭¡La Computadora gano el juego!😭"
        ganador=true;
    }

    console.log(ganador)

    if (ganador== true){
        mensaje.classList.add("disabled")
        btnReiniciar.classList.remove("disabled")
    }
}

function reiniciarJuego(){
    marcadorUsuario.innerText=0;
    marcadorPc.innerText=0;
    puntosUsuario=0;
    puntosPc=0;
    instrucciones.innerText="El primero en llegar a 5 puntos gana.";
    btnReiniciar.classList.add("disabled")
    mensaje.classList.add("disabled")
}