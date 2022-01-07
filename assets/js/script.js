/*
Principais objetivos

1. Criar uma nova tarefa
 a. Capturar conteúdo adicionado pelo usuário -
 b. Criar nova tarefa -
 c. Adicionar nova tarefa na página -
 Obs: esses passos vão ocorrer a partir do clique no botão

2. Marcar uma tarefa como concluída

3. Remover uma tarefa
 a. Capturar todas as tarefas
 b. Identificar a tarefa clicada
 c. Remover a tarefa

*/

const buttonAddTarefa = document.querySelector('.formularioTarefa button');
const campoAddTarefa = document.getElementById('inputadicionarTarefa');

const listaTarefas = document.querySelector('ul');

buttonAddTarefa.addEventListener('click', adicionarNovaTarefa);

function adicionarNovaTarefa() {
    const conteudoCampo = campoAddTarefa.value;

    const tarefa = document.createElement('li');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const buttonFinalizarTarefa = document.createElement('button');
    const buttonRemoverTarefa = document.createElement('button');
    const img = document.createElement('img');

    h2.innerText = conteudoCampo;

    buttonFinalizarTarefa.classList.add('botaoFinalizarTarefa');

    buttonFinalizarTarefa.addEventListener('click', finalizarTarefa);
    buttonRemoverTarefa.addEventListener('click', removerTarefa);

    img.src = './assets/img/trash.svg';
    img.alt = 'Imagem botão remover tarefa';

    buttonRemoverTarefa.appendChild(img);

    div.appendChild(buttonFinalizarTarefa);
    div.appendChild(buttonRemoverTarefa);

    tarefa.appendChild(h2);
    tarefa.appendChild(div);

    // const li = `
    // <h2>${conteudoCampo}</h2>
    // <div>
    //     <button class="botaoFinalizarTarefa"></button>
    //     <button>
    //         <img src="./assets/img/trash.svg" alt="Imagem botão remover tarefa">
    //     </button>
    // </div>`;

    // tarefa.innerHTML = li;
    listaTarefas.appendChild(tarefa);

    // const listaBotoesRemover = document.querySelectorAll('.botaoFinalizarTarefa ~ button');
    // adicionarEventHandler(listaBotoesRemover);
}

// function adicionarEventHandler(listaBotoesRemover){
//     for(let i = 0; i < listaBotoesRemover.length; i++){
//         const buttonRemover = listaBotoesRemover[i];

//         buttonRemover.addEventListener('click', removerTarefa);
//     }
// }

function removerTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.remove();
}

function finalizarTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.classList.toggle('tarefaFinalizada');
}

const inputNoturno = document.getElementById('inputModonoturno');
const main = document.querySelector('main');

inputNoturno.addEventListener('click', ativarModoNoturno);

function ativarModoNoturno(){
    main.classList.toggle('modoNoturno');
}