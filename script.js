document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.nav__links .link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    const chevLeft = document.querySelector('.chev__left');
    const chevRight = document.querySelector('.chev__right');
    const contentSections = document.querySelectorAll('.content');
    let currentSection = 0;
  
    const updateContent = () => {
      contentSections.forEach((section, index) => {
        section.style.display = index === currentSection ? 'block' : 'none';
      });
    };
  
    chevLeft.addEventListener('click', () => {
      currentSection = (currentSection > 0) ? currentSection - 1 : contentSections.length - 1;
      updateContent();
    });
  
    chevRight.addEventListener('click', () => {
      currentSection = (currentSection < contentSections.length - 1) ? currentSection + 1 : 0;
      updateContent();
    });
  
    updateContent();
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = document.getElementById('destination').value;
      const date = document.getElementById('date').value;
  
      if (destination === '' || date === '') {
        alert('Please fill in all fields');
        return;
      }
  
      alert(`Checking travel package for ${destination} on ${date}`);
    });
  });
  