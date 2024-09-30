//consigna de primer preentrega 
function saludar(){
    console.log("Bienvenidos a suavecitos y peluditos!")
}
saludar();

function adoptar() {
    let total = 0;
    let intentos = 1; 

    for (let i = 0; i < intentos; i++) {
        let perros = prompt("Ingresa el número de perros que quieres adoptar o escribe 'siguiente' si no deseas adoptar ningun perro:");
        let gatos = prompt("Ingresa el número de gatos que quieres adoptar o escribe 'finalizar' si no deseas adoptar ningún gato o ninguno de los dos:");

        let numeroPerros = 0;
        let numeroGatos = 0;

        if (perros !== null && perros.toLowerCase() !== 'siguiente') {
            numeroPerros = parseFloat(perros);
            if (isNaN(numeroPerros) || numeroPerros < 0) {
                alert("Por favor ingresa un número válido de perros.");
                continue; 
            }
        }
        if (gatos === null || gatos.toLowerCase() === 'finalizar') {
            total += numeroPerros;
            break; 
        } else {
            numeroGatos = parseFloat(gatos);
            if (isNaN(numeroGatos) || numeroGatos < 0) {
                alert("Por favor ingresa un número válido de gatos.");
                continue; 
            }
        }
        total += numeroPerros + numeroGatos;
        console.log("El valor total de adopción hasta ahora es: " + total);
    }

    alert("El total de mascotas que quieres adoptar es: " + total);
}

adoptar();





//carousel
const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e =>moveToLeft())
btnRight.addEventListener("click", e =>moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);
let operacion = 0;
    counter = 0;
    widthImg = 100 / sliderSection.length;

function moveToRight(){
    if (counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    } else{
        counter++;

        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
}
}
function moveToLeft(){
    counter--;
    if (counter < 0){
        counter = sliderSection.length-1;
        operacion =widthImg  * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    } else{

    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    }
}

const bloque = document.querySelectorAll('.bloque')
const h3 = document.querySelectorAll('.h3')

h3.forEach( (cadaH3 , i )=>{
    h3[i].addEventListener('click', ()=>{

    bloque.forEach( (cadaBloque , i )=>{
        bloque[i].classList.remove('activo')
    })
    bloque[i].classList.add('activo')
})

})
