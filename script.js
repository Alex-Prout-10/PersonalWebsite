/* --- 1. TYPEWRITER EFFECT --- */
// This will make your "Front-End Developer" text type out letter by letter

const subtitleElement = document.querySelector('.hero-text h2');
const textToType = "Full-Stack Developer.";
let index = 0;

// Clear the initial HTML text so the script can type it out freshly
if (subtitleElement) {
    subtitleElement.textContent = '';

    function typeWriter() {
        // As long as we haven't reached the end of the word, keep typing
        if (index < textToType.length) {
            subtitleElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // 100 milliseconds delay between each letter
        }
    }

    // Start the effect as soon as the page loads
    window.onload = () => {
        typeWriter();
    };
}

/* --- 2. 3D HOVER TILT EFFECT --- */
// This makes the profile image subtly track the user's mouse movement

/* --- 2. 3D HOVER TILT EFFECT --- */
// This makes the profile image subtly track the user's mouse movement
const heroPhoto = document.querySelector('.hero-photo img');
const heroContainer = document.querySelector('#hero .glass-container'); // Targets only the top glass box

if (heroPhoto && heroContainer) {
    // Listen for the mouse moving ONLY inside the hero glass container
    heroContainer.addEventListener('mousemove', (event) => {
        const xAxis = (window.innerWidth / 2 - event.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - event.pageY) / 30;

        heroPhoto.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // When the mouse leaves the glass container, snap the image back to normal smoothly
    heroContainer.addEventListener('mouseleave', () => {
        heroPhoto.style.transform = `rotateY(0deg) rotateX(0deg)`;
        heroPhoto.style.transition = "transform 0.5s ease"; 
    });

    // Remove the smooth transition while actively moving so there is no lag
    heroContainer.addEventListener('mouseenter', () => {
        heroPhoto.style.transition = "none";
    });
}






