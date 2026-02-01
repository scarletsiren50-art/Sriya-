// script.js
const memories = [];

for (let i = 1; i <= 31; i++) {
  memories.push({
    photo: `assets/images/pic${i}.jpg`,
    caption: `Memory ${i} – One more smile captured 💖`
  });
}

const track = document.getElementById('carouselTrack');
let currentIndex = 0;

function renderCarousel() {
  track.innerHTML = '';
  memories.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'carousel-item';
    card.innerHTML = `
      <img src="${item.photo}" alt="Memory ${i + 1}">
      <div class="caption">${item.caption}</div>
    `;
    track.appendChild(card);
  });
  updateCarousel();
}

function updateCarousel() {
  const offset = currentIndex * 320;
  track.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  if (currentIndex < memories.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
