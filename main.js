var mouseevent="";
var lastxposition;
var lastyposition;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
colour="blue";
linewidth = 2;
window.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    colour=document.getElementById("getcolour").value;
   linewidth=document.getElementById("getwidth").value;
   radius=document.getElementById("getradius").value;
   mouseevent="Mouse clicked";
}
window.addEventListener("mouseup",my_mouseup)
function my_mouseup(e) {
    mouseevent="Mouse is up"
}
window.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e) {
    mouseevent="Mouse is away"
}
window.addEventListener("mousemove",my_mousemove)
function my_mousemove(e) {
    presentxposition=e.clientX-canvas.offsetLeft;
    presentyposition=e.clientY-canvas.offsetTop;
 if(mouseevent=="Mouse clicked") {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=linewidth;
    ctx.arc(presentxposition,presentyposition,radius,0,2*Math.PI)
    ctx.stroke();
 }
 lastxposition=presentxposition;
 lastyposition=presentyposition;
}
function cleararea()  {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
