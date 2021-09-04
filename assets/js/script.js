setInterval(()=>{
    let date = new Date(),
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
}, 1000)