function copiar(){
    let copiarTexto = document.querySelector(".texto-desencriptar");
    copiarTexto.select();
    document.execCommand("copy");
    alert("Su texto a sido copiado",copiar);
    }       
document.querySelector(".copiar").addEventListener("onclick", copiar);