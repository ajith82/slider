const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const height = window.innerHeight/2 - 200;


window.addEventListener("scroll",() => {
    var scrollPos = window.pageYOffset;
    var value = scrollPos * 1.6 + 'px';
    slideOne.style.transform = `translateX( -${value})`;
        slideTwo.style.transform = `translateX( ${value})`;
    // if(scrollPos > height) {
    //     slideOne.style.transform = `translateX( -${value})`;
    //     slideTwo.style.transform = `translate( ${value}, 0)`;
    // }else if(scrollPos < height) {
    //     slideOne.style.transform = `translate( 0, 0)`;
    //     slideTwo.style.transform = `translate( 0, 0)`;
    // }
})
