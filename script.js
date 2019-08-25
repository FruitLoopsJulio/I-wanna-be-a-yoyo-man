$(".most").hide();

    $(".begin").click(function(){
        $(".color").show();
        $("body").css("background-color","cyan");
    });
    
$(".primary").dblclick(function(){
    $(".color").hide();
    $(".next").show();
});

    $(".next").click(function(){
        $("body").css("background-color","lightgreen");
        $(".plant").show();
    });
    
$(".correct").click(function(){
    $(".plant").slideUp();
    $(".final").fadeIn();
});

    $(".final").click(function(){
        $(".gem").fadeIn();
    });
    
$(".shine").click(function(){
    $(".gem").fadeOut();
    $(".close").show();
});

$("#close").click(function(){
    $(".close").hide();
    $(".open").fadeIn();
});