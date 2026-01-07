// Page-specific JS: moved from inline index scripts.
// Use DOMContentLoaded to run after includes are loaded.
document.addEventListener('DOMContentLoaded', () => {
  console.log('Main script loaded');

  // Example: run code that depends on DOM elements inserted by includes.
  // If you need to run code after includes are fetched, you can:
  // loadIncludes() returns a Promise if you export it from include.js,
  // or query elements inside a setTimeout/MutationObserver.
});
