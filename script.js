// Tab switching
function showTab(tabName, el) {
  document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  el.classList.add("active");
  
  if (tabName === 'stats') {
    updateStats();
  }
}

// Toggle day expansion/collapse
function toggleDay(header) {
  const day = header.parentElement;
  header.classList.toggle("collapsed");
  day.classList.toggle("collapsed");
}

// Toggle item completion
function toggleItem(item) {
  item.classList.toggle("completed");
  updateStats();
}

// Update statistics
function updateStats() {
  const allItems = document.querySelectorAll('.item');
  const completedItems = document.querySelectorAll('.item.completed');
  const mealsItems = document.querySelectorAll('.item:has(> span:nth-child(2):contains("Ăn"), > span:nth-child(2):contains("uống"))');
  const travelItems = document.querySelectorAll('.item:has(> span:nth-child(2):contains("Di chuyển"), > span:nth-child(2):contains("Bay"))');
  
  // Count meals and travel items
  let mealsCount = 0;
  let travelCount = 0;
  
  allItems.forEach(item => {
    const text = item.querySelector('span:nth-child(2)').textContent;
    if (text.includes('Ăn') || text.includes('uống')) {
      mealsCount++;
    }
    if (text.includes('Di chuyển') || text.includes('Bay') || text.includes('bay')) {
      travelCount++;
    }
  });
  
  document.getElementById('total-activities').textContent = allItems.length;
  document.getElementById('completed-count').textContent = completedItems.length;
  document.getElementById('meals-count').textContent = mealsCount;
  document.getElementById('travel-count').textContent = travelCount;
}

// Load images from JSON
const gallery = document.getElementById("gallery");

fetch("images.json")
  .then(res => res.json())
  .then(images => {
    images.forEach(img => {
      const el = document.createElement("img");
      el.src = "images/" + img;
      el.alt = img;
      el.onclick = (e) => {
        e.stopPropagation();
        openLightbox(el.src);
      };
      gallery.appendChild(el);
    });
  })
  .catch(err => console.error(err));

// Lightbox functions
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Initialize stats on load
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
});