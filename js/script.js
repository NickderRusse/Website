
window.onload=function(){
  c=document.getElementById('gc');
  cc = c.getContext('2d');
  setInterval(update,1000/30);
}

cc.fillStyle='black';
cc.fillRect(0,0,c.width,c.height);
