window.onload = trivia
//this is how i get the api for the trivia game, I use the example as making the interactive map
async function trivia(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    console.log(response)
    let data = await response.json();
   return data

}

function shuffleAnswers(arr) {
    console.log(arr);
    for( let i = arr.lenght - 1; i>0; i++) {
    let s= Math.floor(Math.random() * (i+1));
    [arr[i], arr[s]] = [arr[s], arr[i]];
    console.log(i)
    console.log(s)
    console.log(arr)
    }}

trivia().then((data) => {
     
     const results = data.results[0];
     console.log(results)
    document.getElementById('question').innerHTML = results.question;
    document.getElementById('category').innerHTML = results.category;

    let answers = [...results.incorrect_answers, results.correct_answers]
  shuffleAnswers(answers)
    
    
    
    
 } );