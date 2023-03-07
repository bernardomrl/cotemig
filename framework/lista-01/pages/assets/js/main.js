//
// LIMPAR OPCAO DO SELECT (INDEX E Q6)
//
function selectAppearence() {
    document.getElementById("select-questao").selectedIndex = -1;
}
//
// SELECIONAR QUESTAO (INDEX)
//
function questao() {                                                         // TROCAR A PAGINA QUANDO MUDAR A SELECAO USANDO ONCHANGE()
    questao = document.querySelector("#select-questao").selectedIndex;
    switch(questao){
        case 0:
            location.reload();
            window.location.href = "pages/Q1.html";
            console.log("Questão 1");
        break;
        case 1:
            location.reload();
            window.location.href = "pages/Q2.html";
            console.log("Questão 2");
        break;
        case 2:
            location.reload();
            window.location.href = "pages/Q3.html";
            console.log("Questão 3");
        break;
        case 3:
            location.reload();
            window.location.href = "pages/Q4.html";
            console.log("Questão 4");
        break;
        case 4:
            location.reload();
            window.location.href = "pages/Q5.html";
            console.log("Questão 5");
        break;
        case 5:
            location.reload();
            window.location.href = "pages/Q6.html";
            console.log("Questão 6");
        break;
    }
}
//
// QUESTAO 1 - - USANDO FUNCTION ONLOAD()
//
function questao1(){
    nome = prompt("Digite o seu nome: ");
    salario = parseFloat(prompt("Digite o seu salário: "));                         // PARSE PARA TROCAR O TIPO DA VARIAVEL ( FLOAT, INT )

    salario = ((salario * 0.1) + salario);

    alert(nome +", seu salário novo é de " + salario + ".");
}
//
// QUESTAO 2 - - USANDO FUNCTION ONLOAD()
//
function questao2(){
    valueA = parseFloat(prompt("Digite o primeiro valor: "));
    valueB = parseFloat(prompt("Digite o segundo valor: "));

    if(valueA == valueB){
        result = valueA + valueB;
        alert("O resultado da soma foi: " + result);
    } else {
        result = valueA * valueB;
        alert("O resultado da multiplicação foi: " + result);
    }
}
//
// QUESTAO 3 - - USANDO FUNCTION ONLOAD()
//
function questao3(){
    preco = parseFloat(prompt("Digite o valor à vista: "));
    parcelas = parseInt(prompt("Digite o número de parcelas: ", "3 OU 5"));

    if(parcelas == 3){
        preco = ((preco * 0.1) + preco);
        result = preco / parcelas;
        result =  result.toFixed(2);                                                // TOFIXED() LIMITA AS CASAS DECIMAIS DEPOIS DA VIRGULA EX: result.toFixed(2) = numero.xx
        alert(
            "O valor total foi " + preco + ".\n3 parcelas de " +    result + ".");
    } else if(parcelas == 5){
        preco = ((preco * 0.2) + preco);
        result = preco / parcelas;
        result =  result.toFixed(2);
        alert(
            "O valor total foi " + preco + ".\n5 parcelas de " +    result + ".");  // UTILIZAR O \n PARA QUEBRAR LINHA NO ALERT DO JS
    }
}
//
// QUESTAO 4 - - USANDO FUNCTION ONLOAD()
//
function questao4(){
    nome = prompt("Digite o seu nome: ");
    notas = { 
        N1 : parseInt(prompt("Digite a primeira nota: ")),                          // vetor = {item1 : valor, item2 : valor, item3  : valor}
        N2 : parseInt(prompt("Digite a segunda nota: ")),                           // CHAMAR VETOR
        N3 : parseInt(prompt("Digite a terceira nota: "))                           // vetor.item1, vetor.item2, vetor.item3
    }
    media = ((notas.N1 + notas.N2 + notas.N3) / 3);

    if(media > 7){
        alert(nome + ", você foi aprovado.\nSua média foi de " + media + ".")
    } else {
        alert(nome + ", você foi reprovado.\nSua média foi de " + media + ".")
    }
}
//
// QUESTAO 5 - - USANDO FUNCTION ONLOAD()
//
function questao5(){
    month = parseInt(prompt("Digite o número do mês"));
    if(isNaN(month) || month <= 0 || month > 12){
        alert("Digite um mês válido.");
    } else {
    switch(month){
        case 1:
            alert("O mês digitado foi Janeiro.");
        break;
        case 2:
            alert("O mês digitado foi Fevereiro.");
        break;
        case 3:
            alert("O mês digitado foi Março.");
        break;
        case 4:
            alert("O mês digitado foi Abril.");
        break;
        case 5:
            alert("O mês digitado foi Maio.");
        break;
        case 6:
            alert("O mês digitado foi Junho.");
        break;
        case 7:
            alert("O mês digitado foi Julho.");
        break;
        case 8:
            alert("O mês digitado foi Agosto.");
        break;
        case 9:
            alert("O mês digitado foi Setembro.");
        break;
        case 10:
            alert("O mês digitado foi Outubro.");
        break;
        case 11:
            alert("O mês digitado foi Novembro.");
        break;
        case 12:
            alert("O mês digitado foi Dezembro.");
        break;
    }
}
}   
//
// QUESTAO 6
//
function questao6() {                                                         // TROCAR A PAGINA QUANDO MUDAR A SELECAO USANDO ONCHANGE()
    questao = document.getElementById("select-questao").selectedIndex;
    switch(questao){
        case 0:
            questao1();
            console.log("Questão 1");
        break;
        case 1:
            questao2();
            console.log("Questão 2");
        break;
        case 2:
            questao3();
            console.log("Questão 3");
        break;
        case 3:
            questao4();
            console.log("Questão 4");
        break;
        case 4:
            questao5();
            console.log("Questão 5");
        break;
    }
}
