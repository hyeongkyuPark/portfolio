
function percentBarCharge() {
    let skills = document.querySelectorAll('.skills-item');
    const { innerHeight } = window;
    skills.forEach(element => {
        if(element.getBoundingClientRect().top < innerHeight -50) {
            let percent = element.childNodes[1].childNodes[1].childNodes[3].innerText;
            let textBox = element.childNodes[1].childNodes[1];
            let bar = element.childNodes[3].childNodes[1];

            textBox.style.width = percent;
            textBox.style.opacity = 1;
            bar.style.width = percent;
            bar.style.opacity = 1;
        }
    });
}

percentBarCharge();

window.addEventListener('scroll', percentBarCharge);