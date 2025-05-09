$(document).ready(function() {
    $('.baseball').addClass("lessonsRedText");
    $('.softball').addClass("d-none");
    $('.softball').on("click", function() {
        $('.baseball').removeClass("lessonsRedText");
        $(this).addClass("lessonsRedText");
        $(this).removeClass("d-none");
        $(".baseball").addClass("d-none");
    })
    $('.baseball').on("click", function() {
        $('.softball').removeClass("lessonsRedText");
        $(this).addClass("lessonsRedText");
        $(this).removeClass("d-none");
        $(".softball").addClass("d-none");
        
    })
})