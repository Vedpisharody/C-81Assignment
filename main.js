canvas = document.getElementById('c');
a = canvas.getContext("2d");

color = "orange";


canvas.addEventListener("mousedown", mouse);


 ctx.beginPath();
 ctx.strokeStyle = "grey";
 ctx.lineWidth = 4;
 ctx.rect(150, 143, 430, 200);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "blue";
 ctx.lineWidth = 5;
 ctx.arc(250, 210, 40, 0, 2*Math.PI);
 ctx.stroke();
 

 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.lineWidth = 5;
 ctx.arc(300, 210, 40, 0, 2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.lineWidth = 5;
 ctx.arc(350, 210, 40, 0, 2*Math.PI);
 ctx.stroke();

