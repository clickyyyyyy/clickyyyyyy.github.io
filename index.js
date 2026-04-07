let gem = document.querySelector('.gem-cost')
let clickerCost = document.querySelector('.clicker-cost') // Added the dot

function incrementGem() {
  gem.innerHTML = parseFloat(gem.innerHTML) + 1
}

function buyClicker() {
  const currentGems = parseFloat(gem.innerHTML);
  const cost = parseFloat(clickerCost.innerHTML);

  if (currentGems >= cost) {
    gem.innerHTML = currentGems - cost; // Perform arithmetic on numbers
  }
}