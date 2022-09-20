const button = document.querySelector('#change-color'),
      body = document.querySelector('body');
      
button.onclick = changeBackgroundColor;
function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    body.style.backgroundColor = randomColor;
}