const bioBox = document.getElementById('bio-box');
const skillsBox = document.getElementById('skills-box');
const workBox = document.getElementById('work-box');
const contactBox = document.getElementById('contact-box');
const extendedBox1 = document.getElementById('extended-box1');
const extendedBox2 = document.getElementById('extended-box2');
const extendedBox3 = document.getElementById('extended-box3');
const extendedBox4 = document.getElementById('extended-box4');
const bioTitle = document.getElementById('title-box-bio');
const skillsTitle = document.getElementById('title-box-skills');
const workTitle = document.getElementById('title-box-work');
const contactTitle = document.getElementById('title-box-contact');

bioBox.addEventListener('click', () => {
    extendedBox1.classList.toggle('visible');
    bioTitle.classList.toggle("rotate");

    if (extendedBox1.classList.contains('visible')) {
        bioBox.style.borderRight = 'none';
    } else {
        bioBox.style.borderRight = 'outset #fff';
    }

//    hideBoxes(extendedBox1, bioTitle, bioBox);
});

skillsBox.addEventListener('click', () => {
    extendedBox2.classList.toggle('visible');
    skillsTitle.classList.toggle("rotate");

    if (extendedBox2.classList.contains('visible')) {
        skillsBox.style.borderRight = 'none';
    } else {
        skillsBox.style.borderRight = 'outset #fff';
    }

//    hideBoxes(extendedBox2, skillsTitle, skillsBox);
});

workBox.addEventListener('click', () => {
    extendedBox3.classList.toggle('visible');
    workTitle.classList.toggle("rotate");

    if (extendedBox3.classList.contains('visible')) {
        workBox.style.borderRight = 'none';
    } else {
        workBox.style.borderRight = 'outset #fff';
    }

//    hideBoxes(extendedBox3, workTitle, workBox);
});

contactBox.addEventListener('click', () => {
    extendedBox4.classList.toggle('visible');
    contactTitle.classList.toggle("rotate");

    if (extendedBox4.classList.contains('visible')) {
        contactBox.style.borderRight = 'none';
    } else {
        contactBox.style.borderRight = 'outset #fff';
    }

//    hideBoxes(extendedBox4, contactTitle, contactBox);
});

/* function hideBoxes(box, title, smallBox) {
    const boxes = document.querySelectorAll('.extended-box');
    const smallBoxes = document.querySelectorAll('.box');
    const titles = document.querySelectorAll('.box-title');
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove('visible');
      }
    });
    titles.forEach((otherTitle) => {
        if (otherTitle !== title) {
            otherTitle.classList.remove('rotate');
        }
    });
    smallBoxes.forEach((otherSmallBox) => {
        if (otherSmallBox !== smallBox) {
            otherSmallBox.style.borderRight = 'outset #fff';
        }
    });
} */
