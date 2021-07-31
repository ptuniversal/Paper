class crumpledpaper {
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.3
        }

        this.x=x;
        this.y=y;
        this.width=50;
        this.height=50;

        this.body=Bodies.rectangle(this.x,this.y,10,10,options);
        this.image = loadImage("paper.png");
        
        World.add(world,this.body);

    }

    display(){

        var paperpos=this.body.position;	
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        image(this.image, -37, -37, this.width, this.height);
        pop();
}


}