const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const height = window.innerHeight/2 - 200;


window.addEventListener("scroll",() => {
    var windowHeight = window.pageYOffset;
    var scrollPos = window.scrollY || window.pageYOffset;
    var value = scrollPos + 200 + 'px';
    if(windowHeight > height) {
        slideOne.style.transform = `translate( -${value}, 0)`;
        slideTwo.style.transform = `translate( ${value}, 0)`;
    }else if(windowHeight < height) {
        slideOne.style.transform = `translate( 0, 0)`;
        slideTwo.style.transform = `translate( 0, 0)`;
    }
    // if(windowHeight > height) {
    //     slideOne.classList.add("slideLeft");
    //     slideTwo.classList.add("slideRight");
    // }else{
    //     slideOne.classList.remove("slideLeft");
    //     slideTwo.classList.remove("slideRight")
    // }
})
