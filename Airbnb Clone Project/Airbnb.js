var scrol = document.querySelector(".gallery")
var backbtn = document.getElementById("backbtn")
var nextbtn = document.getElementById("nextbtn")

scrol.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrol.scrollLeft += evt.deltaY;

});

nextbtn.addEventListener("click", () => {

    scrol.scrollLeft += 300;
})

backbtn.addEventListener("click", () => {

    scrol.scrollLeft -= 300;
})


var filter = document.getElementById("filter")
var ls = document.getElementById("main-box")
var rs = document.getElementById("fil")
filter.addEventListener("click", () => {
    ls.style.display = "grid"
    rs.style.bottom = 0

})

function hide() {
    var ls = document.getElementById("main-box")
    ls.style.display = "none"
}

// ----------user box------

var user = document.getElementById("log-icon")
var box = document.getElementById("user-box")
var flag = 1;
user.addEventListener("click", () => {
    if (flag == 1) {
        box.style.visibility = "visible"
        flag = 0;
    }
    else {
        box.style.visibility = "hidden"
        flag = 1;
    }
})