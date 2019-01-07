/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// This array contains the data for the quotes including, source, year, and citation//
var quotes = [
  {
    quote: "No matter how smart you are, you will encounter mistakes,",
    source: "Jack Ma",
    year: "2018",
    citation: "World Economic Forum" 
  },
    {
    quote: "If you want your company to be successful, if you want your company to operate with wisdom, with care, then women are the best.",
    source: "Jack Ma",
    year: "2018",
    citation: "World Economic Forum" 
  },
    {
    quote: "Stay Hungry.Stay Foolish",
    source: "Steve Jobs",
    year: "2005",
    citation: "Stanford Commencement Speech" 
  },
    {
    quote: "You've got to find what you love",
    source: "Steve Jobs",
    year: "2005",
    citation: "Stanford Commencement Speech" 
  },
    {
    quote: "Some of the most successful innovators in the world quit university to pursue their innovative dreams on their own after being frustrated by the academic institutions,",
    source: "Jack Ma",
    year: "2017",
    citation: "University of Nairobi" 
  },
    {
    quote: "Most people don't do what they really want to do. They do what someone else wants them to do.",
    source: "Dan Lok",
    year: "2009",
    citation: "F.U. Money" 
  }
];

// This function generations a random quote within the quotes array up top.
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}

// This function prints out the information on quotes to the HTML file//
function printQuote() {
  var result = getRandomQuote();
  var message = "<p class='quote'>" + result.quote + "</p>" + 
                "<p class='source'>" + result.source + 
                "<span class='citation'>" + result.citation + "</span>" +
                "<span class='year'>" + result.year + "</span>" + "</p>" ;
  document.getElementById('quote-box').innerHTML = message;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

