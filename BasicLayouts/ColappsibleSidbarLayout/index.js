$(function(){
    $(".collapse-sidebar").on("click",function(e){
        e.preventDefault();
        $(".sidebar-section").toggleClass("hidden");
        $(".sidebar").toggleClass("show");
    });

    $(".slider").on("click",function(){
        $(this).toggleClass("on").trigger("change");
        $("body").toggleClass("dark");
    });


    if(!localStorage.getItem("theme")){
        if(window.matchMedia("(prefers-color-scheme: light)").matches){
            localStorage.setItem("theme","light");
        }
        else{
            localStorage.setItem("theme","dark");
        }
    }

    if(localStorage.getItem("theme") == "light"){
        $("body").removeClass("dark",false);
        $(".slider").toggleClass("on",false);
    }
    else{
        $("body").toggleClass("dark",true);
        $(".slider").toggleClass("on",true);
    }

    $(".slider").on("change",function(){
        let theme = $(this).hasClass("on") ? "dark" : "light" ;
        localStorage.setItem("theme",theme);
    });
});
