
import {diffDates, diffToHTML} from './datecalc.js';
import {formatError} from './utils.js';


const musicBtn = document.getElementById('music')
const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc_result');

const formTimer = document.getElementById('timer_form')
const timerShow = document.getElementById('timer');
const changeBtn = document.getElementById('showChanging');


const stopBtn = document.getElementById('pausebtn');
const startBtn = document.getElementById('startbtn');

let time = 60;
startBtn.addEventListener('click', startHandler);

stopBtn.addEventListener('click', stopHandler);
let id;

 function fnMusic(){
    let sound = new Howl({
        src: ['sound.mp3', 'sound.ogg'],
        autoplay: true,
        loop: true,
        volume: 0.5
      });
      sound.play()
}


function startHandler(){
    id = setInterval( function() {
            
            const minutes = Math.floor(time / 60) % 60;
            let seconds = time % 60;
           
            seconds = seconds < 10 ? "0" + seconds: seconds;
            timerShow.innerHTML = `${minutes} : ${seconds}`;
            time--;
            if(time < 0)clearInterval(id);
            if(time < 0 ) fnMusic()
        
    },1000)
   
    this.disabled = true;
    stopBtn.disabled = false;
   

}

function stopHandler() {
    
    clearInterval(id);
    
    this.disabled = true;
    startBtn.disabled = false;

}
changeBtn.addEventListener('click', handlerChange);

function handlerChange(){
    
    dateCalcForm.classList.add('hide');
    formTimer.classList.remove('hide');
   

}


dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let  {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    
    if(firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHTML(diff);
    } else {
        dateCalcResult.innerHTML = formatError('Fill in both fields,please')
    }
    
}



