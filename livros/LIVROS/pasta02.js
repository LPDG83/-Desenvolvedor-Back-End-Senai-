const readline = require("readline-sync"); // Importar as bibliotecas
const fs = require("fs");

 // Declarar a constante que irá informar o caminho do arquivo
const caminhoDoArquivo = '.CatalagosdeLivros.json';

// declarar as funções que irão visualizar, adicionar, atualizar e excluir
const visualizarTitulos = require('./visualizarTitulos.js');
const adicionarTitulos = require('./adicionarTitulos.js');
const atualizarTitulos = require('./atualizarStatusTitulos.js');
const excluirTitulos = require('./excluirTitulos.js');


const criarArquivoSeNaoExiste = async (caminho) => {
    if (!fs.existsSync(caminho)) { //Conferir se o arquivo existe
        try {
            fs.writeFileSync(caminho, "[]")
        } catch (err) {
            console.error("Erro ao criar o arquivo:", err);
        }
    }
}

const exibirMenuDeTitulos = async () => {
    console.log("--------------------------------");
    const opcao = readline.questionInt(" 1- Adicionar Títulos;\n 2- Visualizar Títulos;\n 3- Atualizar status dos Títulos;\n 4- Excluir Títulos;\n 5- Sair\n\n Escolha uma opção:");
    console.log("--------------------------------");

    switch (opcao) {
        case 1:
            await adicionarTitulos(caminhoDoArquivo,visualizarTitulos.objTitulos(caminhoDoArquivo));
            break;
        case 2:
            await visualizarTitulos.apresentarTitulos(visualizarTitulos.objTitulos(caminhoDoArquivo));
            break;
        case 3: 
            await atualizarTitulos(caminhoDoArquivo);
            break;
        case 4:
            await excluirTitulos(caminhoDoArquivo);
            break;
        case 5:
            return false;
            break;
        default:
            console.log("Opção inválida!");
    }
    return true;
}

const executarMenuPrincipal = async ()=>{
    let continuar = true;
    while(continuar){
        continuar = await exibirMenuDeTitulos();
    }
}

const main = async () =>{
    await criarArquivoSeNaoExiste(caminhoDoArquivo);
    await executarMenuPrincipal();
}

main();















