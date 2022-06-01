<template>
    <div>
      <canvas id="canvas" style="width: 100%;height: 100%;">
        当前浏览器不支持canvas,请更换浏览器再试
      </canvas>
      <div id="endTime" style="display:none;font-size: 40px;font-weight: bold;color: red;width: 100%;margin-top: 200px;text-align: center;">
        <div>下班啦!</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
      return {
        digit:[
          [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
          ],//0
          [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
          ],//1
          [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
          ],//2
          [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
          ],//3
          [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
          ],//4
          [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
          ],//5
          [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
          ],//6
          [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
          ],//7
          [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
          ],//8
          [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
          ],//9
          [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
          ]//:
        ],
        WINDOW_WIDTH: 0,
        WINDOW_HEIGHT: 0,
        RADIUS: 0,
        MARGIN_TOP: 0,
        MARGIN_LEFT: 0,
        curShowTimeSeconds: 0,
        nextShowTimeSeconds: 0,
        nextHour: 0,
        nextMinute: 0,
        nextSecond: 0,
        curMinute: 0,
        curSecond: 0,
        beforesArr: [],
        balls: [],
        colors: ['#ffcc00','#ff00cc','#ccff00','#cc00ff','#00ffcc','#00ccff'],
      }
    },
  mounted() {
    var isEnd = document.querySelector('#endTime')
      this.WINDOW_WIDTH = document.body.clientWidth;
      this.WINDOW_HEIGHT = document.body.clientHeight;
      this.MARGIN_LEFT = Math.round( this.WINDOW_WIDTH/10);
      this.MARGIN_TOP = Math.round( this.WINDOW_HEIGHT/5);
      this.RADIUS = Math.round( this.WINDOW_WIDTH*4/5/108)-1;
      this.beforesArr = this.loadTime()
      var canvas = document.getElementById('canvas');
      canvas.width =  this.WINDOW_WIDTH;
      canvas.height =  this.WINDOW_HEIGHT;
      var context = canvas.getContext('2d');
      this.curShowTimeSeconds = this.getCurrentShowTimeSeconds();
      if(this.beforesArr&& this.beforesArr.length>0) {
        let timer = setInterval(()=>{
          if(!this.loadTime()) {
            clearInterval(timer)
            document.body.style.backgroundColor = '#000'
            isEnd.style.display = 'block'
            canvas.style.display = 'none'
            return
          }
          this.render(context);
          this.update()
        },50)
      }else{
        isEnd.style.display = 'block'
        canvas.style.display = 'none'
        document.body.style.backgroundColor = '#000'
      }
  },
  methods: {
     update(){
        this.nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
        this.nextHour = parseInt(this.nextShowTimeSeconds/3600);
        this.nextMinute = parseInt((this.nextShowTimeSeconds - this.nextHour*3600)/60);
        this.nextSecond = this.nextShowTimeSeconds%60;
        this.curHour = parseInt(this.curShowTimeSeconds/3600);
        this.curMinute = parseInt((this.curShowTimeSeconds - this.curHour*3600)/60);
        this.curSecond = this.curShowTimeSeconds%60;
        let sArr = this.loadTime()
        for(let j = 0;j<sArr.length;j++) {
          if(this.beforesArr[j]!== sArr[j]){
            this.addBalls(this.MARGIN_LEFT+20*(this.RADIUS+1)*j,this.MARGIN_TOP,parseInt(sArr[j]));
          }
        }
        this.eforesArr =  sArr
        this.updateBalls();
      },
     updateBalls(){
        for(var i=0;i<this.balls.length;i++){
          this.balls[i].x += this.balls[i].vx;
          this.balls[i].y += this.balls[i].vy;
          this.balls[i].vy += this.balls[i].g;
          if( this.balls[i].y >= this.WINDOW_HEIGHT - this.RADIUS){
            this.balls[i].y = this.WINDOW_HEIGHT - this.RADIUS;
            this. balls[i].vy = - this.balls[i].vy *0.75;
          }
        }
        var count = 0;
        for(var i=0;i<this.balls.length;i++){
          if(this.balls[i].x + this.RADIUS >0 && this.balls[i].x - this.RADIUS < this.WINDOW_WIDTH){
            this.balls[count++] = this.balls[i]
          }
        }
        while( this.balls.length > count ){
          this.balls.pop();
        }
      },
      addBalls(x,y,num){
        for(var i=0;i<this.digit[num].length;i++){
          for(var j=0;j<this.digit[num][i].length;j++){
            if(this.digit[num][i][j] == 1){
              var aBall = {
                x : x+j*2*(this.RADIUS+1)+(this.RADIUS+1),
                y : y+i*2*(this.RADIUS+1)+(this.RADIUS+1),
                g : 1.5+Math.random(),
                vx : Math.pow(-1,Math.ceil(Math.random()*1000))*4,//取4或者-4
                vy:-5,
                color:this.colors[Math.floor(Math.random()*this.colors.length)]
              }
              this.balls.push( aBall );
            }
          }
        }
      },
      guoqingTime() {
        let q = Math.ceil((new Date(new Date().toLocaleDateString()+'/24:00').getTime() - new Date().getTime())/1000)
        if(q<0) {
          return false
        }
        return  q.toString().split('')
      },
      loadTime() {
        let s = Math.ceil((new Date(new Date().toLocaleDateString()+'/19:00').getTime() - new Date().getTime())/1000)
        if(s<0) {
          return false
        }
        return  s.toString().split('')
      },
     getCurrentShowTimeSeconds(){
        var curTime = new Date();
        var ret = curTime.getHours()*3600 + curTime.getMinutes()*60 + curTime.getSeconds();
        // console.log(ret,'ret')
        return ret;
      },
      render(ctx){
        ctx.clearRect(0,0,this.WINDOW_WIDTH,this.WINDOW_HEIGHT)
        var hour = parseInt(this.curShowTimeSeconds/3600);
        var minute = parseInt((this.curShowTimeSeconds - hour*3600)/60);
        var second = this.curShowTimeSeconds%60;
        let s = Math.ceil((new Date(new Date().toLocaleDateString()+'/24:00').getTime() - new Date().getTime())/1000)
        let sArr = this.loadTime()
        for(let i=0;i<sArr.length;i++) {
          this.renderDigit(this.MARGIN_LEFT+20*(this.RADIUS+1)*i,this.MARGIN_TOP,parseInt(sArr[i]),ctx);
        }
        for(var i=0;i<this.balls.length;i++){
          ctx.fillStyle = this.balls[i].color;
          ctx.beginPath();
          ctx.arc(this.balls[i].x,this.balls[i].y,this.RADIUS,0,2*Math.PI,true);
          ctx.closePath();
          ctx.fill();
        }
      },
     renderDigit(x,y,num,ctx){
      for(var i=0;i<this.digit[num].length;i++){
        for(var j=0;j<this.digit[num][i].length;j++){
          if(this.digit[num][i][j] == 1){
            this.draw(x+j*2*(this.RADIUS+1)+(this.RADIUS+1),y+i*2*(this.RADIUS+1)+(this.RADIUS+1),this.RADIUS,ctx)
          }
        }
      }
    },
   draw(x,y,r,ctx){
      ctx.beginPath();
      ctx.arc(x,y,r,0,2*Math.PI);
      // ctx.fillStyle = isDark?'#333':'#fff';
      ctx.fill();
      ctx.closePath();
    }
  }
 }
</script>

<style scoped>
  .toggle {
    display: block;
    text-align: left;
    margin-top: 20px;
    user-select: none;
  }

  .toggle--checkbox {
    display: none;
  }

  .toggle--btn {
    display: block;
    /*margin: 0 auto;*/
    /*font-size: 1.4em;*/
    transition: all 350ms ease-in;
  }
  .toggle--btn:hover {
    cursor: pointer;
  }

  .toggle--btn, .toggle--btn:before, .toggle--btn:after,
  .toggle--checkbox,
  .toggle--checkbox:before,
  .toggle--checkbox:after,
  .toggle--feature,
  .toggle--feature:before,
  .toggle--feature:after {
    transition: all 250ms ease-in;
  }
  .toggle--btn:before, .toggle--btn:after,
  .toggle--checkbox:before,
  .toggle--checkbox:after,
  .toggle--feature:before,
  .toggle--feature:after {
    content: '';
    display: block;
  }

  /* ===================================================
     Day/Night and Gender toggle buttons
     =================================================== */
  .toggle--daynight .toggle--btn,
  .toggle--like .toggle--btn {
    position: relative;
    height: 70px;
    width: 125px;
    border-radius: 70px;
  }
  .toggle--daynight .toggle--btn:before,
  .toggle--like .toggle--btn:before {
    position: absolute;
    top: 2px;
    left: 4px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .toggle--daynight .toggle--btn {
    border: 5px solid #1c1c1c;
    background-color: #3c4145;
  }
  .toggle--daynight .toggle--btn:before {
    background-color: #fff;
    border: 5px solid #e3e3c7;
  }
  .toggle--daynight .toggle--btn:after {
    position: absolute;
    top: 62%;
    left: 39px;
    z-index: 10;
    width: 11.2px;
    height: 11.2px;
    opacity: 0;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: #fff 0 0, #fff 3px 0, #fff 6px 0, #fff 9px 0, #fff 11px 0, #fff 14px 0, #fff 16px 0, #fff 21px -1px 0 1px, #fff 16px -7px 0 -2px, #fff 7px -7px 0 1px, #d3d3d3 0 0 0 4px, #d3d3d3 6px 0 0 4px, #d3d3d3 11px 0 0 4px, #d3d3d3 16px 0 0 4px, #d3d3d3 21px -1px 0 5px, #d3d3d3 16px -7px 0 1px, #d3d3d3 7px -7px 0 5px;
    transition: opacity 100ms ease-in;
  }
  @keyframes starry_star {
    50% {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: #fff 30px -3px 0 0, #fff 12px 10px 0 -1px, rgba(255, 255, 255, 0.1) 38px 18px 0 1px, #fff 32px 34px 0 0, rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px, #fff 5px 38px 0 1px;
    }
  }
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 100;
      transform: scale(1.1);
    }
    55% {
      transform: scale(1.1);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      opacity: 100;
      transform: scale(1);
    }
  }
  .toggle--daynight .toggle--feature {
    display: block;
    position: absolute;
    top: 9px;
    left: 52.5%;
    z-index: 20;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0, rgba(255, 255, 255, 0.1) 12px 10px 0 -1px, #fff 38px 18px 0 1px, rgba(255, 255, 255, 0.1) 32px 34px 0 0, #fff 20px 24px 0 -1.5px, rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
    animation: starry_star 5s ease-in-out infinite;
  }
  .toggle--daynight .toggle--feature:before {
    position: absolute;
    top: -2px;
    left: -25px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #e3e3c7;
    box-shadow: #e3e3c7 -28px 0 0 -3px, #e3e3c7 -8px 24px 0 -2px;
    transform-origin: -6px 130%;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn {
    background-color: #9ee3fb;
    border: 5px solid #86c3d7;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn:before {
    left: 55px;
    background-color: #ffdf6d;
    border: 5px solid #e1c348;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn:after {
    opacity: 100;
    animation-name: bounceIn;
    animation-duration: 0.60s;
    animation-delay: 0.10s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn > .toggle--feature {
    opacity: 0;
    box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px, rgba(255, 255, 255, 0.1) 12px 10px 0 -5px, #fff 38px 18px 0 -3px, rgba(255, 255, 255, 0.1) 32px 34px 0 -4px, #fff 20px 24px 0 -5.5px, rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
    animation: none;
  }
  .toggle--daynight .toggle--checkbox:checked + .toggle--btn > .toggle--feature:before {
    left: 25px;
    transform: rotate(70deg);
  }
  body{
    background-color: #000;
  }
</style>
