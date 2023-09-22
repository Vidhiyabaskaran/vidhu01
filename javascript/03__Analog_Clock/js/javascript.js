const hour=document.querySelector('.hrs');
const minute=document.querySelector('.mins');
const seconds=document.querySelector('.secs');
setInterval(runClock,1000);
function runClock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    seconds.style.setProperty('--rotation',sec*360);
}