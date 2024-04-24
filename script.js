const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")


let modo = "Caracteres"


function handleInputTexto(evento){
    let palavras
    if (modo == "Caracteres"){
        divContador.innerText = inputTexto.value.length + " Caracteres"

    }   else {       
        palavras = (inputTexto.value.trim() == "" ? 0 : inputTexto.value.trim().split(/\s+/).length)
        divContador.innerText = palavras + " Palavras"
    }
}

function handleBtnContar(evento){
    if (modo === "Caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar Palavras"
    }else {
        modo = "Caracteres"
        btnContar.innerText = "Contar Caracteres"
}
}

inputTexto.addEventListener("input", handleInputTexto)
btnContar.addEventListener("click", handleBtnContar)
btnContar.addEventListener("click", handleInputTexto)