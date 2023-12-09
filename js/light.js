function toggleRedLight(clickedButton) {
    const redLight = document.getElementById('redLight');
    const toggleButton = document.getElementById('toggleButton');
    redLight.classList.toggle('active-light');
    toggleButton.disabled = true;
    buttons.forEach(function(button) {
        if (button !== clickedButton) {
            button.disabled = true;
        }
    });
    
}
function toggleRedLight2(clickedButton) {
    const redLight = document.getElementById('redLight2');
    const toggleButton = document.getElementById('toggleButton2');
    redLight.classList.toggle('active-light');
    toggleButton.disabled = true;
    document.getElementById("demo").innerHTML = "Hello World!";
    buttons.forEach(function(button) {
        if (button !== clickedButton) {
            button.disabled = true;
        }
    });
    
}
function toggleRedLight3() {
    const redLight = document.getElementById('redLight3');
    const toggleButton = document.getElementById('toggleButton3');
    redLight.classList.toggle('active-light');
    toggleButton.disabled = true;
    
}
function toggleRedLight4() {
    const redLight = document.getElementById('redLight4');
    const toggleButton = document.getElementById('toggleButton4');
    redLight.classList.toggle('active-light');
    toggleButton.disabled = true;
    
}
function toggleRedLight5() {
    const redLight = document.getElementById('redLight5');
    const toggleButton = document.getElementById('toggleButton5');
    redLight.classList.toggle('active-light');
    toggleButton.disabled = true;
    
}
