document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
  
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // First, close all sections
        headers.forEach(h => {
          h.classList.remove('active');
          h.querySelector('.icon').textContent = '+';
          h.nextElementSibling.style.maxHeight = null;
        });
        
        // Then, if the clicked section was not active, open it
        if (!isActive) {
          this.classList.add('active');
          this.querySelector('.icon').textContent = '-';
          const content = this.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });