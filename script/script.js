//primi usi observer
let texts = document.querySelectorAll(".myObsR, .myObsL");
const spotLi = document.getElementsByClassName("spots");
//i due dati devono essere obbligatori
//observer serve per eseguire azioni di obs 
//ma non deve essere passato
function actionPerformed(entry, observer){
    if(entry[0].isIntersecting == true){
        entry[0].target.classList.add("fade-in");
        observer.unobserve(entry[0].target)
    }
}

//crea le frecce
function createArrow(){
    let i = document.createElement("i");
    i.classList.add("bi", "bi-arrow-right");
    return i;
}

//aggiunge le frecce
function addArrow(){
    for(let i=0; i<spotLi.length; i++){
        let tmp = spotLi[i].children;
    for(let x=0; x < tmp.length; x++){
        if(tmp[x].tagName.toLowerCase() == "li"){
            tmp[x].appendChild(createArrow());
        }
        
    }
}
}

addEventListener("DOMContentLoaded", () => {
    //crea ed assegna un obs a ogni elemento di texts
    //la creazione di più obs è necessaria per eseguire
    //l'azione anche per 2 elem in contemporanea
    for(let t of texts){
        let o = new IntersectionObserver(actionPerformed);
        o.observe(t);
    }
    addArrow();
})