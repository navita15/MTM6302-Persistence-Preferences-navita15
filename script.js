// Retrieve elements
const colorPicker = document.getElementById('color-picker');
const listStyle = document.getElementById('list-style');
const imageDropdown = document.getElementById('image-dropdown');
const sampleList = document.getElementById('sample-list');

// Function to load preferences from localStorage
function loadPreferences() {
    const color = localStorage.getItem('themeColor');
    const style = localStorage.getItem('listStyle');
    const image = localStorage.getItem('backgroundImage');

    if (color) {
        document.body.style.backgroundColor = color;
        colorPicker.value = color;
    }
    if (style) {
        listStyle.value = style;
        applyListStyle(style);
    }
    if (image) {
        imageDropdown.value = image;
        document.body.style.backgroundImage = `url(${image})`;
    }
}

// Function to save preferences to localStorage
function savePreferences() {
    localStorage.setItem('themeColor', colorPicker.value);
    localStorage.setItem('listStyle', listStyle.value);
    localStorage.setItem('backgroundImage', imageDropdown.value);
}

// Function to apply list style
function applyListStyle(style) {
    sampleList.className = ''; // Reset class
    sampleList.classList.add(style);
}

// Event listeners for preferences changes
colorPicker.addEventListener('change', () => {
    document.body.style.backgroundColor = colorPicker.value;
    savePreferences();
});

listStyle.addEventListener('change', () => {
    const style = listStyle.value;
    applyListStyle(style);
    savePreferences();
});

imageDropdown.addEventListener('change', () => {
    document.body.style.backgroundImage = `url(${imageDropdown.value})`;
    savePreferences();
});

// Populate image dropdown with example images
function populateImageDropdown() {
    const images = [
        'https://via.placeholder.com/800x600.png?text=Image+1',
        'https://via.placeholder.com/800x600.png?text=Image+2',
        'https://via.placeholder.com/800x600.png?text=Image+3'
    ];

    images.forEach(image => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = image.split('?')[1];
        imageDropdown.appendChild(option);
    });
}

// Load preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    populateImageDropdown();
    loadPreferences();
});
