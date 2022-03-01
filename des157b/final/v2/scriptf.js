(function(){
    'use strict';
    // Script for home and index page
     new kursor({
        type: 2,
        // removeDefaultCursor: true,
        color: "#ffffff"
    })

    const back = document.querySelector('.back');

    back.addEventListener('click',function(){
        location.href = "home.html";
    })



})();

