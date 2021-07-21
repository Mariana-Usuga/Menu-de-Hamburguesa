$(".showBar").on("click",function(){
    $(".menu").addClass("show-menu")
    $(".hide").addClass("show-close")
    $(".showBar").addClass("hideBar")

})
$(".hide").on("click",function(){
    $(".menu").removeClass("show-menu")
    $(".hide").removeClass("show-close")
    $(".showBar").removeClass("hideBar")

})
$("a").on("click",function(){
    $(".menu").removeClass("show-menu")
})
