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

const cardLength = 8
let current = 0;
const scrWidth = document.body.clientWidth
const maxCards = parseInt(scrWidth/269)
const extra = scrWidth-30-269*maxCards
document.getElementById('tLeft').addEventListener("click", function() {
  if (current<0){
    current++
    const container = document.getElementById('cardContainer')
    container.classList.add('moveCard')
    container.style.marginLeft = current*269 + "px";
  }
})
document.getElementById('tRight').addEventListener("click", function() {
  if (current > -cardLength+maxCards){
    const container = document.getElementById('cardContainer')
    current--
    if (current+1 === 0){
      container.style.marginLeft = -269 + extra + "px";
    }
    else {
      container.style.marginLeft = current*269+extra + "px";
    }
    container.classList.add('moveCard')
  }
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
