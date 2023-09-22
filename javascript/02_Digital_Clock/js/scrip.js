function timeOut(){
let time=new Date();
let hrs=time.getHours();
let mins=time.getMinutes();
let secs=time.getSeconds();
let txt="AM";
if(hrs>12){
    hrs=hrs-12;
    txt="PM";
}
else if(hrs==0)
{
    hrs=12;
    txt="AM";
}
hrs=hrs<10?'0'+hrs:hrs;
mins=mins<10?'0'+mins:mins;
secs=secs<10?'0'+secs:secs;
let clock=document.querySelector(".clock").innerHTML=(`${hrs} : ${mins} : ${secs} ${txt}`);
}

setInterval(timeOut,1000);