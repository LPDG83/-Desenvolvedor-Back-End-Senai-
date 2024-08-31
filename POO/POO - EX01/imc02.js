const readline = require("readline-sync");

class Pessoa {
    _nome;
    _idade;
    _peso;
    _altura;

    //Foi Criado uma classe


constructor(pNome,pIdade, pPeso,pAltura) {
        this._nome = pNome;
        this._idade = pIdade;
        this._peso = pPeso;
        this._altura = pAltura;

        // Método contrutor da classe
        // Informado os atributos e métodos
        
    }
        // Método para calcular o IMC
    calcularIMC(){
      return  this._peso / (this._altura *this._altura)
    }

}

let nomePessoa = readline.question("Digite o nome da pessoa:");
let idadePessoa = readline.questionInt("Digite a idade:");
let pesoPessoa = readline.questionFloat("Digite o peso:");
let alturaPessoa = readline.questionFloat("Digite a altura:");

let pessoa = new Pessoa (nomePessoa, idadePessoa, pesoPessoa, alturaPessoa);

let imc = pessoa.calcularIMC();

console.log(imc);


