var gunting_c = document.getElementById("gunting-c")
var batu_c = document.getElementById("batu-c")
var kertas_c = document.getElementById("kertas-c")

var gunting_p = document.getElementById("gunting-p")
var batu_p = document.getElementById("batu-p")
var kertas_p = document.getElementById("kertas-p")
var play_result = document.getElementById("hasil");

function choose(element){
    player = (element.getAttribute("value"));
    com = Math.floor(Math.random() * 101);

    if (player == "BATU"){
        batu_p.style.backgroundColor = "gold";
        gunting_p.style.pointerEvents = 'none';
        kertas_p.style.pointerEvents = 'none';
        batu_p.style.pointerEvents = 'none';

    }else if(player == "GUNTING"){
        gunting_p.style.backgroundColor = "gold";
        gunting_p.style.pointerEvents = 'none';
        kertas_p.style.pointerEvents = 'none';
        batu_p.style.pointerEvents = 'none';

    }else{
        kertas_p.style.backgroundColor = "gold";
        gunting_p.style.pointerEvents = 'none';
        kertas_p.style.pointerEvents = 'none';
        batu_p.style.pointerEvents = 'none';
    }

    //ambil pilihan computer
    if (com <= 33 && com >0) {
        com_choose = "BATU"
        batu_c.style.backgroundColor = "gold";
        
    } else if (com >33 && com<=66){
        com_choose = "GUNTING"
        gunting_c.style.backgroundColor = "gold";
       
    } else {
        com_choose = "KERTAS"
        kertas_c.style.backgroundColor = "gold";        
    }

    //logic game suitnynya
    if (player == com_choose){
        play_result.classList.add('draw');
        play_result.innerHTML = "DRAW";
        console.log("Pilihan dari COM adalah " + com_choose + " random com value " + com + " dan Player Pilih " + player + " hasil main seri");
        
    } else if (
        (player == "BATU" && com_choose == "GUNTING") || (player == "GUNTING" && com_choose == "KERTAS") || (player == "KERTAS" && com_choose == "BATU")
        ){
        play_result.classList.remove('result');
        play_result.classList.add('pwin');
        play_result.innerHTML = "PLAYER 1 WIN";
        console.log("Pilihan dari COM adalah " + com_choose + " random com value " + com + " dan Player Pilih " + player + " hasil main player menang");
        
    } else {
        play_result.classList.remove('result');
        play_result.classList.add('cwin');
        play_result.innerHTML = "COM WIN";
        console.log("Pilihan dari COM adalah " + com_choose + " random com value " + com + " dan Player Pilih " + player + " hail main computer menang");       
    }
} 

function refresh(element){
        gunting_p.style.pointerEvents = 'auto';
        kertas_p.style.pointerEvents = 'auto';
        batu_p.style.pointerEvents = 'auto';

        batu_p.style.backgroundColor = "whitesmoke";
        gunting_p.style.backgroundColor = "whitesmoke";
        kertas_p.style.backgroundColor = "whitesmoke";
        
        batu_c.style.backgroundColor = "whitesmoke";
        gunting_c.style.backgroundColor = "whitesmoke";
        kertas_c.style.backgroundColor = "whitesmoke";

        play_result.classList.remove('draw');
        play_result.classList.remove('pwin');
        play_result.classList.remove('cwin');

        play_result.classList.add('result');
        play_result.innerHTML = "VS";
   
    }



