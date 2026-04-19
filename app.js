function toggleProjects() {
  const moreProjects = document.getElementById('moreProjects');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');

  if (moreProjects.classList.contains('hidden')) {
    // Show more projects
    moreProjects.classList.remove('hidden');
    btnText.textContent = 'View Less';
    btnIcon.style.transform = 'rotate(180deg)';
  } else {
    // Hide projects
    moreProjects.classList.add('hidden');
    btnText.textContent = 'View More Projects';
    btnIcon.style.transform = 'rotate(0deg)';

    // Scroll back to projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    setTimeout(() => {
      mobileMenu.classList.toggle('active');
    }, 10);
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }