// Sequential animation of feature cards
const cards = document.querySelectorAll('.feature-card');
cards.forEach((card, index) => {
  card.style.animation = `cardUp 0.8s forwards`;
  card.style.animationDelay = `${index * 0.2}s`;
});
