function saveSelection() {
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var femaleText = document.getElementById("hiddenText-female");
    ;
    var maleText = document.getElementById("hiddenText-male");
    ;
    var btnSelection = document.getElementById("selection");
    var gender = null;
    male.addEventListener("change", function () {
        gender = male.checked ? 'male' : null;
    });
    female.addEventListener("change", function () {
        gender = female.checked ? 'female' : null;
    });
    btnSelection.addEventListener('click', function () {
        if (gender === 'male') {
            maleText.style.display = 'block';
            femaleText.style.display = 'none';
        }
        else if (gender === 'female') {
            femaleText.style.display = 'block';
            maleText.style.display = 'none';
        }
    });
}
window.onload = function () { saveSelection(); };
