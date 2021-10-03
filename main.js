status1=""
object=[]


function setup(){
   canvas=createCanvas(600,400)
   canvas.center()
   cocossd=ml5.objectDetector("cocossd",modelloaded)
   document.getElementById("status").innerHTML="Status: Detecting objects"
}
function modelloaded() {
    console.log("model has been loaded")
    status1=true
    cocossd.detect(img,gotresult)
}

function gotresult(error,result) {
    if (error) {
        console.log(error)
    } else {
        object=result
        console.log(result)
    }
}

function preload(){
    img=loadImage("dog_cat.jpg")

}

function draw() {
image(img,0,0,600,400) 
if (status1 != "") {
    for ( i=0; i< object.length;i++) {
        document.getElementById("status").innerHTML="Status: objects detected"
        fill("red")
        percent=floor(object[i].confidence*100)     
        text(object[i].label+" "+percent+"%",object[i].x,object[i].y+15)   
        noFill()
        stroke("red")
        rect(object[i].x,object[i].y,object[i].width,object[i].height)
         
    }
}
}
 