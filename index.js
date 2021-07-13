$(".showBar").on("click",function(){
    $(".menu-hamburguesa").addClass("show-menu")
    $(".hide").addClass("show-close")
    $(".showBar").addClass("hideBar")

})
$(".hide").on("click",function(){
    $(".menu-hamburguesa").removeClass("show-menu")
    $(".hide").removeClass("show-close")
    $(".showBar").removeClass("hideBar")

})
