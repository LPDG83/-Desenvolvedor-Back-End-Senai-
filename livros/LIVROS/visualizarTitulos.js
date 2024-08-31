const readline = require("readline-sync");
const fs = require("fs");

const controller = {

    objTitulos: async (caminho) => {
        try {

            const conteudo = fs.readFileSync(caminho, 'utf-8');

            const Titulos = JSON.parse(conteudo); // parse -> JSON em Objeto | stringify -> Objeto em JSON

            return Titulos;

        } catch (err) {
            console.error('Erro ao processar os Titulos:', err);
        }
    },

apresentarTitulos: async (objTitulos) =>{ // o paramêtro objTitulos é o objeto que contém os títulos
    const Titulos = await objTitulos; 
 
    let qtd = Titulos.length;

    if(qtd >=1){
       let status = "";
       for (let i=0; i<=qtd - 1; i++){
            status = Titulos[i].status === 0 ? "Lançamentos" : "Mais vendidos";

            console.log(`\n${i+1}- ${Titulos[i].nome} | ANO DE LANÇAMENTO: ${Titulos[i].ano} | CATEGORIA: ${status}`);
        } 
       
      }else{
           console.log("Não há titulos cadastrados!");
    }

}

}



module.exports = controller;