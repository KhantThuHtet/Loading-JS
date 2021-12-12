let loading = document.getElementsByClassName('loading')[0];
let container = document.getElementsByClassName('container')[0];

window.onload = function () {
  document.getElementsByTagName('body')[0].style.opacity = '0';
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName("body")[0].style.opacity = "1";
  }, 500);
};