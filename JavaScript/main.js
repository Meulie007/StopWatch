let milsec = 0;
let sec = 0;
let min = 0;
const IntervalId = [];

const startwatch = ()=>{
    milsec++;

    if(milsec <= 9 && milsec > 0){
        document.getElementById("milsec").innerHTML = "0" + milsec
    }else if(milsec == 100){
        milsec = 0;
        sec++;
        document.getElementById("milsec").innerHTML = "0"
    }else{
        document.getElementById("milsec").innerHTML = milsec
    }

    if(sec == 60){
        sec = 0;
        min ++;
        document.getElementById("sec").innerHTML = "0"
    }else if(sec <=9){
        document.getElementById("sec").innerHTML = "0" + sec;
    }else{
        document.getElementById("sec").innerHTML = sec;
    }

    if(min <=9){
        document.getElementById("min").innerHTML = "0" + min;
    }

        
}

function watch(state){
    const stopwatch = setInterval(startwatch,10);
    IntervalId.push(stopwatch);

    if(state == "stop"){
        for(let id of IntervalId){
            clearInterval(id);
        }


    }else if(state == 'reset'){
        milsec = 0;
        sec = 0;
        min = 0;
        for(let id of IntervalId){
            clearInterval(id)
        }
        document.getElementById("min").innerHTML = "00"
        document.getElementById("sec").innerHTML = "00"
        document.getElementById("milsec").innerHTML = "00"

    }
}