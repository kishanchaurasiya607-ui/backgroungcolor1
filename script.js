let btn = document.querySelector('button');
btn.addEventListener('click', genCol);
let colVal = "0123456789ABCDEF"

function genCol() {
        let div = document.querySelector('.color-box');
        let color = document.querySelector('#color');
        let genColor = ""
        for(let i = 0; i < 6; i++){
                let color = Math.floor(Math.random() * 16);
                genColor  += colVal.charAt(color);
             }
        
            div.style.backgroundColor = `#${genColor}`;
            color.innerHTML = `Color: #${genColor}`
        }
        
        window.addEventListener("load", genCol);
        
        
        
