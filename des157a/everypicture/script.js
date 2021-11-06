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
        'image5.jpg'];

    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');
    const slide = document.getElementById('myimage');

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImage++;
        if(currentImage > (myphotos.length-1)){
            currentImage =0;
        }

        var newSlide = document.createElement('img');
        newSlide.src = `images/${myphotos[currentImage]}`;
        newSlide.className= `fadeinimg${myphotos[currentImage]}`;
        container.appendChild(newSlide);
    


        if (container.children.length>2){
            container.removeChild
        }
    })

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImage--;
        if(currentImage < 0){
            currentImage =(myphotos.length-1);
        }

        var newSlide = document.createElement('img');
        newSlide.src = `images/${myphotos[currentImage]}`;
        newSlide.className= `fadeinimg${myphotos[currentImage]}`;
        container.appendChild(newSlide);

        if (container.children.length<2){
            container.removeChild
        }
    })

    
    //nothing in use below:

    //trying vertical scroll///

    // let pageTop;

	// window.addEventListener('scroll', function () {
    //     pageTop = window.pageYOffset;
    //     console.log(pageTop);



    // })

    // const img1 = document.getElementById("myimage");
    // const img2 = document.getElementById("myimage2");
    // const img3 = document.getElementById("myimage3");
    // const img4 = document.getElementById("myimage4");
    // const img5 = document.getElementById("myimage5");


    // document.getElementById('up').addEventListener('click',selectedImage);

    // function selectedImage(){
    //         img2.style.left = "300px";
    //         img2.style.top = "150px";
    //         img2.style.width = "300px";
    //         img2.style.height = "300px";

    //         img1.style.left = "150px";
    //         img1.style.top = "60px";
    //         img1.style.width = "150px";
    //         img1.style.height = "150px";

    //         img3.style.left = "150px";
    //         img3.style.top = "450px";
    //         img3.style.width = "150px";
    //         img3.style.height = "150px";

    //         img4.style.left = "20px";
    //         img4.style.top = "600px";
    //         img4.style.width = "100px";
    //         img4.style.height = "100px";
    // }

    // const container = document.querySelector('#container');
    // const hotspots = document.querySelectorAll('#container img');
    // // const theImg = document.querySelector('div img');

    

    // hotspots.forEach(function(eachSpot){
    //     eachSpot.addEventListener('mouseover', zoomPhoto);
    // })

    // function zoomPhoto(event){
    //     const thisCorner = event.target.id;
    //     // let xPos = event.clientX;
    //     // let yPos = event.clientY; 
    //     console.log(thisCorner);
    //     // console.log(xPos);
    //     // console.log(yPos);

        

    //     // document.getElementById("myimage").addEventListener("mouseover",myFunction);

    //     // function myFunction(){
    //     //     document.getElementById("myimage").style.left = "300px";
    //     //     document.getElementById("myimage").style.top = "150px";
    //     //     document.getElementById("myimage").style.width = "300px";
    //     //     document.getElementById("myimage").style.height = "300px";

    //     //     document.getElementById("myimage3").style.left = "20px";
    //     //     document.getElementById("myimage3").style.top = "20px";
    //     //     document.getElementById("myimage3").style.width = "100px";
    //     //     document.getElementById("myimage3").style.height = "100px";

    //     // }
        
        
    //     // document.getElementById("down").addEventListener("click",downImage);

    //     // function downImage(){
            

    //     // }


        
    // }

}());