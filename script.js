// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('appColorScheme'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

window.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (e) {
  if (darkMode == null) {
		const colorScheme = e.matches ? document.body.classList.add("darkmode") : document.body.classList.remove('darkmode');;
		
    darkModeToggle.checked = e.matches;
		}
	});

const enableDarkMode = () => { 
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage  
  localStorage.setItem('appColorScheme', 'dark');
}

const disableDarkMode = () => {  
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('appColorScheme', 'light');
}
 
//alert(prefersDarkScheme.matches);
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'dark') {
  darkModeToggle.checked = true;
  enableDarkMode();
}
if (prefersDarkScheme.matches && darkMode == null) {  
  document.body.classList.add("darkmode");
  darkModeToggle.checked = true;
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  
  //alert(prefersDarkScheme.matches);
  
  // get their darkMode setting
  darkMode = localStorage.getItem('appColorScheme'); 
  
 
  // if it not current enabled, enable it
  if (darkMode !== 'dark') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
