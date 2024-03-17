var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu() {
    var menu = document.querySelector("#navegacaoPrimaria");
    if (menu.classList.contains("visivel")) {
        menu.classList.remove("visivel");
    } else {
        menu.classList.add("visivel");
    }
}

botaoMenuHamburguer.addEventListener("click", abrirMenu);

(function($) {
    "use strict";
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 40)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
})(jQuery);
