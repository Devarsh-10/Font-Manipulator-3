leftWristX = 0;
rightWristX = 0;
difference = 0;
word = "Devarsh Mehta";

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(450,450);
    canvas.position(560,235);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded!");
}

function draw()
{
    background('#B5F4EB');
    textSize(difference);
    text(word, 50, 300);
    fill('black');
    document.getElementById("changer").innerHTML = "The size of the text = " + difference + " px";
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", difference = " + difference);
        difference = floor(leftWristX - rightWristX);
    }
}