console.log("JavaScript carregado")
function verificaSoma(cpf) {
    if (cpf.length === 11) {
        return true;
    }
    else {
        return false;
    }
}

function validate() {
    console.log("Iniciando validacao")
    var cpf = document.getElementById("cpfDigitado").value;
    document.getElementById("CPFValido").style.display = "none"
    document.getElementById("CPFInvalido").style.display = "none"
    var somaCpf = verificaSoma(cpf);
    if (somaCpf) {
        document.getElementById("CPFValido").style.display = "block"
    }
    else {
        document.getElementById("CPFInvalido").style.display = "block"
    }
}
