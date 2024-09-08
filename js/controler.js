// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
const d = document;
const btnEncriptar = d.getElementById('btnEncriptar');
const btnDesencriptar = d.getElementById('btnDesencriptar');
const textarea = d.getElementById('caja__Texto');
const loader = d.getElementById('loader');
const muneico = d.getElementById('muneico');
const parrafoDos = d.getElementById('contenedor__Parrafo');
const btnCopiarDisable = d.getElementById('btnCopiarDisable');
const textoResultadoArea = d.getElementById('parrafo__Resultado');


/*agregamos el evento de "hacer click" y lo ejecutamos en una funcion
*/
btnEncriptar.onclick = encriptar;
function encriptar() {
    
    
}

textarea.addEventListener("input", (e)=>{
    muneico.style.display = "none";
    parrafoDos.style.display = "none"
    console.log(e.target.value)
    loader.classList.remove('ocultarInfo');
    textoResultadoArea.textContent = "Cifrando texto";
});

//tomamos el valor del area de texto
/*function resetTexto() {
    let area = d.getElementById('textarea');
    return area.value;
}

ocultamos el primer contenedor
function ocultarInfo() {
    muneico.classList.add("ocultarInfo");
    parrafoDos.classList.add("ocultarInfo");
}

//desactivamos la clase contenedor__btnCopiarDisable para cambiarla por la clase contenedor__btnCopiarEnable
function btnCopiarEnable() {
    if (btnCopiarDisable.classList.contains('contenedor__btnCopiarDisable')) {
        btnCopiarDisable.classList.remove('contenedor__btnCopiarDisable');
        btnCopiarDisable.classList.add('contenedor__btnCopiarEnable');
    }
}




/*
encriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = textoAEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
})*/

