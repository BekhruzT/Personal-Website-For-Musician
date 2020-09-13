window.addEventListener("scroll", function(e) {
    const elem = document.getElementById("secBio")
    let offset = window.pageYOffset;
    const wHeight = window.innerHeight;
    let x = offset/wHeight
    let opacity;
    x = x<=1 ? x : -x + 2
    opacity = -1.4963*x**4 + 1.0201*x**3 - 0.5852*x**2 + 0.0431*x + 0.9981;
    elem.style.opacity = opacity<1 ? 1-opacity : 1;
})


function cardCarousel () {
  const cards = document.getElementsByClassName("card")
  document.body.style.setProperty('--card-width', cards[0].clientWidth + "px")
}
cardCarousel()



window.addEventListener("scroll", function(e) {
  let parallax = document.getElementById('secQuote');
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset*0.5 + "px";
})


let x = 0
let scroller = document.getElementById("scroller")
if (!("ontouchstart" in document.documentElement)) {
  scroller.style.overflowX = "hidden"
  scroller.addEventListener("mousewheel", function(e, d){
    console.log(e, this)
    if (e.deltaX === 0)
    this.scrollLeft += e.deltaY*1.5;
    else if (Math.abs(x) > 75)
    this.scrollLeft += x*2
    x = 0
    x += e.deltaX
    e.preventDefault()
  })
}

myID = document.getElementById("navbarvert");
// horID = document.getElementById("navbarr");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 15) {
    myID.className = "d-block nav-pills animated fadeInLeft ml-2"
  } else {
    myID.className = "animated fadeOutLeft"
  }
};

window.addEventListener("scroll", myScrollFunc);

// const vicons = document.getElementsByClassName("vicon")
// for (let i = 0; i < vicons.length; i++) {
//   vicons[i].onmouseover = function(e) {
//     console.log(vicons[i].parentNode)
//     vicons[i].parentNode.classList.add("activated")
//   }
// }
// for (let i = 0; i < vicons.length; i++) {
//   vicons[i].onmouseleave = function(e) {
//     console.log(vicons[i].parentNode)
//     vicons[i].parentNode.classList.remove("activated")
//   }
// }
