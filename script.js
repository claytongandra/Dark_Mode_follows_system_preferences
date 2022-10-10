// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('appColorScheme');

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const imageForDisplayLight = document.getElementById('imageForDisplayLight');
const imageForDisplayDark = document.getElementById('imageForDisplayDark');

const toggleImageDisplaySetting = (prmIsDark) => {
  if (prmIsDark) {
    imageForDisplayLight.style.display = 'none';
    imageForDisplayDark.style.display = 'block';
  } else {
    imageForDisplayDark.style.display = 'none';
    imageForDisplayLight.style.display = 'block';
  }
};

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', function (e) {
    if (darkMode == null) {
      const colorScheme = e.matches
        ? document.body.classList.add('darkmode')
        : document.body.classList.remove('darkmode');

      darkModeToggle.checked = e.matches;

      toggleImageDisplaySetting(e.matches);
    }
  });

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('appColorScheme', 'dark');

  toggleImageDisplaySetting(true);
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('appColorScheme', 'light');

  toggleImageDisplaySetting(false);
};

//alert(prefersDarkScheme.matches);
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'dark') {
  darkModeToggle.checked = true;
  enableDarkMode();
}
if (prefersDarkScheme.matches && darkMode == null) {
  document.body.classList.add('darkmode');
  darkModeToggle.checked = true;

  toggleImageDisplaySetting(true);
  //imageForDisplayLight.style.display = 'none';
  //imageForDisplayDark.style.display = 'block';
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  //alert(prefersDarkScheme.matches);

  // get their darkMode setting
  darkMode = localStorage.getItem('appColorScheme');

  // if it not current enabled, enable it
  //if (darkMode !== 'dark') {
  if (darkModeToggle.checked) {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
