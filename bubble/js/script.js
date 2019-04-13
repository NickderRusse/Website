window.onload = function() {	
	var canvas = document.querySelector('canvas');
	canvas.width =  window.innerWidth;
	canvas.height = window.innerHeight - 5; 	
	var width_ = window.innerWidth;
	var height_ = window.innerHeight - 5; 
	var c = canvas.getContext('2d');
	
	
	var objects = [];
	var objects[0] = new bubble();
	
	
	var render = function(){
		window.requestAnimationFrame(render);
		c.clearRect(0, 0, width_, height_);	
					
		for(let i = 0; i < cr.length; i++){
			objects[i].draw(c);
			objects[i].move();
		}
					
	}
	render();

} 


class bubble {
	constructor(){
		this.x = 100;
		this.y = 100;
	}
	
	
	move(){	
		this.x = this.x + 1
	}
	
	draw(c){
		c.beginPath();
        c.fillStyle = "#000000";
        c.arc(this.x,this.y, 5, 0, 2 * Math.PI);
        //c.fill();
        c.closePath();
	} 
	
}

	
