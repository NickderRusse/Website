window.onload = function() {	
	var canvas = document.querySelector('canvas');
	canvas.width =  window.innerWidth;
	canvas.height = window.innerHeight - 5; 	
	var width_ = window.innerWidth;
	var height_ = window.innerHeight - 5; 
	var c = canvas.getContext('2d');
	
	
	
	var objects = [];
	for(var i = 0; i < 10; i++){
		objects[i] = new ball(width_ / 2, height_ / 2);
	}
	
	
	window.addEventListener('mousedown', function() {	
			for(var i = 0; i < objects.length; i++)
				objects[i].acc();
		})
		
	
	var render = function(){
		window.requestAnimationFrame(render);
		c.clearRect(0, 0, width_, height_);	
		
		for(let i = 0; i < objects.length; i++){
			
			objects[i].draw(c);
			objects[i].update();
			//objects[i].collison(objects, i);
			objects[i].move();
		}
				
	}
	render();

} 

class ball {	
	constructor(x, y){
		this.width_ = window.innerWidth;
		this.height_ = window.innerHeight - 5; 
	
		this.loc = [x, y];
		this.vel = [0, 0];		
		this.ballwidth = (this.width_ * this.height_) / 100000; 
		
		
	}
	
	update(){
		// Luftwiderstand??
		//this.vel[0] = this.vel[0] * 0.997;
		//this.vel[1] = this.vel[1] * 0.997;	
			
		this.vel[1] += 0.12; 	
		
		
		if((this.loc[1] > this.height_ - this.ballwidth && this.vel[1] > 0) || (this.loc[1] < this.ballwidth && this.vel[1] < 0)){			
			this.vel[1] = (this.vel[1] * - 0.7);
			this.vel[0] = (this.vel[0] *  0.98);
		}
		if((this.loc[0] > this.width_ - this.ballwidth && this.vel[0] > 0) || (this.loc[0] < 0 + this.ballwidth && this.vel[0] < 0)){
			this.vel[0] = (this.vel[0] * - 0.7);
			this.vel[1] = (this.vel[1] *  0.98);
		}	
		
	}
	 
	collison(objects, i){
		for(let j = 0; j < objects.length; j++){
			if((Math.sqrt(Math.pow(this.loc[0] - objects[j].loc[0],2) + Math.pow(this.loc[1] - objects[j].loc[1],2))) < this.ballwidth * 2 && (i != j)){
				
				//this.loc[0] + objects[j].loc[0]
				//this.loc[1] + objects[j].loc[1]
				
				var s = (this.vel[0] + objects[j].vel[0] + this.vel[1] + objects[j].vel[1]) / 2;			
				var r = Math.atan((this.loc[1] - objects[j].loc[1]) / (this.loc[0] - objects[j].loc[0])) * (180/Math.PI);
				
				var change = [1 * s, r * s];
				this.vel[0] += change[0];
				this.vel[1] += change[1];
				
				this.loc[0] += change[0] * 100;
				this.loc[1] += change[1] * 100;
				
				//console.log(r);
			}
		}
	}
	
	
	acc(){
			this.vel[1] -= Math.random() * 20 + 20;
			this.vel[0] += Math.random() * 40 - 20;
	}
	
	move(){	
		this.loc[0] += this.vel[0];
		this.loc[1] += this.vel[1];
	}
	
	draw(c){
		c.beginPath();
        c.fillStyle = "#FFFFFF";
        c.arc(this.loc[0], this.loc[1], this.ballwidth, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
	} 
	
}

	
