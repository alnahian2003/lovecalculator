// Start Code
// 25 July 2020
// Al Nahian | https://alnahian2003
/*=============================
    Made With ♥ By Al Nahian
  ============================*/

//global variables
var yourName = document.getElementById("yourname"),
    theirName = document.getElementById("theirname"),
    calcBtn = document.querySelector("button"),
    loveResult = document.getElementById("result"),
    loveResult1 = document.getElementById("result1"),
    loveResult2 = document.getElementById("result2"),
    resultContainer70 = document.querySelector(".alert-success"),
    resultContainer30 = document.querySelector(".alert-warning"),
    resultContainerUnder30 = document.querySelector(".alert-danger"),
    loveScore = Math.random() * 100;

// Get a integer random number from loveScore variable
loveScore = Math.floor(loveScore) + 1;

// Add eventlistener
calcBtn.addEventListener("click", function () {
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if (yourName.value == "" && theirName.value == "") {
        alert("You can't leave fields empty");
    }
    if (yourName.value == "") {
        alert("Please Enter Your Name");
    }
    if (theirName.value == "") {
        alert("Please Enter Her/His Name");
    }

    //lovescore conditions
    else if (loveScore > 70) {
        resultContainer70.style.display = "block";
        resultContainer30.style.display = "none";
        resultContainerUnder30.style.display = "none";
        loveResult.innerHTML = ("Aww yeah! Your Love Score is " + loveScore + "%." + " You and " + theirName.value + " love each other like Ertuğrul Gazi & Halime Sultan. You should get married with " + theirName.value + " very soon. Best of Luck!");

    } else if (loveScore > 30 && loveScore <= 70) {
        resultContainer70.style.display = "none";
        resultContainer30.style.display = "block";
        resultContainerUnder30.style.display = "none";
        loveResult1.innerHTML = ("So sweet... Your Love Score is " + loveScore + "%." + " You and " + theirName.value + " love each other more than anything in the world.");

    } else if (loveScore <= 30) {
        resultContainer70.style.display = "none";
        resultContainer30.style.display = "none";
        resultContainerUnder30.style.display = "block";
        loveResult2.innerHTML = ("Oh no... Your Love Score is " + loveScore + "%." + " You and " + theirName.value + " love each other like oil and water.");
    }
})
//end code