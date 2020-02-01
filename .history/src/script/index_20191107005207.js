// smooth scroll to selector
const animateToSection = selector => {
    let targetOffset = document.querySelector(selector).offsetTop;
    if(window.matchMedia("(max-width: 480px)").matches) {
        targetOffset -= 30
    }
    window.scroll({
        top: targetOffset, 
        left: 0, 
        behavior: 'smooth'
    });
}

// add click listeners to nav links
let navLinks = document.querySelectorAll('.scollTrigger');
navLinks.forEach(link => {
    link.addEventListener('click', ev => {
        if(window.location.pathname == "/") {
            ev.preventDefault();
            let targetId = ev.currentTarget.getAttribute('target');
            animateToSection(`${targetId}`);
        }
    })
});

// submit cantact us form
let notification = document.getElementById('notification');
let form = document.getElementById('contact-us-form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    let action = form.getAttribute('action');
    let response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: new Headers({
            'apiKey': '2ed2a33d4d8cbe470bd50d526415363b'
        })
    });
    
    let result = await response.json();
    if(result.status.status == 1) {
        notification.classList.add('open');
        setTimeout(() => {
            notification.classList.remove('open');
        }, 5000)
    }
});
