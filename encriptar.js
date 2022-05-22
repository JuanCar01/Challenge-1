const inputTexto = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".texto-desencriptar");

    function btnencriptar(){
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
    }

    function encriptar(StringEncritar){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        StringEncritar = StringEncritar.toLowerCase();

        for (let i = 0; i< matrizCodigo.length; i++){
            if(StringEncritar.includes(matrizCodigo[i][0])){
                StringEncritar = StringEncritar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
            }           
        }
           return StringEncritar;                          
    }

     
     