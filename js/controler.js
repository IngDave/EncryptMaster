//seccion del preloader: permite que el preloader ejecute un tiempo
const d = document;
let contenido = d.getElementById('contenido');

function ocultarPreloader(tiempo) {
    setTimeout(function () {
        d.getElementById('preloader').style.display = 'none';
    }, tiempo);
    setTimeout(() => {
        contenido.classList.remove("ocultar");
    }, tiempo);
}
ocultarPreloader(2000);

//seccion del encriptador:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const btnEncriptar = d.getElementById('btnEncriptar');
const btnDesencriptar = d.getElementById('btnDesencriptar');
const btnCopiar = d.getElementById('btn__copiar');
const textArea = d.getElementById('caja__Texto');
const loader = d.getElementById('loader');
const muneico = d.getElementById('muneico');
const parrafoDos = d.getElementById('contenedor__Parrafo');
const btnCopiarDisable = d.getElementById('btnCopiarDisable');
const textoResultadoArea = d.getElementById('parrafo__Resultado');

const llaves = [
    ["a", "!"],
    ["b", "$-"],
    ["c", "/**"],
    ["d", "*"],
    ["e", "ufat"],
    ["f", "mem"],
    ["g", "daw"],
    ["h", "ai"],
    ["i", "ober"],
    ["j", "ufat"],
    ["k", "j{{"],
    ["l", "mss"],
    ["m", "+++"],
    ["n", "none"],
    ["o", "oso"],
    ["p", "pe!"],
    ["q", "date"],
    ["r", "air"],
    ["s", "rober"],
    ["t", "bufat"],
    ["u", "mmm"],
    ["v", "times"],
    ["x", "sar"],
    ["y", "row"],
    ["z", "idave"]
]; //diccionario reemplazable para mejores cifrados

/**Logica para encriptar mensaje*/
function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][0]) {
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

/**Logica para desencriptar mensaje*/
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
        let eRegular = new RegExp(llaves[i][1]);
        mensajeDesencriptado = mensajeDesencriptado.replace(eRegular, llaves[i][0]);
    }
    return mensajeDesencriptado;
}


textArea.addEventListener("input", (e) => {
    muneico.style.display = "none";
    parrafoDos.style.display = "none"
    loader.classList.remove('ocultarInfo');
    textoResultadoArea.textContent = "Cifrando texto";
});

btnEncriptar.addEventListener('click', (e) => {
    e.preventDefault(); // previene la ejecucion del evento
    let mensaje = textArea.value.toLowerCase();
    let msj = encriptarMensaje(mensaje)
    textoResultadoArea.textContent = msj;
    btnCopiarEnable()

})

function btnCopiarEnable() {
    if (textoResultadoArea.textContent.trim() !== '') {
        btnCopiarDisable.classList.remove('contenedor__btnCopiarDisable');
        btnCopiarDisable.classList.add('contenedor__btnCopiarEnable');
    }
}

btnDesencriptar.addEventListener('click', (e) => {
    e.preventDefault(); // previene la ejecucion del evento
    let mensaje = textArea.value.toLowerCase();
    let msj = desencriptarMensaje(mensaje)
    textoResultadoArea.textContent = msj;
    btnCopiarEnable()

});

btnCopiar.addEventListener('copy', 'click', (event) => {
    event.clipboardData.setData('text/plain', 'Texto copiado exitosamente.');
    btnCopiar.textContent = '';
});