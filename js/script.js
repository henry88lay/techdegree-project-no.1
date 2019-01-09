/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// This array contains the data for the quotes including, source, year, and citation//
let quotes = [
  {
    quote: "No matter how smart you are, you will encounter mistakes,",
    source: "Jack Ma"
  },
    {
    quote: "If you want your company to be successful, if you want your company to operate with wisdom, with care, then women are the best.",
    source: "Jack Ma",
    year: "2018",
    citation: "World Economic Forum", 
    tags: ["Business"],
    colors: {
      background: "#EE82EE",
      color1: "#F0E68C"
    }
  },
    {
    quote: "Stay Hungry.Stay Foolish",
    source: "Steve Jobs",
    year: "2005",
    citation: "Stanford Commencement Speech", 
    tags: ["innovation"],
    colors: {
      background: "#FA8072",
      color1: "#000"
    }
  },
    {
    quote: "You've got to find what you love",
    source: "Steve Jobs",
    year: "2005",
    citation: "Stanford Commencement Speech", 
    tags: ["personal development"],
      colors: {
      background: "#FFD700",
      color1: "#008000"
    }
  },
    {
    quote: "Some of the most successful innovators in the world quit university to pursue their innovative dreams on their own after being frustrated by the academic institutions,",
    source: "Jack Ma",
    tags: ["Business"],
    colors: {
      background: "#FF69B4",
      color1: "#FFFF00"
    }
  },
    {
    quote: "Most people don't do what they really want to do. They do what someone else wants them to do.",
    source: "Dan Lok",
    year: "2009",
    citation: "F.U. Money", 
    theme: ["business"],
    colors: {
      background: "#4169E1",
      color: "#ffbf00"
    }
  }
];

let randomNumber =-1;
const TIMEOUT_PERIOD = 15000;
// this will change the quote every 15 seconds.
var timer = setInterval(printQuote, TIMEOUT_PERIOD);

// This function generations a random quote within the quotes array up top
function getRandomQuote() {
  let randomNumberNew;
  do{
    randomNumberNew = Math.floor(Math.random() * quotes.length); 
  }while(randomNumberNew===randomNumber);
  randomNumber = randomNumberNew; 
  return quotes[randomNumber];
}

// This function prints out the information on quotes to the HTML file
function printQuote() {
  clearInterval(timer);
  let result = getRandomQuote();

  let message = `
        ${getCategory(result)}
        <p class="quote">“${result.quote}”</p>
        <p class="source">${result.source}
          ${getCitation(result)}
          ${getYear(result)}
        </p>
        `;

  let quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = message;
  console.log(result.quote);

  //set background and text color
  let body = document.querySelector('body');
  body.style.color = result.colors.color1;
  body.style.backgroundColor = result.colors.background;

  let button = document.getElementById('loadQuote');
  button.style.backgroundColor = result.colors.color;
  button.style.color = result.colors.background;

  //listener functions for hover effect
  button.addEventListener('mouseover',function(){
    button.style.color = result.colors.color;
    button.style.backgroundColor = result.colors.background;
  });
  button.addEventListener('mouseleave',function(){
    button.style.backgroundColor = result.colors.color;
    button.style.color = result.colors.background;
  });

  //start the timer again
  timer = setInterval(printQuote, TIMEOUT_PERIOD);

}

//applying the DRY principle for function printQuote
function getCitation(result) {
  let span = "";
  if(result.citation) {
    span = `<span class="citation">${result.citation}</span>`;
  }
  return span;
}

function getYear(result) {
  let span = "";
  if(result.year) {
    span = `<span class="year">${result.year}</span>`;
  }
  return span;
}

function getCategory(result) {
  let p = "";
  if(result.tag) {
    p = `<p class="category">${result.tags}</p>`;
  }
  return p;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);