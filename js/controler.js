const encriptar = document.('.btnEncriptar');
const textoAEncriptar = document.querySelector('x');

encriptar.addEventListener("click", e =>{
    e.preventDefault();
    let texto = textoAEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);
})

