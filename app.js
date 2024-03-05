const burger = document.querySelector(".hamburger");
const burgerFirst = document.querySelector(".hamburger-line:first-child");
const burgerSecond = document.querySelector(".hamburger-line:nth-child(2)");
const burgerThird = document.querySelector(".hamburger-line:last-child");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", function (e) {
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");
  nav.classList.toggle("block");
  nav.classList.toggle("visible");
});


document.addEventListener("DOMContentLoaded", function() {
    var testimonialCards = document.querySelectorAll('.zs--testimonials--card');
    var currentIndex = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialCards[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentIndex);
    }

    // Show the first testimonial initially
    showTestimonial(currentIndex);

    // Change testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Event listener for the right arrow
    document.getElementById('next-testimonial').addEventListener('click', nextTestimonial);

    // Event listener for the left arrow
    document.getElementById('prev-testimonial').addEventListener('click', prevTestimonial);
});
