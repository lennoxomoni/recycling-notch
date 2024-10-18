document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.getElementById("features-container");
    const loadFeaturesButton = document.getElementById("load-features");
    const clearFeaturesButton = document.getElementById("clear-features");
    const form = document.querySelector("form");
    const messageDiv = document.getElementById("message");

    // Fetch data from db.json
    const fetchFeatures = async () => {
        try {
            const response = await fetch('db.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            displayFeatures(data.features);
        } catch (error) {
            console.error("Failed to fetch features:", error);
            messageDiv.textContent = "Failed to load features.";
        }
    };

    // Display features in the container
    const displayFeatures = (features) => {
        featuresContainer.innerHTML = ''; // Clear previous features
        features.forEach(feature => {
            const featureDiv = document.createElement('div');
            featureDiv.classList.add('feature');
            featureDiv.innerHTML = `
                <h3>${feature.name}</h3>
                <p>${feature.description}</p>
                <p><strong>Category:</strong> ${feature.category}</p>
            `;
            featuresContainer.appendChild(featureDiv);
        });
    };

    // Event listener for loading features
    loadFeaturesButton.addEventListener("click", fetchFeatures);

    // Event listener for clearing features
    clearFeaturesButton.addEventListener("click", () => {
        featuresContainer.innerHTML = ''; // Clear the features
    });

    // Event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        form.reset(); // Reset the form
    });

    // Event listener for a custom button (example: info alert)
    document.getElementById("info-button").addEventListener("click", () => {
        alert("Recycling helps reduce waste and conserve resources!");
    });
});
