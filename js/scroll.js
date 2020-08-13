const state = {
    mainNav: 'home-nav'
};

function mainNavSelected() {
    const mainNavItems = document.getElementsByClassName('main-nav-item');
    const selectedNav = document.getElementById(state.mainNav);
    
    for(item of mainNavItems) {
        item.className = 'main-nav-item';
    }

    selectedNav.className = 'main-nav-item selected-nav';
}
function mainNavScroll() {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const resume = document.getElementById('resume');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');

    if(home.getBoundingClientRect().top <= 250) {
        state.mainNav = 'home-nav';
    }
    if(about.getBoundingClientRect().top <= 250) {
        state.mainNav = 'about-nav';
    }
    if(resume.getBoundingClientRect().top <= 250) {
        state.mainNav = 'resume-nav';
    }
    if(skills.getBoundingClientRect().top <= 250) {
        state.mainNav = 'skills-nav';
    }
    if(projects.getBoundingClientRect().top <= 250) {
        state.mainNav = 'projects-nav';
    }

}

function headerPositionFixed() {
    const header = document.getElementById('main-header');
    const home = document.getElementById('home');

    if(home.getBoundingClientRect().top < -390) {
        header.style.position = 'fixed';
    } else {
        header.style.position = 'absolute';
    }
}

function headerPositionAnimation() {
    const header = document.getElementById('main-header');
    const home = document.getElementById('home');

    if(home.getBoundingClientRect().top > -390 && home.getBoundingClientRect().top < -100) {
        header.style.transform = 'translateY(-70px)';
    } else {
        header.style.transform = 'translateY(0px)';
    }
}

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top < innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
  }

  function scrollNavTo(el) {
        let elId = el.innerText.toLowerCase();
        let offsetTop = document.getElementById(elId).offsetTop;

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: offsetTop-100
        })
  }

  for(let item of document.getElementsByClassName('main-nav-item')) {
      item.addEventListener('click', function() {
        scrollNavTo(item);
      });
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', headerPositionFixed);
  window.addEventListener('scroll', headerPositionAnimation);
  window.addEventListener('scroll', mainNavScroll);
  window.addEventListener('scroll', mainNavSelected);