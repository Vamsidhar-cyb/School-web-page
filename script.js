(function() {
    // ----- SLIDER logic -----
    const slidesContainer = document.getElementById('slidesContainer');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlidePosition() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      // optional auto slide every 6 seconds
      setInterval(nextSlide, 6000);
    }

    // ----- FORM VALIDATION (JavaScript) -----
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const msgError = document.getElementById('msgError');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(e) {
      e.preventDefault();   // block actual submission

      let isValid = true;

      // Name validation
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Email validation (basic)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Message validation
      if (msgInput.value.trim() === '') {
        msgError.textContent = 'Message cannot be empty.';
        isValid = false;
      } else {
        msgError.textContent = '';
      }

      if (isValid) {
        formFeedback.innerHTML = '<span style="color:#2b7d4c;">✓ Thank you! The school will reply soon.</span>';
        // optional: clear fields
        // nameInput.value = ''; emailInput.value = ''; msgInput.value = '';   // (uncomment if desired)
      } else {
        formFeedback.innerHTML = '<span style="color:#c64756;">Please fix the errors above.</span>';
      }
    });

    // ----- Smooth scroll / active nav simulation (simple) -----
    const navHome = document.getElementById('nav-home');
    const navAbout = document.getElementById('nav-about');
    const navPrograms = document.getElementById('nav-programs');
    const navContact = document.getElementById('nav-contact');

    function removeActive() {
      [navHome, navAbout, navPrograms, navContact].forEach(link => link.classList.remove('active'));
    }

    // approximate scroll to sections (just a demo: active change on click)
    navHome.addEventListener('click', (e) => {
      e.preventDefault();
      removeActive();
      navHome.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    navAbout.addEventListener('click', (e) => {
      e.preventDefault();
      removeActive();
      navAbout.classList.add('active');
      document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
    });
    navPrograms.addEventListener('click', (e) => {
      e.preventDefault();
      removeActive();
      navPrograms.classList.add('active');
      document.getElementById('programsSection').scrollIntoView({ behavior: 'smooth' });
    });
    navContact.addEventListener('click', (e) => {
      e.preventDefault();
      removeActive();
      navContact.classList.add('active');
      document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    });

    // optional: change active on scroll – not necessary for demo, keeps it simpler.
  })();