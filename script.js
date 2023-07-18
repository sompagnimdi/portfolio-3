// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').toggleAttribute('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer!', 'YouTuber!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})