function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(600,600);
    canvas.position(650,140);
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNEt is Initialized');
}

function gotPoses(results){
    if(results.length>0){
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    diffrence=floor(leftWristX-rightWristX);
    console.log("leftWristX="+leftWristX+" rightWristX"+rightWristX+" diffrence="+diffrence);}
}
function draw(){
    background('#FFD700');
    textSize(diffrence);
    fill('#969A97');
    text("Nikhil",10,10)
}