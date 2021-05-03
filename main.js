'use-strict';

// This next block of code runs after the document loads.
(() => {
    // Get needed elements
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.toggle');
    const menuToggleIcon = document.querySelector('.toggle-icon');
    const animationSelectors = document.querySelectorAll('.animation-selector');
    
    // Define custom animation trigger classes
    const classes = {
      menuOpen: 'menu-open',
      toggleIconOpen: 'toggle-icon bx bxs-share-alt',
      toggleIconClose: 'toggle-icon bx bx-x',
      checkboxChecked: 'checked',
    };

    // Add menu toggle event to menu toggle element
    menuToggle.addEventListener('click', () => {
      if (!menu.classList.contains(classes.menuOpen)) {
        menu.classList.add(classes.menuOpen);
        menuToggleIcon.classList = classes.toggleIconClose;
      } else {
        menu.classList.remove(classes.menuOpen);
        menuToggleIcon.classList = classes.toggleIconOpen;
      }
    });

    // Add menu click away listner that closes the menu when user clicks away
    window.addEventListener('click', (event) => {
      // Check if the clicked area is not the menu itself
      if (
        menu.classList.contains(classes.menuOpen) &&
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        menu.classList.remove(classes.menuOpen);
        menuToggleIcon.classList = classes.toggleIconOpen;
      }
    });

    // NOTE: This next block of code does not have anything to do with the
    // widget its purpose is only to select and preview its deferent animations
    // you can select the type of animation you want by changing the animation
    // data attribute of the menu which can be one of (center, delay & rotate).

    // Add animation-selector event to select target menu animation
    animationSelectors.forEach((selector) => {
      selector.addEventListener('click', (event) => {
        const checkbox = event.currentTarget.children[0];

        // Check the target animation if it's not checked
        if (!checkbox.classList.contains(classes.checkboxChecked)) {
          animationSelectors.forEach((selector) => {
            if (selector !== event.currentTarget) {
              selector.children[0].classList.remove(classes.checkboxChecked);
            }
          });
  
          // Check target checkbox
          checkbox.classList.add(classes.checkboxChecked);

          // Change menu animation by changing the animation data attribute
          menu.dataset.animation = event.currentTarget.id;
        }
      });
    });
})();
