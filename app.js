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