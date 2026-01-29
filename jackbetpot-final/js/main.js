// JackBetPot - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Animate on Scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => observer.observe(el));
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
  
  // Copy to Clipboard for Bonus Codes
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const codeElement = this.previousElementSibling;
      if (codeElement) {
        const code = codeElement.textContent;
        navigator.clipboard.writeText(code).then(() => {
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          this.style.background = '#28a745';
          setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      }
    });
  });
  
  // Filter Functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterableItems = document.querySelectorAll('[data-category]');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items
      filterableItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          setTimeout(() => item.style.opacity = '1', 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
    });
  });
  
  // Betting School Level Tabs
  const levelTabs = document.querySelectorAll('.level-tab');
  const levelContents = document.querySelectorAll('.level-content');
  
  levelTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const level = this.getAttribute('data-level');
      
      // Update active tab
      levelTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding content
      levelContents.forEach(content => {
        if (content.getAttribute('data-level') === level) {
          content.style.display = 'grid';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Active Navigation Link Highlighting
  const navLinksAll = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinksAll.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.4)';
      } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      }
    });
  }

  // Bottom Banner Close Functionality
  const bottomBanner = document.getElementById('bottomBanner');
  const closeBannerBtn = document.getElementById('closeBanner');
  
  if (bottomBanner && closeBannerBtn) {
    // Check if banner was previously closed
    const bannerClosed = sessionStorage.getItem('bottomBannerClosed');
    
    if (bannerClosed === 'true') {
      bottomBanner.classList.add('hidden');
    }
    
    closeBannerBtn.addEventListener('click', function() {
      bottomBanner.classList.add('hidden');
      sessionStorage.setItem('bottomBannerClosed', 'true');
      
      // Remove banner from DOM after animation
      setTimeout(() => {
        bottomBanner.style.display = 'none';
      }, 400);
    });
  }

  // Accordion Functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });
});

// Utility function for external links (affiliate)
function trackClick(operator) {
  console.log('Affiliate click:', operator);
  // Add your tracking code here
}
