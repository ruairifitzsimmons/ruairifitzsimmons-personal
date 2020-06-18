// show modal
$(".show").on("click", function(){
    $(".mask").addClass("active");
});

// close modal
function closeModal(){
    $(".mask").removeClass("active");
}

// click
$(".close, .mask").on("click", function(){
    closeModal();
});

$(document).keyup(function(e){
    if (e.keyCode == 27) {
        closeModal();
    }
});