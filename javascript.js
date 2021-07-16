

/**
 * Salvar Dados localstorage
 */
function cadastroCliente(){
    var InputName = document.getElementById("InputName");
    var InputEmail = document.getElementById("InputEmail");
    var inlineFormCustomSelectPref = document.getElementById("inlineFormCustomSelectPref");
    var InputGenero = document.getElementById("InputGenero");


    var dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    var auxRegister = {
        nome: InputName.value,
        email: InputEmail.value,
        servicos: inlineFormCustomSelectPref.value,
        Genero: InputGenero.value
        
    }

    dados.push(auxRegister);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Promoções enviadas");

    InputName.value = "";
    InputEmail.value = "";
    inlineFormCustomSelectPref.value = "";
    InputGenero.value = "";
}