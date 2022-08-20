
$(function(){
  $('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
  });
  $('.blog__content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
    responsive:[
      {
        breakpoint: 1285,
        settings: {
          arrows:false
        }
      }
    ]

  });
  $('.quotes__right-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
  });
  var accordion = function(){
    var data = $(".accordion").attr("data-accordion");

    $(".accordion__header").on("click", function(){
      if (data === "close"){
        $(".accordion__content").slideUp();
        if ($(this).hasClass("active")){
          $(this).toggleClass("active");
        }
        else{
          $(".accordion__header").removeClass("active");
          $(this).toggleClass("active");
        }
      }
      else{
        $(this).toggleClass("active");
      }
      $(this).next(".accordion__content").not(":animated").slideToggle();
    })
  }
  accordion();

 
  setInterval(() => {
    if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
      $('.burger').addClass('burger--follow')
    }else{
      $('.burger').removeClass('burger--follow')
    }
    
  }, 0);
  
  $('.burger, .overlay').on('click', function (e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })
  
  $('.header__list-item, .button').on('click', function (e){
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').removeClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })
})