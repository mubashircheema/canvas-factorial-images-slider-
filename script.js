window.addEventListener("load" ,()=>{
    const canvas= document.getElementById("canvas1")
    const ctx= canvas.getContext("2d")
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;  
    //canvas stettings
    ctx.fillStyle ='green';
    ctx.lineCap='round';
    ctx.shadowColor ="rgba(0,0,0,0.7)"
    ctx.shadowOffsetX=10;
    ctx.shadowOffsetY=5;
    ctx.shadowBlur=10;



    //effect setting
    let size =canvas.width < canvas.height ? canvas.width*0.3 : canvas.height*0.3;
    const branches=2;
    const maxlevel=4;
    let sides=5;
    let spread=0.5;
    let scale=0.5;
    let color = 'hsl('+ Math.random()*360 +', 100%, 50%)' ;
    let lineWidth = Math.random ()*20+10; 
     
    //control
    const randomizedButton= document.getElementById("randomizebutton")

    function drawBranches(level){
        if (level > maxlevel) return;
        ctx.beginPath();
        ctx.moveTo(0,0 )
        ctx.lineTo(size,0);
        ctx.stroke();
        for(let i=0; i<branches; i++){
            ctx.save();
            ctx.translate(size-(size/branches)*i,0)
            ctx.scale(scale,scale);

            ctx.save();
            ctx.rotate(spread)
            drawBranches(level+1)
            ctx.restore();


    
            ctx.save();
            ctx.rotate(-spread)
            drawBranches(level+1)
            ctx.restore();
            ctx.restore();
 

        }
       
    }
    function drawfractal(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.save();
        ctx.lineWidth=lineWidth;

        ctx.strokeStyle= color;
        ctx.translate(canvas.width/2,canvas.height/2)
        for( let i=0; i<sides; i++){
            ctx.rotate((Math.PI*2)/sides);
            drawBranches(0);


        }
        ctx.restore()
    }
    drawfractal()

    function randomizedFractal(){
    sides=Math.floor(Math.random()*7+2);
    scale=Math.random()*0.4+0.2;
    spread=Math.random()*2.9+0.1;
    color = 'hsl('+ Math.random()*360 +', 100%, 50%)'
    let lineWidth = Math.random ()*20+10; 



    }
    randomizedButton.addEventListener('click', function(){
        drawfractal();
        randomizedFractal()

    });

   
 
})