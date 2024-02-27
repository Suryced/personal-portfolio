// alert("hell0");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("h1").text("Level " + ++level);
    for (let i = 0; i < gamePattern.length; ++i) {
        setTimeout(() => {
            playSound(gamePattern[i]);
        }, 1000 * (i+1));
    }
    userClickedPattern = [];
}

$(".btn").on("click", function () {
    var userChosenColour = (this.id);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    if (userClickedPattern.length === gamePattern.length) {
        checkAnswer(level);
    }
});

function playSound(name) {
    $("#"+name).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currenColour) {
    $("#"+currenColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currenColour).removeClass("pressed");

    }, 100);
}

$(document).on("keypress", function() {
    if (started === false)
    {
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel) {
    if (gamePattern.length !== userClickedPattern.length)
    {
        startOver();
    }
    console.log("gamePattern = " + gamePattern);
    console.log("userClickedPattern = " +  userClickedPattern);
    let success = true;
    for (let k = 0; k < gamePattern.length; ++k)
    {
        if (userClickedPattern[k] !== gamePattern[k])
        {
            startOver();
            success = false;
        }              
    }
    // success
    if (success)
    {
        console.log("success");
        userClickedPattern = [];
        setTimeout(() => {
            nextSequence();
        }, 100);
    }
}

function startOver() {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);

}

$(".color-changer").on("click", () => {
    let buttons = $(".btn");
    // console.log(buttons);
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    
    for (let i = 0; i < buttons.length; ++i) {

        let rgb = "rgb(" + (red += 64)%265 + ", " + (green += 64)%256 + ", " + (blue+64)%256 + ")";


        buttons[i].style.backgroundColor = rgb;
    }
});