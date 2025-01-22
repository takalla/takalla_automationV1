window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const welcomeSection = document.querySelector('#Welcome');
    const speed = 0.5; // Control the speed of the parallax effect (0.5 means the background moves at half the scroll speed)
    
    welcomeSection.style.backgroundPosition = `center ${-scrollPosition * speed}px`;
  });
  