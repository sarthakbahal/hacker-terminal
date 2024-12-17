let words = []
let wcnt = 0;

async function loadfile() {
    try{
        let res = await fetch("input.txt");
        let text = await res.text();
        words = text.split(/\s+/);
    } catch(error){
        console.error("Error loading the script : Terminal Failed ", error);
        
    }
    
}

function displayfile() {
    if(wcnt < words.length){
        let outp = document.getElementById("Icode");
        outp.textContent += " "+ words[wcnt];
        wcnt++;

    } else {
        alert("SCRIPT HAS REACHED MAXIMUM USE !!!")
    }
}

document.addEventListener('keydown',displayfile);

window.onload = loadfile;