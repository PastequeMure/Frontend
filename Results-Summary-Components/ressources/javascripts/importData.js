document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data
    fetch('./ressources/data/data.json')
        .then(response => response.json())
        .then(categories => {
            // Display categories in HTML
            const categoriesList = document.getElementById("categories");
            let index = 1; // Initialize the index

            categories.forEach(category => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <img src="${category.icon}" alt="${category.category}">
                    <span>${category.category}</span>
                    <p>${category.score}</p>
                    <small>/100</small>
                `;
                listItem.classList.add(`item-${index}`); // Add unique class
                categoriesList.appendChild(listItem);
                index++; // Increment the index
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
