const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});




const divsToAnimate = document.querySelectorAll('.numbered-div');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, options);
divsToAnimate.forEach(div => observer.observe(div));

// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

// Get the header
//var header = document.getElementById("myHeader");

// Get the offset position of the navbar
//var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
  //if (window.pageYOffset > sticky) {
    //header.classList.add("sticky");
  //} else {
    //header.classList.add("sticky");
  //}
//}


document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.fade-in');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          (rect.top <= 0 && rect.bottom >= 0) ||
          (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
          (rect.top >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
  }

  function handleScroll() {
      elements.forEach(function (element) {
          if (isElementInViewport(element)) {
              element.classList.add('show');
          } else {
              element.classList.remove('show');
          }
      });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
});





function redirectToForm() {
  console.log("Redirecting to form..."); // Add this line
  window.location.href = "book.html";
}


// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.querySelector('.scroll-container');

  cardContainer.addEventListener('scroll', function () {
    const centerCard = document.querySelector('.card:hover');
    if (centerCard) {
      const scrollX = centerCard.getBoundingClientRect().left - cardContainer.getBoundingClientRect().left;
      cardContainer.scrollLeft = scrollX;
    }
  });
});



//Another update for websitr, in October again= first section 



  /* javascript Code  4th trier for swiping */
  const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
counter += 1;
slidefun(counter);
}
function plusSlides(n) {
counter += n;
slidefun(counter);
resetTimer();
}
function currentSlide(n) {
counter = n;
slidefun(counter);
resetTimer();
}
function resetTimer() {
clearInterval(timer);
timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

let i;
for(i = 0;i<myslide.length;i++){
    myslide[i].style.display = "none";
}
for(i = 0;i<dot.length;i++) {
    dot[i].className = dot[i].className.replace(' active', '');
}
if(n > myslide.length){
   counter = 1;
   }
if(n < 1){
   counter = myslide.length;
   }
myslide[counter - 1].style.display = "block";
dot[counter - 1].className += " active";
}





//Another update for website initiative section 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  autoplay:{
    delay:2000,
    disabledOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



function redirectToForm() {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf1ncr7nWV8v-365vWHRg0Tn8g7b2T-jiU0YX7oOoJ02951Tw/viewform?usp=sf_link';
}


// for new landing page
const sections = document.querySelectorAll(".section-header, .section-content");

  function animateSections() {
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("animate");
      }, index * 400); // Adjust delay time as needed
    });
  }

  // Call the animation function when the page is loaded
  window.addEventListener("load", animateSections);

  // Call the animation function when the user scrolls
  window.addEventListener("scroll", () => {
    animateSections();
  });


  // For new landing page. books we accept

  





    // For new landing page. initiatives
    var swiper = new Swiper(".mySwiper-2", {
      watchSlidesProgress: true,
      slidesPerView: 3,
      centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
      loop:true,
    autoplay:{
      delay:3000,
      disabledOnInteraction: false,
    }
  
    });

  


    // For new landing page. initiatives very own page
    var swiper = new Swiper(".mySwiper-4", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });









  

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const points = document.querySelectorAll('.point');
    points.forEach(point => {
      if (isInViewport(point)) {
        point.style.opacity = 1;
        point.style.transform = 'translateX(0)';
      }
    });
  }
  
  // Add event listener for the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Check for visible points on initial load
  handleScroll();

  document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll(".point");
  
    function animatePoints() {
      points.forEach((point, index) => {
        setTimeout(() => {
          point.classList.add("animate");
        }, index * 300); // Adjust the delay as needed
      });
    }
  
    animatePoints();
  });
  

  
 




  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and popup elements
  const donationForm = document.getElementById("donationForm");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Add a submit event listener to the form
  donationForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();
      console.log("Form submitted"); // Add this line

    // Show the popup
    popup.style.display = "block";
  });

  // Add a click event listener to the closePopup button
  closePopup.addEventListener("click", function () {
    // Hide the popup
    popup.style.display = "none";
  });
});




