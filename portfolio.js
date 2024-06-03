const text = " Hey,I am undergraduate\nfrom Computer\nApplication (BCA)";
const elementMsg = document.querySelector('#msg');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        if (text.charAt(index )=== '\n') {
            elementMsg.innerHTML += '<br>';
        } else {
            elementMsg.innerHTML += text.charAt(index);
        }
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            index = 0;
            elementMsg.innerHTML = "";
            typeWriter();
        }, 2000);
    }
}

window.onload = typeWriter;