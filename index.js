const form = document.querySelector('.form-quizz');
let tabResultats = [];
const reponses = ['b', 'a', 'a', 'a', 'b']
const emojis = ['🤩', '✨', '🙄', '😭', '👎🏾'];
const titreResultat = document.querySelector('.resultats h2');
const textResultat = document.querySelector('.resultats .note');
const aideResultat = document.querySelector('.resultats .aide');
const lesquestions = document.querySelectorAll('.question-block');
let verifTableau = []; //tableau de true ou false


form.addEventListener('submit', (e)=> {
  e.preventDefault();

  console.log(document.querySelector('input[name="q1"]:checked').value);

  for (let index = 1; index < 6; index++) {
    tabResultats.push(document.querySelector(`input[name="q${index}"]:checked`).value)
  }

  verifFunc(tabResultats);
  tabResultats = []
})

function verifFunc(tabResults) {

  for (let index = 0; index < 5; index++) {

    if(tabResults[index] === reponses[index]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }

    console.log(verifTableau);
    verifTableau = [];
  }
}