(function(){
    'use strict';
     new kursor({
        type: 2,
        removeDefaultCursor: true,
        color: "#ffffff"
    })

    const overlay1= document.querySelector('#overlay1');
    const enter= document.querySelector('#enter');
    const overlay2= document.querySelector('#overlay2');
    const enter2= document.querySelector('#enter2');

    
    setTimeout (function(){
            enter.style.opacity = '1';
    }, 5000);

    overlay1.addEventListener('click',function(){
        overlay1.style.width = '0px';
        overlay1.style.opacity = '0';
        overlay2.style.top = '0px';
        setTimeout (function(){
            enter2.style.opacity = '1';
            enter2.style.color = '#F5E0B5';
          }, 5000);

    })

    overlay2.addEventListener('click',function(){
        
        overlay2.style.width = '0px';
        overlay2.style.opacity = '0';
    })


    
    

})();

