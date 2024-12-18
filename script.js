let words = []
let wcnt = 0;

async function loadfile() {
    try {
        let res = await fetch("input.txt");
        let text = await res.text();
        words = text.split(/\s+/);
    } catch (error) {
        console.error("Error loading the script : Terminal Failed ", error);

    }

}

function displayfile() {
    if (wcnt < words.length) {
        let outp = document.getElementById("Icode");
        outp.textContent += " " + words[wcnt];
        wcnt++;

    } else {
        alert("SCRIPT HAS REACHED MAXIMUM USE !!!")
    }
}

document.addEventListener('keydown', displayfile);

window.onload = loadfile;


document.addEventListener("DOMContentLoaded", () => {
   let start = document.getElementById("start");
   let cont = document.getElementById("gifc");
   let gif = document.getElementById("gif");
   const popupOverlay = document.getElementById("popupOverlay");
   const closePopup = document.getElementById("closePopup");
   const popupMessage = document.getElementById("popupMessage");
   let tick = document.getElementById("tick");


   start.addEventListener("click",() => {
    start.style.display = "none";
    cont.style.display = "inline-block";

    setTimeout(() => {
        cont.style.display = "none";
        showpopup();
      }, 5000);
   });

   function showpopup(){
    popupOverlay.style.display = "block";
    if (wcnt == words.length) {
        popupMessage.style.color = "#46f311";
        popupMessage.textContent = " ACCESS GRANTED ";
    } else {
        popupMessage.style.color = "red";
        popupMessage.textContent = " FULL SCRIPT NOT USED - ACCESS DENIED ";
    }


    setTimeout(() => {
        closePopupWindow();
        restat();
      }, 5000);
   }

   function closePopupWindow() {
    popupOverlay.style.display = "none";
    
  }

  function restat() {
    if(wcnt == words.length){
        tick.style.display = "inline-block";
    }else{
        start.style.display = "inline-block";
    }
  }

  closePopup.addEventListener("click", closePopupWindow);
});

