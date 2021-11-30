(function(){
    'use strict';
    console.log('reading js');

    // document.querySelector('.close').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.getElementById('start').style.left = "-10000px";

    // })

    let bubbles = document.querySelectorAll('div');

    for (var i=0; i<bubbles.length; i++){

        var specificDiv = bubbles[i];

        let Num = Math.floor((Math.random()*680));
        let NumL = Math.floor((Math.random()*1280));

        specificDiv.style.top = Num +"px";
        specificDiv.style.left = NumL +"px";
     
    }

    //slideshow;

    let currentImage = 1;
    let currentImageTop = currentImage + 1;
    let currentImageBottom = currentImage - 1;

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
            'I made a little ballerina present for a friend who is a ballerina :) I ended up keeping it though because I liked it so much and made her another oner. It is just cotton, water paint and gliter with a wire string structure for the ballerina.',
            'I made a bottled galaxy with cotton and water paint. I have had it since 2015. Even though it is faded a bit now, it reminds me of the times that were just simpler.',
            'Charlie from my pumpkin patch (Oct 14, 2020 to September 6, 2021) This was my first time to a pumpkin patch. Charlie just looked different from all the stark orange pumpkins and some might say he looked ugly too but my heart was set on getting it, for me it was perfect. ',
            'I made this keychain in wood class in 9th grade. This was the time that I realised my passion for design and this keychain just means a lot to me. It is made out of a thin aluminum sheet.',
            'I found this pine on a hike at Tahoe in 2018 and I have had it ever since! The name was just concocted by my friends with whom I went on the hike. The heart-pine!',
            'This might be the oldest craft piece I have that I made by myself! I made this when I was around 12 years old. I love koalas! They sleep a lot (so do I)and they eat at a lot (so do I). It is just a pebble from outside my house back in India that I had just picked up and painted one night.',
        ];

    var container = document.getElementById('content');
    const slide = document.getElementById('myimage');

    //addEventListener("wheel",scroll);
    //event.deltaY

    window.addEventListener("wheel",scroll);

    function scroll(){
        // document.getElementById('bubble').style.opacity = "1";
        currentImage++;
        currentImageTop++;
        currentImageBottom++;
        console.log(currentImage);
        console.log(currentImageTop);
        console.log(currentImageBottom); 

        
 

            if(currentImage > (myphotos.length-1)){
            currentImage =0 ;
            }
            
            var newSlide = document.createElement('img');
            newSlide.src = `images/${myphotos[currentImage]}`;
            document.getElementById('mytext').innerHTML= mytext[currentImage];
            document.getElementById('maintext').innerHTML= mybodytext[currentImage];
            newSlide.style.width = "500px";
            newSlide.style.height = "500px";
            newSlide.style.position = "fixed";
            newSlide.style.transition = "all 1s ease-in";
            newSlide.className= "fade";
            container.appendChild(newSlide);

            if (container.children.length>1){
                container.removeChild
            }

            var containerTop = document.getElementById('contenttop');

            if(currentImageTop > (myphotos.length-1)){
                currentImageTop = 0;
                }

            var topSlide = document.createElement('img');
            topSlide.src = `images/${myphotos[currentImageTop]}`;
            topSlide.className = "topslide";
            topSlide.style.width = "300px";
            topSlide.style.height = "300px";
            topSlide.style.position = "fixed";
            topSlide.style.transition = "all 1s ease";
            containerTop.appendChild(topSlide);

            if (containerTop.children.length>1){
                containerTop.removeChild
            }
            
            var containerBottom = document.getElementById('contentbottom');

            if(currentImageBottom > (myphotos.length-1)){
                currentImageBottom = 0;
                }

            var bottomSlide = document.createElement('img');
            bottomSlide.src = `images/${myphotos[currentImageBottom]}`;
            bottomSlide.className = "bottomslide";
            bottomSlide.style.width = "300px";
            bottomSlide.style.height = "300px";
            bottomSlide.style.position = "fixed";
            bottomSlide.style.transition = "all 1s ease";
            containerBottom.appendChild(bottomSlide);

            if (containerBottom.children.length>1){
                containerBottom.removeChild
            }
            
    
           
    }




}());