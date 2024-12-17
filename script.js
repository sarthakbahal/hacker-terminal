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
    let bar = document.getElementById("bar");
    let load = document.getElementById("load");
    let stat = document.getElementById("status");

    let outmsg = [
        "[BOOT] Starting system diagnostics...",
        "[INFO] CPU cores: 8 | RAM: 16GB | Disk: 1TB SSD",
        "[BOOT] Loading kernel modules... [OK]",
        "[INIT] Mounting encrypted filesystem... [SUCCESS]",
        "[INFO] Establishing secure environment...",
        "[READY] System ready for operation.",
        "> sudo hack --target 192.168.1.10 --exploit-type buffer_overflow" ,
        "[COMMAND] Initiating target scan...",
        "[INFO] Potential vulnerability found: CVE-2023-XXXX",
        "[COMMAND] Execution complete. Access granted!"
    ];

    start.addEventListener("click",() => {
        stat.innerHTML = "";
        stat.style.width = "0%";
        start.style.display = "none";
        bar.style.display = "block";
    
        setTimeout(() =>{
            load.style.width = "100%";
        },1000);
    
        let delay = 2000;
        outmsg.forEach((message, index) => {
            setTimeout(() => {
               addmsg(message);
    
               if(index === outmsg.length - 1){
                setTimeout(() => {
                    restat(); 
                }, 1000);
               }
    
            }, delay + index*1500);
        });
    })
    
    function addmsg(message) {
        let msgEl = document.createElement("div");
        msgEl.textContent = message;
        stat.appendChild(msgEl);
        stat.scrollTop = stat.scrollHeight;
    
    }
    
    
    function restat() {
        bar.style.display = "none";
        start.style.display = "inline-block";
        bar.style.width = "0%";
    }
});

