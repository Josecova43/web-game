window.onload = trivia
//this is how i get the api for the trivia game, I use the example as making the interactive map
async function trivia(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    console.log(response)
    let data = await response.json();
   return data

}

function shuffleArray(arr) {
    
    for( let i = arr.lenght - 1; i >= 0; i--) {
    const s= Math.floor(Math.random() * (i+1));
    [arr[i], arr[s]] = [arr[s], arr[i]];
     
  }}

trivia().then((data) => {
     
     const results = data.results[0];
     console.log(results)
    document.getElementById('question').innerHTML = results.question;
    document.getElementById('category').innerHTML = results.category;

    const answers = [...results.incorrect_answers, results.correct_answers]
  
  
    shuffleArray(answers);
    for (let i = 0; i < 4; i++) {
      let index = i + 1;
      document.getElementById(`choice${index}label`).innerHTML = answers[i];
      document.getElementById(`choice${index}`).value = answers[i];
        
    }
    document.getElementById('display').style.display =''

   document.getElementById('submit').addEventListener('click', () => {
    document.querySelectorAll('input[name="choice"]').forEach((el) => {
       const result  = document.getElementById('result');
       if (el.checked){
        console.log(el.value);
        console.log(result.correct_answers);
         if (el.value === result.correct_answers){
          result.innerHTML = "Correct!";

         } else result.innerHTML= `Sorry, the Correct Answer is ${results.correct_answers}`
       }
    })
   }
   )
    document.getElementById('next').addEventListener('click', () =>{
      location.reload();
    })
    
 } );