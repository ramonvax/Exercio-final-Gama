//  ******************  VERIFICAÇÂO CPF *******************************


// console.log("JavaScript carregado")
function isNumber(valorAnalisado) {
    return !isNaN(parseFloat(valorAnalisado)) && isFinite(valorAnalisado);
}

function verificaSoma(cpf) {
    if (cpf.length === 11) {
        if(isNumber(cpf)) {
            let soma = 0
            for (var i = 0; i <= 10; i ++) {
                soma += parseInt(cpf[i])                
            }            
            // console.log(soma)            
            if(soma % 11 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function validate() {
    // console.log("Iniciando validacao")
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

// ********************  FIM DA VERIFICAÇÂO CPF **********************

// ********************  TELA SPAM CADASTRO CONCLUIDO ****************

function finished() {
    console.log("spam chamado")
    document.getElementById("spamFinalizacao").style.display = "block";
}