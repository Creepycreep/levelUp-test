'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // SLIDER
  let slideIndex = 1;
  showSlides(slideIndex);

  function nextSlide() {
    showSlides(slideIndex += 1);
  }

  function previousSlide() {
    showSlides(slideIndex -= 1);
  }

  function showSlides(n) {
    let slides = document.querySelectorAll('.reviews-card');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let slide of slides) {
      slide.style.display = "none";
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  // BUTTON
  let next = document.querySelector('.next'),
    prev = document.querySelector('.prev');

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', previousSlide);

  let buttons = document.querySelectorAll('.button-order'),
    order = document.querySelector('#order');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      order.scrollIntoView({ behavior: "smooth" });
    });
  });

  // TIMER
  let minutesNeed = document.querySelector('#deadline-timer');
  minutesNeed = +minutesNeed.innerHTML.slice(0, -3);

  let deadlineTime = new Date(new Date().getTime() + (minutesNeed * 60 * 1000));

  let timeBack = setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = deadlineTime - now;

    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("deadline-timer").innerHTML = minutes + ":" + seconds;

    if (minutes == 0) {
      document.querySelector("#min-or-sec").innerHTML = " cекунд";
    }

    if (timeLeft < 0) {
      clearInterval(timeBack);
      document.querySelector("#time-remainer").innerHTML = '<h2 class="timer-end">Время истекло!</h2>';
    }
  }, 1000);


  // FORM 
  let input = document.querySelectorAll('input');

  for (let i = 0; i < input.length - 1; i++) {
    input[i].addEventListener('focus', () => {
      input[i].nextElementSibling.classList.add('hint-focused');
    });

    input[i].addEventListener('blur', () => {
      input[i].nextElementSibling.classList.remove('hint-focused');
    });
  }

});

