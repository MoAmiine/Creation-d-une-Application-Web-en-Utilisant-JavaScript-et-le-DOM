
function page1() {
    const commencer = document.getElementById("commencer")

    commencer.addEventListener("click", () => {

        window.location.href = "./question1.html";


    })
}


function page2() {
    const question1 = document.getElementById("suivant1");

    question1.addEventListener("click", () => {
        window.location.href = "./question2.html";
    })
}


    

function page3() {
    const question2 = document.getElementById("suivant2");
    question2.addEventListener("click" , () => {
        window.location.href = "./question3.html"
    })
}

function page4() {
    const question3 = document.getElementById("suivant3");
    question3.addEventListener("click" , () => {
        window.location.href = "./question4.html"
    })
}
function page5() {
    const question4 = document.getElementById("suivant4");
    question4.addEventListener("click" , () => {
        window.location.href = "./question5.html"
    })
}

if (window.location.pathname.endsWith("index.html")) {
    page1();
}
if (window.location.pathname.endsWith("question1.html")) {
    page2();
}
if(window.location.pathname.endsWith("question2.html")) {
    page3();
}
if(window.location.pathname.endsWith("question3.html")){
    page4();
}
if(window.location.pathname.endsWith("question4.html")){
    page5();
}
else{
    console.log("hello");

}




