// app.js
// Register the service worker (relative path works on Netlify/GitHub Pages)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service Worker registered:', reg);
      // Optional visual cue
      showStatus('Service Worker registered ✅');
    } catch (err) {
      console.error('Service Worker registration failed:', err);
      showStatus('Service Worker registration failed ❌');
    }
  });
}

function showStatus(text) {
  const p = document.getElementById('demoMessage');
  if (p) p.textContent = text;
}

// Demo button functionality
const demoBtn = document.getElementById('demoBtn');
const demoMessage = document.getElementById('demoMessage');

if (demoBtn && demoMessage) {
  demoBtn.addEventListener('click', () => {
    const messages = [
      '🚀 JavaScript is working!',
      '🎉 You clicked the button!',
      '✨ PWA demo in action!',
      '✅ This proves the JS file is connected.'
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    demoMessage.textContent = msg;
  });
}




