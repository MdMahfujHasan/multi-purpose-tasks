const displayOnPointerEnter = (div, paragraph) => {
    document.getElementById(div).addEventListener('pointerenter', function () {
        document.getElementById(paragraph).classList.remove('invisible');
    })
}
const hideOnPointerLeave = (div, paragraph) => {
    document.getElementById(div).addEventListener('pointerleave', function () {
        document.getElementById(paragraph).classList.add('invisible');
    })
}

displayOnPointerEnter('img-1', 'img-1-p');
hideOnPointerLeave('img-1', 'img-1-p');

displayOnPointerEnter('img-2', 'img-2-p');
hideOnPointerLeave('img-2', 'img-2-p');

displayOnPointerEnter('img-3', 'img-3-p');
hideOnPointerLeave('img-3', 'img-3-p');

displayOnPointerEnter('img-4', 'img-4-p');
hideOnPointerLeave('img-4', 'img-4-p');

displayOnPointerEnter('img-5', 'img-5-p');
hideOnPointerLeave('img-5', 'img-5-p');

displayOnPointerEnter('img-6', 'img-6-p');
hideOnPointerLeave('img-6', 'img-6-p');

displayOnPointerEnter('img-7', 'img-7-p');
hideOnPointerLeave('img-7', 'img-7-p');

displayOnPointerEnter('img-8', 'img-8-p');
hideOnPointerLeave('img-8', 'img-8-p');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}