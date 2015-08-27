$(document).ready(function() {
    //var map; 
    //$('[data-toggle="tooltip"]').tooltip();        
    $('#btn-cita').click(function () {
        if ($('.cita').hasClass("activo")) {
            $('.cita').removeClass('activo');
        } else {
            $('.cita').addClass('activo');
        }
    });    

    var wow = new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    )
    wow.init();

    $('.carousel').carousel({
      interval: 1000
    });

    $("a.grouped_elements").fancybox({
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'speedIn'   : 600, 
      'speedOut'    : 200, 
      'overlayShow' : false
    });
    //$("a.grouped_elements").fancybox();

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        // Avoid following the href location when clicking
        event.preventDefault(); 
        // Avoid having the menu to close when clicking
        event.stopPropagation(); 
        // If a menu is already open we close it
        //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
        // opening the one you clicked on
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();
      
        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = - menu.width();      
        } else {
            var newpos = $(this).parent().width();
        }
        menu.css({ left:newpos });

    });

    //-------/* PARALLAX*//---------//

    $window = $(window);
 
    $('section[data-type="background"]').each(function() {
        var $scroll = $(this);

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });

/*    $('.dropdown-toggle').dropdownHover(options);*/
    //-------/* END | PARALLAX *//---------//

    /*
    var myCenter=new google.maps.LatLng(-34.902220, -56.175024);
    var marker=new google.maps.Marker({
        position:myCenter,
        animation: google.maps.Animation.DROP
    });


    function initialize() {
      var mapProp = {
          center:myCenter,
          zoom: 16,
          draggable: false,
          scrollwheel: false,
          mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      
      map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
      marker.setMap(map);
        
      google.maps.event.addListener(marker, 'click', function() {
          
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
        
      }); 
    };
    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addDomListener(window, "resize", resizingMap());

    $('#myMapModal').on('show.bs.modal', function() {
       //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
       resizeMap();
    })

    function resizeMap() {
       if(typeof map =="undefined") return;
       setTimeout( function(){resizingMap();} , 400);
    }

    function resizingMap() {
       if(typeof map =="undefined") return;
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center); 
    }*/

    

});



   