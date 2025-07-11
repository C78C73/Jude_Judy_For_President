// Donation button alert (only on donate page)
if (window.location.pathname.includes('donate.html')) {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Thank you for your support! This is a demonstration site and no real donations are accepted.');
    });
  });
}

// Scroll fade-in animation for sections
function fadeInOnScroll() {
  document.querySelectorAll('.section, .main-section, .highlights, .callout, .why-list, .vision-extra, .events-list').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .main-section, .highlights, .callout, .why-list, .vision-extra, .events-list').forEach(el => {
    el.classList.add('fade-in');
  });
  fadeInOnScroll();
});
// Donation button alert (only on donate page)
if (window.location.pathname.includes('donate.html')) {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Thank you for your support! This is a demonstration site and no real donations are accepted.');
    });
  });
}

// Scroll fade-in animation for sections
function fadeInOnScroll() {
  document.querySelectorAll('.section, .main-section, .highlights, .callout, .why-list, .vision-extra, .events-list').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section, .main-section, .highlights, .callout, .why-list, .vision-extra, .events-list').forEach(el => {
    el.classList.add('fade-in');
  });
  fadeInOnScroll();
});
