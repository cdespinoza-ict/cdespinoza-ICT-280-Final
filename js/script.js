<<<<<<< HEAD
const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
        alert("GreenTech Solutions helps businesses use technology to reduce waste, save energy, and track their carbon footprint.");
    });
}

const productFilter = document.getElementById("productFilter");
const productCards = document.querySelectorAll(".product-card");
const productImage = document.getElementById("productImage");

if (productFilter) {
    productFilter.addEventListener("change", function () {
        const selectedCategory = productFilter.value;

        productCards.forEach(function (card) {
            if (selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        if (productImage) {
            if (selectedCategory === "energy") {
                productImage.src = "images/energy.jpg";
                productImage.alt = "Energy efficient technology";
            } else if (selectedCategory === "recycling") {
                productImage.src = "images/sustainable-practices.jpg";
                productImage.alt = "Sustainable recycling practices";
            } else if (selectedCategory === "software") {
                productImage.src = "images/technology.jpg";
                productImage.alt = "Green technology software";
            } else {
                productImage.src = "images/Nature.jpg";
                productImage.alt = "Nature image showing sustainability";
            }
        }
    });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Your message has been submitted successfully!");
        }
    });
=======
const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function () {
        alert("GreenTech Solutions helps businesses use technology to reduce waste, save energy, and track their carbon footprint.");
    });
}

const productFilter = document.getElementById("productFilter");
const productCards = document.querySelectorAll(".product-card");
const productImage = document.getElementById("productImage");

if (productFilter) {
    productFilter.addEventListener("change", function () {
        const selectedCategory = productFilter.value;

        productCards.forEach(function (card) {
            if (selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        if (productImage) {
            if (selectedCategory === "energy") {
                productImage.src = "images/energy.jpg";
                productImage.alt = "Energy efficient technology";
            } else if (selectedCategory === "recycling") {
                productImage.src = "images/sustainable-practices.jpg";
                productImage.alt = "Sustainable recycling practices";
            } else if (selectedCategory === "software") {
                productImage.src = "images/technology.jpg";
                productImage.alt = "Green technology software";
            } else {
                productImage.src = "images/Nature.jpg";
                productImage.alt = "Nature image showing sustainability";
            }
        }
    });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Your message has been submitted successfully!");
        }
    });
>>>>>>> f741de1785407396e02c41e66eb660e71713fd67
}