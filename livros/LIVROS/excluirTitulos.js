const readline = require("readline-sync");
const fs = require("fs");

const excluir = async (caminho) => {
    const visualizar = require('./visualizarTitulos');
    const Titulos = await visualizar.objTitulos(caminho);

    await visualizar.apresentarTitulos(Titulos);

    let qtd = Titulos.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt('\nSelecione uma opção para excluir:');

        while (opcao < 1 || opcao > qtd) {
            console.log("OPÇÃO INVÁLIDA!");
            let opcao = readline.question("\nSelecione uma opção para excluir:");

        }

                Titulos.splice(opcao-1,1);

            const TitulosJSON = JSON.stringify(Titulos.filter(Boolean));



            try {
                fs.writeFileSync(caminho, TitulosJSON);
                console.log("Titulos excluidos com sucesso!");
            } catch (err) {
                console.error('Erro ao excluir os Titulos:', err);
            }
        }
    
    
    }
    
    module.exports = excluir