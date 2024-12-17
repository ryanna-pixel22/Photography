// These functions are called into each of my HTML Pages, with instructions that allows each page to be interactive. 
// when called with <script src="javascript/include.js"></script> it fetchs the header and the footer 
// Then, it replaces the respective placeholders with each page by the content of the header and footer

// For the header, This script allows a button on the header to be interactive and this icon apears when the screen is smaller than the size of the window.
function includeHeader() {
    fetch('components/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            const toggleButton = document.querySelector('.toggle');
            const menu = document.querySelector('nav ul');

            if (toggleButton && menu) {
                toggleButton.addEventListener('click', () => {
                    menu.classList.toggle('show');
                    document.querySelectorAll('.item').forEach(item => item.classList.toggle('show'));
                });
            }
        })
        .catch(error => {
            console.error('Error fetching the header:', error);
        });
}

function includeFooter() {
    fetch('components/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the footer:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    includeHeader();
    includeFooter();
});