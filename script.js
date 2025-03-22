const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const accessKey = "IlK6yWZaJHhLDIlvo9PXC2DzwTebu_NIn0fNqQ3fiN8";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Clear results on new search
        if (page === 1) {
            searchResult.innerHTML = "";
        }

        // Loop through results and display images
        data.results.forEach(image => {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("image-item"); // New class for styling
        
            const imgElement = document.createElement("img");
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description || "Unsplash Image";
            imgElement.loading = "lazy"; // Lazy load for performance
        
            imgContainer.appendChild(imgElement);
            searchResult.appendChild(imgContainer);
        });
        
        // Show 'Show More' button if more pages are available
        if (page < data.total_pages) {
            showMoreBtn.style.display = "block";
        } else {
            showMoreBtn.style.display = "none";
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Search on form submit
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Show more results
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
