function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
    const toggleBtn=document.querySelector('.menu-toggle');
    toggleBtn.setAttribute('aria-expanded',`${toggleBtn.getAttribute('aria-expanded')=='false'?'true':'false'}`);
}
