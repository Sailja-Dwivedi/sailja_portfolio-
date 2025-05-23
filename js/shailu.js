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

// Connect Me Form Functionality
document.getElementById('connect-link').addEventListener('click', function() {
  document.getElementById('connectModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send the data to a server
  // For demo, we'll just show a success message
  console.log('Form submitted:', { name, email, subject, message });
  
  // Show success message
  const successMsg = document.createElement('div');
  successMsg.className = 'form-success';
  successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent.';
  this.parentNode.appendChild(successMsg);
  
  // Reset form
  this.reset();
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 5000);
});

// Close modal
document.querySelector('#connectModal .close-btn').addEventListener('click', function() {
  document.getElementById('connectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Close when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('connectModal')) {
    document.getElementById('connectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Message from ${name}</h3>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Message sending failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

