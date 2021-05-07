let player= 0;
let array= [
    'b1', 'b2', 'b3',
    'b4', 'b5', 'b6',
    'b7', 'b8', 'b9'
];
document.querySelector('.startButton').addEventListener('click', selectPlayer);

function selectPlayer(){
    randomize= Math.floor((Math.random() * 2) + 1);
    if (randomize == 1){
        document.querySelector('.who').innerHTML= "Blue's turn";
        player= 1;
    }else{
        document.querySelector('.who').innerHTML= "Red's turn";
        player= 2;
    };
    document.querySelector('.startButton').style.display= 'none';
    document.querySelector('#b1').addEventListener('click', change);
    document.querySelector('#b2').addEventListener('click', change);
    document.querySelector('#b3').addEventListener('click', change);
    document.querySelector('#b4').addEventListener('click', change);
    document.querySelector('#b5').addEventListener('click', change);
    document.querySelector('#b6').addEventListener('click', change);
    document.querySelector('#b7').addEventListener('click', change);
    document.querySelector('#b8').addEventListener('click', change);
    document.querySelector('#b9').addEventListener('click', change);
};

function change(e){
    if (player == 1){
        e.target.src= 'Images/blue.jpg';
        document.querySelector('.who').innerHTML= "Red's turn";
        player= 2;
        array[array.indexOf(e.target.id)]= 1;
    }else{
        e.target.src= 'Images/red.jpg';
        document.querySelector('.who').innerHTML= "Blue's turn";
        player= 1;
        array[array.indexOf(e.target.id)]= 2;
    };
    winchecker();
    e.target.removeEventListener('click', change);
};

function winchecker(e){
    if(array[0]== 1 && array[1]== 1 && array[2]== 1||
        array[3]== 1 && array[4]== 1 && array[5]== 1||
        array[6]== 1 && array[7]== 1 && array[8]== 1||
        array[0]== 1 && array[3]== 1 && array[6]== 1||
        array[1]== 1 && array[4]== 1 && array[7]== 1||
        array[2]== 1 && array[5]== 1 && array[8]== 1||
        array[0]== 1 && array[4]== 1 && array[8]== 1||
        array[2]== 1 && array[4]== 1 && array[6]== 1){
                document.querySelector('.winner').innerHTML= 'Blue wins!';
                document.querySelector('.who').innerHTML= '';
                removeel();
                reset= document.createElement('button');
                reset.innerHTML= 'Click To Restart';
                reset.addEventListener('click', restart);
                document.body.appendChild(reset);
        }else if(array[0]== 2 && array[1]== 2 && array[2]== 2||
            array[3]== 2 && array[4]== 2 && array[5]== 2||
            array[6]== 2 && array[7]== 2 && array[8]== 2||
            array[0]== 2 && array[3]== 2 && array[6]== 2||
            array[1]== 2 && array[4]== 2 && array[7]== 2||
            array[2]== 2 && array[5]== 2 && array[8]== 2||
            array[0]== 2 && array[4]== 2 && array[8]== 2||
            array[2]== 2 && array[4]== 2 && array[6]== 2){
                document.querySelector('.winner').innerHTML= 'Red wins!';
                document.querySelector('.who').innerHTML= '';
                removeel();
                reset= document.createElement('button');
                reset.innerHTML= 'Click To Restart';
                reset.addEventListener('click', restart);
                document.body.appendChild(reset);
        }else if(array[0]!= 'b1' && array[1]!= 'b2' && array[2]!= 'b3'
        && array[3]!= 'b4' && array[4]!= 'b5' && array[5]!= 'b6'
        && array[6]!= 'b7' && array[7]!= 'b8' && array[8]!= 'b9'){
                document.querySelector('.winner').innerHTML= 'Tie';
                document.querySelector('.who').innerHTML= '';
                removeel();
                reset= document.createElement('button');
                reset.innerHTML= 'Click To Restart';
                reset.addEventListener('click', restart);
                document.body.appendChild(reset);
    };
};

function restart(){
    document.location.reload();
};

function removeel(){
    document.querySelector('#b1').removeEventListener('click', change);
    document.querySelector('#b2').removeEventListener('click', change);
    document.querySelector('#b3').removeEventListener('click', change);
    document.querySelector('#b4').removeEventListener('click', change);
    document.querySelector('#b5').removeEventListener('click', change);
    document.querySelector('#b6').removeEventListener('click', change);
    document.querySelector('#b7').removeEventListener('click', change);
    document.querySelector('#b8').removeEventListener('click', change);
    document.querySelector('#b9').removeEventListener('click', change);
};