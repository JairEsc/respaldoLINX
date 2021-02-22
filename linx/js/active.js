(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').delay(500).fadeOut('slow', function () {
            $(this).remove();
        });
    });
    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#pixelNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slideshow');
        var testiSlide = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            dots: false,
            autoplay:false,
            smartSpeed: 500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testiSlide.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500
        });
    }

    // :: 4.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.pixel-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.pixel-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: 5.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 6.0 Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.zoom-img').magnificPopup({
            type: 'image'
        });
    }
    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i> TOP'
        });
    }

    // :: 8.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#c1').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c2').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c3').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c4').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }

    // :: 10.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 11.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 Jarallax Active Code
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 13.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    // :: 14.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);
// Get the modal
var modalAdmin = document.getElementById("emergVentAdmin");
var modalColab = document.getElementById("emergVentColab");
var modal2 = document.getElementById("emergVent2");

// Get the button that opens the modal
var btnAdmin = document.getElementById("admin");
var btnColab = document.getElementById("colaboradores");
var btnSearch = document.getElementById("searchBtn");
var searchInput = document.getElementById("searchInput");
var string;
// Get the <span> element that closes the modal
var spanColab = document.getElementsByClassName("close")[1];
var spanAdmin = document.getElementsByClassName("close")[0];
var spanCloseSearch = document.getElementById("closeSearch");

// When the user clicks on the button, open the modal

searchInput.onkeyup=((ev)=>{
    if(ev.key=='Enter'){
        btnSearch.onclick();}
})
btnColab.onclick=function(){
    modalColab.style.display="block";

}
btnSearch.onclick = function() {
    searchInput.removeAttribute("hidden");

    for (var i=0;i<100;i++){
        if(document.getElementById("resultado"+i.toString())){
            a=document.getElementById("resultado"+i.toString())
            a.parentNode.removeChild(a);
        }
        else{
            break;
        }
    }
    textoIngresado=searchInput.value;
    searchInput.focus();
    searchInput.style.width='100px';
    if(searchInput.value.length>0){
        console.log(searchInput.value);
        modal2.style.display="block";
        console.log(filtro(searchInput.value));


        if(filtroEncontrado==true){
            document.getElementById("muestran").innerHTML="Se muestran resultados para '" +searchInput.value.toLowerCase()+"'" ;
            var actual;
            for(var i=0;i<filtro(searchInput.value).length;i++){
                var clone = document.getElementById('resultado').cloneNode( true );
                // Change the id attribute of the newly created element:
                clone.id='resultado'+i.toString();
                var childNodes = clone.childNodes;
                childNodes[1].childNodes[1].childNodes[7].childNodes[1].childNodes[1].id="titulo"+i.toString();
                childNodes[1].childNodes[1].childNodes[7].childNodes[1].childNodes[3].id="contenido"+i.toString();            
                document.getElementById("emergVent2Content").append(clone);
                console.log(document.getElementById("resultado"+i.toString()));
                document.getElementById("resultado"+i.toString()).removeAttribute("hidden");
                document.getElementById("titulo"+i.toString()).innerHTML=filtro(searchInput.value)[i].title          
                var contenidoActual=filtro(searchInput.value)[i].content;
                var contextoActual=contexto(contenidoActual,searchInput.value);  
                if(contextoActual[0]){
                    document.getElementById("contenido"+i.toString()).innerHTML+=contextoActual[0]
                }
                document.getElementById("contenido"+i.toString()).innerHTML+=contextoActual[1].bold()
                if(contextoActual[2]){
                    document.getElementById("contenido"+i.toString()).innerHTML+=contextoActual[2]
                }
                //hace falta un filtro para tomar solo una parte del contenido y ver si hay manera de mostrarla en negritas.
                //como extra: considerar subcadenas y hacer recursiva la busqueda              
            }
        }
        else{
            document.getElementById("muestran").innerHTML="No se encontraron resultados para '" +searchInput.value+"'" ;
        }
        }
    
} 
document.onclick= function(){
    if(searchInput.matches(':focus')==false){
        searchInput.style.width='60px';
}
}
// When the user clicks on <span> (x), close the modal



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalAdmin) {
    modalAdmin.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modalColab) {
    modalColab.style.display = "none";
  }
  
  
}
var filtroEncontrado = Boolean;
var art = [{'title':"Titulo1", 'content':"contendio1, hola"},
{'title':"Titulo2", 'content':"contendio2, adiós"},
{'title':"Titulo3", 'content':"contendio2, hola y adios"},
{'title':"Titulo4", 'content':"contendio4, hola y adios"}];
var str= String;
function contexto(string,coincidencia){
    indice=string.indexOf(coincidencia);
        minimo=Math.min(indice,21);
        maximo=Math.min(-indice-coincidencia.length+string.length,21)
        previo=string[indice-minimo]
        for(var i=1;i<minimo;i++){
            previo=previo+string[indice-minimo+i]
        }
        despues=string[indice+coincidencia.length]
        for(var i=1;i<maximo;i++){
            despues=despues+string[indice+coincidencia.length+i]
        }
        sobre=string[indice]
        for(var i=1;i<coincidencia.length;i++){
            sobre=sobre+string[indice+i]
        }
        if(indice>0){
        return(
            [previo,sobre,despues]
        )
        }
        else{
            return(
                [undefined,sobre,despues]
            )
        }
}
function FraseIncluida(art) {
	
	return (art['title'].includes(str.toLowerCase()) || art['content'].includes(str.toLowerCase()))
}

function filtro(texto) {
    str=texto;

    if (art.filter(FraseIncluida).length >0){
        filtroEncontrado=true;

        return ((art.filter(FraseIncluida)))
    }
    else {
        filtroEncontrado=false;
        console.log("no se encontro")
    }
}
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    if(filter.length>0){
        ul.removeAttribute("hidden"); 
    }
    else {
        ul.setAttribute("hidden","hidden")
    }
    
    
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }