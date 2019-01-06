/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


var quotes = [
  {
    quote: "Help young people, Help small guys. Becayse small guys will be big. Young people will have the seeds you bury in their minds, and when they grow up, the will change the world.",
    source: "Jack Ma",
    year: "",
    citation: "",
  },
    {
    quote: "If you don't give up, you still have a chance. Giving up is the greatest failure",
    source: "Jack Ma",
    year: "",
    citation: "",
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
  },
];


function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}

function printQuote(message) {
  var result = getRandomQuote(quotes);
  var message = "<p class='quote'>" + result.quote + "</p>" + 
                "<p class='source'>" + result.source + "</p>" + 
                "<span class='citation'>" + result.citation + "</span>" +
                "<span class='year'>" + result.year + "</span>";
  document.getElementById('quote-box').innerHTML = message;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

