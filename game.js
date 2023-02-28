
window.onload = trivia
//this is how i get the api for the trivia game, I use the example as making the interactive map
async function trivia(){
    let response = await fetch(' https://opentdb.com/api.php?amount=10&type=multiple')
    let data = await response.json();
   return data;

}


// this function is to shuffle my answers 
function shuffleArray(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
    const s = Math.floor(Math.random() * (i+1));
    [arr[i], arr[s]] = [arr[s], arr[i]];

   

  }   
  }
//below, to get the questions and category from the api server, and putting in the user browser
trivia().then((data) => {
     
     const results = data.results[0];
     console.log(results)
    document.getElementById('question').innerHTML = results.question;
    document.getElementById('category').innerHTML = results.category;

    const answers = [...results.incorrect_answers, results.correct_answer];
   shuffleArray(answers);  





  //below to everytime the page reload, the answers will shuffled 
    shuffleArray(answers);
    for (let i = 0; i < 4; i++) {
      let index = i + 1;
      document.getElementById(`choice${index}label`).innerHTML = answers[i];
      document.getElementById(`choice${index}`).value = answers[i];
        
    }


    
   document.getElementById('submit').addEventListener('click', () => {
    document.querySelectorAll('input[name="choice"]').forEach((el) => {
       const result  = document.getElementById('result');
       if (el.checked){
        console.log(el.value);
        console.log(results.correct_answer);

       // boolean to check is the answers are tru or false
         if (el.value === results.correct_answer){
          result.innerHTML = "Correct! :)";

         } else result.innerHTML= `Sorry :(, the Correct Answer is ${results.correct_answer}`
       }
    })
   }
   )
    document.getElementById('next').addEventListener('click', () =>{  // event listener for evrytime the user click next the page will reload woth the next question
      location.reload();
    })
    
 } );