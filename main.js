song ="";
song1 = "";
song2 = "";

function preload() {
    song = loadSound('music.mp3');
 }
 
 function setup() {
     canvas = createCanvas(600,500);
     canvas.center();
 
     video = createCapture(VIDEO);
     video.hide();
     poseNet = ml5.poseNet(video,modalLoaded);
     poseNet.on('pose',gotResults);
 }
 

 function modalLoaded(){
    console.log("Posenet is Loaded");
  }
  
 function song_play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
 }
 
 function gotResults(results) {
    if (results.length>0) {
      console.log(results);
    }
}

function draw() {
  image(video,0,0,600,500);
  fill('#e31010');
  stroke('#e31010');
 results[0].pose.keypoints[9].score;
  if (scoreLeftwrist>0.2) {
  circle(leftWrist_x,leftWrist_y,20);
  song.stop('music.mp3');
  }
  if (scoreRightwrist>0.2) {
    circle(rightWrist_x,rightWrist_y,20);
    song.stop('music.mp3')
    }
    if(song2>false) {
     song.play('music.mp3');
    }
  } 
