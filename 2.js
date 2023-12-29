var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var d = canvas.getContext('2d');


window.addEventListener('resize',function()
{
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
})

class Circle {
    constructor(dx,dy,r,red,blue,gren) 
    {
        this.x = 10;
        this.y = 10;
        this.dx= dx
        this.dy= dy
        this.red=red
        this.blue=blue
        this.gren=gren
        this.xaxis = ((((Math.random() * window.innerWidth)) / 2) + 50);
        this.yaxis = (((Math.random() * window.innerHeight) / 2) + 50);
        this.radius = r;
        this.minradius =r;
        this.glow = 30;
        this.glowrate = 10;
        this.draw = function () {
            d.beginPath();
            d.arc(this.xaxis, this.yaxis, this.radius, 0, 360, false);
            d.fillStyle = `rgba(${red},${gren},${blue},1)`;
            d.shadowColor = `rgba(${red},${gren},${blue},1)`;
            d.shadowBlur = this.glow;
            d.fill();
        };

        this.update = function () {
            if ((this.xaxis + this.radius) > innerWidth || (this.xaxis - this.radius) < 0) {
                this.dx = -this.dx;

            }
            if ((this.yaxis + this.radius) > innerHeight || (this.yaxis - this.radius) < 0) {
                this.dy = -this.dy;
                this.glowrate = -this.glowrate;
            }
            this.glow -= this.glowrate;
            this.xaxis += this.dx;
            this.yaxis -= this.dy;



        //interaction
        if ((this.xaxis -mouse.x) < 20 && (this.xaxis -mouse.x) > -20 && this.radius<30 ) {
            this.radius+=1 ;
            this.glow += 20;
        }
        
        
        else if (this.radius > this.minradius)
        {
            this.radius-=1
        }
        
        
        
        
        
        if ((this.yaxis -mouse.y) < 20 && (this.yaxis -mouse.y) > -20 && this.radius<30) {
            this.radius+=1 ;
            this.glow += 20;
        }
        else if (this.radius > this.minradius)
        {
            this.radius-=1
            this.glow += 20;
        }

        

        this.draw();
        };
    }
}




var circleArray =[]

for (var iz = 0;iz<200;iz++)
{
    var dx = Math.random()*5;
    var dy = Math.random()*5;
    var r = (Math.random()*innerWidth/100) + 1;
    var red = Math.random()*250;
    var blue = Math.random()*250;
    var gren = Math.random()*250;
    circleArray.push(new Circle(dx,dy,r,red,blue,gren))
}


var mouse={
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',function()
{
    console.log('oyyeh')
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse)
})



function animate()
    {
        requestAnimationFrame(animate);
        
        d.clearRect(0,0,innerWidth,innerHeight);

        for (var it=0 ; it<200 ;it++)
        {
            circleArray[it].update();
        }

}

animate()




