// <!-- THREE.JS BACKGROUND SCRIPT -->

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i < 1000; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(200)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(200)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(200)); // z
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color: 0xffffff });
  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.001;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  //music

  const audio = document.getElementById('bg-music');
  const startButton = document.getElementById('start-button');
  const icon = startButton.querySelector('i');
  
  // Track mute state of the audio (starting with muted)
  let isMuted = true;

  // Function to toggle music and mute/unmute
  startButton.addEventListener('click', () => {
    if (isMuted) {
      // Unmute and play audio
      audio.muted = false;
      audio.play();
      icon.classList.remove('fa-volume-mute'); // Remove mute icon
      icon.classList.add('fa-volume-up'); // Add volume-up icon
    } else {
      // Mute the audio
      audio.muted = true;
      icon.classList.remove('fa-volume-up'); // Remove volume-up icon
      icon.classList.add('fa-volume-mute'); // Add mute icon
    }

    // Toggle mute state
    isMuted = !isMuted;
  });

 // Modal functionality for Certificates
const certificatesIcon = document.querySelector('.sidebar a:nth-child(4)'); // Targets the certificate icon
const modal = document.getElementById('certificates-modal');
const closeBtn = document.querySelector('.close-btn');

// Show modal when clicking the certificates icon
certificatesIcon.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// Modal functionality for Work
const workIcon = document.getElementById('work-link'); // Targets the work icon
const workModal = document.getElementById('work-modal');
const closeWorkBtn = document.querySelector('.close-btn');

// Show modal when clicking the work icon
workIcon.addEventListener('click', () => {
  workModal.style.display = 'flex';
});

// Close modal when clicking the close button
closeWorkBtn.addEventListener('click', () => {
  workModal.style.display = 'none';
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === workModal) {
    workModal.style.display = 'none';
  }
});

// About Modal Functionality
document.getElementById("about-link").addEventListener("click", function() {
  document.getElementById("aboutModal").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.querySelector("#aboutModal .close-btn").addEventListener("click", function() {
  document.getElementById("aboutModal").style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("aboutModal")) {
      document.getElementById("aboutModal").style.display = "none";
      document.body.style.overflow = "auto";
  }
});

// Close with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && document.getElementById("aboutModal").style.display === "flex") {
      document.getElementById("aboutModal").style.display = "none";
      document.body.style.overflow = "auto";
  }
});

// Skills Modal Functionality
document.getElementById("skills-link").addEventListener("click", function() {
  document.getElementById("skillsModal").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.querySelector("#skillsModal .close-btn").addEventListener("click", function() {
  document.getElementById("skillsModal").style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("skillsModal")) {
      document.getElementById("skillsModal").style.display = "none";
      document.body.style.overflow = "auto";
  }
});

// Close with ESC key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && document.getElementById("skillsModal").style.display === "flex") {
      document.getElementById("skillsModal").style.display = "none";
      document.body.style.overflow = "auto";
  }
});

// Project Carousel with 2-second Auto-Slide
let currentSlide = 0;
const slides = document.querySelectorAll('.project-card');
const dots = document.querySelectorAll('.nav-dot');
let slideInterval;

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });
  
  // Reset all dots
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  slides[index].classList.add('active');
  setTimeout(() => {
    slides[index].style.opacity = '1';
  }, 50);
  
  // Activate current dot
  dots[index].classList.add('active');
  
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Start auto-sliding every 2 seconds
function startCarousel() {
  slideInterval = setInterval(nextSlide, 2000); // 2000ms = 2 seconds
}

// Initialize carousel when modal opens
document.getElementById('project-link').addEventListener('click', () => {
  document.getElementById('projectModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  showSlide(0);
  startCarousel();
});

// Dot navigation
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(parseInt(dot.getAttribute('data-index')));
    startCarousel();
  });
});

// Pause on hover
const carousel = document.querySelector('.project-carousel');
carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
carousel.addEventListener('mouseleave', startCarousel);

// Close modal
document.querySelector('#projectModal .close-btn').addEventListener('click', () => {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  clearInterval(slideInterval);
});