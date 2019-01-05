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
    citation: "" 
  },
    {
    quote: "If you don't give up, you still have a chance. Giving up is the greatest failure",
    source: "Jack Ma",
    year: "",
    citation: "" 
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


function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * quotes.length;
  for (var i = 0; i < array.length; i++)  {
    var randomQuote = array[quoteIndex]; 
  }
  return randomQuote;
}

function printQuote() {
  var readyQuote = document.getElementById('getRandomQuote'); 
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.