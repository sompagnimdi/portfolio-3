// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').toggleAttribute('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = Typed('.auto-input',{
    strings: ['Front-End Developper!', 'Freelancer!', 'UI Designer!', 'YouTuber!'],
    typedpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})