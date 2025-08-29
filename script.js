document.addEventListener('DOMContentLoaded', () => {
  // ===== MENU TOGGLE =====
  const menuButton = document.querySelector('.menu_button button');
  const navbar = document.querySelector('.navbar');

  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !menuButton.contains(e.target)) {
        navbar.classList.remove('active');
      }
    });
  }

  // ===== IMAGE POPUP =====
  const carImages = document.querySelectorAll('.highlighted-cars .car img');
  carImages.forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.classList.add('image-popup-overlay');

      const fullImage = document.createElement('img');
      fullImage.src = img.src;
      fullImage.classList.add('image-popup-full');

      overlay.appendChild(fullImage);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });

  // ===== VIEW DETAILS (Mobile only) =====
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const carsModal = document.getElementById('carsModal');
  const detailButtons = document.querySelectorAll('.cars-details-btn');
  const closeCarsModalBtn = document.querySelector('.cars-close-btn');

  if (carsModal && detailButtons.length > 0 && closeCarsModalBtn) {
    if (isMobile) {
      detailButtons.forEach(button => {
        button.addEventListener('click', () => {
          carsModal.style.display = 'block';
        });
      });

      closeCarsModalBtn.addEventListener('click', () => {
        carsModal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === carsModal) {
          carsModal.style.display = 'none';
        }
      });
    } else {
      detailButtons.forEach(button => {
        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";
        button.title = "Available only on mobile";
      });
    }
  }

  // ===== ABOUT MODAL (Optional) =====
  // Uncomment this section if you're using a modal for "More Info" in about.html

  // const aboutModal = document.getElementById('aboutModal');
  // const moreInfoBtn = document.getElementById('moreInfoBtn');
  // const aboutCloseBtn = aboutModal?.querySelector('.cars-close-btn');

  // if (aboutModal && moreInfoBtn && aboutCloseBtn) {
  //   moreInfoBtn.addEventListener('click', () => {
  //     aboutModal.style.display = 'block';
  //   });

  //   aboutCloseBtn.addEventListener('click', () => {
  //     aboutModal.style.display = 'none';
  //   });

  //   window.addEventListener('click', (event) => {
  //     if (event.target === aboutModal) {
  //       aboutModal.style.display = 'none';
  //     }
  //   });
  // }

});
