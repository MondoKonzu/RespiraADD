const cards = document.querySelectorAll(".modalStart");
let body = null;
//crea il modal
function createModal(){
    for(let i=0; i<info.length; i++){
        cards[i].setAttribute("data-bs-toggle", "modal");
        cards[i].setAttribute("data-bs-target", ("#modal" + i));
        cards[i].after(createDivModal(i));
    }
}

//ogni funzione al suo interno richama quelle necessarie alla creazione
//degli elementi che contiene, passando sempre la posizione dell'array esterno
//da accedere per reperire le info

//crea il primo div del modal
function createDivModal(idNum){
    let div = document.createElement("div");
    div.classList.add("modal", "fade")
    div.setAttribute("id" , ("modal" + idNum));
    div.setAttribute("tabindex" , "-1");
    div.setAttribute("aria-hidden" , "true");
    div.appendChild(createDialog(idNum));
    return div;
}

//crea il div dialog (su cui si lavora per larghezza ed altri)
function createDialog(pos){
    let div = document.createElement("div"); 
    div.classList.add("modal-dialog");
    div.appendChild(createContainer(pos))
    return div;
}

//div contenente header e body
function createContainer(pos){
    let div = document.createElement("div");
    div.classList.add("modal-content");
    //crea ed aggiunge header
    div.append(createHeader(pos));
    //crea ed aggiunge il body
    div.append(createBody(pos));
    //crea il footer del modal
    div.append(createFooter());
    return div;
}

//header
function createHeader(pos){
    let header = document.createElement("div");
    header.classList.add("modal-header");
    let title = document.createElement("h1");
    title.classList.add("modal-title", "fs-1", "text-primary-res");
    title.innerHTML = info[pos].nome;
    header.append(title);
    header.append(createExit());
    return header;
}

//bottone di chiusura
function createExit(){
    let btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("btn-close");
    btn.setAttribute("data-bs-dismiss", "modal");
    btn.setAttribute("aria-label", "Close");
    return btn;
}

//crea il body del modal
function createBody(pos){
    body = document.createElement("div");
    body.classList.add("modal-body");
    let text = document.createElement("p");
    text.innerHTML = info[pos].descrizione;
    body.append(text);
    return body;    
}

//crea il footer
function createFooter(){
    let div = document.createElement("div");
    div.classList.add("modal-footer");
    let btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.innerHTML = "Chiudi"
    div.append(btnClose);
    return div; 
}

addEventListener("DOMContentLoaded" , createModal);