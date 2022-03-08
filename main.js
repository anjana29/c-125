nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    background('#969a97');

    document.getElementById("square_sides").innerHTML="width and height of the square will be = "+difference+"px";

    fill('#c79a08');
    stroke('#c79a08');
    square(nosex,nosey,difference);



}
function modelLoaded(){
console.log("posenet intialized")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex = "+nosex+",nosey = "+nosey);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
    console.log("leftWrist = "+leftwristx+",rightWrist = "+rightwristx+",difference = "+difference);
    









}
}
