function preload(){}

function setup(){
    canvas = createCanvas(350,300);
    video = createCapture(VIDEO);
    video.size(350,300);
    canvas.position(400,200);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresults);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
    }
}