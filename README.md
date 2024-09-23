My five custom jQuery scripts:
1)	Changes my profile picture on hover.

 $("#myImage").mouseenter(function(){
        var image = $(this);
        if (image.attr("src").match("Picture of Me.jpeg")) {
            image.attr("src", "fresh-strawberry-cake2-srgb..jpg");
        } else {
            image.attr("src", "Picture of Me.jpeg");
        }
    });
});

2)	Changes the color of my name on hover.

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

3)	(My favorite adds a custom animation (I took two gif stickers and merged them together to make my own personal logo) to the top of the page. 

$(document).ready(function(){
    function animateItem(item, startDelay) {
        $(item).css({left: '-50px'}).delay(startDelay).animate({left: '100%'}, 5000, function() {
            animateItem(item, 0); 
        });
    }

    animateItem('#strawberry', 0);
    animateItem('#mouse', 2500); 
});

4)	Adds a text box to my name on hovering.
   
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

5)	Adds a pink border around my header.

$(document).ready(function(){
    $("#myHeading").css({
        "border": "5px solid pink",
        "border-radius": "10px"
    });
});
