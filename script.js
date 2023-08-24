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
// Active Link State On Scroll

// Get All links
let navLinks = document.querySelectorAll('nav ul li a')

// Get All Sections

let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = this.window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
            })
        }
    }) 
})

