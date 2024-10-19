//consigna de primer preentrega 
function saludar(){
    console.log("Bienvenidos a suavecitos y peluditos!")
}
saludar();

function adoptar() {
    let total = 0;
    let intentos = 1;  // Número de veces que se repetirá el ciclo

    for (let i = 0; i < intentos; i++) {
        let perros = prompt("Ingresa el número de perros que quieres adoptar o escribe 'siguiente' si no deseas adoptar ningun perro:");
        let novedades = prompt("ingresa el número de (conejo,hamster,tortuga) que desea adoptar o escriba 'siguiente' si no desea adoptar ninguna:")
        let gatos = prompt("Ingresa el número de gatos que quieres adoptar o escribe 'finalizar' si no deseas adoptar ningún gato o ninguna mascota:");


        // Verificar si el usuario escribió 'siguiente' para perros o novedades o 'finalizar' para gatos
        let numeroPerros = 0;
        let numeroGatos = 0;
        let numeroNovedades =0;

        if (perros !== null && perros.toLowerCase() !== 'siguiente') {
            numeroPerros = parseFloat(perros);
            if (isNaN(numeroPerros) || numeroPerros < 0) {
                alert("Por favor ingresa un número válido de perros.");
                continue; // Volver a pedir la información en caso de error
            }
        }

        if (novedades !== null && novedades.toLowerCase() !== 'siguiente') {
            numeroNovedades = parseFloat(novedades);
            if (isNaN(numeroNovedades) || numeroNovedades < 0) {
                alert("Por favor ingresa un número válido de mascotas.");
                continue; // Volver a pedir la información en caso de error
            }
        }

        if (gatos === null || gatos.toLowerCase() === 'finalizar') {
            // Si el usuario decide finalizar con los gatos, sumamos los perros y las novedades
            total += numeroPerros;
            total += numeroNovedades;
            break; // Salimos del ciclo
        } else {
            numeroGatos = parseFloat(gatos);
            if (isNaN(numeroGatos) || numeroGatos < 0) {
                alert("Por favor ingresa un número válido de gatos.");
                continue; // Volver a pedir la información en caso de error
            }
        }

        // Sumar el número de perros, novedades y gatos adoptados
        total += numeroPerros + numeroNovedades + numeroGatos;
        console.log("El valor total de adopción hasta ahora es: " + total);
    }

    // Mensaje final después de salir del ciclo
    alert("El total de mascotas que quieres adoptar es: " + total);
}

adoptar();

//consigna de segunda preentrega


// Array para almacenar las mascotas
const mascotas = [];

// Función para agregar una nueva mascota
function agregarMascota() {
  const nombre = prompt('Ingrese el nombre de la mascotas que desea adoptar:');
  const tipo = prompt('Ingrese el tipo de mascota (Perro, Gato, etc.):');
  const edad = parseInt(prompt('Ingrese la edad de la mascota:'));

  // Crear un objeto para la mascota y agregarlo al array
  mascotas.push({ nombre: nombre, tipo: tipo, edad: edad });
}

// Preguntar cuántas mascotas quiere ingresar el usuario
const cantidadMascotas = parseInt(prompt('Ingrese nuevamente la cantidad de mascotas que desea adoptar:'));

// Agregar cada mascota usando un ciclo
for (let i = 0; i < cantidadMascotas; i++) {
  agregarMascota();
}

// Calcula el total de mascotas
const totalMascotas = mascotas.length;

// Muestra la lista de mascotas y el total
console.log('Lista de mascotas:', mascotas);
console.log('Total de mascotas:', totalMascotas);






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
