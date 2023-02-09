function s(){
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/a0UNuC2u-/model.json',modelReady);
}
function modelReady(){
    x.classify(result);
}
function result(error,answer){
if(error){
    console.log(error);
}
else{
    console.log(answer);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("hear").innerHTML="I can hear - "+answer[0].label;
    document.getElementById("hear").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("acc").innerHTML="Accuracy - "+Math.floor((answer[0].confidence*100))+"%";
    document.getElementById("acc").style.color="rgb("+r+","+g+","+b+")";
    i=document.getElementById("a1");
    j=document.getElementById("a2");
    k=document.getElementById("a3");
    l=document.getElementById("a4");

    if(answer[0].label=="knock"){
i.src="aliens-01.gif";
j.src="aliens-02.png";
k.src="aliens-03.png";
l.src="aliens-04.png";
    } else if(answer[0].label=="clap"){
        i.src="aliens-01.png";
        j.src="aliens-02.gif";
        k.src="aliens-03.png";
        l.src="aliens-04.png";
    }else if(answer[0].label=="snap"){
        i.src="aliens-01.png";
        j.src="aliens-02.png";
        k.src="aliens-03.gif";
        l.src="aliens-04.png";
    }
    else{
        i.src="aliens-01.png";
        j.src="aliens-02.png";
        k.src="aliens-03.png";
        l.src="aliens-04.gif"; 
    }
}
}