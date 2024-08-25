
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let alura = document.getElementById("foto");
let texto = ""

function encriptar(){
    texto = document.getElementById("texto").value;
    let textoCifrado = texto    
        
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto enciptado con exito";
        parrafo.textContent = "";
        alura.src = "./Texto encriptado.png";
        
    }   else{
        alura.src = "./Alulra.png";
        tituloMensaje.textContent = "No se encontro mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert("Por favor ingresar algun texto");

    }
}

function desencriptar(){
texto = document.getElementById("texto").value;
let textoCifrado = texto
        
        .replace(/ufat/gi, "u")
        .replace(/ober/gi, "o")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        .replace(/ai/gi, "a")

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desenciptado con exito";
        parrafo.textContent = "";
        alura.src = "./Alulra.png";
            
        }

    else{
        alura.src = "./Alulra.png";
        tituloMensaje.textContent = "No se encontro mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert("Por favor ingresar algun texto");
    
        }

}


window.addEventListener('load', (event) => {
    let btnEncriptar = document.getElementById("encriptar");
    let btnDesencriptar = document.getElementById("desencriptar");

    btnEncriptar.addEventListener("click", encriptar);
    btnDesencriptar.addEventListener("click", desencriptar);
});

