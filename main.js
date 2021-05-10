noseX = 0;
noseY = 0;
difference = 0;
right_wrist = 0;
left_wrist = 0;
function setup(){
    webcam = createCapture(VIDEO);
    webcam.size(550 , 500);

    canvas = createCanvas(550 , 500);
    canvas.position(560 , 150);

    posenet = ml5.poseNet(webcam , modelloaded);
    posenet.on('pose' , gotResult);
}

function modelloaded(){
    console.log("PoseNet model is loaded!!");
}

function gotResult(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("NoseX = " + noseX + " NoseY = " + noseY);
        left_wrist = result[0].pose.leftWrist.x;
        right_wrist = result[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
        console.log("Left Wrist X = " + left_wrist + " Right Wrist X = " + right_wrist + " Difference = " + difference);
    }
}

function draw(){
    background('#fa898f');
    document.getElementById("size").innerHTML = "Width and Height of Square = " + difference;
    fill('#45f7c5');
    strokeWeight(5);
    stroke('#cc13e8');
    square(noseX , noseY , difference);
}