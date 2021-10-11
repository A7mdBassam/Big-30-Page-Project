// The commented out section below was for a scrapped THEME button that changed the color of the entire page!


// var cb = document.getElementById("theme");
// var root = 
// cb.addEventListener('change', (e)=>{
//     if(e.target.checked == false) {
//         console.log("not checked: theme is Dark");
//         document.documentElement.style.setProperty('--menu-bg', '#111827');
//         document.documentElement.style.setProperty('--hovered', '#1F2937');
//         document.documentElement.style.setProperty('--nav-main', '#11182786');
//         document.documentElement.style.setProperty('--text-main', '#eee');
//         document.documentElement.style.setProperty('--text-one', '#D1D5DB');
//     }
//         else {
//             console.log("checked: theme is light");
//             document.documentElement.style.setProperty('--menu-bg', '#fff');
//             document.documentElement.style.setProperty('--hovered', '#F3F4F6');
//             document.documentElement.style.setProperty('--nav-main', '#eeeeeec7');
//             document.documentElement.style.setProperty('--text-main', '#111');
//             document.documentElement.style.setProperty('--text-one', '#374151');
//         }
//     }
// );


//openning audio when pressing on play button
$(".play-audio").on("click", function(){
    $(".audio").each(function(){
        $(this).hide();
        $(this).children("audio")[0].pause();
    });
    $(this).parent().next(".audio").fadeIn(400);
    $(this).parent().next(".audio").children("audio")[0].play();
})

//closing audio file when pressing the X
$(".close-audio").on("click", function(){
    $(this).parent().hide();
    $(this).prev("audio")[0].pause();
})

// hiding the audio player when loading the page
$(document).ready(function(){
    $(".audio").each(function(){
        $(this).hide();
        $(this).children("audio")[0].pause();
    });
})


// Navbar:
//mobile (small screen) layout dropdown menus
$('.drop').on('click', function(e){
    if (window.matchMedia('(max-width: 1100px)').matches)
    {
        $(this).children('.menu').toggle();
    }
})

$('.subdrop').on('click', function(e){
    if (window.matchMedia('(max-width: 1100px)').matches)
    {
        e.stopPropagation();
        $(this).children('.submenu').toggle();
    }
})

//mobile (small screen) layout buttons
$('.bars').on('click', function(){
    if (window.matchMedia('(max-width: 1100px)').matches){
    $('#navbar').css("transform", "translateX(0)");
    $("body").css("overflowY", "hidden");
    }
});

$('.cross').on('click', function(){
    if (window.matchMedia('(max-width: 1100px)').matches){
    $('#navbar').css("transform", "translateX(-600px)");
    $("body").css("overflowY", "scroll");
    }
});

//making navbar appear and dissapear depending on scroll
var lastScroll;
$(window).on("scroll", function(){
    if(window.pageYOffset > 88){
    var scrollTop = window.pageYOffset;
    if(lastScroll < scrollTop)
    $("header").css("top", "-88px");
    else
    $("header").css({"top": "0"});
    lastScroll = scrollTop;
}
});

// Social Media (likes and comments) and bookmarks 
$(".bookmark").on("click", function(){
    $(this).children(".fa-bookmark").toggleClass("far").toggleClass("fas");
});

$(".likes").on("click", function(){
    $(this).children(".fa-heart").toggleClass("far").toggleClass("fas");
});

$(".section-one .next-card").on("click",function(){
    var currentCard = $(".card-active");
    if(currentCard.hasClass("card-last")){
        currentCard.removeClass("card-active");
        $(".card-first").addClass("card-active");
    }
    else{
        $(".card-active").removeClass("card-active").next(".row").addClass("card-active");
    }
});


//switching cards on the first section 
$(".section-one .prev-card").on("click",function(){
    var currentCard = $(".card-active");
    if(currentCard.hasClass("card-first")){
        currentCard.removeClass("card-active");
        $(".card-last").addClass("card-active");
    }
    else{
        $(".card-active").removeClass("card-active").prev(".row").addClass("card-active");
    }
});



// Play Video on hover
    $('.video-card').hover(function(){
      var $thisVid = $(this).children(".image-container").children("iframe").attr('src');
      $(this).children('.image-container').children("iframe").attr('src',$thisVid+'&autoplay=1');
    }, function(){
        var $thisVid = $(this).children(".image-container").children("iframe").attr('src');
        $(this).children('.image-container').children("iframe").attr('src',$thisVid.replace("&autoplay=1", ""));
    })


    //videos in the home page video secition (one big video and four on the side)
    $('.main-video').on('click', function(){
      $(this).children("iframe").addClass("iframe-active");
    })

    $('.side-video').on('click', function(){
      $(this).parent("li").parent("ul").children("li").removeClass("active");
      $(this).parent("li").addClass("active");
      var video = $(this).children("iframe").attr("src");
      var player = $(this).parent("li").parent("ul").parent(".col-lg-3").prev(".col-lg-9").children(".main-video").children("iframe");

      player.addClass("iframe-active");
      player.attr("src", video);


    })


    // Progress bar for template pages
var progress = document.getElementsByClassName("prog-bar")[0];
var header = document.getElementsByClassName("section-header")[0];

$(".progress").hide();
window.onscroll = function(){
    //showing and hiding the bar (hide if still in header)
    if (window.scrollY > header.scrollHeight)
    $(".progress").show();

    else
    $(".progress").hide();

    
    var totalHeight = $(".article").height(); // taking the articles height
    var progressHeight = (((window.scrollY - $(".section-header").height() + screen.height) / totalHeight) * 100); // taking the scrolled distance + the screens height (browser viewport) - the headers height and dividing by the articles height 
    progress.style.width = (progressHeight)+ "%"; // putting it in the css as a percantage 

}

//showing a textarea when clicking on "reply" on a comment
$(".show-comment").on("click", function(){
    $(this).parent().next(".comment-container").show();
    $(this).parent().hide();
});

$(".hide-comment").on("click", function(){
    $(this).parent().prev(".social-media").show();
    $(this).parent().hide();
});



$(".reasons li").on("click", function(){
    $(this).parent(".reasons").children("li").children("button").removeClass("active");
    $(this).children("button").addClass("active")
});

$(".modal .close").on("click", function(){
    $(this).parent().parent(".modal").removeClass("modal-active");
})

// the report Popup/modal in single page templates
$(".show-modal").on("click", function(){
    if($(this).hasClass("report"))
    $(".modal-report").addClass("modal-active");
});


$(".drop-container ul li").on("click", function(){
    var chosen = $(this).html() + "<i class='fas fa-chevron-down'> </i>";
    $(this).parent("ul").prev(".sort-by").html(chosen);
});


//archive modals
$(".open-modal").on("click", function(){
    $(this).next(".modal").addClass("opened");
    //$("body").addClass("unscroll");
});

$(".close-modal").on("click", function(){
    $(this).parent().parent().removeClass("opened");
    //$("body").removeClass("unscroll");
});

//making video appear on click in Single Video page
$(".video").on("click", function(){
    var src = $(this).children("iframe").attr("src");
    $(this).children("iframe").addClass("active");
    
});


// THEMES 
// $(".theme-btn").on("click", function(){
//     console.log("theme button clicked");
//     if($("body").hasClass("home-two"))
//     $(".home-two").toggleClass("home-two-dark");

//     else if($("body").hasClass("home-three"))
//     $(".home-three").toggleClass("home-three-dark");

//     else{
//         $("body").toggleClass("dark-theme").toggleClass("main-theme");

//     }
// })

//stpoping the video when closing the modal
$(".has-video").children(".modal").children(".modal-content").children(".close-modal").on("click", function(){
    var $thisVid = $(this).next().next(".topics-container").children(".modal-video").attr('src');
    $(this).next().next(".topics-container").children(".modal-video").attr('src', $thisVid.replace("&autoplay=1&autoplay=1", ""));
    console.log($(this).next().next(".topics-container").children(".modal-video").attr('src'));
})


//focusing on search bar when clicking search button
$(".search-btn").on("click", function(){
    $("#search-bar").focus();
})


