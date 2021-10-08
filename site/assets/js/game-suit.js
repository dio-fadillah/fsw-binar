var player = ""
var com_choose = ""
var bg_choose_c = ""
var bg_choose_p = ""
var prevent_click = ""
var reset = ""
var reset_click =""

function choose(element){
    player = (element.getAttribute("value"));
    com = Math.floor(Math.random() * 101);

    if (player == "BATU"){
        bg_choose_p = document.getElementById("batu-p");
        bg_choose_p.style.backgroundColor = "gold";
        document.getElementById("gunting-p").style.pointerEvents = 'none';
        document.getElementById("kertas-p").style.pointerEvents = 'none';
        document.getElementById("batu-p").style.pointerEvents = 'none';

    }else if(player == "GUNTING"){
        bg_choose_p = document.getElementById("gunting-p");
        bg_choose_p.style.backgroundColor = "gold";
        document.getElementById("gunting-p").style.pointerEvents = 'none';
        document.getElementById("kertas-p").style.pointerEvents = 'none';
        document.getElementById("batu-p").style.pointerEvents = 'none';

    }else{
        bg_choose_p = document.getElementById("kertas-p");
        bg_choose_p.style.backgroundColor = "gold";
        document.getElementById("gunting-p").style.pointerEvents = 'none';
        document.getElementById("kertas-p").style.pointerEvents = 'none';
        document.getElementById("batu-p").style.pointerEvents = 'none';
    }

    //ambil pilihan computer
    if (com <= 33 && com >0) {
        console.log("Pilihan dari COM adalah BATU " + "value " + com);
        com_choose = "BATU"
        bg_choose_c = document.getElementById("batu-c");
        bg_choose_c.style.backgroundColor = "gold";
        
    } else if (com >33 && com<=66){
        console.log("Pilihan dari COM adalah GUNTING " + "value " + com);
        com_choose = "GUNTING"
        bg_choose_c = document.getElementById("gunting-c");
        bg_choose_c.style.backgroundColor = "gold";
       
    } else {
        console.log("Pilihan dari COM adalah KERTAS " + "value " + com);
        com_choose = "KERTAS"
        bg_choose_c = document.getElementById("kertas-c");
        bg_choose_c.style.backgroundColor = "gold";        
    }

    

    //logic game suitnynya
    if (player == com_choose){
        alert("hasil seri" + "Player = " + player + "Computer = " + com_choose);
        
    } else if (
        (player == "BATU" && com_choose == "GUNTING") || (player == "GUNTING" && com_choose == "KERTAS") || (player == "KERTAS" && com_choose == "BATU")
        ){
        alert("Player Menang " + "Player = " + player + "Computer = " + com_choose);
        
    } else {
        alert("Player Kalah " + "Player = " + player + "Computer = " + com_choose);
       
    }
} 

function ulang(element){
        document.getElementById("gunting-p").style.pointerEvents = 'auto';
        document.getElementById("kertas-p").style.pointerEvents = 'auto';
        document.getElementById("batu-p").style.pointerEvents = 'auto';

        document.getElementById("batu-p").style.backgroundColor = "white";
        document.getElementById("gunting-p").style.backgroundColor = "white";
        document.getElementById("kertas-p").style.backgroundColor = "white";
        
        document.getElementById("batu-c").style.backgroundColor = "white";
        document.getElementById("gunting-c").style.backgroundColor = "white";
        document.getElementById("kertas-c").style.backgroundColor = "white";
    
        
    }



