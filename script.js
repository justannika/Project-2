
let slider = tns({
    container : ".my-slider",
    "slideBy" : "page",
    "speed" : 400,
    "nav" : false,
    "mouseDrag" : true,
    "swipeAngle" : false,
    autoplay : false,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items : 4,
            gutter : 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter : 20
        },
        480: {
            items : 1
        },
    }
})


document.addEventListener(DOMContentLoaded, () => {const expandsMore = document.querySelectorAll('[expand-more]')
function expand() {
    const showContent = document.getElementById(this.dataset.target)
    if (showContent.classList.contains('expand-active')) {
        this.innerHTML=this.dataset.showtext;
    }else {
        this.innerHTML=this.dataset.hidetext
    }
    showContent.classList.toggle('expand-active')
    }
}

expandsMore.forEach(expandMore => { expandMore.addEventListener('click', expand)})})
