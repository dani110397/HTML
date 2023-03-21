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
});