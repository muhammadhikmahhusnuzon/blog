document.addEventListener('DOMContentLoaded', () => {
  // Smooth transitions with GSAP
  const animatePageIn = () => {
    gsap.from('body', { opacity: 0, duration: 0.8, ease: 'power2.out' });
    gsap.from('.site-header', { y: -50, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });
    gsap.from('.hero-title', { x: -100, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 });
    gsap.from('.hero-subtitle', { x: 100, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.6 });
    gsap.from('.hero-description', { opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 });
    gsap.from('.btn', { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 1 });
  };

  animatePageIn();

  // Typing effect for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const speed = 70; // typing speed in milliseconds

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  // Glitch effect on hover for links (optional, can be applied to specific elements)
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('glitch');
      link.setAttribute('data-text', link.textContent);
    });
    link.addEventListener('mouseout', () => {
      link.classList.remove('glitch');
      link.removeAttribute('data-text');
    });
  });
});
