const blue= "Blue's turn";
const red= "Red's turn";
const blueWin= 'Blue Wins!';
const redWin= 'Red Wins!';
const tie= 'Tie';
player= 0;
tl= 0;
tm= 0;
tr= 0;
ml= 0;
m= 0;
mr= 0;
bl= 0;
bm= 0;
br= 0;
document.querySelector('.button1').disabled= true;
document.querySelector('.button2').disabled= true;
document.querySelector('.button3').disabled= true;
document.querySelector('.button4').disabled= true;
document.querySelector('.button5').disabled= true;
document.querySelector('.button6').disabled= true;
document.querySelector('.button7').disabled= true;
document.querySelector('.button8').disabled= true;
document.querySelector('.button9').disabled= true;

document.querySelector('.startButton').addEventListener('click', selectPlayer);
function selectPlayer(){
    randomize= Math.floor((Math.random() * 2) + 1);
    document.querySelector('.startButton').style.display= 'none';
    document.querySelector('.button1').disabled= false;
    document.querySelector('.button2').disabled= false;
    document.querySelector('.button3').disabled= false;
    document.querySelector('.button4').disabled= false;
    document.querySelector('.button5').disabled= false;
    document.querySelector('.button6').disabled= false;
    document.querySelector('.button7').disabled= false;
    document.querySelector('.button8').disabled= false;
    document.querySelector('.button9').disabled= false;
    if (randomize == 1){
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    }else{
        document.querySelector('.who').innerHTML= red;
        player= 2;
    };
};

document.querySelector('.button1').addEventListener('click', change1);
function change1(){
    if (player == 1){
        document.querySelector('.box1').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        tl= 1;
        winChecker();
    }else{
        document.querySelector('.box1').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        tl= 2;
        winChecker();
    };

    document.querySelector('.button1').disabled= true;
};
document.querySelector('.button2').addEventListener('click', change2);
function change2(){
    if (player == 1){
        document.querySelector('.box2').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        tm= 1;
        winChecker();
    }else{
        document.querySelector('.box2').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        tm= 2;
        winChecker();
    };
    
    document.querySelector('.button2').disabled= true;
};
document.querySelector('.button3').addEventListener('click', change3);
function change3(){
    if (player == 1){
        document.querySelector('.box3').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        tr= 1;
        winChecker();
    }else{
        document.querySelector('.box3').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        tr= 2;
        winChecker();
    };
    
    document.querySelector('.button3').disabled= true;
};

document.querySelector('.button4').addEventListener('click', change4);
function change4(){
    if (player == 1){
        document.querySelector('.box4').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        ml= 1;
        winChecker();
    }else{
        document.querySelector('.box4').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        ml= 2;
        winChecker();
    };
    
    document.querySelector('.button4').disabled= true;
};
document.querySelector('.button5').addEventListener('click', change5);
function change5(){
    if (player == 1){
        document.querySelector('.box5').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        m= 1;
        winChecker();
    }else{
        document.querySelector('.box5').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        m= 2;
        winChecker();
    };
    
    document.querySelector('.button5').disabled= true;
};
document.querySelector('.button6').addEventListener('click', change6);
function change6(){
    if (player == 1){
        document.querySelector('.box6').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        mr= 1;
        winChecker();
    }else{
        document.querySelector('.box6').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        mr= 2;
        winChecker();
    };
    
    document.querySelector('.button6').disabled= true;
};

document.querySelector('.button7').addEventListener('click', change7);
function change7(){
    if (player == 1){
        document.querySelector('.box7').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        bl= 1;
        winChecker();
    }else{
        document.querySelector('.box7').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        bl= 2;
        winChecker();
    };
    
    document.querySelector('.button7').disabled= true;
};
document.querySelector('.button8').addEventListener('click', change8);
function change8(){
    if (player == 1){
        document.querySelector('.box8').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        bm= 1;
        winChecker();
    }else{
        document.querySelector('.box8').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        bm= 2;
        winChecker();
    };
    
    document.querySelector('.button8').disabled= true;
};
document.querySelector('.button9').addEventListener('click', change9);
function change9(){
    if (player == 1){
        document.querySelector('.box9').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
        br= 1;
        winChecker();
    }else{
        document.querySelector('.box9').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
        br= 2;
        winChecker();
    };
    
    document.querySelector('.button9').disabled= true;
};

function winChecker(){
    if (tl == 1 && tm == 1 && tr == 1 ||
        ml == 1 && m == 1 && mr == 1 ||
        bl == 1 && bm == 1 && br == 1 ||
        tl == 1 && ml == 1 && bl == 1 ||
        tm == 1 && m == 1 && bm == 1 ||
        tr == 1 && mr == 1 && br == 1 ||
        tl == 1 && m == 1 && br == 1 ||
        tr == 1 && m == 1 && bl == 1){
            document.querySelector('.winner').innerHTML= blueWin;
            endGame();
    }else if (tl == 2 && tm == 2 && tr == 2 ||
        ml == 2 && m == 2 && mr == 2 ||
        bl == 2 && bm == 2 && br == 2 ||
        tl == 2 && ml == 2 && bl == 2 ||
        tm == 2 && m == 2 && bm == 2 ||
        tr == 2 && mr == 2 && br == 2 ||
        tl == 2 && m == 2 && br == 2 ||
        tr == 2 && m == 2 && bl == 2){
            document.querySelector('.winner').innerHTML= redWin;
            endGame();
    }else if (tl !== 0 && tm !== 0 && tr !== 0 &&
        ml !== 0 && m !== 0 && mr !== 0 &&
        bl !== 0 && bm !== 0 && br !== 0){
            document.querySelector('.winner').innerHTML= tie
            endGame();
    };
};
function endGame(){
    btn= document.createElement('button');
    btn.innerHTML= 'Reset';
    btn.className= 'rst';
    btn.addEventListener('click', reset);
    document.body.appendChild(btn);
    document.querySelector('.button1').disabled= true;
    document.querySelector('.button2').disabled= true;
    document.querySelector('.button3').disabled= true;
    document.querySelector('.button4').disabled= true;
    document.querySelector('.button5').disabled= true;
    document.querySelector('.button6').disabled= true;
    document.querySelector('.button7').disabled= true;
    document.querySelector('.button8').disabled= true;
    document.querySelector('.button9').disabled= true;
};
function reset(){
    tl= 0;
    tm= 0;
    tr= 0;
    ml= 0;
    m= 0;
    mr= 0;
    bl= 0;
    bm= 0;
    br= 0;
    selectPlayer();
    document.querySelector('.box1').src= 'Images/blank.jpg';
    document.querySelector('.box2').src= 'Images/blank.jpg';
    document.querySelector('.box3').src= 'Images/blank.jpg';
    document.querySelector('.box4').src= 'Images/blank.jpg';
    document.querySelector('.box5').src= 'Images/blank.jpg';
    document.querySelector('.box6').src= 'Images/blank.jpg';
    document.querySelector('.box7').src= 'Images/blank.jpg';
    document.querySelector('.box8').src= 'Images/blank.jpg';
    document.querySelector('.box9').src= 'Images/blank.jpg';
    btn.remove();
    document.querySelector('.winner').innerHTML= '';
    document.querySelector('.button1').disabled= false;
    document.querySelector('.button2').disabled= false;
    document.querySelector('.button3').disabled= false;
    document.querySelector('.button4').disabled= false;
    document.querySelector('.button5').disabled= false;
    document.querySelector('.button6').disabled= false;
    document.querySelector('.button7').disabled= false;
    document.querySelector('.button8').disabled= false;
    document.querySelector('.button9').disabled= false;
};