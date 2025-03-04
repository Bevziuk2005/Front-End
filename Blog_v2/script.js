'use strict'

document.addEventListener("DOMContentLoaded", function () {

    // Зміна теми
    const button = document.getElementById("light_dark");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) document.body.classList.add(savedTheme);
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark-theme" : "");
    });

    // Підняття вверх
    const scroll = document.createElement("button");
    scroll.id = "scrollToTop";
    scroll.innerText = "↑ Вгору";
    document.body.appendChild(scroll);

    window.addEventListener("scroll", () => {
        scroll.classList.toggle("show", window.scrollY > 300);   // через скільки з'являється кнопка
    });
    scroll.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  // плавний підйом 
    });

    // Анімація фото
    const photo = document.querySelector(".me_foto");
    if (photo) {
        photo.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
        // тінь + збільшення при наведенні
        photo.addEventListener("mouseover", function () {
            photo.style.transform = "scale(1.1)";
            photo.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
        });
        photo.addEventListener("mouseout", function () {
            photo.style.transform = "scale(1)";
            photo.style.boxShadow = "none";
        });
    }

    // Оцінка книг
    document.querySelectorAll(".rating").forEach(ratingBlock => {
        const bookId = ratingBlock.getAttribute("data-book");
        const stars = ratingBlock.querySelectorAll(".star");
        const savedrating = localStorage.getItem(bookId);

        if (savedrating) HighlightStars(stars, savedrating);
        stars.forEach(star => {
            star.addEventListener("click", function () {
                const rating = this.getAttribute("data-value");
                localStorage.setItem(bookId, rating);
                HighlightStars(stars, rating);
            });
        });
    });

    // Контроль форми
    const form = document.getElementById("form"); 
    if (form) {
        form.addEventListener("submit", function (event) {
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const emailcontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonecontrol = /^\+?\d{10,15}$/;

            if (!emailcontrol.test(email)) {
                alert("Будь ласка, введіть коректну електронну адресу.");
                event.preventDefault();
            }
            if (phone && !phonecontrol.test(phone)) {
                alert("Будь ласка, введіть коректний номер телефону.");
                event.preventDefault(); 
            }
        });
    }
    
    // Пошук рецептів
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', SearchRecipes);
    // Функція для пошуку рецептів
    function SearchRecipes() {
        const searchtext = searchInput.value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe');

        recipes.forEach(recipe => {
            const title = recipe.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchtext)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    }
});

// Підсвітка зірок при оцінці книг
function HighlightStars(stars, rating) {
    stars.forEach(star => {
        star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "gray";
    });
}