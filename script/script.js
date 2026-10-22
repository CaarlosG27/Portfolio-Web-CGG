const words = ["Multiplataforma.", "con Java y Kotlin.", "Backend con PHP.", "Web con HTML, CSS y JS."];
let i = 0;

function typingEffect() {
    let word = words[i].split("");
    
    function loopTyping() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
            setTimeout(loopTyping, 100); 
        } else {
            setTimeout(deletingEffect, 2000); 
        }
    }
    
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    
    function loopDeleting() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
            setTimeout(loopDeleting, 50); 
        } else {
            i = (i + 1) % words.length;
            setTimeout(typingEffect, 500); 
        }
    }
    
    loopDeleting();
}

typingEffect();