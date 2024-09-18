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

const btnEncriptar = d.getElementById('btnEncriptar');
const btnDesencriptar = d.getElementById('btnDesencriptar');
const btnCopiar = d.getElementById('btn__copiar');
const textArea = d.getElementById('caja__Texto');
const loader = d.getElementById('loader');
const muneico = d.getElementById('muneico');
const parrafoDos = d.getElementById('contenedor__Parrafo');
const btnCopiarDisable = d.getElementById('btnCopiarDisable');
const textoResultadoArea = d.getElementById('parrafo__Resultado');
let isEncrypting = false;

const llaves = [
    ["a", "u"],
    ["b", "v"],
    ["c", "w"],
    ["d", "x"],
    ["e", "y"],
    ["f", "z"],
    ["g", "c"],
    ["h", "d"],
    ["i", "e"],
    ["j", "f"],
    ["k", "g"],
    ["l", "h"],
    ["m", "i"],
    ["n", "j"],
    ["o", "k"],
    ["p", "l"],
    ["q", "m"],
    ["r", "n"],
    ["s", "o"],
    ["t", "p"],
    ["u", "q"],
    ["v", "r"],
    ["x", "s"],
    ["y", "t"],
    ["z", "a"]
]; //diccionario reemplazable para mejores cifrados

//Logica para encriptar mensaje
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

//Logica para desencriptar mensaje
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encontrada = false;
        for (let j = 0; j < llaves.length; j++) {
            if (letra === llaves[j][1]) {
                mensajeDesencriptado += llaves[j][0];
                encontrada = true;
                break;
            }
        }
        // Si no se encontró una correspondencia en el diccionario, agregar el carácter tal cual
        if (!encontrada) {
            mensajeDesencriptado += letra;
        }
    }
    return mensajeDesencriptado;
}


textArea.addEventListener("input", () => {
    muneico.style.display = "none";
    parrafoDos.style.display = "none"
    loader.classList.remove('ocultarInfo');
    textoResultadoArea.textContent = isEncrypting ? "Descifrando texto" : "Cifrando texto";
});


function btnCopiarEnable() {
    if (textoResultadoArea.textContent.trim() !== '') {
        btnCopiarDisable.classList.remove('contenedor__btnCopiarDisable');
        btnCopiarDisable.classList.add('contenedor__btnCopiarEnable');
    }
}

btnEncriptar.addEventListener('click', (e) => {
    e.preventDefault(); // previene la ejecucion del evento
    let mensaje = textArea.value.toLowerCase();
    let msj = encriptarMensaje(mensaje)
    textoResultadoArea.textContent = msj;
    isEncrypting = true;
    btnCopiarEnable()

})

btnDesencriptar.addEventListener('click', (e) => {
    e.preventDefault(); // previene la ejecucion del evento
    isEncrypting = false;
    let mensaje = textArea.value.toLowerCase();
    let msj = desencriptarMensaje(mensaje)
    textoResultadoArea.textContent = msj;
    btnCopiarEnable()

});

btnCopiar.addEventListener('click', () => {
    let textoCopiado =  textoResultadoArea.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
            console.log('Texto copiado al portapapeles');
            // Puedes mostrar un mensaje al usuario aquí, si lo deseas
            // alert('Texto copiado correctamente');
        })
      /*  .catch(err => {
            console.error('Error al copiar: ', err);
            // Puedes mostrar un mensaje de error al usuario aquí
            alert('Hubo un error al copiar el texto. Por favor, inténtalo de nuevo.');
        });

    // Asegúrate de que el texto a copiar no esté vacío
    if (textoResultadoArea.textContent.trim() === '') {
        console.error('No hay texto para copiar.');
        return;
    }*/
   
});