/** 
 * calculadora flex
 */
var nome;
nome = prompt("Digite seu nome. ");     
alert("Olá "+nome+", digite o valor dos combustiveis para verificar qual esta mais em conta!");

var etanol,gasolina; 

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if(etanol < 0.7 * gasolina){
        alert("O Etanol Esta mais barato!");
    }
    else if(etanol > 0.7 * gasolina){
        alert("A Gasolina esta mais barata");
    }
    else if(etanol == (0.7 * gasolina)){
        alert("Ambos tem o mesmo custo beneficio");
    }else{
        alert("Erro, valor invalido tente novamente!");
    }

}
