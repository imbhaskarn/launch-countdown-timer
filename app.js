function formatNum(num) {
    var nums = ("0" + num).slice(-2);
    return nums
}
getTime = () => {
    var date = new Date()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    document.getElementById("minutes").innerHTML = formatNum(minutes) 
    document.getElementById("seconds").innerHTML = formatNum(seconds)
}

setInterval(getTime, 1000)