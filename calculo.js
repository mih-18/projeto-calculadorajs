console.log("Está funcionando!");

/*let anoDeNascimento = window.prompt("Em que ano você nasceu?");
console.log(anoDeNascimento);
alert("Quem nasceu em "+ anoDeNascimento +" vai fazer 16 anos em 2023");
*/

//----------------------------------------------//
//calculadora de nota

//aqui trás as notas do html e tira o conteúdo do texto apenas (sem códigos, fica feio)
let notaPrimTrim = parseFloat(document.querySelector(".primeiroTrim").textContent);
let notaSegTrim = parseFloat(document.querySelector(".segundoTrim").textContent);
let notaTercTrim = parseFloat(document.querySelector(".terceiroTrim").textContent);
console.log(notaSegTrim);

//variavel que armazena o conteúdo do resultado
let aprovacaoFinal = document.querySelector(".aprovacao");
let media = notaPrimTrim + notaSegTrim + notaTercTrim;

let faltando = document.querySelector(".resultado");

//parte que diz se passou ou não 
if(media >= 180){
    aprovacaoFinal.textContent = "PARABÉNS, PROF CAIO! VOCÊ FOI APROVADO!";
}
else{
    let faltando = 180 - media;
    aprovacaoFinal.textContent = "Prof Caio, " + "para você passar faltou: 95 :(" + faltando;
}

let nota = window.prompt("Quais são minhas notas?");
alert("1TRIM: 98 / 2TRIM: 97 / 3TRIM: 99. PARABÉNS, VOCÊ FOI APROVADO!");



