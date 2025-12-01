
let btn = document.querySelector('button');   
function genColor(){

    let r=Math.floor(Math.random()*256)
    
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let color=`rgb(${r},${g},${b})`
   
    
    let colora = document.querySelector('.color-box')
     colora.style.backgroundColor=color
   
      
}

btn.addEventListener('click', genColor);
window.addEventListener('load', genColor);



