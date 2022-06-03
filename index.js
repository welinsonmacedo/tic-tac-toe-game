let player=document.getElementById("player")
let reset=document.getElementById("reset")
let casas=document.getElementsByTagName("input")

let playerAtual='-'
let win='-'

for(let i=0;i<9;i++) {
    casas[i].addEventListener('click', (event) => {
      
        if( (event.target.value=='_') && (win=='_')) {
            event.target.value=playerAtual; 
            event.target.style.color='black'; 

            trocarJogador(); 

            win = vitoria(); 

          
            if(win!='_') {
                player.innerText=`${win} venceu!`;
            
            }
        }
    });
}
reset.addEventListener('click', (event) => {
    for(let i=0;i<9;i++) {
        casas[i].value='_'; 
        casas[i].style.color='white';
        casas[i].style.backgroundColor='white'; 
    }

    win = '_'; 

    sortearJogador(); 
});
const sortearJogador = function() {
    if(Math.floor(Math.random() * 2)==0) {
        playerAtual = "O"; 
        player.innerText="O"; 
        player.style.color='#F00'; 
    }else{
        playerAtual= "X";
        player.innerText="X"; 
        player.style.color='#00F'; 
    }
}

sortearJogador()
const trocarJogador = function() {
    if(playerAtual=='X') {
        playerAtual='O';
        player.innerText='O';
        player.style.color='#F00';
    
    }else{
        playerAtual='X';
        player.innerText='X';
        player.style.color='#00F';
    }
}

const vitoria = function() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[1].style.backgroundColor='#0F0';
        casas[2].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
        casas[3].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';

        return casas[3].value;

    }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
        casas[6].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[6].value;

    }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[3].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
        casas[1].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';

        return casas[1].value;

    }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[2].value;
    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        return casas[0].value;

    }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        return casas[2].value;
    }

    return '_';
}