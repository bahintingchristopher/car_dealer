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

    // ===== Fetch and display cars dynamically =====
    const BACKEND_URL = "https://car-backend-4zsn.onrender.com";
    fetch(`${BACKEND_URL}/cars`)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.highlighted-cars');
            container.innerHTML = '';  // Clear existing cars

            data.forEach(car => {
                const carDiv = document.createElement('div');
                carDiv.classList.add('car');

                carDiv.innerHTML = `
                    <img src="${car.image_url}" alt="${car.name}">
                    <p class="description">${car.name}</p>
                    <p class="price">₱${car.price}</p>
                `;

                container.appendChild(carDiv);
            });
        })
        .catch(error => console.error('Error fetching cars:', error));

    // ===== IMAGE POPUP using event delegation on container =====
    const carsContainer = document.getElementById("cars-container");
    if (carsContainer) {
        carsContainer.addEventListener("click", (event) => {
            const clicked = event.target;
            if (clicked.tagName === "IMG" && clicked.closest(".car")) {
                const overlay = document.createElement('div');
                overlay.classList.add('image-popup-overlay');

                // Styling the overlay
                Object.assign(overlay.style, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",document.addEventListener('DOMContentLoaded', () => {
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

    // ===== Fetch and display cars dynamically =====
    const BACKEND_URL = "https://car-backend-4zsn.onrender.com";
    fetch(`${BACKEND_URL}/cars`)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.highlighted-cars');
            container.innerHTML = '';  // Clear existing cars

            data.forEach(car => {
                const carDiv = document.createElement('div');
                carDiv.classList.add('car');

                carDiv.innerHTML = `
                    <img src="${car.image_url}" alt="${car.name}">
                    <p class="description">${car.name}</p>
                    <p class="price">₱${car.price}</p>
                `;

                container.appendChild(carDiv);
            });
        })
        .catch(error => console.error('Error fetching cars:', error));

    // ===== IMAGE POPUP using event delegation on container =====
    const carsContainer = document.getElementById("cars-container");
    if (carsContainer) {
        carsContainer.addEventListener("click", (event) => {
            const clicked = event.target;
            if (clicked.tagName === "IMG" && clicked.closest(".car")) {
                const overlay = document.createElement('div');
                overlay.classList.add('image-popup-overlay');

                // Styling the overlay
                Object.assign(overlay.style, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    zIndex: 1000,
                });

                const fullImage = document.createElement('img');
                fullImage.src = clicked.src;
                Object.assign(fullImage.style, {
                    maxWidth: "90%",
                    maxHeight: "90%",
                    borderRadius: "10px",
                    boxShadow: "0 0 15px white",
                });

                overlay.appendChild(fullImage);
                document.body.appendChild(overlay);

                overlay.addEventListener('click', () => {
                    overlay.remove();
                });
            }
        });
    }
});
                    zIndex: 1000,
                });

                const fullImage = document.createElement('img');
                fullImage.src = clicked.src;
                Object.assign(fullImage.style, {
                    maxWidth: "90%",
                    maxHeight: "90%",
                    borderRadius: "10px",
                    boxShadow: "0 0 15px white",
                });

                overlay.appendChild(fullImage);
                document.body.appendChild(overlay);

                overlay.addEventListener('click', () => {
                    overlay.remove();
                });
            }
        });
    }
});