function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Computer Science Resume.pdf';
    link.download = 'Computer Science Resume.pdf';
    link.target = '_blank';
    link.click();
}

const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top when Home link is clicked
document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                form.reset();
            }
        })
        .catch(error => {
            alert('Something went wrong. Please try again.');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const heroName = document.getElementById("hero-name");
    const heroTagline = document.getElementById("hero-tagline");
    const profileImg = document.querySelector(".profile-img");

    let nameText = heroName.textContent;
    heroName.textContent = "";
    let index = 0;

    function typeName() {
        if (index < nameText.length) {
            heroName.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeName, 100);
        } else {
            fadeInTagline();
        }
    }

    function fadeInTagline() {
        heroTagline.style.opacity = 1;
        heroTagline.textContent = "Web Developer | Problem Solver | Lifelong Learner";
        fadeInImage();
    }

    function fadeInImage() {
        profileImg.style.opacity = 1;
    }

    typeName();

    // Mousemove effect to move the image
    document.addEventListener("mousemove", function(e) {
        const x = (e.clientX / window.innerWidth) - 0.5; // Mouse X position
        const y = (e.clientY / window.innerHeight) - 0.5; // Mouse Y position

        // Move the image slightly based on mouse movement
        profileImg.style.transform = `translate(${x * 30}px, ${y * 30}px)`; // Adjust multiplier for sensitivity
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const heroName = document.getElementById("hero-name");
    const heroTagline = document.getElementById("hero-tagline");
    const profileImg = document.querySelector(".profile-img");

    let nameText = heroName.textContent;
    heroName.textContent = "";
    let index = 0;

    function typeName() {
        if (index < nameText.length) {
            heroName.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeName, 100);
        } else {
            fadeInTagline();
        }
    }

    function fadeInTagline() {
        heroTagline.style.opacity = 1;
        heroTagline.textContent = "Web Developer | Problem Solver | Lifelong Learner";
        fadeInImage();
    }

    function fadeInImage() {
        profileImg.style.opacity = 1;
    }

    typeName();

    // Mousemove effect to move the image
    document.addEventListener("mousemove", function(e) {
        const x = (e.clientX / window.innerWidth) - 0.5; // Mouse X position
        const y = (e.clientY / window.innerHeight) - 0.5; // Mouse Y position

        // Move the image slightly based on mouse movement
        profileImg.style.transform = `translate(${x * 30}px, ${y * 30}px)`; // Adjust multiplier for sensitivity
    });
});
