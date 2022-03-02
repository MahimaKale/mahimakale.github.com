(function(){
    'use strict';

    Parse.initialize("fLAKAxA5Ae9HtP4gwEXSV2zo3lq3ihVafgKjAdKR","i3cxdfhXpn5XtdC0GKcQ4IfyY7fR2wMVXvnx1lUn"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';

        // Script for home and index page
     new kursor({
        type: 2,
        // removeDefaultCursor: true,
        color: "#ffffff"
    });

    const inputList = document.querySelector('#container');

    async function displayInput(){
        const input = Parse.Object.extend('Input');
        const query = new Parse.Query(input);
        try{     
            const result = await query.ascending('text').find();
            // console.log(result);
            result.forEach( function( eachInput ){
                const id = eachInput.id;
                const text = eachInput.get('text');

                const theListItem = document.createElement("div");
                theListItem.setAttribute("id", `r-${id}`);
                theListItem.innerHTML = `<blockquote>${text}</blockquote>`;

                inputList.append(theListItem);
            } );
        } catch (error){
            console.log('Error while fetching Inputs', error)
        }
    }

    displayInput();

    const back = document.querySelector('.back');

    back.addEventListener('click',function(){
        location.href = "home.html";
    })

    const info = document.getElementById('info');
    const overlayInfo = document.getElementById('overlay_info');
    const infoInside = document.getElementById('inside');
    const close = document.querySelector('#overlay_info button');
    const add = document.getElementById('add');
    const form = document.getElementById('form');
    const submitForm = document.getElementById('actualform');
    const backform = document.getElementById('formback');
    // const submit = document.querySelector('');
    const inputs = document.querySelectorAll('#form form input:not([type=submit])')

    add.addEventListener('click',function(event){
        event.preventDefault();
        form.style.left = '0px';
    })

    backform.addEventListener('click',function(event){
        event.preventDefault();

        form.style.left = '-20000px';
    })

    submitForm.addEventListener('submit',function(event){
        event.preventDefault();
        console.log('done');
        form.style.left = '-20000px';
        document.querySelector("#form form").reset();

        addInput();
    });

    async function addInput(){
        const newInput = {};

        for(let i=0; i<inputs.length; i++){
            let key = inputs[i].getAttribute('text');
            let value = inputs[i].value;
            newInput[key] = value;
        }
        if(newInput.text != ""){
            const newInputData = new Parse.Object('Inputs');
            newInputData.set('text', newInput.text);
            try{
                const result = await newInputData.save();
                // console.log(result);
                resetFormFields();
                form.style.left = '-20000px';
                inputList.innerHTML = '';
                displayInput();

            }catch(error){
                console.error("error while creating input", error);
            }
            // alert('added');
        } else {
            form.style.left = '-20000px';
        }
    }
   
    //helper functions
    function resetFormFields(){
        document.getElementById('story').value = "";
    }
   //more info:  
    info.addEventListener('click',function(event){
        event.preventDefault();

        overlayInfo.style.opacity = "1";	 
        overlayInfo.style.width = "99vw";
        infoInside.style.width = "60vw";
        overlayInfo.style.zIndex = "1";

   
    })
 
    close.addEventListener('click', function(event){
        event.preventDefault();

        overlayInfo.style.opacity = "0";
        overlayInfo.style.width = "0vw";
        overlayInfo.style.zIndex = "0";
        infoInside.style.width = "0vw";
        
    })

})();

