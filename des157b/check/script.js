(function(){
    'use strict';

async function getData(){
    const grate = await fetch('data/gratitude.json');
    const data = await grate.json();
    const values = Object.values(data);
    console.log(values);

document.querySelector('#gratitude').innerHTML = outputHTML2(data);

const lines = document.querySelectorAll('#gratitude');
lines.forEach(function(eachLink){
eachLink.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#cut').className= 'disappear';
        setTimeout (function(){
            document.querySelector('#cut').classList.remove('disappear');
            document.querySelector('#cut').className= 'appear';
        }, 500);

        const which = event.target.getAttribute("data-time");
        const whichT = event.target.getAttribute("data-day");

        
        document.querySelector('#cut').innerHTML = `${which},<br> ${whichT}`;
        document.querySelector('#cut').style.fontSize = '100px';
        document.querySelector('#day').style.top = "10%";


            });
        });  
}

//list for gratitude display
function outputHTML2(data){
    let html = '';
    const dataPoints = Object.keys(data);
    dataPoints.forEach(function(eachPoint){
            html += `<p class= "stuff"  data-time="${data[eachPoint].date}" data-day="${data[eachPoint].time}">${data[eachPoint].grateful}</p>`;         
    });

    return html;
}


getData();

setTimeout (function(){
    document.getElementById('overlay').style.opacity = '0';
}, 5000);

//video : https://www.youtube.com/watch?v=4UXJb4rjeDg
})();