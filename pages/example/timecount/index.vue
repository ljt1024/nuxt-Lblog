<template>
    <div class="downCount-wrap">
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
        timer: null
      }
    },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  mounted() {
      // 获取当前容器背景
      const box = document.querySelectorAll('.downCount-wrap')[0]
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
        this.timer = setInterval(()=>{
          if(!this.loadTime()) {
            clearInterval(this.timer)
            // document.body.style.backgroundColor = '#000'
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
        // document.body.style.backgroundColor = '#000'
      }
  },
  methods: {
     update(){
        this.nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
        this.nextHour = parseInt(this.nextShowTimeSeconds/3600 + '');
        this.nextMinute = parseInt((this.nextShowTimeSeconds - this.nextHour*3600)/60);
        this.nextSecond = this.nextShowTimeSeconds%60;
        this.curHour = parseInt(this.curShowTimeSeconds/3600 + '');
        this.curMinute = parseInt((this.curShowTimeSeconds - this.curHour*3600)/60);
        this.curSecond = this.curShowTimeSeconds%60;
        let sArr = this.loadTime()
        for(let j = 0;j<sArr.length;j++) {
          if(this.beforesArr[j]!== sArr[j]){
            this.addBalls(this.MARGIN_LEFT+20*(this.RADIUS+1)*j,this.MARGIN_TOP,parseInt(sArr[j]));
          }
        }
        this.beforesArr =  sArr
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
        let s = Math.ceil((new Date(new Date().toLocaleDateString()+'/24:00').getTime() - new Date().getTime())/1000)
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
 .downCount-wrap {

 }
</style>
