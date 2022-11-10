    //////////////////////////////////////////////////
    ////////////////// VARIABLES /////////////////////
    //////////////////////////////////////////////////

let touchstartX = 0;
let touchendX = 0;

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PRIVEES //////////////////
    //////////////////////////////////////////////////
    
function checkDirection(key) {
    const elmtVignette = document.getElementById(key);
    const elmtsVignette = document.querySelectorAll("#vignettes-ingredients li");
    if (touchendX < touchstartX) {
        if (!elmtVignette.classList.contains("swiped")) {
            elmtsVignette.forEach(elmt => {
                elmt.classList.remove("swiped");
            })
            elmtVignette.classList.add("swiped");
        }
    }
    if (touchendX > touchstartX) {
        if (elmtVignette.classList.contains("swiped")) {
            elmtVignette.classList.remove("swiped");
        }
    }
}

    //////////////////////////////////////////////////
    ///////////// FONCTIONS PUBLIQUES ////////////////
    //////////////////////////////////////////////////

export function touchStart(e) {
    touchstartX = e.changedTouches[0].screenX
}

export function touchEnd(e,key) {
    touchendX = e.changedTouches[0].screenX
    checkDirection(key)
}