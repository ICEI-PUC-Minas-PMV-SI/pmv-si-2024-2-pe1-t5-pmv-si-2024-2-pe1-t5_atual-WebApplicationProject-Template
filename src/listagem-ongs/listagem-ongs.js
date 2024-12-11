const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
const searchBar = document.querySelector(".search-bar input");
const resultItems = document.querySelectorAll(".result-item");

function filterByCategory() {
  const selectedCategories = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.nextElementSibling.textContent.trim());

  resultItems.forEach((item) => {
    const category = item.querySelector(".title").textContent.trim();
    item.style.display = selectedCategories.includes(category) ? "" : "none";
  });
}

function searchResults() {
  const searchText = searchBar.value.toLowerCase();
  resultItems.forEach((item) => {
    const title = item.querySelector(".title").textContent.toLowerCase();
    const description = item.querySelector(".description").textContent.toLowerCase();
    item.style.display = title.includes(searchText) || description.includes(searchText) ? "" : "none";
  });
}

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", filterByCategory));
searchBar.addEventListener("input", debounce(searchResults, 300));
