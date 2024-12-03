function consultaCEP() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep !== "") {
        var validacep = /^[0-9]{8}$/; // VALIDAÇÃO DE CEP 
        if (validacep.test(cep)) { 
            limpaFormulario();
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=preencheFormulario'; 
            document.body.appendChild(script);
        } else {
            alert("Formato de CEP inválido.");
            limpaFormulario();
        }
    } else {
        alert("Informe um CEP válido.");
        limpaFormulario(); 
    }
}

function preencheFormulario(conteudo) {  // CAMPOS DO FORMULÁRIO HTML QUE SERAM PREENCHIDOS 
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;
    } else {
        alert("CEP não encontrado."); 
        limpaFormulario();
    }
}

function limpaFormulario() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
}