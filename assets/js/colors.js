var button1 = document.querySelector(".color-change");
var button2 = document.querySelector(".color-shift");
var heading = document.querySelector("h1");

// var red = 0;
// var green = 0;
// var blue = 0;

// setTimeout(function() {
//     var color = "rgb(" + (red++ % 255) + ", " + (green++ % 255) + ", " + (blue++ % 255) + ")";
//     heading.style.color = color;
//     console.log(color);
// }, 100);


button1.addEventListener("click", function() {
    var red1 = Math.floor(Math.random() * 255) + 1;
    var green1 = Math.floor(Math.random() * 255) + 1;
    var blue1 = Math.floor(Math.random() * 255) + 1;
    document.querySelector("h1").style.color = "rgb(" + red1 + ", " + green1 + ", " + blue1 + ")";
    document.body.style.backgroundColor = "rgb(" + (255-red1) + ", " + (255-green1) + ", " + (255-blue1) + ")";
    // console.log("rgb(" + (255-red1) + ", " + (255-green1) + ", " + (255-blue1) + ")");
});

button2.addEventListener("click", function() {
    var body = $('body');
    var colour = 0x0;
    setInterval(function () {
        body.css(
          "backgroundColor", hexCode
        );
        // body.backgroundColor = hexCode;?
        // document.body.style.backgroundColor = hexCode;
        // if (!colors[currentIndex]) {
        //     currentIndex = 0;
        // } else {
        //     currentIndex++;
        // }
        colour +=8;
        var hexCode = '#' + (colour).toString(16).padStart(6, "0"); 
        console.log(hexCode);
     }, 100);
    // for (var colour = 0; colour < 0x10000; colour++) { 
    //     var hexCode = '#' + colour.toString(16).padStart(6, "0"); 
    //     // console.log(hexCode);
    //     setTimeout(function() {
    //         document.body.style.backgroundColor = hexCode;
    //     }, 10000);
    // } 
});