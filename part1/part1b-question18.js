function call(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(call, 1000);
