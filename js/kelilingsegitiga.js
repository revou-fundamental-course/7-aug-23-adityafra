function hitungKelilingSegitiga() {
    var a = parseFloat(document.getElementById("a-input").value);
    var b = parseFloat(document.getElementById("b-input").value);
    var c = parseFloat(document.getElementById("c-input").value);

    var keliling = a+b+c;

    document.getElementById("hasil").innerHTML = "Hasil Keliling Segitiga adalah " + keliling.toFixed(2) + " cm";
}

document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("a-input");
    const input2 = document.getElementById("b-input");
    const input3 = document.getElementById("c-input");
    const resetButton = document.getElementById("R");
    resetButton.addEventListener("click", function() {
        input1.value = "";
        input2.value = "";
        input3.value = "";
    });
});

document.getElementById("LS").addEventListener("click",function() {
    window.location.href = "LuasSegitiga.html";
})