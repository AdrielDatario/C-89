var score = 0;

function updates(){
    score = score +1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function saves(){
    localStorage.setItem("score",score);
}

function nextpage(){
    window.location = "activity_2.html";
}