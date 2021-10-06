let player = ""
let com = ""

function choose(element){
    player = (element.getAttribute("value"));
    com = Math.floor(Math.random() * 101);

    //ambil pilihan computer
    if (com <= 33 && com >0) {
        console.log("Pilihan dari COM adalah BATU " + "value " + com);
        com_choose = "BATU"
    } else if (com >33 && com<=66){
        console.log("Pilihan dari COM adalah GUNTING " + "value " + com);
        com_choose = "GUNTING"
    } else {
        console.log("Pilihan dari COM adalah KERTAS " + "value " + com);
        com_choose = "KERTAS"
    }

    //logic game suitnynya
    if (player == com_choose){
        alert("hasil seri" + "Player = " + player + "Computer = " + com_choose);
        com_choose = ""
        player = ""
    } else if (
        (player == "BATU" && com_choose == "GUNTING") || (player == "GUNTING" && com_choose == "KERTAS") || (player == "KERTAS" && com_choose == "BATU")
        ){
        alert("Player Menang " + "Player = " + player + "Computer = " + com_choose);
        com_choose = ""
        player = ""
    } else {
        alert("Player Kalah " + "Player = " + player + "Computer = " + com_choose);
        com_choose = ""
        player = ""
    }

} 














