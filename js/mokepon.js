let mascotaSeleccionada
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById(`seleccion-ataque`)
    sectionSeleccionarAtaque.style.display = `none`

    let sectionReiniciar = document.getElementById(`reiniciar`)
    sectionReiniciar.style.display = `none`

    let buttonHipodoge = document.getElementById(`hipodoge`)
    buttonHipodoge.addEventListener(`click`, mascotaHipodoge)

    let buttonCapipepo = document.getElementById(`capipepo`)
    buttonCapipepo.addEventListener(`click`, mascotaCapipepo)

    let buttonRatigueya = document.getElementById(`ratigueya`)
    buttonRatigueya.addEventListener(`click`, mascotaRatigueya)

    let botonMascotaJugador = document.getElementById(`boton-mascota`)
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let bontonFuego = document.getElementById(`boton-fuego`)
    bontonFuego.addEventListener(`click`, ataqueFuego)
    
    let bontonAgua = document.getElementById(`boton-agua`)
    bontonAgua.addEventListener(`click`, ataqueAgua)

    let bontonTierra = document.getElementById(`boton-tierra`)
    bontonTierra.addEventListener(`click`, ataqueTierra)

    let botonReiniciar = document.getElementById(`boton-reiniciar`)
    botonReiniciar.addEventListener(`click`, reiniciarJuego)
}

function mascotaHipodoge(){
    mascotaSeleccionada = `hipodoge`
    seleccionarMascotaJugador()

}

function mascotaCapipepo(){
    mascotaSeleccionada = `capipepo`
    seleccionarMascotaJugador()
}

function mascotaRatigueya(){
    mascotaSeleccionada = `ratigueya`
    seleccionarMascotaJugador()
}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById(`seleccionar-mascota`)
    sectionSeleccionarMascota.style.display = `none`

    let sectionSeleccionarAtaque = document.getElementById(`seleccion-ataque`)
    sectionSeleccionarAtaque.style.display = `flex`

    let spanMascotaSeleccionada = document.getElementById(`mascota-jugador`)

    if(mascotaSeleccionada == `hipodoge`){
        spanMascotaSeleccionada.innerHTML = `Hipodoge`
    } else if(mascotaSeleccionada == `capipepo`){
        spanMascotaSeleccionada.innerHTML = `Capipepo`
    } else if(mascotaSeleccionada == `ratigueya`){
        spanMascotaSeleccionada.innerHTML = `Ratigueya`
    }else{
        alert(`Selecciona alguna Mascota`)
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let MascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById(`mascota-enemigo`)

    if (MascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = `Hipodoge`
    }
    else if (MascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = `Capipepo`
    }
    else {
        spanMascotaEnemigo.innerHTML = `Ratigueya`
    }
}
function ataqueFuego(){
    ataqueJugador = `Fuego`
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = `Agua`
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = `Tierra`
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = `Fuego`
    }
    else if(ataqueAleatorio == 2){
        ataqueEnemigo = `Agua`
    }
    else if(ataqueAleatorio == 3){
        ataqueEnemigo = `Tierra`
    }

    combate()

}
function combate (){
let spanVidasJugador = document.getElementById(`vidas-jugador`)
let spanVidasEnemigo = document.getElementById(`vidas-enemigo`)
        if (ataqueJugador == ataqueEnemigo){
            crearMensaje(`EMPATE`)
        } else if (ataqueJugador == `Fuego` && ataqueEnemigo == `Tierra`){
            crearMensaje(`GANASTE`)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == `Agua` && ataqueEnemigo == `Fuego`){
            crearMensaje(`GANASTE`)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == `Tierra` && ataqueEnemigo == `Agua`){
            crearMensaje(`GANASTE`)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else{
            crearMensaje(`PERDISTE`)
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
    
        revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal(`Felicidades Ganaste 🎉`)
    } else if(vidasJugador == 0){
        crearMensajeFinal(`Lo siento perdiste 😢`)
    }
}
function crearMensaje (resultado){
    //let sectionMensajes = document.getElementById(`resultado`)
    //let parrafo = document.createElement(`p`)
    //parrafo.innerHTML = `Tu mascota ataco con ` + ataqueJugador + `, la mascota del enemigo ataco con ` + ataqueEnemigo + ` ` + resultado
    //sectionMensajes.appenChild(parrafo)

    let sectionMensajes = document.getElementById(`resultado`)
    let ataquesDelJugador = document.getElementById(`ataques-del-jugador`)
    let ataquesDelEnemigo = document.getElementById(`ataques-del-enemigo`)

    let nuevoAtaqueDelJugador = document.createElement(`p`)
    let nuevoAtaqueDelEnemigo = document.createElement(`p`)

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearMensajeFinal (resultadoFinal){
    let sectionCrearMensaje = document.getElementById(`resultado`)
    sectionCrearMensaje.style.display = `none`

    let sectionReiniciar = document.getElementById(`reiniciar`)
    sectionReiniciar.style.display = `flex`

    let sectionMensajes = document.getElementById(`mensajes`)

    let parrafo = document.createElement(`p`)
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)

    let bontonFuego = document.getElementById(`boton-fuego`)
    bontonFuego.disabled = true
    
    let bontonAgua = document.getElementById(`boton-agua`)
    bontonAgua.disabled = true

    let bontonTierra = document.getElementById(`boton-tierra`)
    bontonTierra.disabled = true
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener(`load`, iniciarJuego)