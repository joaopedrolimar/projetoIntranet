// script.js

// Função para carregar o conteúdo da página usando Ajax
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').innerHTML = data;
            updatePageTitle(url);
            window.history.pushState({ path: url }, '', url);
        })
        .catch(error => console.error('Error loading page:', error));
}
