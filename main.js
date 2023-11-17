leftwristx = "";
leftwristy = "";
rightwridtx = "";
rightwridty = "";
song_1="";
song_2="";
function preload(){
song_1 = loadSound("Migraine.mp3");
song_2 = loadSound("Before I Die.mp3");
}

function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    Image(VIDEO,0,0,500,600);
}
function modelLoaded (){
    console.log('posenet is initialised')
}
function gotPoses(results){
    if(results.length > 0){
      console.log(result);
      leftwristx = results[0].pose.leftwristx.x;
      leftwristy = results[0].pose.leftwristx.y;
      console.log('leftwristx = '+ leftwristx + 'leftwristy = '+ leftwristy);
      rightwridtxwristx = results[0].pose.rightwristx.x;
      rightwridtxwristy = results[0].pose.rightwristx.y;
      console.log('rightwristx = '+ rightwristx + 'rightwristy = '+ rightwristy);
  }
  }