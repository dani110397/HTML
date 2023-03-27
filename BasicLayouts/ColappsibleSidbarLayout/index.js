$(function(){
    $(".collapse-sidebar").on("click",function(e){
        e.preventDefault();
        $(".sidebar-section").toggleClass("hidden");
        $(".sidebar").toggleClass("show");
    });

    $(".slider").on("click",function(){
        $(this).toggleClass("on");
        $("body").toggleClass("dark")
    });

    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    if(theme.matches){
        $("body").addClass("dark");
        $(".slider").addClass("on");
    }
    else{
        $("body").removeClass("dark")
        $(".slider").removeClass("on");
    }
});
