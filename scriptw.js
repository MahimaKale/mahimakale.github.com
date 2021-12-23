(function(){
    'use strict';
    console.log('reading js');


    const UI = document.getElementById('ui');
    const mag = document.getElementById('magsec');
    const poster = document.getElementById('pos');
    const logo = document.getElementById('log');
    

    // window.onscroll = function() {myFunction()};
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.scrollY);

    // function myFunction(){
    //     console.log(window.scrollY);
    //     if(window.scrollY > 1250){
    //         mag.style.backgroundColor = "rgb(231, 231, 231)";
    //         UI.style.backgroundColor = "white";
    //         poster.style.backgroundColor = "white";
    //         logo.style.backgroundColor = "white";
            
    //     } else if (window.scrollY > 1500){
    //         poster.style.backgroundColor = "rgb(231, 231, 231)";
    //         mag.style.backgroundColor = "white";
    //         UI.style.backgroundColor = "white";
    //         logo.style.backgroundColor = "white";
    //     } else if(window.scrollY > 2000){
    //         logo.style.backgroundColor = "rgb(231, 231, 231)";
    //         mag.style.backgroundColor = "white";
    //         poster.style.backgroundColor = "white";
    //         UI.style.backgroundColor = "white";
    //     } else{
    //         UI.style.backgroundColor = "rgb(231, 231, 231)";
    //     mag.style.backgroundColor = "white";
    //     poster.style.backgroundColor = "white";
    //     logo.style.backgroundColor = "white";
    //     }

    // }



    mag.addEventListener('click', function(){
        mag.style.backgroundColor = "rgb(231, 231, 231)";
        UI.style.backgroundColor = "white";
        poster.style.backgroundColor = "white";
        logo.style.backgroundColor = "white";
    });

    UI.addEventListener('click', function(){
        UI.style.backgroundColor = "rgb(231, 231, 231)";
        mag.style.backgroundColor = "white";
        poster.style.backgroundColor = "white";
        logo.style.backgroundColor = "white";
    });

    poster.addEventListener('click', function(){
        poster.style.backgroundColor = "rgb(231, 231, 231)";
        mag.style.backgroundColor = "white";
        UI.style.backgroundColor = "white";
        logo.style.backgroundColor = "white";
    });

    logo.addEventListener('click', function(){
        logo.style.backgroundColor = "rgb(231, 231, 231)";
        mag.style.backgroundColor = "white";
        poster.style.backgroundColor = "white";
        UI.style.backgroundColor = "white";
    });


}());