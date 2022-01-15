var input = document.querySelector("#char");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
  
  console.log(char);
    var pattern = '[a-zA-Z0-9]';
    if (char.match(pattern)) {
      return true;
  }
}