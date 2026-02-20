function iaNumere() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    return { n1, n2 };
}

function aduna() {
    let { n1, n2 } = iaNumere();
    document.getElementById("rezultat").innerText = "Rezultat: " + (n1 + n2);
}

function scade() {
    let { n1, n2 } = iaNumere();
    document.getElementById("rezultat").innerText = "Rezultat: " + (n1 - n2);
}

function inmulteste() {
    let { n1, n2 } = iaNumere();
    document.getElementById("rezultat").innerText = "Rezultat: " + (n1 * n2);
}

function imparte() {
    let { n1, n2 } = iaNumere();

    if (n2 === 0) {
        document.getElementById("rezultat").innerText = "Nu poți împărți la 0!";
        return;
    }

    document.getElementById("rezultat").innerText = "Rezultat: " + (n1 / n2);
}

function radical() {
    let n1 = Number(document.getElementById("n1").value);

    if (n1 < 0) {
        document.getElementById("rezultat").innerText = "Nu există radical din număr negativ!";
        return;
    }

    document.getElementById("rezultat").innerText = "Rezultat: " + Math.sqrt(n1);

}
function putere() {
    let baza = Number(document.getElementById("baza").value);
    let exponent = Number(document.getElementById("exponent").value);

    let rezultat = Math.pow(baza, exponent);

    document.getElementById("rezultat").innerText =
        baza + " la puterea " + exponent + " = " + rezultat;
}
function deseneazaFractie() {
    let numarator = Number(document.getElementById("numarator").value);
    let numitor = Number(document.getElementById("numitor").value);

    if (numitor <= 0) {
        alert("Numitorul trebuie să fie mai mare decât 0!");
        return;
    }

    let canvas = document.getElementById("canvasFractie");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let centruX = 150;
    let centruY = 150;
    let raza = 100;

    let unghiPeBucata = (2 * Math.PI) / numitor;

    for (let i = 0; i < numitor; i++) {
        ctx.beginPath();
        ctx.moveTo(centruX, centruY);
        ctx.arc(
            centruX,
            centruY,
            raza,
            i * unghiPeBucata,
            (i + 1) * unghiPeBucata
        );
        ctx.closePath();

        if (i < numarator) {
            ctx.fillStyle = "orange";
            ctx.fill();
        }

        ctx.stroke();
    }
}