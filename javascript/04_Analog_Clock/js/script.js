const hours=document.querySelector('.hrs');
const mins=document.querySelector('.mins');
const secs=document.querySelector('.secs');
setInterval(ruClock,1000);
function ruClock(){
    const time=new Date();
    const sec=(time.getSeconds())/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    hours.style.setProperty('--rotation',hrs*360);
    mins.style.setProperty('--rotation',min*360);
    secs.style.setProperty('--rotation',sec*360);
}