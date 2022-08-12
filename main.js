var listaConvidados = [];
function enviar(){
    var nome = document.getElementById("nome1").value;
    listaConvidados.push(nome);
    var comprimentoLista = listaConvidados.length;
    console.log("comprimento da lista= "+comprimentoLista);
    document.getElementById("displayNome").innerHTML = listaConvidados.toString();

}
function mostrar(){
    var juntar = listaConvidados.join("<br>");
    document.getElementById("p1").innerHTML = juntar.toString();
    document.getElementById("btnOrganizar").style.display = "block";

}
function organizar(){
    listaConvidados.sort();
    var juntar = listaConvidados.join("<br>");
    document.getElementById("listaOrganizada").innerHTML = juntar.toString();

}
function pesquisar(){
    var nomePesquisado = document.getElementById("pesquisado").value;
    var contadorNomes = 0;
    for(var nome = 0; nome<listaConvidados.length; nome++){
        if(nomePesquisado==listaConvidados[nome]){
            contadorNomes++;
        }
    }
    document.getElementById("p2").innerHTML = "O nome encontrado "+contadorNomes+" vez(es)";
}