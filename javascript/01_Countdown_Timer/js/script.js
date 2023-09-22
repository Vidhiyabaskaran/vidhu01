function findYear(){
const currentYear=new Date().getFullYear();
console.log(currentYear);
const newYear=new Date(`janaury 1 ${currentYear+1} 00:00:00`);
console.log(newYear);
const duringYear=new Date();
console.log(duringYear);
const getYear=newYear-duringYear;
console.log(getYear);
const d=Math.floor((getYear/1000/60/60/24));
// console.log(Math.floor(d));
const h=Math.floor(((getYear/1000/60/60)%24));
// console.log(Math.floor(h));
const m=Math.floor(((getYear/1000/60)%60));
// console.log(Math.floor(m));
const s=Math.floor(((getYear/1000)%60));
// console.log(Math.floor(s));
//  days.innerHTML=d;
//   hours.innerHTML=h;

//  minutes.innerHTML=m;
//  seconds.innerHTML=s;
 
const days=document.querySelector('#days').innerHTML=d<10?"0"+d:d;
const hours=document.querySelector('#hours').innerHTML=h<10?"0"+h:h;

const minutes=document.querySelector('#Minutes').innerHTML=m<10?"0"+m:m;
const seconds=document.querySelector('#Seconds').innerHTML=s<10?"0"+s:s;
}

setInterval(findYear,1000);