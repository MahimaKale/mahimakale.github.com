(function(){
    'use strict';


    const fullScreen = document.querySelector('.fa-expand');
    const fullPoem = document.querySelector(".fa-file.alt")
    const myVid = document.querySelector('#sky');
    const play = document.querySelector('.fa-play');
    const load = document.querySelector('.fa-bullseye');

    // const intervalID = setInterval
    const overlay = document.getElementById('overlay');
    const overlate = document.getElementById('overlate');

    const text = document.getElementById('text');
    const poem = {
        start: [0, 2, 4, 6, 8, 10, 12, 14, 15],
        stop: [4, 6, 8, 10, 12, 14, 16, 18],
        line: [line1, line2, line3, line4, line5, line6, line7, line8]
    }

    const lines = document.querySelector('.lines');



//fullscreen 
    fullScreen.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

//full poem
//  fullPoem.addEventListener('click', function(){
//      overlate.style.opacity = "1";
//     //  myVid.pause();
//  })

// pause and play video
    myVid.addEventListener('click',function(){
        if(myVid.paused){
            myVid.play();
            play.style.opacity = "0";
        } else {
            myVid.pause();
            play.style.opacity = "1";
        }
    });
    play.addEventListener('click',function(){
        if(myVid.paused){
            myVid.play();
            play.style.opacity = "0";
        } else {
            myVid.pause();
            play.style.opacity = "1";
        }
    });

//for first overlay
setTimeout (function(){
    console.log('hey dummy');
            myVid.play();
            play.style.opacity = "0";
            overlay.className = "hidden";
            overlay.style.bottom = "5000px";
}, 3000);


const intervalID = setInterval(checkTime, 1000);
// let BotPos = 650;


            function checkTime() {
                for (let i = 0; i < poem.start.length; i++) {
                    if (poem.start[i] < myVid.currentTime && myVid.currentTime < poem.stop[i] && myVid.play) {
                        poem.line[i].className = "showing";
                        text.style.transform = "matrix(1,0,0,1,0,0)";
                        // BotPos -= 20;
                        // text.style.top = BotPos + "px";
                    } else if(myVid.paused){
                        i = poem.start[i];
                    }else if(myVid.currentTime > 18){
                        document.location.reload();
                    }else{
                        // poem.line[i].style.opacity = "0";     
                        // text.style.transform = "matrix(1,0,-0.86,0.86,0,0)";
                        // poem.line[i].style.opacity = "0";
                    }
                }
            };

            myVid.addEventListener('mousemove',function(event){
                console.log(event.clientX);
                let num = event.clientX;
                myVid.style.filter = `hue-rotate(${num}deg)`
                // myVid.playbackRate = event.clientX / 300 + .25;
            })

            myVid.addEventListener('playing', function() {
                load.style.display = 'none';
            });
 

})();