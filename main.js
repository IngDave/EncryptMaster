// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/*encriptador*/
function encriptar(){
    let textoUser = document.getElementById("text_input").value;
    //verificar la longitud minima para encriptar 
    if(textoUser.length < 4){
        document.getElementById("alerta_info").show();
        document.getElementById("alerta_info").style.opacity = 1; 
        setTimeout(function(){document.getElementById("alerta_info").close();document.getElementById("alerta_info").style.opacity = 0;},3200);
        document.getElementById("text_input").value = textoUser;
    }
        let resultado=textoUser.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
    
        document.getElementById('panel').innerText = resultado
        if(textoUser !== ""){
            document.getElementById("text_encrip").innerText = "Texto encriptado";
        
        return resultado;
    }
}

/*desencriptador*/
function desencriptar(){
    let textoUser = document.getElementById("text_input").value;
    let resultado=textoUser.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    
    document.getElementById('panel').innerText = resultado;
    if(textoUser !== ""){
        document.getElementById("text_encrip").innerText = "Texto desencriptado";
    }
    return resultado;
}


//validar caracteres no permitidos
function validar(elemento){
    let texto = elemento.value;
    let validar = new RegExp("[^a-z0-9\ ]+");
    if(validar.test(texto)){
        texto = texto.substr(0,texto.length-1);
    } else{
        // accion cuando no coincide
    }
    if(elemento.value.length <= 0){
        document.getElementById("text_encrip").innerText = "Texto";
        document.getElementById("panel").innerText = "";
    }
    elemento.value = texto;
}

//btn copiar
function copiarTexto(){
    let textarea = document.getElementById("panel");
    
    if(textarea.value.trim()!== ""){
        textarea.select();

         //copiar el texto seleccionado
        document.execCommand("copy");

        let mensajeCopiado = document.getElementById("text_copiado");
        mensajeCopiado.style.display = "inline";//mostrar el mensaje en la pantalla

        //para ocultar el mensaje
        setTimeout(function(){
            mensajeCopiado.style.display = "none";//oculta el mensaje 
        }, 2000);// dos segundos
    }
}
