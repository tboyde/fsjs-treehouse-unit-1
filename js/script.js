/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    "quote": "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    "source": "Richard Bach"
  }, 
{
    "quote": "I will just create, and if it works, it works, and if it doesn't, I'll create something else. I don't have any limitations on what I think I could do or be.",
    "source": "Oprah Winfrey",
    "citation": "'Oprah Winfrey speaks: insight from the world's most influential voice' by John Wiley & Sons",
    "year": "1998"
  }, 
{
    "quote": "A truly creative person rids him or herself of all self-imposed limitations.",
    "source": "Gerald Jampolsky"
  }, 
{
    "quote": "In life... we need to find a balance. You have to set rules and limitations - that is called discipline. And you have to practice that in all your worlds.",
    "source": "Cesar Millan",
    "citation": "Facebook",
    "year": "2004"
  }, 
{
    "quote": "The friend in my adversity I shall always cherish most. I can better trust those who helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity.",
    "source": "Ulysses S. Grant"
  }, 
{
    "quote": "Education is an ornament in prosperity and a refuge in adversity.",
    "source": "Aristotle"
  }, 
{
    "quote": "Life is one big road with lots of signs. So when you riding through the ruts, don't complicate your mind. Flee from hate, mischief and jealousy. Don't bury your thoughts, put your vision to reality. Wake Up and Live!",
    "source": "Bob Marley"
},
  {
    "quote": "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.",
    "source": "Vincent Van Gogh"
  }, 
{
    "quote": "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    "source": "St. Francis of Assisi"
  }, 
{
    "quote": "The thing to do, it seems to me, is to prepare yourself so you can be a rainbow in somebody else's cloud. Somebody who may not look like you. May not call God the same name you call God - if they call God at all. I may not dance your dances or speak your language. But be a blessing to somebody. That's what I think.", 
    "source": " Maya Angelou", 
    "citation": "Oprah's Master Class"
}

];
// console.log(quotes.length); 

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  const randomValue = Math.floor( Math.random() * (quotes.length-1)); 
  return quotes[randomValue]; 
}; 

/***
 * `printQuote` function
***/

function printQuote(){
  let selectedQuote = getRandomQuote(); 
  let displayHTML = 
  `<p class="quote">${selectedQuote["quote"]}</p><p class="source">${selectedQuote["source"]}`
    
    if (selectedQuote["citation"]){
      displayHTML += `<span class="citation">${selectedQuote["citation"]}</span>`  
    } else if (selectedQuote["year"]) {
      displayHTML += `<span class="year">${selectedQuote["year"]}</span>`
    } else {
      displayHTML += `</p>`
    };
  document.getElementById('quote-box').innerHTML = displayHTML; 
}; 


function genRandomColor () {
  return Math.floor(Math.random()* 256); 
}; 

function newBG(){
  const red = genRandomColor(); 
  const green = genRandomColor(); 
  const blue = genRandomColor(); 

  const colorValue = `rgb(${red}, ${green}, ${blue})`; 
  document.body.style.backgroundColor = colorValue; 
}

document.getElementById('load-quote').addEventListener("click", newBG); 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);