Webcam.set({
image_format: "png",
png_quality: 90,
height: 350,
width: 300,
constrains : {
facingMode : "envirnment"
}
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function C_I(){
Webcam.snap(function(data_Url){
document.getElementById("output").innerHTML = "<img id='main_img' src='"+data_Url+"'>";
}
)}

console.log("ml5 version: "+ml5.version);

classifier = ml5.imageClassifier("MobileNet",model_loaded);

function model_loaded(){
console.log("Model Loaded!");
}

function I_I(){
img = document.getElementById("main_img");
classifier.classify(img, goresult);
}

function goresult(error, results){
if(error){
console.log("error");
}
else{
console.log(results);
document.getElementById("result").innerHTML = results[0].label;
}
}