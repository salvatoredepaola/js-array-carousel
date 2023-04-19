



const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btnNext");
const prevSlide = document.querySelector(".btnPrev");

let maxSlide = slides.length-1;
let currentSlide = 0;

nextSlide.addEventListener("click", function () {

    if (currentSlide < maxSlide) {
        for (let c = 0; c < slides.length; c++) {
            const slide = slides[c];

            if(c == currentSlide+1 ) {
                slide.classList.remove("hidden");
                console.log("Slide corrente: " + c + " -> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                console.log("Slide corrente: " + c + " -> Va nascosta");
            }
        }

        currentSlide++;
    } else {
        
    }

});





prevSlide.addEventListener("click", function () {
    if (currentSlide > 0) {
        for (let c = 0; c < slides.length; c++) {
            const slide = slides[c];

        if(c == currentSlide-1 ) {
            slide.classList.remove("hidden");
            console.log("Slide corrente: " + c + " -> Va visualizzata");
        } else {
            slide.classList.add("hidden");
            console.log("Slide corrente: " + c + " -> Va nascosta");
        }
    }

    currentSlide--;
    } else {

    }


});