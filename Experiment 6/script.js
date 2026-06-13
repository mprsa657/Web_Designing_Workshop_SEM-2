let fontSize = 16;
let visible = true;

function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.getElementById("body").style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");

    if (visible) {
        para.style.display = "none";
        visible = false;
    } else {
        para.style.display = "block";
        visible = true;
    }
}

function resetAll() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("body").style.backgroundColor = "#f2f2f2";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    fontSize = 16;
    visible = true;
}