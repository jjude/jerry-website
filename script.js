let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto advance slides every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show loader
function showLoader() {
    document.body.classList.add('loading');
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('active');
    }
}

// Function to hide loader
function hideLoader() {
    document.body.classList.remove('loading');
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.remove('active');
    }
}

// Add click event listeners to all navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle internal links (not external or hash links)
            const href = this.getAttribute('href');
            if (href.startsWith('http') || href.startsWith('#')) return;
            
            e.preventDefault();
            showLoader();
            
            setTimeout(() => {
                window.location.href = href;
            }, 2000); // 2 second delay
        });
    });
});

// Hide loader when page loads
window.addEventListener('load', function() {
    hideLoader();
});

// Show loader initially
showLoader();