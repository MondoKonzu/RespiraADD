const slides = document.querySelectorAll(".carousel");

function resizeSlides(){
    slides.forEach(i => 
        {
            if(i.children[0] && i.children[0].classList.contains("carousel-inner")){
                setLength(i.children[0].children)
            }
            else{
                console.error("unexpected carousel format");
            }
        }
    )
}

function setLength(children){
    let max = 0;
    console.log("changes")
    for(let i = 0; i < children.length; i++){
        children[i].style.height = "";//reset the height
        children[i].classList.remove("carousel-item"); // remove class which do not allow to see the tag
        let t = children[i].clientHeight
        children[i].classList.add("carousel-item");
        t > max ? max = t : max= max;
    }
    for(let i = 0; i < children.length; i++){
        children[i].style.height = max+"px" // set every slide to the max height
    }
    console.log(max)
}

addEventListener("DOMContentLoaded", resizeSlides)

window.addEventListener("resize", resizeSlides)