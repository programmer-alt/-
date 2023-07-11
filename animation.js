var button = document.querySelector('.animation');
var flowText = document.querySelector('.anim');
var go = document.querySelector('.go');
function animation() {
    flowText.classList.add('anim');
    flowText.style.visibility = 'visible';
    go.style.visibility = 'visible';
}
function animationRemove() {
    flowText.classList.remove('anim');
    flowText.style.visibility = 'hidden';
    go.style.visibility = 'hidden';
}
button.addEventListener('mouseenter', animation);
button.addEventListener('mouseleave', animationRemove);
