let menu = document.querySelector(".mobile-menu");
let sidebar = document.querySelector(".sidebar");

/* This function is used to add the able classe */
function addClasse(event){

    if( event.type === 'touchstart') event.preventDefault();

    sidebar.classList.add("able");

}

/* This function is used no remove de able classe */

function removeClasse(event){

    if( event.type === 'touchstart') event.preventDefault();

    sidebar.classList.remove("able");

}

menu.addEventListener("click", addClasse);
menu.addEventListener("touchstart", addClasse);

let menuClose = document.querySelector(".mobile-menu--close");

menuClose.addEventListener("click", removeClasse);
menuClose.addEventListener("touchstart", removeClasse);
