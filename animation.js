var button = document.querySelector('.animation-button');
var flowText = document.querySelector('.animText');
var go = document.querySelector('.go');
function newClassCss() {
    var randomClass = Math.floor(Math.random() * 10);
    var newClass = (randomClass >= 5) ? 'anim-mirrow' : 'anim-mirrowTwo';
    flowText.classList.add(newClass);
    if (newClass === 'anim-mirrow') {
        flowText.style.animationName = 'rainbow';
    }
    else if (newClass === 'anim-mirrowTwo') {
        flowText.style.animationName = 'rainbow-mirrow';
    }
}
function animation() {
    newClassCss();
    flowText.style.visibility = 'visible';
    go.style.visibility = 'visible';
}
function animationRemove() {
    flowText.style.visibility = 'hidden';
    go.style.visibility = 'hidden';
}
button.addEventListener('mouseenter', animation);
button.addEventListener('mouseleave', animationRemove);
