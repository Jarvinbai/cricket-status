const button = document.querySelector("button");
button.addEventListener('click',showstatus);
let resultdiv = document.createElement('div');
resultdiv.id = "result";
document.getElementById("wrapper").appendChild(resultdiv);
function showstatus(){
    let input = document.getElementById("input");
    let name = input.options[input.selectedIndex].value;
    let score = 0, runrate = 0, country = "";

    if(name == 'kohli'){
        score=171;
        runrate=200;
        country="india";
    }
    else if(name == 'abd'){
        score = 152;
        runrate=174;
        country="south africa"
    }
    else if(name == 'buttler'){
        score = 122;
        runrate = 100;
        country = "england";
    }
    else if(name == 'kane'){
        score=130;
        runrate = 131;
        country ="newzealand";
    }
    let text = `cricket player ${name} has scored ${score} runs with run rate of ${runrate} for ${country}`;
    document.getElementById("result").innerHTML = text;

}