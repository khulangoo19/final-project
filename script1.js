
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabel');
  const resetButton = document.getElementById('resetButton');
  const filterRadios = document.querySelectorAll('input[type="radio"]');
  const cards = document.querySelectorAll('.card');

  function isInRange(value, rangeStr) {
    if (rangeStr.includes('-')) {
      const [min, max] = rangeStr.split('-').map(Number);
      return value >= min && value <= max;
    } else if (rangeStr.endsWith('-')) {
      const min = parseFloat(rangeStr);
      return value >= min;
    }
    return true;
  }

  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const selectedLife = document.querySelector('input[name="life"]:checked').value;
    const selectedEnergy = document.querySelector('input[name="energy"]:checked').value;
    const selectedPower = document.querySelector('input[name="power"]:checked').value;
    const maxPrice = parseFloat(priceRange.value);

    // Update price label
    priceLabel.textContent = `$0 - $${maxPrice}`;

    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const life = card.dataset.life;
      const price = parseFloat(card.dataset.price);
      const energy = parseFloat(card.dataset.energy);
      const power = parseFloat(card.dataset.power);

      const matchSearch = title.includes(searchTerm);
      const matchLife = selectedLife === "" || life === selectedLife;
      const matchEnergy = selectedEnergy === "" || isInRange(energy, selectedEnergy);
      const matchPower = selectedPower === "" || isInRange(power, selectedPower);
      const matchPrice = price <= maxPrice;

      const show = matchSearch && matchLife && matchPrice && matchEnergy && matchPower;
      card.style.display = show ? 'block' : 'none';
    });
  }

  // Event Listeners
  searchInput.addEventListener('input', filterCards);
  priceRange.addEventListener('input', filterCards);
  filterRadios.forEach(radio => radio.addEventListener('change', filterCards));

  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    priceRange.value = 1500;
    priceLabel.textContent = '$0 - $1500';

    document.querySelectorAll('.filter-group').forEach(group => {
      const allRadio = group.querySelector('input[type="radio"][value=""]');
      if (allRadio) {
        allRadio.checked = true;
        const event = new Event('change');
        allRadio.dispatchEvent(event);
      }
    });

    filterCards();
  });

  filterCards(); // Initial filter
});

function toggleMobileFilters(){
  const panel = document.getElementById("mobileFilters");
  panel.classList.toggle('open');
}


