const sec = () => {
    let date = new Date().getSeconds();
    let mindate = new Date().getMinutes();
    let hourdate = new Date().getHours();

    let deg = (date/60 * 360);
    let mindeg = (mindate/60 * 360)
    let hourdeg = (hourdate/12 * 360)

    minhour = (mindate/60 * 30)


    let seconds = document.getElementById('sec');
    seconds.style.transform = `rotate(${deg}deg)`

    let minutes = document.getElementById('min');
    minutes.style.transform = `rotate(${mindeg}deg)`

    let hours = document.getElementById('hour');
    hours.style.transform = `rotate(${hourdeg + minhour}deg)`

}

setInterval(sec,1000)
