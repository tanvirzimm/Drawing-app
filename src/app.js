import './index.css'


window.addEventListener("load",function(){
    const canvas = document.querySelector('#can')
    const ctx = canvas.getContext("2d")
  
    
    canvas.width = this.innerWidth
    canvas.height = this.innerHeight - 200
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
   
    canvas.addEventListener("mousemove",draw)
    canvas.addEventListener("mousedown",start)
    canvas.addEventListener("mouseup",end)
    canvas.addEventListener("mouseleave",end)


   let bErasing = false;
   let erase = document.getElementById('erase')
   erase.addEventListener("click",function(){
       bErasing = true;
   })

    let color = "red"
    document.getElementById('colorinput').onchange = function(){
          color = this.value
          bErasing = false;
      }
  

    let clear = document.getElementById('clear-all')
    clear.addEventListener("click",function(){
      bErasing = false;
    ctx.strokeStyle = "red"
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    })
    
    let save = document.getElementById('save')
    save.addEventListener("click",function(){
     
        let data = canvas.toDataURL("image/jpeg")
        let a = document.createElement('a')
        a.href= data
        a.download = "canvas-img"
        a.click()
        bErasing = false;
        ctx.strokeStyle = "red"
   
    })

   
    


    
  let paint = false;
    function start(e){
        paint = true
        draw(e)
    }



    function end(){
        paint = false
        ctx.beginPath()
    }




    function draw(e){
       
          if(!paint) return;
          if(bErasing == true){
          
            ctx.lineTo(e.clientX,e.clientY)
            ctx.strokeStyle = "black"
            ctx.lineWidth = 20
            ctx.lineCap = "round"
            ctx.stroke();
            ctx.beginPath()
            ctx.moveTo(e.clientX,e.clientY)
          }else{
            ctx.lineTo(e.clientX,e.clientY)
            ctx.strokeStyle = color
            ctx.lineWidth = 10
            ctx.lineCap = "round"

          
            
            ctx.stroke();
            ctx.beginPath()
            ctx.moveTo(e.clientX,e.clientY)
          }

           
    }


})


window.addEventListener("resize",function(){
    const canvas = document.querySelector('#can')
    canvas.width = this.innerWidth
    canvas.height = this.innerHeight - 200
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})



