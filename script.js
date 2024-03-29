function die() {
    window.open("https://www.youtube.com/watch?v=S53_l6yjw0A&ab_channel=MaestroZiikos", '_blank'); }

    die();

    for(let i = 0; i < 499; i++) {
    interval = Math.round(27000 * Math.random());   

    console.log(interval/1000);

    setTimeout(die, interval);
    }