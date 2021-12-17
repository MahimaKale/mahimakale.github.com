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
        document.getElementById("overone").style.left = "0px";
        document.getElementById("overone").style.width = "90vw";


        document.getElementById("overtwo").style.top = "-25000px";
        document.getElementById("overthree").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";
        document.querySelector("#close").style.zIndex = "1";
        

    });

    overtwo.addEventListener('click',function(event){
        event.preventDefault();

        document.getElementById("hidden").style.top = "0px";
        document.getElementById("overtwo").style.zIndex = "1";
        document.getElementById("overtwo").style.top = "0px";
        document.getElementById("overtwo").style.left = "0px";
        document.getElementById("overtwo").style.width = "90vw";


        document.getElementById("overone").style.top = "-25000px";
        document.getElementById("overthree").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";
        document.querySelector("#close").style.zIndex = "1";


    });

    overthree.addEventListener('click',function(event){
        event.preventDefault();

        document.getElementById("hidden").style.top = "0px";
        document.getElementById("overthree").style.zIndex = "1";
        document.getElementById("overthree").style.top = "0px";
        document.getElementById("overthree").style.left = "0px";
        document.getElementById("overthree").style.width = "90vw";


        document.getElementById("overone").style.top = "-25000px";
        document.getElementById("overtwo").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "1";
        document.querySelector("#close").style.zIndex = "1";


    });

    document.querySelector("#close").addEventListener("click", function(){

        document.getElementById("hidden").style.top = "-25000px";
        document.querySelector("#close").style.opacity = "0";

    })

    //carousel:::

    // const carouselImages = document.querySelector('carimg');
    // const carouselButtons = document.querySelectorAll('carbut');
    // const numberOfImages = document.querySelectorAll('carimg img').length;
    // let imageIndex = 1;
    // let translateX = 0;

    // //id previous and nextbut

    // carouselButtons.forEach(buttons => {
    //     buttons.addEventListener('click', event =>{
    //         if(event.target.id ==='previous'){
    //             if(imageIndex !== 1){
    //                 imageIndex --;
    //                 translateX +=300;
    //             }
    //         }else{
    //             if (imageIndex !== numberOfImages){
    //                 imageIndex ++;
    //                 translateX -= 300;
    //             }
    //         }

    //         carouselImages.style.transform = `translate(${translateX}px)`
    //     });
    // })


}());