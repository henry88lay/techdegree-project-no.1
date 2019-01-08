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
      color: "#0000FF"
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
      color: "#f08080"
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
      color: "#008000"
    }
  },
    {
    quote: "Some of the most successful innovators in the world quit university to pursue their innovative dreams on their own after being frustrated by the academic institutions,",
    source: "Jack Ma",
    tags: ["Business"],
    colors: {
      background: "#FF69B4",
      color: "#FFFF00"
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
      color: "#C0C0C0"
    }
  }
];

let randomNumber =-1;
const TIMEOUT_PERIOD = 15000;
// this will change the quote every 15 seconds.
var timer = setInterval(printQuote, TIMEOUT_PERIOD);

// This function generations a random quote within the quotes array up top//
function getRandomQuote() {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
}

// This function prints out the information on quotes to the HTML file//
function printQuote() {
  clearInterval{timer};
  let result = getRandomQuote();
  let message = "<p class='quote'>" + result.quote + "</p>" + 
                "<p class='source'>" + result.source + 
                "<span class='citation'>" + result.citation + "</span>" +
                "<span class='year'>" + result.year + "</span>" + "</p>" ;
  document.getElementById('quote-box').innerHTML = message;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

