



// const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btnNext");
const prevSlide = document.querySelector(".btnPrev");
const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp",];
const itemContainer = document.querySelector(".slider");

let currentSlide = 0;


for (let i = 0; i < images.length; i++) {
    const pathImg = images[i];

    // const image = `<img src="${pathImg}" />`;
    const image = document.createElement("img");
    image.src = pathImg;
    image.className = "";
    if (i === 0) {
        image.classList.add("visible")
    }
    itemContainer.append(image)
    // itemContainer.innerHTML += image;  
    

}

// let maxSlide = slides.length-1;


const slides = document.querySelectorAll("img")


nextSlide.addEventListener("click", function () {

    //segna il numero dell'imagine in console
    console.log(`la slide corrente é ${currentSlide}`);

    //rimuove la classe "visibile" all'immagine[0]
    slides[currentSlide].classList.remove("visible")

    //va avanti all'infinito
    currentSlide++;

    //dopo aver premuto il tasto l'immagine corrente [0] diventa "images.lenght" cioè il numero massima dell'array "images"
    if (currentSlide == images.length) {
        currentSlide = 0;
    }

    //aggiunge la classe "visibile" all'immagine[0]
    slides[currentSlide].classList.add("visible")


    //VECCHIO CODICE


    // if (currentSlide < maxSlide) {
    //     for (let c = 0; c < slides.length; c++) {
    //         const slide = slides[c];
    //         if(c == currentSlide+1 ) {
    //             slide.classList.remove("hidden");
    //             console.log("Slide corrente: " + c + " -> Va visualizzata");
    //         } else {
    //             slide.classList.add("hidden");
    //             console.log("Slide corrente: " + c + " -> Va nascosta");
    //         }
    //     }
    //     currentSlide++;
    // } else {     
    // }
});

prevSlide.addEventListener("click", function () {

    //segna il numero dell'imagine in console
    console.log(`la slide corrente é ${currentSlide}`);

    //rimuove la classe "visibile" all'immagine[0]
    slides[currentSlide].classList.remove("visible");

    //dopo aver premuto il tasto l'immagine corrente [0] diventa "images.lenght" cioè il numero massima dell'array "images"
    if (currentSlide == 0 ) {
        currentSlide = images.length;
    }

    //-- indietro all'infinito
    currentSlide--;
    
    //aggiunge la classe "visibile" all'immagine[0]
    slides[currentSlide].classList.add("visible")



    // VECCHIO CODICE
    


    // if (currentSlide > 0) {
    //     for (let c = 0; c < slides.length; c++) {
    //         const slide = slides[c];
    //     if(c == currentSlide-1 ) {
    //         slide.classList.remove("hidden");
    //         console.log("Slide corrente: " + c + " -> Va visualizzata");
    //     } else {
    //         slide.classList.add("hidden");
    //         console.log("Slide corrente: " + c + " -> Va nascosta");
    //     }
    // }
    // currentSlide--;
    // } else {
    // }


});