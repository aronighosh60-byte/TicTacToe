let btn=document.querySelectorAll(".box");
let r=document.querySelector(".RT");
let st=document.querySelector(".state");
let turnO=true;
const winPattern=[
[0,1,2],
[2,5,8],
[6,7,8],
[0,3,6],
[0,4,8],
[2,4,6],
[1,4,7],
[3,4,5],
];
btn.forEach((box)=>{
box.addEventListener("click", ()=>{
if(turnO)
{box.innerText="O";
 turnO=false;
}
else
{box.innerText="X";
 turnO=true;
}
box.disabled=true;
checkWinner();
});
});
r.addEventListener("click",()=>{
btn.forEach((box)=>{
box.disabled=false;
box.innerText="";
});
});
const checkWinner=()=>{
for(let pattern of WinPattern)
{
if(btn[pattern[0]].innerText==btn[pattern[1]].innerText && btn[pattern[1]].innerText==btn[pattern[2]].innerText && btn[pattern[0]].innerText!="")
{if(btn[pattern[0]].innerText=="O")
  st.innerText="Player1 Wins";
 else
  st.innerText="Player2 Wins";
btn.forEach((box)=>{
box.disabled=true;
});
}
}
}
