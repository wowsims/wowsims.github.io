function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
      // initializeCustomDropdownHandling();
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function() {
  document.getElementsByTagName('body')[0].classList.add('ready');
});
