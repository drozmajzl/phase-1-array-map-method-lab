const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const blah = tutorials.map(function(title){ 
     const singleTitle = title.split(" ");
     //Titles have been broken into arrays at this point
     const singleWord = singleTitle.map(word => {
     return word.charAt(0).toUpperCase() + word.substring(1);
   });
   //Arrays have been capitalized at this point
     const casedTitle = singleWord.join(" ");
     return casedTitle;
   })
   tutorials.splice(0, tutorials.length, ...blah)
   return tutorials;
 }
 
