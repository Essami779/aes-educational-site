/**
 * AES Educational Site - Main JavaScript
 * Handles navigation, smooth scrolling, and active section tracking
 */

// ===================================
// Navigation State Management
// ===================================

class NavigationManager {
  constructor() {
    this.navItems = document.querySelectorAll('.nav-item');
    this.sections = document.querySelectorAll('.content-card, .hero-section');
    this.init();
  }

  init() {
    // Add click event listeners to navigation items
    this.navItems.forEach(item => {
      item.addEventListener('click', (e) => this.handleNavClick(e, item));
    });

    // Set up Intersection Observer for active section tracking
    this.setupIntersectionObserver();

    // Handle initial load (if there's a hash in URL)
    if (window.location.hash) {
      this.scrollToSection(window.location.hash);
    }
  }

  /**
   * Handle navigation item click
   */
  handleNavClick(e, item) {
    const href = item.getAttribute('href');
    
    // If it's a hash link (section link)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      // Update active state
      this.setActiveNavItem(item);
      
      // Scroll to section
      this.scrollToSection(href);
      
      // Update URL without triggering page reload
      history.pushState(null, null, href);
    }
  }

  /**
   * Smooth scroll to a section
   */
  scrollToSection(hash) {
    if (hash === '#' || hash === '') {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetSection = document.querySelector(hash);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Set active navigation item
   */
  setActiveNavItem(activeItem) {
    this.navItems.forEach(item => {
      item.classList.remove('active');
    });
    activeItem.classList.add('active');
  }

  /**
   * Setup Intersection Observer to track which section is in view
   */
  setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          // Find corresponding nav item
          const navItem = document.querySelector(`.nav-item[href="#${sectionId}"]`);
          if (navItem) {
            this.setActiveNavItem(navItem);
          } else if (entry.target.classList.contains('hero-section')) {
            // If hero section is in view, activate home nav item
            const homeNavItem = document.querySelector('.nav-item[data-section="home"]');
            if (homeNavItem) {
              this.setActiveNavItem(homeNavItem);
            }
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    this.sections.forEach(section => {
      observer.observe(section);
    });
  }
}

// ===================================
// Scroll to Top Button (Optional)
// ===================================

class ScrollToTopButton {
  constructor() {
    this.button = this.createButton();
    this.init();
  }

  createButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    button.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(button);
    return button;
  }

  init() {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    });

    // Handle button click
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===================================
// Mobile Menu Toggle (for responsive design)
// ===================================

class MobileMenuToggle {
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.createToggleButton();
  }

  createToggleButton() {
    // Only create toggle button on mobile
    if (window.innerWidth <= 768) {
      const button = document.createElement('button');
      button.className = 'mobile-menu-toggle';
      button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
      button.setAttribute('aria-label', 'Toggle menu');
      
      // Insert button at the top of main content
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.insertBefore(button, mainContent.firstChild);
      }

      // Handle toggle
      button.addEventListener('click', () => {
        this.sidebar.classList.toggle('mobile-open');
      });
    }
  }
}

// ===================================
// Image Lazy Loading Enhancement
// ===================================

class ImageLazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[src]');
    this.init();
  }

  init() {
    // Modern browsers support native lazy loading
    this.images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
}

// ===================================
// Initialize Everything on DOM Ready
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation manager
  const navManager = new NavigationManager();
  
  // Initialize scroll to top button
  const scrollButton = new ScrollToTopButton();
  
  // Initialize mobile menu toggle
  const mobileMenu = new MobileMenuToggle();
  
  // Initialize image lazy loading
  const imageLazyLoader = new ImageLazyLoader();
  
  // Add smooth scroll behavior to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Log initialization
  console.log('🚀 AES Educational Site initialized successfully!');
});

// ===================================
// Handle Browser Back/Forward Buttons
// ===================================

window.addEventListener('popstate', () => {
  if (window.location.hash) {
    const navItem = document.querySelector(`.nav-item[href="${window.location.hash}"]`);
    if (navItem) {
      navItem.click();
    }
  }
});

// ===================================
// Add CSS for Scroll to Top Button
// ===================================

const style = document.createElement('style');
style.textContent = `
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
  }

  .scroll-to-top:hover {
    background-color: #0891B2;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
  }

  .scroll-to-top:active {
    transform: translateY(0);
  }

  .mobile-menu-toggle {
    display: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);
    z-index: 1001;
  }

  @media (max-width: 768px) {
    .mobile-menu-toggle {
      display: flex;
    }

    .sidebar {
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }

    .sidebar.mobile-open {
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);
