/* FIRST ATTEMPT AT CAROUSEL

const carousel = document.querySelector(".carousel");

const dragging = (e) => {
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);
*/

let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 400,
    "nav" : false,

})