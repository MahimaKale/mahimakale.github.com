(function(){
    'use strict';
    console.log('reading js');

    //intro screen:
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').style.width = 0;
        document.getElementById('intro').style.top = "-1000px";

    })
    
    //game stuff:
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var scoresec = document.getElementById('scoresec');
    var actionArea = document.getElementById('actions');
    var red = document.getElementById('red');
    var end = document.getElementById('end');
    var one= document.getElementById('one');
    var two= document.getElementById('two');



    var gameData = {
        dice: ['1die.png','2die.png','3die.png','4die.png','5die.png','6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };


    // console.log(gameData);

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

      
        gameControl.innerHTML='<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';


        document.getElementById('quit').addEventListener("click",function(){
            location.reload();
        });

        setUpTurn();
        

    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the <strong>${gameData.players [gameData.index]}</strong></p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click',function(){
            throwDice();
            
        });  
        if(gameData.index === 1){
            game.style.left= "930px";
            actionArea.style.left= "1100px";
            red.style.top= "-20px";
            red.style.right= "49.5%";

        } else{
            game.style.left= "0px";
            actionArea.style.left= "0px";
            red.style.top= "-20px";
            red.style.right= "-3.5%";
        }
    }


    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the <strong>${gameData.players[gameData.index]}</strong></p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        var topPos = 500 - (11.6*gameData.score[gameData.index]);

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            const back = new Audio('audio/slide.mp3');
            back.play();
            if(gameData.score[gameData.index]===1){
                one.style.top = "500px";
                one.style.left= "100px";
                one.style.transform = "scale(0.5)";
            }else{
                two.style.top = "500px";
                two.style.left= "900px";
                two.style.transform = "scale(0.5)";
            } 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show the current score
            showCurrentScore();


            setTimeout(setUpTurn, 2000);
            // console.log("snake eyes were rolled");
        } else if(gameData.roll1 ===1 || gameData.roll2===1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML +=`<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn, 2000);
            // console.log("one of the two dice was a 1")
        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            if(gameData.index===0){
                var topPos = 500 - (15.4*gameData.score[gameData.index]);
                var leftPos = 100 + (10*gameData.score[gameData.index]);
                var scale = 0.5 - (0.01*gameData.score[gameData.index]);
                console.log(scale);
                one.style.top = topPos + "px";
                one.style.left= leftPos + "px";
                one.style.transform = `scale(${scale})`;
            }else{
                var topPos = 500 - (15.4*gameData.score[gameData.index]);
                var leftPos = 900 - (9*gameData.score[gameData.index]);
                var scale = 0.5 - (0.01*gameData.score[gameData.index]);
                two.style.top = topPos + "px";
                two.style.left= leftPos + "px";
                two.style.transform = `scale(${scale})`;            
            }
            

            document.getElementById('rollagain').addEventListener('click',function(){
                setUpTurn();
            });

            
            document.getElementById('pass').addEventListener('click',function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();


            //CHECK WINNING CONDITION
            // console.log("The game proceeds")
        }

        

        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                const clap = new Audio('audio/clap.mp3');
                end.style.top="150px";
                end.style.opacity = "1";
                end.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points! </h2>`
                actionArea.innerHTML="";
                clap.play();

                document.getElementById('quit').innerHTML = "Start a New Game?";
                document.getElementById('quit').style.top = "450px";
                document.getElementById('quit').style.left = "550px";
               
            } else{
                showCurrentScore();
                // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong> ${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
            }
            
        }

        function showCurrentScore(){
            score.innerHTML = `<p><strong>Player 1: ${gameData.score[0]}</strong>`;
            scoresec.innerHTML= `<p><strong>Player 2: ${gameData.score[1]}</strong>`;

            
        }

    }

    
    
}());