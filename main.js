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
    if(results.length>0){}
}