/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,ActivePlayer


function initial()
{
    scores=[0,0]
    ActivePlayer=0
    roundScore=0


    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent='0'
    document.getElementById('score-1').textContent='0'
    document.getElementById('current-0').textContent='0'
    document.getElementById('current-1').textContent='0'

    document.getElementById('name-0').textContent='Player 1'
    document.getElementById('name-1').textContent='Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

    document.querySelector('.btn-roll').style.display='block'
    document.querySelector('.btn-hold').style.display='block'


}


initial()



//document.querySelector('#current-'+ActivePlayer).textContent = dice 

//document.querySelector('#current-'+ActivePlayer).innerHTML='<em>' + dice + '</em>'

//var x= document.querySelector('#score-0').textContent




//Changing player function
function chpl()
{


    ActivePlayer === 0 ? ActivePlayer = 1 : ActivePlayer = 0
        roundScore = 0


        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')


}
function botp()
{
    //Random Number
    var dice=Math.floor((Math.random(0,1)*6)+1)

    //Displaying result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src='dice-'+ dice +'.png'

    //Updating score
    if (dice !== 1)
    {
        roundScore = roundScore + dice
        document.querySelector('#current-'+ActivePlayer).textContent = roundScore
    }
    else
    {
        
        chpl()        
    }
    


}

function both()
{
    //Adding score in global
    scores[ActivePlayer] += roundScore

    document.querySelector('#score-'+ActivePlayer).textContent = scores[ActivePlayer]

    

    //Checking Winner
    if (scores[ActivePlayer]>=100)
    {
        
        
        document.querySelector('#name-'+ActivePlayer).textContent='Winner!!'
        document.querySelector('.dice').style.display='none'
        document.querySelector('.btn-roll').style.display='none'
        document.querySelector('.btn-hold').style.display='none'
        document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active')


    }
    else
    {
        chpl()
    }

    

}






document.querySelector('.btn-hold').addEventListener('click',both)
document.querySelector('.btn-roll').addEventListener('click',botp)
document.querySelector('.btn-new').addEventListener('click',initial)