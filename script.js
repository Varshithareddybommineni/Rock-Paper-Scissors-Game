let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const underScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>
{
 const opt=["rock","paper","scissors"];
 const r= Math.floor(Math.random()*3);
 return opt[r];
}
const showwinner=(userwin,userChoice,comChoice)=>
{
    if(userwin){
        console.log("user won");
        msg.innerText="YOU WON";
        msg.style.backgroundColor="green";
        userScore++;
        underScorePara.innerText=userScore;
    }
    else{
        console.log("comp won");
        msg.innerText="COMP WON";
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}
const drawGame=()=>
{
   console.log("draw game");
   msg.innerText="DRAW GAME";
   msg.style.backgroundColor="black";
   msg.style.color="white";
}
const playGame=(userChoice)=>
{
  const comChoice=genCompChoice();
  if (userChoice===comChoice)
  {
   drawGame();
  }
  else{
    let userwin=true;
    if(userChoice==="rock")
    {
        userwin=comChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
        userwin=comChoice==="scissors" ? false:true;
    }
    else{
        userwin=comChoice==="rock" ? false:true;
    }
    showwinner(userwin,userChoice,comChoice);

  }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});