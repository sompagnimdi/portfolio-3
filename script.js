// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').toggleAttribute('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})