let idWin = "";

function verificaButon() {
    if (this.id === idWin) {
        textDisplayer.innerHTML = "Winner";
    } else {
        textDisplayer.innerHTML = "Loser, try again";
    }
}
textDisplayer = document.getElementById("text-displayer");

document.getElementById("button generate").onclick = function() {
    let n = parseInt(document.getElementById("no button").value);
    let noWin = Math.floor(Math.random() * n) + 1;
    idWin = "button" + noWin;
    let zona = document.getElementById("button-displayer");
    for (let i = 1; i <= n; i++) {
        let butonNew = document.createElement("button");
        butonNew.id = "button" + i;
        butonNew.className = "btn btn-primary";
        butonNew.innerText = "Click Me";
        butonNew.onclick = verificaButon;
        zona.appendChild(butonNew);
    }
};