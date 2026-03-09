 
// Capturando os dados do campo SENHA:
 
 
const botaoEnviar = document.querySelector("#btn-entrar");
 
botaoEnviar.addEventListener("click", validaCampo);
 
function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);
 
    //Verificando se a senha é PAR:
 
    console.log(valorCampo % 2 == 0);
 
}