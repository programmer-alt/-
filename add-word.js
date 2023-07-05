function addWord() {
    var maleCheked = document.getElementById('male');
    var femaleCheked = document.getElementById('female');
    function wordMale() {
        alert('привет парень');
    }
    function wordFemale() {
        alert('привет девушка');
    }
    femaleCheked.addEventListener('click', wordFemale);
    maleCheked.addEventListener('click', wordMale);
}
window.onload = function () {
    addWord();
};
