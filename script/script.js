//primi usi observer
const texts = document.querySelectorAll(".myObsR, .myObsL, .myObsB");
const vid = document.getElementById('my-video');
const textToHide = document.querySelector("#textToHide");
//i due dati devono essere obbligatori
//observer serve per eseguire azioni di obs 
//ma non deve essere passato
function actionPerformed(entry, observer){
    if(entry[0].isIntersecting == true){
        entry[0].target.classList.add("fade-in");
        observer.unobserve(entry[0].target)
    }
}


addEventListener("DOMContentLoaded", () => {
    if(vid != null) vid.playbackRate = 0.1;
    //crea ed assegna un obs a ogni elemento di texts
    //la creazione di più obs è necessaria per eseguire
    //l'azione anche per 2 elem in contemporanea
    for(let t of texts){
        let o = new IntersectionObserver(actionPerformed);
        o.observe(t);
    }
})
