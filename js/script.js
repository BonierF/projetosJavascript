/*

    Exercício básico: Pergunte ao usuário seu nome, utilizando prompt().
    Em seguida, pergunte ao usuário sua idade.
    Se a idade informada pelo usuário for maior ou igual a 18. Informe que ele é maior de idade. Caso
    contrário, diga que ele é menor de idade.



*/

var nome, idade;


nome = prompt("Qual seu nome ?")
idade = prompt("Qual a sua idade ?")

if (idade > 17) {

    alert(nome + ", você é maior de idade!")
}

else {

    alert(nome + ", você é menor de idade !")
}

