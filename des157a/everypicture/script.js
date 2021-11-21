(function(){
    'use strict';
    console.log('reading js');

    let bubbles = document.querySelectorAll('div');

    for (var i=0; i<bubbles.length; i++){

        var specificDiv = bubbles[i];

        let Num = Math.floor((Math.random()*680));
        let NumL = Math.floor((Math.random()*1280));

        specificDiv.style.top = Num +"px";
        specificDiv.style.left = NumL +"px";
     
    }

    //slideshow;

    let currentImage =0;
    const myphotos = [
        'image1.jpg', 
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg'];
    
        const mytext = [
            'Mini Ballerina Present',
            'Bottled Galaxy',
            'Charlie the Pumpkin',
            'Keychain that defined my design life',
            'Potlu the Heart Pine',
            'Little koala rock'];

        const mybodytext =[
            'I made a little ballerina present for a firend who is a ballerina :) I ended up keeping it though because I liked it so much. It is just cotton, water paint and gliter with a wire string structure for the ballerina.',
            'I made a bottled galaxy bottle',
            'Charlie from my pumpkin patch (Oct 14, 2020 to September 6, 2021)',
            'keychain',
            'heart-pine',
            'koala',
        ];

    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');
    const slide = document.getElementById('myimage');

        window.onscroll = function(event){
            event.preventDefault();
            console.log(window.onscroll);
            currentImage++;
            console.log('currentImage');
        
        if(currentImage > (myphotos.length-1)){
            currentImage =0;
        }
            var newSlide = document.createElement('img');
            newSlide.src = `images/${myphotos[currentImage]}`;
            document.getElementById('mytext').innerHTML= mytext[currentImage];
            document.getElementById('maintext').innerHTML= mybodytext[currentImage];
            newSlide.className= `fade${myphotos[currentImage]}`;
            container.appendChild(newSlide);
        
    
            if (container.children.length>2){
                container.removeChild
            }
        }



    // nextBtn.addEventListener('click', function(event){
    //     event.preventDefault();
    //     currentImage++;
    //     if(currentImage > (myphotos.length-1)){
    //         currentImage =0;
    //     }

    //     var newSlide = document.createElement('img');
    //     newSlide.src = `images/${myphotos[currentImage]}`;
    //     document.getElementById('mytext').innerHTML= mytext[currentImage];
    //     document.getElementById('maintext').innerHTML= mybodytext[currentImage];
    //     newSlide.className= `fade${myphotos[currentImage]}`;
    //     container.appendChild(newSlide);
    

    //     if (container.children.length>2){
    //         container.removeChild
    //     }
    // })

    // prevBtn.addEventListener('click', function(event){
    //     event.preventDefault();
    //     currentImage--;
    //     if(currentImage < 0){
    //         currentImage =(myphotos.length-1);
    //     }

    //     var newSlide = document.createElement('img');
    //     newSlide.src = `images/${myphotos[currentImage]}`;
    //     document.getElementById('mytext').innerHTML= mytext[currentImage];
    //     document.getElementById('maintext').innerHTML= mybodytext[currentImage];
    //     newSlide.className= `fade${myphotos[currentImage]}`;
    //     container.appendChild(newSlide);

    //     if (container.children.length<2){
    //         container.removeChild
    //     }
    // })


}());