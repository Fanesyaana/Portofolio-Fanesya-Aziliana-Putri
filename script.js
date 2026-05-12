// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => mobileMenu.classList.toggle('show'));
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('show'));
});

// Active Link & Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Auto Active on Scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// Skill Progress Animation dengan Percentage
document.addEventListener('DOMContentLoaded', function() {
  const skillSection = document.querySelector('.skill-section');
  if (!skillSection) return;

  function animateSkills() {
    const skillBars = skillSection.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      const progress = bar.getAttribute('data-progress');
      setTimeout(() => {
        bar.style.width = progress + '%';
      }, index * 150);
    });
  }

  // Jalanin pas section keliatan
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(animateSkills, 300);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillSection);
});
// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...'; 
    btn.disabled = true;
    setTimeout(() => {
      alert('Message sent successfully!');
      contactForm.reset();
      btn.textContent = originalText; 
      btn.disabled = false;
    }, 1500);
  });
}

// Init
window.addEventListener('load', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});