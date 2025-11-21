let lose = JSON.parse(localStorage.getItem("lose")) || [];

function save() {
    localStorage.setItem("lose", JSON.stringify(lose));
    render();
}

function addLos() {
    const val = Number(document.getElementById("losInput").value);
    if (!val || val <= 0) return;

    if (!lose.includes(val)) {
        lose.push(val);
        lose.sort((a, b) => a - b);
    }

    document.getElementById("losInput").value = "";
    save();
}

function checkLos() {
    const val = Number(document.getElementById("checkInput").value);
    const result = document.getElementById("result");

    if (!val) {
        result.textContent = "Bitte eine Nummer eingeben.";
        result.style.color = "#e7c600";
        return;
    }

    if (lose.includes(val)) {
        result.textContent = "✔️ Du hast dieses Los!";
        result.style.color = "#4caf50";
    } else {
        result.textContent = "❌ Nicht in deiner Liste.";
        result.style.color = "#e74c3c";
    }
}

function render() {
    const ul = document.getElementById("losListe");
    ul.innerHTML = "";
    lose.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        ul.appendChild(li);
    });
}

render();
