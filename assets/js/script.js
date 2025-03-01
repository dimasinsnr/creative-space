$(function() {

    AOS.init();
    navScroll()
    loadFinisherHeader()
    typedAnimation()
  });
  
  navScroll = () => {
    // Scroll event for changing nav color
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 1) {
        $('nav').addClass('nav-color');
      } else {
        $('nav').removeClass('nav-color');
      }
    });
  }
  
  loadFinisherHeader = () => {
    new FinisherHeader({
      "count": 20,
      "size": {
          "min": 2,
          "max": 40,
          "pulse": 0
      },
      "speed": {
          "x": {
          "min": 0,
          "max": 0.8
          },
          "y": {
          "min": 0,
          "max": 0.2
          }
      },
      "colors": {
          "background": "#ffffff",
          "particles": [
          "#8095ad",
          "#eefaff",
          "#def4ff"
          ]
      },
      "blending": "overlay",
      "opacity": {
          "center": 1,
          "edge": 1
      },
      "skew": -1,
      "shapes": [
          "c",
          "s",
          "t"
      ]
    });
  }
  
  typedAnimation = () => {
    let typed = new Typed('#welcome_text', {
      stringsElement: '#typed-strings',
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      backDelay: 1000,
      showCursor: false,
      onStringTyped: function(pos) {
        if (pos === 1) {
          typed.stop();
          setTimeout(function() {
            typed.start();
          }, 4000);
        }
      }
    });
  }
  
  onDetail = (element) => {
    var pageId = $(element).data('page_id');
    $('#homepage').hide();
    $(`#detailpage`).slideDown();
    $(`#${pageId}`).show();
  }

  onBack = () => {
    location.reload();
  }