(function(){
    "use strict";
    console.log("Reading js");

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    // radio button stuff:
    let responseatmps = 'atmps';
    const atmpsButtons = document.querySelectorAll('#atmps input[type ="radio"]');

    for(let i=0; i<atmpsButtons.length;i++){
        console.log(atmpsButtons[i]);
        atmpsButtons[i].addEventListener('click', whichatmps);
    }

    function whichatmps(){
        responseatmps = this.getAttribute('value');
        console.log('response selected: responseAtmps')
    }

    let responsetone = 'tone';
    const toneButtons = document.querySelectorAll('#tone input[type ="radio"]');

    for(let i=0; i<toneButtons.length;i++){
        console.log(toneButtons[i]);
        toneButtons[i].addEventListener('click', whichtone);
    }

    function whichtone(){
        responsetone = this.getAttribute('value');
        console.log('response selected: responsetone')
    }

    // end of radio button stuff

  
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        let color= document.querySelector("#color").value;
        let bcolor= document.querySelector("#bcolor").value;
        let emotion= document.querySelector("#emotion").value;
        let inspire= document.querySelector("#inspire").value;
        let aim= document.querySelector("#aim").value;



        let myText = 
        "Hello there!" + "<br>" + "<br>" +
        "Here is your creative brief summary:" + "<br>" + "<br>" +

        `You are going to design something amazing with the aim of it being ${aim}.` + "<br>" + "<br>" +
        
        `It will have an element of ${inspire} that you can center your design around. The main theme color would be a hue of ${color}. This would the primary color of your design. Your secondary color would be a hue of ${bcolor}. The background will have ${responseatmps} feel or setting. The vibe of your design would be ${emotion}. Think about how this feeling/emotion can relate to ${aim} and how it will affect your viewers. Remember to keep a ${responsetone} tone.` + "<br>" + "<br>" +
        "Finally, get designing :)";
        
        console.log(myText)

        event.preventDefault();
        document.getElementById('overlay').className = 'showing';

    
        document.querySelector('.close').addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('overlay').className = 'hidden';
        })
        
        madlib.innerHTML = myText;
   
    })
  
    let formData = document.querySelectorAll("input[type=text]");
    for(var eachField of formData){
        eachField.value = "";
    }

}());