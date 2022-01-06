//JAVASCRIPT

//console.log("Meu nome é Hudson")

//******************/
//VARIAVEIS         /
//*****************/
//LET
//let nome = "Hudson Carolino"

//nome = "Maria"



//CONST
const cidade = "São Paulo"



//******************/
//TIPOS DE DADOS    /
//*****************/

//INTEIRO/NUMBER
// let numero1 = 25
// let numero2 = 25
// let resultado  = numero1 + numero2

// //STRING
// let texto  = "Esse tipo de dado é uma string"

// //BOOLEAN
// let verdadeiro  = true
// let falso  = false 

//******************/
//OPERADORES BÁSICOS/
//*****************/

//SOMA      +
//SUBTRAÇÃO -
//DIVISÃO  /
//MULTIPLICAÇÃO *
//MAIS IGUAL  +=
//MENOS IGUAL -=

// let numero = 4
// console.log(numero)

// numero -= 1
// console.log(numero)


//************************/
//ESTRUTURAS CONDICIONAIS/
//************************/

//OPERADORES DE COMPARAÇÃO/RELACIONAIS

//VERIFICA IGUALDADE
// 10 == 10 true

//VERIFICA TAMBÉM O TIPO DE DADO
// 10 === 10 true

//LÓGICOS

//MAIOR
// 10>1 TRUE
//MENOR 
// 10<1 FALSE

//MAIOR IGUAL 
// 20 >= 10 TRUE 
//MENOR IGUAL
// 20 <= 10 FALSE
//DIFERENTE 
// "Hudson" != "hudson" TRUE 

//************************/
//CONDICIONAIS IF E ELSE  /
//************************/
// let idade = 17
// let nome  = "Diego"

//EE
// if(idade >= 18 && nome == "Diego"){

//     console.log("Atingiu a maior idade")
//     console.log("E meu nome é "+ nome)

// }else{

//     console.log("Ainda não atingiu a maior idade")
//     console.log("E meu nome está incorreto")
// }
//OU

// let idade = 17
// let nome  = "Hudson"

// if(idade >= 18 && (nome == "Diego" || nome == "Hudson")){
    
//     console.log("Atingiu a maior idade")
//     console.log("E meu nome é "+ nome)

// }else{

//     console.log("Ainda não atingiu a maior idade")
//     console.log("E meu nome está incorreto")
// }


//************************/
//FUNÇÕES                 /
//************************/

//DECLARANDO FUNÇÃO
function digaOlaMundo(){

    console.log("Olá mundo")

}

//CHAMANDO PARA EXECUTAR A TAREFA
//digaOlaMundo()

// function soma(parm1, parm2){

//     let resultado  = parm1 + parm2
//     console.log(resultado)
// }

// soma(40, 50)

// function multiplicacao(parm1, parm2){

//     let resultado  = parm1 * parm2
//     console.log(resultado)
// }

// multiplicacao(2, 2)

function verificarMaiorIdade(idade){
    if(idade >= 18 ){
    
        return "Atingiu a maior idade"
     

    }else{

        return "Ainda não atingiu a maior idade" 

    }
}

// let mensagem  = ""
// mensagem = verificarMaiorIdade(18)
// console.log(mensagem)

// mensagem = verificarMaiorIdade(20)
// console.log(mensagem)

// mensagem = verificarMaiorIdade(17)
// console.log(mensagem)



//************************/
//Tipos de dados ⇒ Objetos/
//************************/

//ARRAY 

// let produtos = "Arroz, Feijão, Macarrão"
// console.log(produtos)

// let listaNomes = ["Hudson", "Maria", "Daniel", "Ismael", "Pam", "André"]
// //console.log(listaNomes)

// let listaTarefa = []
// function adicionarTarefa(tarefa){

//     listaTarefa.push(tarefa)

// }

// adicionarTarefa("Tarefa 1")
// adicionarTarefa("Tarefa 2")
// adicionarTarefa("Tarefa 3")
// console.log(listaTarefa)

//OBJETOS
let maria = {
    nome:   "Maria",
    cidade: "Curitiba",
    cpf: 1232139812,
    telefone: "(99) 9999-999"
}

let hudson = {
    nome:   "Hudson",
    cidade: "Curitiba",
    cpf: 1232139812,
    telefone: "(99) 9999-000"
}

//console.log(hudson.nome)

//************************/
//Estrutura de repetição  /
//************************/

//for(variavel controle ; condição de parada ; incremento){

//}

let listaNomes = ["Hudson", "Maria", "Daniel", "Ismael", "Pam", "André"]


for(let i = 0; i < listaNomes.length; i += 1){

    console.log(listaNomes[i])

}






