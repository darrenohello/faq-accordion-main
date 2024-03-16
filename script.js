document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
  
    headers.forEach(header => {
      header.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // First, close all sections
        headers.forEach(h => {
          h.classList.remove('active');
          h.querySelector('.icon').textContent = '';
          h.nextElementSibling.style.maxHeight = null;
        });
        
        // Then, if the clicked section was not active, open it
        if (!isActive) {
          this.classList.add('active');
          this.querySelector('.icon').textContent = '';
          const content = this.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach((button, index) => {
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          event.preventDefault(); // Prevent the default tab behavior
  
          if (event.shiftKey) {
            // Shift + Tab on the first button
            if (index === 0) {
              buttons[buttons.length - 1].focus(); // Move focus to the last button
            } else {
              buttons[index - 1].focus(); // Move focus to the previous button
            }
          } else {
            // Tab on the last button
            if (index === buttons.length - 1) {
              buttons[0].focus(); // Move focus to the first button
            } else {
              buttons[index + 1].focus(); // Move focus to the next button
            }
          }
        }
      });
    });
  });
  