function init() {
  // Get the necessary DOM elements
  const button = document.getElementById('entrybutton');
  const input = document.getElementById('entryinput');
  const output = document.getElementById('textoutput');

  // Add click event listener to the "Alert Me" div
  button.addEventListener('click', function () {
    const inputValue = input.value;

    // Show alert with your name and the input value
    alert("Your Name: " + inputValue);

    // Update the h2 text to be the input value only
    output.textContent = inputValue;
  });
}

window.addEventListener('load', init);
