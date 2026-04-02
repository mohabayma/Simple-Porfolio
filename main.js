// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
window.addEventListener('scroll', function () {
    // Solid background on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // Active section highlighting
    let current = '';
    sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
    mobileLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});
// ===========================
// MOBILE MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
// Close mobile menu on link click
mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});
// ===========================
// SCROLL ANIMATIONS (Fade-in on scroll)
// ===========================
var fadeElements = document.querySelectorAll('.fade-up');
function checkFadeIn() {
    fadeElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}
// Run on load and scroll
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);
// ===========================
// SKILL BAR ANIMATIONS
// ===========================
var skillFills = document.querySelectorAll('.skill-fill');
function animateSkillBars() {
    skillFills.forEach(function (fill) {
        var rect = fill.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !fill.classList.contains('animate')) {
            fill.classList.add('animate');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
// ===========================
// CONTACT FORM VALIDATION
// ===========================
var contactForm = document.getElementById('contactForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var submitBtn = document.getElementById('submitBtn');
var formSuccess = document.getElementById('formSuccess');
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    messageInput.classList.remove('error');
}
// Clear errors on input
nameInput.addEventListener('input', function () {
    nameError.textContent = '';
    nameInput.classList.remove('error');
});
emailInput.addEventListener('input', function () {
    emailError.textContent = '';
    emailInput.classList.remove('error');
});
messageInput.addEventListener('input', function () {
    messageError.textContent = '';
    messageInput.classList.remove('error');
});
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    var isValid = true;
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        nameInput.classList.add('error');
        isValid = false;
    }
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        isValid = false;
    }
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required';
        messageInput.classList.add('error');
        isValid = false;
    }
    if (isValid) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        // Simulate sending
        setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '*Sent Successfully';

        formSuccess.classList.add('show');
        contactForm.reset();
        setTimeout(function () {
            formSuccess.classList.remove('show');
            submitBtn.innerHTML = 'Send Message'; }, 3000); }, 1500); } });

// =========================== // BACK TO TOP // =========================== var backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

