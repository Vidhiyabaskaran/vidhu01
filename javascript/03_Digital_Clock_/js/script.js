const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const span=document.querySelectorAll('.meridian span');
const days_span=document.querySelectorAll('.days span');
const month_span=document.querySelectorAll('.month span');
const date=document.querySelector('.date');

function runClock(){
var time=new Date();
var dat=time.getDate();
dat=dat<10?'0'+dat:dat;
var mon=time.getMonth()+1;
mon=mon<10?'0'+mon:mon;
var yea=time.getFullYear();
date.innerHTML=`${dat}-${mon}-${yea}`;
days_span[time.getDay()].classList.add('day-active');
month_span[time.getMonth()].classList.add('day-active');
var hrs=time.getHours();
hrs=hrs<10?'0'+hrs:hrs;
var min=time.getMinutes();
min=min<10?'0'+min:min;
var sec=time.getSeconds();
sec=sec<10?'0'+sec:sec;
hrs=hrs.toString();
min=min.toString();
sec=sec.toString();
h[0].innerHTML=hrs[0];
h[1].innerHTML=hrs[1];
m[0].innerHTML=min[0];
m[1].innerHTML=min[1];
s[0].innerHTML=sec[0];
s[1].innerHTML=sec[1];
if(hrs>12){
    hrs=hrs-12;
    span[1].classList.add('active');
}
else{
    if(hrs==0){
        hrs=12;
    }
    span[0].classList.add('active');
}

}
setInterval(runClock, 1000);