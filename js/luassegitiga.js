function hitungLuasSegitiga() {
    var alas = parseFloat(document.getElementById("a-input").value);
    var tinggi = parseFloat(document.getElementById("t-input").value);

    var luas = 0.5 * alas * tinggi;

    document.getElementById("hasil").innerHTML = "Hasil Luas Segitiga adalah " + luas.toFixed(2) + " cm";
}

document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("a-input");
    const input2 = document.getElementById("t-input");
    const resetButton = document.getElementById("R2");
    resetButton.addEventListener("click", function() {
        input1.value = "";
        input2.value = "";
    });
});

document.getElementById("KS").addEventListener("click",function() {
    window.location.href = "KelilingSegitiga.html";
})