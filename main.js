const blue= "Blue's turn";
const red= "Red's turn";
let player= 0;
document.querySelector('.startButton').addEventListener('click', selectPlayer);

function selectPlayer(){
    let randomize= Math.floor((Math.random() * 2) + 1);

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
    }else{
        document.querySelector('.box1').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button2').addEventListener('click', change2);
function change2(){
    if (player == 1){
        document.querySelector('.box2').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box2').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button3').addEventListener('click', change3);
function change3(){
    if (player == 1){
        document.querySelector('.box3').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box3').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};

document.querySelector('.button4').addEventListener('click', change4);
function change4(){
    if (player == 1){
        document.querySelector('.box4').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box4').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button5').addEventListener('click', change5);
function change5(){
    if (player == 1){
        document.querySelector('.box5').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box5').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button6').addEventListener('click', change6);
function change6(){
    if (player == 1){
        document.querySelector('.box6').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box6').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};

document.querySelector('.button7').addEventListener('click', change7);
function change7(){
    if (player == 1){
        document.querySelector('.box7').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box7').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button8').addEventListener('click', change8);
function change8(){
    if (player == 1){
        document.querySelector('.box8').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box8').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};
document.querySelector('.button9').addEventListener('click', change9);
function change9(){
    if (player == 1){
        document.querySelector('.box9').src= 'Images/blue.jpg';
        player= 2;
        document.querySelector('.who').innerHTML= red;
    }else{
        document.querySelector('.box9').src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= blue;
        player= 1;
    };
};