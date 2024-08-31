const readline = require("readline-sync");
const fs = require("fs");

const adicionarTitulos = async (caminho, TitulosdeLivros) =>{

    let Titulos = await TitulosdeLivros;

    let qtdTitulos = Titulos.length + 1;

    let novosTitulos = {
        id: qtdTitulos,
        nome: readline.question('\nQuais o nome do Titulo:'),
        ano: readline.question('Qual o ano de lançamento:'),
        status: 0 // 0 define atividade não concluída

}

Titulos.push(novosTitulos);

const CatalagosdeLivrosJSON = JSON.stringify(Titulos);

try{
    fs.writeFileSync(caminho, CatalagosdeLivrosJSON);
    console.log('Catalagos adicionados com sucesso!');
}catch(err){
    console.error("Erro ao adicionar os Catalagos:",err);
}

}

module.exports = adicionarTitulos;
