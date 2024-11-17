document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Pharsa’s bird – Verri, is her Husband",
        "Odette's sword is from Lancelott",
        "Philippines hold the most titles in M series.",
        "Indonesia Becomes One Country With Most Player"
    ];

    const button = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');

    button.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factDisplay.textContent = randomFact;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "10px";
    darkModeToggle.style.right = "10px";
    document.body.appendChild(darkModeToggle);

    // Load dark mode preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) document.body.classList.add('dark-mode');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if (!name || !email) {
            event.preventDefault();
            alert("Please fill out both name and email fields.");
        }
    });

    // AJAX request for live facts (mocked as local data for example)
    async function loadFacts() {
        const response = await fetch('facts.json'); // Assume facts.json has additional MLBB facts
        const facts = await response.json();
        // Update factDisplay with new facts on button click
        document.getElementById('factButton').addEventListener('click', () => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById('factDisplay').textContent = randomFact;
        });
    }
    loadFacts().catch(error => console.error("Failed to load facts:", error));
});
