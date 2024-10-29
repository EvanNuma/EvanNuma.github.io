function loadHTML(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
      });
  }
  
  loadHTML('header.html', 'header');
  loadHTML('main.html', 'main');
  loadHTML('footer.html', 'footer');
