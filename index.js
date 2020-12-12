const form = document.querySelector('.form-quizz');
let tabResults = [];

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  console.log(document.querySelector('input[name="q1"]:checked').value);

  for (let index = 1; index < 6; index++) {
    tabResults.push(document.querySelector(`input[name="q${index}"]:checked`).value)
    console.log(tabResults);
  }
})
console.log(form);