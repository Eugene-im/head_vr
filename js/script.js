$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо, мы скоро с Вами свяжемся!");
            $("form").toggle();
            // $("form").addClass("no_display");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    if($("#my_select option:selected").val()=="выберите город"){
        $("#city_n").text("+38 044 232 41 39");
        $("#city_n").attr("href","tel:+380442324139");
    }
    
    else{
        $("#city_n").text($("#my_select option:selected").val());
        $("#city_n").attr("href","tel:" + $("#my_select option:selected").val());
    }
    
    $("select").change(function(){
        $("#city_n").text($("#my_select option:selected").val());
        $("#city_n").attr("href","tel:" + $("#my_select option:selected").val());
    });

    $(".call_back").click(function () {
        $(".asd").toggle()
    });

    $(".full").click(function () {
        $("form").toggle();
    });

    $(".inputs_form").click(function (e) {
        e.stopPropagation();
    });


    // $(".submenu_s1").hover(function(){
    //     $(".submenu_1").toggle()
    // });

    // $(".menu_button").click(function () {
    //     $(".menu_nav").toggleClass("x");
    // });

    $('.slider1.owl-theme').owlCarousel({
        items : 1,
        autoplay: true,
        dots: false,
        loop: true,
        // nav: false,
        navText: ["<",">"],
        autoplayHoverPause:true,
    });
    $('.slider2.owl-theme').owlCarousel({
        items : 1,
        autoplay: true,
        dots: true,
        loop: true,
        nav: false,
        autoplayHoverPause:true,
         responsive:{
        1600:{
            items:1,
        }
    }
    });


});
    
    function myFunction(x) {
    x.classList.toggle("change");
}