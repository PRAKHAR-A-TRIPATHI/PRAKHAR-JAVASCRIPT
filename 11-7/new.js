function stopWatch(){
    let date = new Date(0,0,0)
    let h = date.getHours();
    let m = date.getMinutes();
    let s =date.getSeconds();
    let mili = date.getMilliseconds();

    let time = h + ":" + m + ":" + s + ":" + mili ;
    document.getElementsByTagName("h1")[0].innerText = time;
    setTimeout(stopWatch, 1);

}
stopWatch();
