class Rock{
        constructor(x,y,width,height) }
         var options = {
            'density':12,
            'friction':0.9,
            'restitution':0.8
         }
         this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         World.add(world, this.body);
        {
        display();
                var rockpos=this.body.position;
                var angle=this.body.angle;
                push();
                translate(rockpos.x, rockpos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("white");
                fill("black");
                rect(0, 0, this.width, this.height);
                pop();  
        }