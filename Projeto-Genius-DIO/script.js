let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelho
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);//arredondar o numero e sortea de 0 a 3
    order[order.length] = colorOrder;//atribui o indice a cor que vai ser gerada
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);

        lightColor(elementColor, Number(i) + 1 );
    }
}


//acende a proxima cor
let lightColor = (element, number) =>{
    number= number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//checar se os botoes clicados sao os mesmos da ordem gerado do jogo
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            GameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação:${score}\nvocê acertou! Iniciando Proximo Nivel!`);
        nextLevel();
    }
}

//função para clicar nos botoes(usuario)

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// funçao que retorna cor

let createColorElement = (color) =>{
    if (color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue
    }
}

//funçao para proximo nivel do jogo

let nextLevel= () =>{
    score++;
    shuffleOrder();
}

//funcao caso o jogador der GAMEOVER;

let GameOver = () =>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo! =( \nClique em OK para iniciar um jogo novo!`);
    order = [];
    clickedOrder = [];

    playGame();
}
//funcao de inicio do jogo
let playGame = () =>{
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo!');
    score = 0;

    nextLevel();


}
//eventos de clicque para as cores

green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);

//INICIO DO JOGO

playGame();
