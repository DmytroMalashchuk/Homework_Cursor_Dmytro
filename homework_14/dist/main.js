(()=>{"use strict";console.log(Math.max(15.678,123.965,90.2345)),console.log(((t,e,s,l)=>{for(let t=1;t<=9;t++)t%2!=1||(l+=t);return l})(0,0,0,0)),console.log(((t,e)=>{let s=0;s=8;for(let t=0;t<3;t++)s*=8;return s})()),console.log(((t,e)=>{const s=[],l=[],r=[];for(let r=0;r<t.length;r++)e.includes(t[r])?s.push(t[r]):l.push(t[r]);for(let t=0;t<e.length;t++)r[t]=[l[t],s[t]];return r})(["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],["Олена","Іра","Світлана"])),console.log(((...t)=>{const e=[6,2,55,11,78,2,55,77,57,87,23,2,56,3,2].filter((t=>Number.isInteger(t)));return e.reduce(((t,e)=>t+e))/e.length})()),console.log((t=>{const e="test".toLowerCase().split("");let s={};for(let t of e)s.hasOwnProperty(t)?s[t]+=1:s[t]=1;return s})()),console.log(function(){return parseFloat(this.tax*this.middleSalary).toFixed(2)}.call({tax:.25,middleSalary:1586,vacancies:3921})),new class{constructor(t,e,s){this.university=t,this.course=e,this.fullName=s,this.marks=[5,4,4,5],this.dismissFlag=!1}getInfo(){console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`)}get getMarks(){return this.dismissFlag?null:this.marks}set setMarks(t){this.dismissFlag||this.marks.push(t)}getAverageMark(){return this.marks.reduce(((t,e)=>t+e))/this.marks.length}dismiss(){this.dismissFlag=!0}recover(){this.dismissFlag=!1}}("NURE",3,"Dmytro Malashchuk").getInfo(),setInterval((()=>(()=>{const t=document.createElement("div");t.style.width="250px",t.style.display="inline-flex",t.style.flexWrap="wrap",t.innerHTML="";for(let e=0;e<25;e++){const e=document.createElement("div");e.style.height=e.style.width="50px",e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.append(e)}})()),1e3),async function(t){let e="";for(let t=0;t<=4;t++){const t=()=>new Promise((t=>{setTimeout((()=>t(String.fromCharCode(String(Date.now()).slice(-5)))),50)}));e+=await t()}return e}().then((t=>console.log(t)))})();