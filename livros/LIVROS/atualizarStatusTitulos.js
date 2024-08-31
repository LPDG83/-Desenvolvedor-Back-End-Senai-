const readline = require("readline-sync");
const fs = require("fs");

const atualizar = async (caminho) => {
    const visualizar = require('./visualizarTitulos');
    const Titulos = await visualizar.objTitulos(caminho);

    await visualizar.apresentarTitulos(Titulos);

    let qtd = Titulos.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt('\nSelecione uma opção para atualizar o status:');

        while (opcao < 1 || opcao > qtd +1) {
            console.log("OPÇÃO INVÁLIDA!");
            let opcao = readline.question("\nSelecione uma opção para atualizar o status:");


        }

        Titulos[opcao - 1].status = Titulos[opcao - 1].status === 0 ? 1 : 0;

        const TitulosJSON = JSON.stringify(Titulos);

        try {
            fs.writeFileSync(caminho, TitulosJSON);
            console.log("Titulos atualizados com sucesso!");
        } catch (err) {
            console.error('Erro ao atualizar os Titulos:', err);
        }
    }


}

module.exports = atualizar;