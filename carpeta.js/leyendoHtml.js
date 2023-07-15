const h1 = document.querySelector( 'h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const toty = document.querySelector('.toty')
console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,

})

h1.innerHTML = "Patito <br> Feo"
h1.innerText = "ppp"
// console.log(toty.getAttribute('pantalla'))
// toty.setAttribute('pantalla','monitor') 
toty.classList.add('tilin')
toty.classList.remove('tilin')
// toty.classList.toggle('tilin')
console.log(toty.classList.contains('tilin'))
input.value = "123"
//////////Crear elementos desde 0
const img = document.createElement('img')
img.src= "https://pbs.twimg.com/media/FfyTmOqXoAIEdnW.jpg:large"
pid.innerHTML= "Boca Campeon"
pid.appendChild(img)