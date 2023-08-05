//---------sticky active--------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// dark mode

let darkModeIcon = document.querySelector('#darkMode-icon');
let portfolio = document.querySelector('.logo');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    portfolio.classList.toggle('logo-color');

}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

let success = document.querySelector("#success");
let failed = document.querySelector("#failed");

var contact = document.querySelector("#contact-form");
var loading = document.querySelector("#loading");
const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    contact.style.display = 'none';
    loading.style.display = 'block';

    const formData = new FormData(form);
    const jsonData = {};

    for (let [key, value] of formData.entries()) {
        jsonData[key] = value;
    }
    try {
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => response.text())
            .then(data => {
                if (data === 'success') {
                    loading.style.display='none'
                    success.style.display = 'block';
                } else {
                    loading.style.display='none';
                    failed.style.display = 'block';
                }
            })
    }
    catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the email');
    } 
    
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image img, .skills-container,.project-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.project-box, .right-container img', {origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .left-container img', {origin: 'right' });
ScrollReveal().reveal('.timeline',{delay:500,distance: '0px',origin:'none'});
ScrollReveal().reveal('.left-textbox1',{delay: 1000,distance: '0px',origin:'none'});
ScrollReveal().reveal('.right-textbox1',{delay: 2000,distance: '0px',origin:'none'});
ScrollReveal().reveal('.left-textbox2',{delay: 3000,distance: '0px',origin:'none'});