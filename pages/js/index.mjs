const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
})
// Optional: Close menu when clicking a link (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open')
    })
})
