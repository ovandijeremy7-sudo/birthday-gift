function celebrate() {
  document.getElementById('surprise').classList.remove('hidden');

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({ particleCount: 100, spread: 120, origin: { x: 0.1 } });
    confetti({ particleCount: 100, spread: 120, origin: { x: 0.9 } });
  }, 300);
}
