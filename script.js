$(document).ready(function(){
    $("#myImage").mouseenter(function(){
        var image = $(this);
        if (image.attr("src").match("Picture of Me.jpeg")) {
            image.attr("src", "fresh-strawberry-cake2-srgb..jpg");
        } else {
            image.attr("src", "Picture of Me.jpeg");
        }
    });
});
$(document).ready(function(){
    $("h1").hover(
        function() {
            $(this).css("color", "red"); 
        },
        function() {
            $(this).css("color", "pink"); 
        }
    );
});


$(document).ready(function(){
    function animateItem(item, startDelay) {
        $(item).css({left: '-50px'}).delay(startDelay).animate({left: '100%'}, 5000, function() {
            animateItem(item, 0); 
        });
    }

    animateItem('#strawberry', 0);
    animateItem('#mouse', 2500); 
});
$(document).ready(function(){
    $("h1").hover(
        function() {
            $("#hoverText").css({
                display: "block",
                top: $(this).position().top + $(this).outerHeight(),
                left: $(this).position().left
            });
        },
        function() {
            $("#hoverText").css("display", "none");
        }
    );
});
$(document).ready(function(){
    $("#myHeading").css({
        "border": "5px solid pink",
        "border-radius": "10px"
    });
});