if(window.location.pathname.endsWith = ("index.html")){
    function start(){
    const commencer = document.getElementById("commencer");
    commencer.addEventListener('click' , () => {
    window.location.href = 'question1.html'; 
    })
}
    
      
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
        "L'élément dont l'id est intro et qui est contenu dans un élément < strong > ",
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

let counter = 0;

  const titlee = document.getElementById("question-title");
  const questionn = document.getElementById("question-text");
  const ans1 = document.getElementById("answer1");
  const ans2 = document.getElementById("answer2");
  const ans3 = document.getElementById("answer3");
  const ans4 = document.getElementById("answer4");



const next = document.getElementById("suivant");
const prev = document.getElementById("precedent");

next.innerText = "Suivant";
prev.innerText = "Precedent";

    function renderquestion(){
    titlee.innerText = titles[counter];
    questionn.innerText = questions[counter];
    ans1.innerText = answers[counter][0];
    ans2.innerText = answers[counter][1];
    ans3.innerText = answers[counter][2];
    ans4.innerText = answers[counter][3]; 
    }
    renderquestion();

  next.addEventListener('click', () => {
    if (counter < titles.length) {
        counter ++;
        renderquestion();
    }
  });
  prev.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        renderquestion();
    }
  })

