
function viewDiv(){
    document.getElementById("form-wrap").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("close").style.display = "flex";
}

function closeDiv(){
    document.getElementById("form-wrap").style.display = "none";
    document.getElementById("search").style.display = "flex";
    document.getElementById("close").style.display = "none";
}


$(function(){
    $('.news__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        speed:1000,
        prevArrow: "<img src='img/left.png' class='prev' alt='left'>",
        nextArrow: "<img src='img/right.png' class='next' alt='right'>",
        responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows : false

        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows : false
            
        }
    }

]
});

});