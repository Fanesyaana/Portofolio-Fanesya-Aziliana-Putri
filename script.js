// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile Menu Toggle =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('show'));
});

// ===== Active Link & Smooth Scroll =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Auto Active on Scroll =====
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

document.addEventListener('DOMContentLoaded', function() {
  const nameEl = document.getElementById('typewriter');
  const roleEl = document.getElementById('typewriter-role');
  const fullName = "Fanesya Aziliana putri";
  
  // === FUNGSI TYPING MULTI BARIS (Teks awal tidak hilang) ===
  function typeMultiLine(element, lines, speed = 50) {
    element.innerHTML = ''; // Mulai kosong hanya sekali
    let lineIdx = 0;
    let charIdx = 0;

    function typeNext() {
      if (lineIdx < lines.length) {
        if (charIdx < lines[lineIdx].length) {
          // Ketik karakter per karakter
          element.innerHTML += lines[lineIdx].charAt(charIdx);
          charIdx++;
          setTimeout(typeNext, speed);
        } else {
          // Selesai 1 baris
          if (lineIdx < lines.length - 1) {
            element.innerHTML += '<br>'; // Tambah baris baru
          }
          lineIdx++;
          charIdx = 0;
          setTimeout(typeNext, 350); // Jeda sebelum lanjut baris bawah
        }
      }
    }
    typeNext();
  }

  // === 1. KETIK NAMA DULU ===
  function typeName() {
    let i = 0;
    nameEl.innerHTML = '';
    function type() {
      if (i < fullName.length) {
        nameEl.innerHTML += fullName.charAt(i);
        i++;
        setTimeout(type, 80);
      } else {
        // Setelah nama selesai, lanjut ketik role
        setTimeout(typeRole, 500);
      }
    }
    type();
  }

  // === 2. KETIK ROLE (2 BARIS, TETAP DI ATAS) ===
  function typeRole() {
    const roleLines = [
      "Computer Science Student &",
      "Creative Developer"
    ];
    typeMultiLine(roleEl, roleLines, 55);
  }

  // Mulai animasi saat halaman siap
  setTimeout(typeName, 600);

  // ===== SKILL PROGRESS (Tetap sama) =====
  const skillSection = document.querySelector('.skill-section');
  if (skillSection) {
    function animateSkills() {
      const skillBars = skillSection.querySelectorAll('.skill-bar');
      skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => { bar.style.width = progress + '%'; }, index * 150);
      });
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateSkills, 300);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(skillSection);
  }
});


// ===== Contact Form =====
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

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Init =====
window.addEventListener('load', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
});