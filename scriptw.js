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

    //carousel:::

    const carouselImages = document.querySelector('.carimg');
    const carouselButtons = document.querySelectorAll('.carbut');
    const numberOfImages = document.querySelectorAll('.carimg img').length;
    let imageIndex = 1;
    let translateX = 0;

    //id previous and nextbut

    carouselButtons.forEach(button => {

        button.addEventListener('click', event => {
            
            if(event.target.id ==='previous'){
                if(imageIndex !== 1){
                    imageIndex --;
                    translateX +=300;
                }
            }else{
                if (imageIndex !== numberOfImages){
                    imageIndex ++;
                    translateX -= 300;
                }
            } 

            console.log(imageIndex);

            carouselImages.style.transform = `translate(${translateX}px)`;
        });
    });

    //poster

    const carouselImagespost = document.querySelector('.carimage');
    const carouselButtonspost = document.querySelectorAll('.carbutton');
    const numberOfImagespost = document.querySelectorAll('.carimage img').length;
    let imageIndexpost = 1;
    let translateXpost = 0;

    //id previous and nextbut

    carouselButtonspost.forEach(button => {

        button.addEventListener('click', event => {
            
            if(event.target.id ==='previoussec'){
                if(imageIndexpost !== 1){
                    imageIndexpost --;
                    translateXpost +=300;
                }
            }else{
                if (imageIndexpost !== numberOfImagespost){
                    imageIndexpost ++;
                    translateXpost -= 300;
                }
            } 

            console.log(imageIndexpost);

            carouselImagespost.style.transform = `translate(${translateXpost}px)`;
        });
    });

}());