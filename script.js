(function(){
    'use strict';
    console.log('reading js');


    const overone = document.querySelector(".one");
    const overtwo = document.querySelector(".two");
    const overthree = document.querySelector(".three");

    console.log(overone);

    overone.addEventListener('click',function(event){
        event.preventDefault();

        document.getElementById("hidden").style.top = "0px";
        document.getElementById("overone").style.zIndex = "1";
        document.getElementById("overone").style.top = "0px";
        document.getElementById("overtwo").style.top = "-25000px";
        document.getElementById("overthree").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";

    });

    overtwo.addEventListener('click',function(event){
        event.preventDefault();

        document.getElementById("hidden").style.top = "0px";
        document.getElementById("overtwo").style.zIndex = "1";
        document.getElementById("overtwo").style.top = "0px";
        document.getElementById("overone").style.top = "-25000px";
        document.getElementById("overthree").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";

    });

    overthree.addEventListener('click',function(event){
        event.preventDefault();

        document.getElementById("hidden").style.top = "0px";
        document.getElementById("overthree").style.zIndex = "1";
        document.getElementById("overthree").style.top = "0px";
        document.getElementById("overone").style.top = "-25000px";
        document.getElementById("overtwo").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";

    });

    document.querySelector("#close").addEventListener("click", function(){

        document.getElementById("hidden").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "0";

    })

}());