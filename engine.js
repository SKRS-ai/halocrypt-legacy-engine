const vortex = document.getElementById('gauge-scroll');

// Generate Years from 1776 to 2026
for (let year = 2026; year >= 1776; year--) {
    const node = document.createElement('div');
    node.className = 'year-node';
    node.innerText = year;
    node.dataset.year = year;
    vortex.appendChild(node);
}

// Intercept scroll to update 3D "Graveyard" focus
vortex.addEventListener('scroll', () => {
    const nodes = document.querySelectorAll('.year-node');
    let closest = null;
    let minDistance = Infinity;

    nodes.forEach(node => {
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
        
        if (distance < minDistance) {
            minDistance = distance;
            closest = node;
        }
        node.classList.remove('active');
    });

    if (closest) {
        closest.classList.add('active');
        updateGraveyardFocus(closest.dataset.year);
    }
});

function updateGraveyardFocus(year) {
    console.log(`Focusing on temporal legacies of: ${year}`);
    // This is where we trigger the 3D CSS transforms 
    // to bring the "Prostates" of that year forward.
}
