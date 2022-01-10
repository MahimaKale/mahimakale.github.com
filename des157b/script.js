(function() {
    'use strict';
    let bubbles = document.querySelectorAll('.ban');
    for (var i=0; i<bubbles.length; i++){

        var specificDiv = bubbles[i];

        let Num = Math.floor((Math.random()*400));
        let NumL = Math.floor((Math.random()*1000));

        specificDiv.style.top = Num +"px";
        specificDiv.style.left = NumL +"px";
     
    }
    
    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const bannerday = document.querySelector('#bannerday');
    const sections = document.querySelectorAll('section');
    const back = document.getElementById('back');
    const dog = document.getElementById('dog');
    const cat = document.getElementById('cat');


    // const ban = document.querySelector('#banner');
    // const star = document.getElementsByClassName('star');

    let mode = 'dark';

    button.addEventListener('click', function() {
        let bubbles = document.querySelectorAll('.ban');

    for (var i=0; i<bubbles.length; i++){

        var specificDiv = bubbles[i];

        let Num = Math.floor((Math.random()*400));
        let NumL = Math.floor((Math.random()*1000));

        specificDiv.style.top = Num +"px";
        specificDiv.style.left = NumL +"px";
     
    }

    let stars = document.querySelectorAll('.star');

    for (var i=0; i<stars.length; i++){

        var specificDiv = stars[i];

        let Num = Math.floor((Math.random()*200));
        let NumL = Math.floor((Math.random()*1000));

        specificDiv.style.top = Num +"px";
        specificDiv.style.left = NumL +"px";
     
    }
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            bannerday.className = 'switch';
            button.className = 'switch';
            back.className = 'switch';
            document.getElementById('button').innerHTML = "Dark Mode";
            dog.style.opacity = '0';
            cat.style.opacity = '0';
            // ban.style.opacity = "0";
            // star.style.opacity = "1";
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            bannerday.removeAttribute('class');
            back.removeAttribute('class');
            document.getElementById('button').innerHTML = "Light Mode";
            dog.style.opacity = '1';
            cat.style.opacity = '1';
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()