function square() {
    var numInput = document.getElementById("numInput").value;
    var outputElement = document.getElementById("output");
    var result = Math.pow(parseInt(numInput), 2);
    outputElement.value = result.toString();
}
