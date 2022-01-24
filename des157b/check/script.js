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
        const which = event.target.getAttribute("data-time");

        // document.querySelector('#gratitude p').style.color = "black";
        document.querySelector('#cut').innerHTML = `${which}`;
        document.querySelector('#cut').style.fontSize = '100px';
        document.querySelector('#day').style.top = "20%";


            });
        });  
    
}

//list for gratitude display
function outputHTML2(data){
    let html = '';
    const dataPoints = Object.keys(data);
    dataPoints.forEach(function(eachPoint){
            html += `<p class= "stuff"  data-time="${data[eachPoint].date}">${data[eachPoint].grateful}</p>`;         
    });

    return html;
}


getData();

setTimeout (function(){
    console.log('hey dummy');
    document.getElementById('overlay').style.opacity = '0';
}, 5000);

//video : https://www.youtube.com/watch?v=4UXJb4rjeDg
})();