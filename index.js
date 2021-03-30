document.getElementById('modal').style.display='none';
let randomArr = [];



function start() {
   
    let random  = Math.floor(Math.random() * 10);

    
    randomArr.push(random);

    document.getElementById('show').innerHTML= randomArr;

    randomArr = randomArr; 

    setTimeout(() => {
        document.getElementById('show').style.visibility='hidden';
    }, 800);

    document.getElementById('show').style.visibility='visible';
    document.getElementById('butn').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('modal').style.display='none';


}




function check() {



    let score = randomArr.length - 1;

    let input = document.getElementById('answer').value;
  

    if ( randomArr == input) {

        start();

    }
    else {

        document.getElementById('scored').innerHTML=score;

        switch (score) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:

            document.getElementById('review').innerHTML = 'You have a poor memory';
                break;

            case 5:
            case 6:
            case 7:
            case 8:

            document.getElementById('review').innerHTML = 'You have a good memory';
                break;

            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:

                document.getElementById('review').innerHTML = 'You have a very good memory';
                break;
            default:
                document.getElementById('review').innerHTML = 'You most likely have a photographic memory or you cheated lol';
            break;                
        }


        document.getElementById('modal').style.display='block';
        document.getElementById('info').style.display='none';

        randomArr = [];
    }

    document.getElementById('answer').value ="";


}


