document.addEventListener("DOMContentLoaded", function () {
  const date = new Date();
  let year = date.getFullYear();
  document.getElementById("current-year").innerHTML = year;
});

function switchLang() {

  const enParagraphs = document.querySelectorAll('.en');
  const plParagraphs = document.querySelectorAll('.pl');

  const areVisible = enParagraphs[0].style.display !== 'none';

  if (areVisible) {
    document.getElementById('lang-btn').innerText = 'EN';

    enParagraphs.forEach(paragraph => {
      paragraph.style.display = 'none';
    });

    plParagraphs.forEach(paragraph => {
      paragraph.style.display = 'block';
    });

	localStorage.setItem('lang', 'pl');

  } else {
    document.getElementById('lang-btn').innerText = 'PL';

    enParagraphs.forEach(paragraph => {
      paragraph.style.display = 'block';
    });

    plParagraphs.forEach(paragraph => {
      paragraph.style.display = 'none';
    });

	localStorage.setItem('lang', 'en');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';

  const enParagraphs = document.querySelectorAll('.en');
  const plParagraphs = document.querySelectorAll('.pl');

  if (savedLang === 'pl') {
    document.getElementById('lang-btn').innerText = 'EN';
    enParagraphs.forEach(p => p.style.display = 'none');
    plParagraphs.forEach(p => p.style.display = 'block');
  } else {
    document.getElementById('lang-btn').innerText = 'PL';
    enParagraphs.forEach(p => p.style.display = 'block');
    plParagraphs.forEach(p => p.style.display = 'none');
  }
});

function showDropMenu() {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("show");

  dropdown.style.left = '';
  dropdown.style.right = '';

  const rect = dropdown.getBoundingClientRect();
  const windowWidth = window.innerWidth;

  if (rect.right > windowWidth) {
    dropdown.style.left = 'auto';
    dropdown.style.right = '0';
  }
}

window.onclick = function(event) {
  if (!event.target.matches('#drop-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
