// This the javascript to for my header and footer. This will allow the header and footer functions to work properly

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