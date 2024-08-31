const readline = require("readline-sync"); // Importar as bibliotecas
const fs = require("fs");

try {
    fs.writeFileSync('./catalagos-de-livros.txt', '1-Cadastro de livros!');
    console.log("Arquivo criado e salvo com sucesso!");
} catch (err) {
    console.error('Erro ao escrever no arquivo:', err);
    return;
}

let conteudo = "";

try {
    conteudo = fs.readFileSync('./Catalagos-de-livros.txt', 'utf8');
    console.log("Conteúdo do arquivo:",conteudo);
} catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
}

