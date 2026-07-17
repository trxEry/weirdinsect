const eye = document.getElementById('eye');
const content = document.getElementById('content');
const numbers = document.getElementById('numbers');

// Simulate the eye appearing after a few seconds
setTimeout(() => {
  eye.classList.add('open');
  content.classList.add('open');
  numbers.classList.add('open');
}, 5000);

// Simulate subtle movement
setInterval(() => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  eye.style.transform = translate(${randomX}px, ${randomY}px) scale(0.5);
}, 2000);
