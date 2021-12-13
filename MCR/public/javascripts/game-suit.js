const gunting_c = document.getElementById("gunting-c")
const batu_c = document.getElementById("batu-c")
const kertas_c = document.getElementById("kertas-c")

const gunting_p = document.getElementById("gunting-p")
const batu_p = document.getElementById("batu-p")
const kertas_p = document.getElementById("kertas-p")
const result_show = document.getElementById("hasil");
const reload = document.getElementById("refresh-p-click");

// const { Historical } = require('../models')



class Game{
    constructor(comShuffle, show,comChoose,play_result){
        this.comShuffle = comShuffle
        this.comChoose = comChoose
        this.play_result = play_result
        this.show = show
    }

    bet(){
        const comShuffle = ['batu', 'kertas', 'gunting'];
        this.comChoose = comShuffle[Math.floor(Math.random() * comShuffle.length)];
    }

    logic(){
        if(this.player_choose === this.comChoose){
            this.play_result = 'draw'
            this.show = "DRAW"
            this.result()

            app.post('/result', (req, res) => {
                Historical.create({
                    nama_game: 'game suit',
                    username: req.body.play_result
                })
            })
            
            
        }else if (
            (this.player_choose === "batu" && this.comChoose === "gunting") || (this.player_choose === "gunting" && this.comChoose === "kertas") || (this.player_choose === "kertas" && this.comChoose === "batu")
            ){
                this.play_result = 'pwin'
                this.show = "PLAYER 1 WIN"
                this.result()
                
                app.post('/result', (req, res) => {
                    Historical.create({
                        nama_game: 'game suit',
                        username: req.body.play_result
                    })
                })
                
        }else{
            this.play_result = 'cwin'
            this.show = "COM WIN"
            this.result()
            
            app.post('/result', (req, res) => {
                Historical.create({
                nama_game: 'game suit',
                username: req.body.play_result
                })
            })
            
        }

        this._text_console()
        
    }

    result(){
        result_show.classList.remove('result')
        result_show.classList.add(this.play_result)
        result_show.innerHTML = this.show;  
        console.log(this.show)
    }

    freeze(){
        batu_p.style.pointerEvents = "none"
        gunting_p.style.pointerEvents = "none"
        kertas_p.style.pointerEvents = "none"
    }

    refresh(){
        reload.addEventListener("click", () => {
        gunting_p.style.pointerEvents = 'auto';
        kertas_p.style.pointerEvents = 'auto';
        batu_p.style.pointerEvents = 'auto';

        batu_p.style.backgroundColor = "whitesmoke";
        gunting_p.style.backgroundColor = "whitesmoke";
        kertas_p.style.backgroundColor = "whitesmoke";
        
        batu_c.style.backgroundColor = "whitesmoke";
        gunting_c.style.backgroundColor = "whitesmoke";
        kertas_c.style.backgroundColor = "whitesmoke";

        result_show.classList.remove('draw');
        result_show.classList.remove('pwin');
        result_show.classList.remove('cwin');

        result_show.classList.add('result');
        result_show.innerHTML = "VS";
        
        this.player_choose=''
        this.shuffle=''

        })
    }

    _text_console(){
        console.log("computer pilih "+this.comChoose)
        console.log("player pilih "+this.player_choose)
    }
}

class Human extends Game{
    constructor(comShuffle,comChoose,player_choose){
        super(comShuffle,comChoose)
        this.player_choose = player_choose
       
    }
    
    batu(){
        batu_p.addEventListener("click", () => {
        this.player_choose = 'batu';
        batu_p.style.backgroundColor = "gold"
        super.bet()
        this._comBg()
        this.logic()
        this.freeze()
        })
    }

    gunting(){
        gunting_p.addEventListener("click", () => {
        this.player_choose = 'gunting';
        gunting_p.style.backgroundColor = "gold"
        super.bet()
        this._comBg()
        this.logic()
        this.freeze()
        })
    }

    kertas(){
        super.bet();
        kertas_p.addEventListener("click", () => {
        this.player_choose = 'kertas'
        kertas_p.style.backgroundColor = "gold"
        super.bet()
        this._comBg()
        this.logic()
        this.freeze()
        })
    }  

    _comBg(){
        if(this.comChoose == 'batu'){
            batu_c.style.backgroundColor = "gold";
        }else if (this.comChoose == 'kertas'){
            kertas_c.style.backgroundColor = "gold";
        }else{
            gunting_c.style.backgroundColor = "gold";
        }
    }
}

const play = new Human();
play.batu()
play.kertas()
play.gunting()





const repeat = new Game()
repeat.refresh()



