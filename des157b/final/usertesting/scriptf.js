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
    const info = document.getElementById('info');
    const overlayInfo = document.getElementById('overlay_info');
    const infoInside = document.getElementById('inside');
    const close = document.querySelector('#overlay_info button');
    const add = document.getElementById('add');
    const form = document.getElementById('form');
    const submitForm = document.getElementById('actualform');
    const backform = document.getElementById('formback');
    // const submit = document.querySelector('');
    const inputs = document.querySelectorAll('#actualform textarea:not([type=submit])')
    const inputList = document.querySelector('#container');

    async function displayInput(){
        const input = Parse.Object.extend('Input');
        const query = new Parse.Query(input);
        try{     
            const result = await query.descending('createdAt').find();
            // console.log(result);
            result.forEach( function( eachInput ){
                const id = eachInput.id;
                const text = eachInput.get('text');

                const theListItem = document.createElement("div");
                theListItem.setAttribute("id", `r-${id}`);
                theListItem.innerHTML = `<blockquote class="blockq">${text}</blockquote>`;

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
        addInput();
        
        document.querySelector("#form form").reset();

        
    });

    async function addInput(){
        const newInput = {};

        for(let i=0; i<inputs.length; i++){
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newInput[key] = value;
            console.log(key);
        }
        if(newInput.story != ""){
            const newInputData = new Parse.Object('Input');
            newInputData.set('text', newInput.story);                
            alert('added');

            try{
                const result = await newInputData.save();
                console.log(result);
                resetFormFields();
                form.style.left = '-20000px';
                inputList.innerHTML = '';
                displayInput();

            }catch(error){
                console.error("error while creating input", error);
            }
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

