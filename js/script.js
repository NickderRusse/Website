window.onload = function() {	
	var canvas = document.querySelector('canvas');
	canvas.width =  window.innerWidth;
	canvas.height = window.innerHeight - 3; 
	var c = canvas.getContext('2d');
	
	
	
	
	
	
	var cr = [];
	for(let i = 0; i<100000; i++){
		cr[i] = new Circle(window.innerWidth / 2,window.innerHeight / 2);
		
	} 
	
	
	
	window.addEventListener('mousedown', function(e) {		
			
		cr[cr.length] = new Circle(e.x, e.y);
		
	});
	
	
	var render = function(){
		window.requestAnimationFrame(render);
		c.clearRect(0, 0, window.innerWidth, window.innerHeight);	
		for(let i = 0; i < cr.length; i++){
			cr[i].move();
			cr[i].draw(c);
		}
	}
	render();
	
}

class Circle {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	move(){
		this.x = this.x + (Math.random() * 30) - 15;
		this.y = this.y + (Math.random() * 30) - 15;	
	}
	
	draw(c){
		c.beginPath();
        c.fillStyle = "#000000";
        c.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        c.fill();
        c.closePath();
	} 
	
	
} 















