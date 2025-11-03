if(window.location.pathname.endsWith("index.html")){

    const commencer = document.getElementById("commencer");
    commencer.addEventListener('click' , () => {
    window.location.href = 'question.html'; 
    })

}
    
      
      
    
    else{
        console.log('hello')
    }
    
 

let page1, page2, page3, page4, page5, title, question, answer, answer1, answer2, answer3;
const titles = ["QUESTION 1", "QUESTION 2", "QUESTION 3", "QUESTION 4", "QUESTION 5"]
const questions = [
    "que signifie css ?",
    "quoi sert le langage CSS ?",
    "Dans la règle suivante, quel élément deviendra rouge ? strong#intro {background-color: red;}",
    "Où est-il conseillé de placer le code CSS ?",
    "Quel élément sépare la propriété de sa valeur ?",
]
const answers = [
    [
        "Cascading Style Sheets",
        "Create Simple Samples",
        "C'est Super Simple !",
        "Choucroute et Saucisses de Strasbourg",
    ],
    [
        "À réaliser des pages dynamiques",
        "À ajouter du style aux documents web",
        "À insérer du contenu dans une page internet!",
        "À simuler une application en mode avion durant les trajets dans un bus"
    ] ,  
    [
        "L'élément dont l'id est intro et qui est contenu dans un élément < strong >",
        "L'élément < strong > dont l'id est intro",
        "Tous les éléments < strong > contenus dans un élément dont l'id est intro",
        "Tous les éléments < strong > et les éléments dont l'id est intro"
    ] ,

    [
        "Dans le < body >, c'te question",
        "Entre les balises < head >, c'est bien plus propre",
        "Dans un fichier externe utilisable pour plusieurs pages",
        "Dans un fichier JavaScript"
    ], 
    [
        "Le signe espace ( )",
        "Entre les balises Le signe égal (=) < head >, c'est bien plus propre",
        "Le signe point-virgule (;)",
        "Un signe impossible à distinguer"
    ]  
];
const correctanswers = [
    "Cascading Style Sheets",
    "À ajouter du style aux documents web",
    answers[2][0],
    "Dans un fichier externe utilisable pour plusieurs pages",
    answers[4][0]
];

let counter = 0;
let Answered;
let score = 0;
let userAnswers = new Array(5)
  const titlee = document.getElementById("question-title");
  const questionn = document.getElementById("question-text");
  const ans1 = document.getElementById("answer1");
  const ans2 = document.getElementById("answer2");
  const ans3 = document.getElementById("answer3");
  const ans4 = document.getElementById("answer4");



const next = document.getElementById("suivant");
const prev = document.getElementById("precedent");

if (window.location.pathname.endsWith('question.html')){
next.innerText = "Suivant";
prev.innerText = "Precedent";

    function renderquestion(){
    ans1.style.backgroundColor = '#FFFFFF';
    ans2.style.backgroundColor = '#FFFFFF';
    ans3.style.backgroundColor = '#FFFFFF';
    ans4.style.backgroundColor = '#FFFFFF';
    titlee.innerText = titles[counter];
    questionn.innerText = questions[counter];
    ans1.innerText = answers[counter][0];
    ans2.innerText = answers[counter][1];
    ans3.innerText = answers[counter][2];
    ans4.innerText = answers[counter][3]; 
    prev.style.display = counter === 0 ? 'none' : 'block';
    next.innerText = counter === titles.length - 1 ? 'Terminer' : 'Suivant';
    }
    renderquestion();
  next.addEventListener('click', () => {
        if (Answered) {
            if (counter === titles.length - 1) {
                showFinalScore();
            } else {
                counter++;
                Answered = false;
                renderquestion();
                next.style.opacity = '0.5';
                next.style.cursor = 'not-allowed';
            }
        }
  });
  prev.addEventListener('click', () => {
        counter--;
        renderquestion();
    
  })
}

    next.style.opacity = '0.5';
    next.style.cursor = 'not-allowed';

    function showFinalScore() {
        titlee.style.display = 'none';
        questionn.style.display = 'none';
        [ans1, ans2, ans3, ans4].forEach(ans => ans.style.display = 'none');
        next.style.display = 'none';
        prev.style.display = 'none';

        const scorediv = document.createElement('div');
        scorediv.style.textAlign = 'center';
        scorediv.style.lineHeight = '5rem'
        scorediv.style.alignItems = 'center'
        scorediv.style.color = 'white';
        scorediv.style.fontSize = '2rem';
        scorediv.innerHTML = `
            <h1>Quiz Terminé!</h1>
            <p>Votre score: ${score}/${titles.length}</p>
            <p>Réponses correctes: ${score}</p>
            <p>Réponses incorrectes: ${titles.length - score}</p>
        `;
        document.querySelector('.question').appendChild(scorediv);
    }

    for(let i = 1; i <= 4; i++){
        const answerBtn = document.getElementById(`answer${i}`);
        answerBtn.addEventListener('click', () => {
            if(!Answered) { 
                if(answerBtn.innerText === correctanswers[counter]) {
                    answerBtn.style.backgroundColor = 'green';
                    score++; 
                } else {
                    answerBtn.style.backgroundColor = 'red';
                    [ans1, ans2, ans3, ans4].find(ans => 
                        ans.innerText === correctanswers[counter]
                    ).style.backgroundColor = 'green';
                }
                
                userAnswers[counter] = answerBtn.innerText;
                Answered = true;
                next.style.opacity = '1';
                next.style.cursor = 'pointer';
            }
        });
    }