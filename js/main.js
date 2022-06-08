'use strict'

class MyGame{
    constructor(){
        this.Balls=100;
        this.picture1=document.querySelector('.img1');
        this.picture2=document.querySelector('.img2');
        this.picture3=document.querySelector('.img3');
        this.picture4=document.querySelector('.img4');
        this.button=document.getElementById('myButton');
        this.message=document.querySelector('.message');
        this.textBalls=document.querySelector('.balls');
        
    }
    startGame(){
        this.button.addEventListener('click',()=>{
            let a=Math.floor(Math.random() * (4-1)+1);
            let b=Math.floor(Math.random() * (4-1)+1);
            let c=Math.floor(Math.random() * (4-1)+1);
            let d=Math.floor(Math.random() * (4-1)+1);
          
        this.picture1.setAttribute('src','img/'+a+'.png');
        this.picture2.setAttribute('src','img/'+b+'.png');
        this.picture3.setAttribute('src','img/'+c+'.png');
        this.picture4.setAttribute('src','img/'+d+'.png');
        this.checkVinorEndGame(a,b,c,d);
       
    });

    }
    checkVinorEndGame(a,b,c,d){
        if(a==b&&b==c&&c==d){
            this.message.innerText="Вітаемо Ви виграли";
            this.Balls=this.Balls+100;
            this.textBalls.innerHTML='Жетоны'+'<br>'+this.Balls;

        }
        else{

            this.message.innerText="Халепа. Спробуй ще!";
            
            this.Balls=this.Balls-20;
            this.textBalls.innerHTML='Жетоны'+'<br>'+this.Balls;
            if(this.Balls<=0){
                this.button.disabled=true;
                this.button.style.backgroundColor='grey';
                this.message.innerText="Поповнити рахунок";
                this.message.addEventListener('click',()=>location.reload());
                              
            }


        }



    }
    init(){
        this.startGame();
    }

}
let game=new MyGame();
game.init();