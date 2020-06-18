// show modal
$(".show").on("click", function(){
    $(".mask").addClass("active")
});

// close modal
function closeModal(){
    $(".mask").removeClass("active");
}