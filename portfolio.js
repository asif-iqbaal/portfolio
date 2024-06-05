const text = " Hey,I am undergraduate\nfrom Computer\nApplication (BCA).";
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

window.addEventListener('resize',moveHeaderOnResize);
window.addEventListener('DOMContentLoaded',moveHeaderOnResize);

function moveHeaderOnResize(){
    const header = document.querySelector('.nav2');
    const footer = document.querySelector('#foot');
    if(window.innerWidth <= 700){
        if(!footer.contains(header)){
            footer.appendChild(header);
        }
    }else{
         if(!document.header.firstElementChild.contains(header)){
            document.header.insertBefore(header,document.body.firstChild);
         }
    }
}