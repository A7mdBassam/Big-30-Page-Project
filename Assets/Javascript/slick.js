//SLICK JS --


function Slick(e, showBig, showMid, showSmall){
    e.slick({
        infinite: true,
        slidesToShow: showBig,
        slidesToScroll: 1,
        nextArrow: e.parent().children(".chevrons").children(".next-card"),
        prevArrow: e.parent().children(".chevrons").children(".prev-card"),
        responsive: [
            {
              breakpoint: 771,
              settings: {
                slidesToShow: showMid,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: showSmall,
                slidesToScroll: 1
              }
            }
          ]
      });
}

Slick($(".slick-one"), 5, 3, 1);
Slick($(".slick-two"), 5, 3, 1);
Slick($(".slick-three"), 4, 2, 1);
Slick($(".slick-four"), 4, 2, 1);
Slick($(".slick-five"), 4, 2, 1);


function slickCarousel(e){
e.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: e.parent().children(".chevrons").children(".next-card"),
    prevArrow: e.parent().children(".chevrons").children(".prev-card"),
    speed: 250,
    responsive: [
        {
          breakpoint: 771,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
}

slickCarousel($(".slick-carousel-one"));
slickCarousel($(".slick-carousel-two"));
slickCarousel($(".slick-carousel-three"));
slickCarousel($(".slick-carousel-four"));
slickCarousel($(".article-card-slick"));
