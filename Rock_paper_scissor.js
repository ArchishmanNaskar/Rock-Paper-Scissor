let score =JSON.parse(localStorage.getItem('score'))||{
  Wins : 0,
  Loses : 0,
  Ties : 0
};
//At the start of the game nowhere the defination of the 'score' will befound in local
//storage. As at first the value of properties in object score is assigned and then it
//is updated in local storage .So when we start to play the game for the first time 
//nothing name 'score' will be found in the local storage and to intialize score it will
//try find 'score' in local storage which will return null; And code will give error
//so if the code returns nuul here score in assigened to it's defination value
//that's why it is written like that. 
localStorage.setItem('score',JSON.stringify(score));
function palyRock(){
  const playerMove='Rock';
  const computerMove=pickComputerMove();
  palyGame(playerMove,computerMove);
}
function palyPaper(){
  const playerMove='Paper';
  const computerMove=pickComputerMove();
  palyGame(playerMove,computerMove);
}
function palyScissor(){
  const playerMove='Scissor';
  const computerMove=pickComputerMove();
  palyGame(playerMove,computerMove);
}
function pickComputerMove(){
  const n=Math.random();
  let computerMove;
  if(n>=0 && n<1/3){computerMove='Rock';}
  else if(n>=1/3 && n<2/3){computerMove='Paper';}
  else {computerMove='Scissor';}
  return computerMove;
}
function palyGame(playerMove,computerMove){
  let result;
  //obtaining the results
  if(playerMove==='Rock'){
    if(computerMove==='Rock'){result='Tie';score.Ties+=1;}
    else if(computerMove==='Paper'){result='Lose';score.Loses+=1;}
    else {result='Win';score.Wins+=1;}
  }
  else if(playerMove==='Paper'){
    if(computerMove==='Rock'){result='Win';score.Wins+=1;}
    else if(computerMove==='Paper'){result='Tie';score.Ties+=1;}
    else {result='Lose';score.Loses+=1;}
  }
  else {
    if(computerMove==='Rock'){result='Lose';score.Loses+=1;}
    else if(computerMove==='Paper'){result='Win';score.Wins+=1;}
    else {result='Tie';score.Ties+=1;}
  }
  //storing the result in the local storage
  localStorage.setItem('score',JSON.stringify(score));
  //stating the result
  if(result==='Tie'){document.querySelector('.js-result').innerHTML=`${result}.`;}
  else{document.querySelector('.js-result').innerHTML=`You ${result}.`;}
  //stating the moves was selected
  document.querySelector('.js-move')
    .innerHTML=`You Picked
<img class="play-icon-img" src="images/${playerMove}-emoji.png">
<img class="play-icon-img" src="images/${computerMove}-emoji.png">
Picked by Computer.`;
  //stating the score
  document.querySelector('.js-score')
    .innerHTML=`Wins : ${score.Wins} , Losses : ${score.Loses} , Ties : ${score.Ties}`;
}
function reset() {
      score.Wins=0;
      score.Loses=0;
      score.Ties=0;
      document.querySelector('.js-result')
        .innerHTML='';
      document.querySelector('.js-move')
          .innerHTML='';
      localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('.js-score')
          .innerHTML=`Wins : ${score.Wins} , Loses : ${score.Loses} , Ties : ${score.Ties}`;
}
let isAutoPlay = true;
let intervalId;
const autoplay = () => {
  if(isAutoPlay){
    //see here setInterval returns an Id which we will use to stop the running 
    //also that's why we should creat the variable intervalId out side as global
    intervalId=setInterval(
      () => {const playerMove=pickComputerMove();
             const computerMove=pickComputerMove();
             palyGame(playerMove,computerMove);
            },800);
    isAutoPlay=false;
    setTimeout(()=>document.querySelector('.auto-play-button').innerHTML='Stop Play',700);
  }
  else {
    clearInterval(intervalId);
    isAutoPlay=true;
    document.querySelector('.auto-play-button').innerHTML='Auto Play';
  }
};
document.querySelector('.auto-play-button').addEventListener('click',autoplay);
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    palyRock();
  } else if (event.key === 'p') {
    palyPaper();
  } else if (event.key === 's') {
    palyScissor();
  
  // Add an if-statement condition to
  // check if 'a' was pressed.
  } else if (event.key === 'a') {
    autoplay();
  }else if (event.key === 'R') {
    caution();
  }
});
function caution(){
  document.querySelector('.alert').
    innerHTML='';
}
function caution(){
  document.querySelector('.alert').
    innerHTML='<p>Are you sure you want to reset the score?</p> <button class="yes">Yes</button> <button class="no">No</button>';
  document.querySelector('.yes').addEventListener('click',()=>{reset();document.querySelector('.alert').innerHTML='';});
  document.querySelector('.no').addEventListener('click',()=>document.querySelector('.alert').innerHTML='');
}

//document.querySelector(".text").classList.add('other-class')
//document.querySelector(".text").classList.remove('other-class')
//document.querySelector(".text").classList.contains('other-class')
//classlist is used to add , remove and check wheather any class is linked with the element we are checking
//here we donot have any need to add (.) before class name 