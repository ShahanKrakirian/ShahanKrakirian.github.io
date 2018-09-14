$(document).ready(function(){

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
    prevScrollpos = currentScrollPos;
    }

    //on
    $("#helping-hand").hover(() => {
        $("#helping-hand").addClass("opacity");
        $("#helping-hand a").addClass("display");
    //off
    }, () => {
        $("#helping-hand").removeClass("opacity");
        $("#helping-hand a").removeClass("display");
    });

    $("#band-builder").hover(() => {
        $("#band-builder").addClass("opacity");
        $("#band-builder a").addClass("display");
    //off
    }, () => {
        $("#band-builder").removeClass("opacity");
        $("#band-builder a").removeClass("display");

    });

    $("#doctor-dojo").hover(() => {
        $("#doctor-dojo").addClass("opacity");
        $("#doctor-dojo a").addClass("display");
    //off
    }, () => {
        $("#doctor-dojo").removeClass("opacity");
        $("#doctor-dojo a").removeClass("display");
    });


})