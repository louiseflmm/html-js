function mudarCor() {
    const paragrafo = document.getElementById("parag1");
    paragrafo.style.color="blue";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("parag1").onclick = mudarCor;
});