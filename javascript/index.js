
//carousel


const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".slider-section");
const mainIndex = document.getElementById("main-index");





let operacion = 0;
let counter = 0;
const widthImg = 100 / sliderSections.length;
let timeoutId = '';

function moveToRight() {
    if (counter >= sliderSections.length - 1) {
        counter = 0;
        operacion = 0;
    } else {
        counter++;
        operacion += widthImg;
    }
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = counter === 0 ? "none" : "all ease .6s";
    resetTimeout();
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSections.length - 1;
        operacion = widthImg * (sliderSections.length - 1);
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "none";
    } else {
        operacion -= widthImg;
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
    resetTimeout();
}

function resetTimeout() {
    if(timeoutId != ''){
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(moveToRight, 3000); 
}



const bloques = document.querySelectorAll('.bloque');
const h3 = document.querySelectorAll('.h3');

h3.forEach((cadaH3, i) => {
    cadaH3.addEventListener('click', () => {
        bloques.forEach((cadaBloque) => {
            cadaBloque.classList.remove('activo');
        });
        bloques[i].classList.add('activo');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if(mainIndex){
        btnLeft.addEventListener("click", () => moveToLeft());
        btnRight.addEventListener("click", () => moveToRight());
        resetTimeout();
    }
});


//Pagina de Contacto 

const mainContacto = document.getElementById("main-contacto");

if(mainContacto){
        mainContacto.addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        
    Toastify({
        text: "¡Formulario enviado con éxito!",
        duration: 2000, 
        gravity: "top", 
        position: "right", 
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", 
        stopOnFocus: true 
    }).showToast();
    
        
        document.getElementById("formulario-adopcion").reset(); 
    });
    
}


//Mascotas


const MASCOTAS = [
    { 
        nombre: "Mariposa",
        genero: "Hembra", 
        personalidad: "Gatita de 50 días, desparasitada y muy mimosa.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461519554_18339199510123102_7619759608985282482_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:1
        
    }, 
    { 
        nombre: "Orugo", 
        genero: "Macho", 
        personalidad: "Cariñoso y con 1 año de edad ya castrado y vacunado.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461593860_18339852886123102_4893637850783271974_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:2
    } ,
    { 
        nombre: "Clarita",
        genero: "Hembra", 
        personalidad: "Esta hermosa gatita tiene 4 años, ya está castrada y vacunada. Muy mimosa, compañera, tranquila y sociable.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461135641_18338894104123102_3412907276065613060_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:3
    }, 
    { 
        nombre: "Simon",
        genero: "Macho", 
        personalidad: "dulce y mimoso, tiene 3 años y e encuentra castrado y vacunado.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/104163748_10163735310870201_3066744674830708920_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:4
    }, 
    { 
        nombre: "Lila",
        genero: "Hembra", 
        personalidad: "Muy cariñosa tiene tres meses, desparasitada y vacunada.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/12356711_10206943354840591_3080301264998920651_o.jpg", 
        enlace: "#",
        tipo: "gato",
        id:5
    }, 
    { 
        nombre: "Mimi",
        genero: "Hembra", 
        personalidad: "Muy cariñosa tiene tres meses, desparasitada y vacunada..", 
        ubicacion: "CABA", 
        imagen: "../assets/img/16796925_1019024624865910_190656524977085956_o.jpg", 
        enlace: "#",
        tipo: "gato",
        id:6
    }, 
    { 
        nombre: "Mateo",
        genero: "Hembra", 
        personalidad: "Tiene 1 año, le gusta mucho los mimos y que este acompañado, es muy Dócil.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/91117960_4256728091019448_2849769775091941376_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:7
    }, 
    { 
        nombre: "Felippo",
        genero: "Hembra", 
        personalidad: "tiene 2 años, es muy mimoso y sociable.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/82747140_1792303630899974_6745327364789501952_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:8
    }, 
    { 
        nombre: "Akira",
        genero: "Hembra", 
        personalidad: "tiene 2 años, es muy mimoso y sociable.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/103614636_1934465750017094_1846216436697758785_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:9
    }, 
    { 
        nombre: "Sakura",
        genero: "Hembra", 
        personalidad: "Se encuentra castrada y vacunada, mimosa y muy dócil.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/98114660_3627301623963307_1580628259341598720_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:10
    }, 
    { 
        nombre: "Ibay y Luci",
        genero: "Hembra", 
        personalidad: "Ambos castrados y vacunados. Muy buenos, cariñosos y compañeros.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462004634_18339860506123102_1472965776616212316_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:11
    }, 
    { 
        nombre: "Termita",
        genero: "Hembra", 
        personalidad: "Cariñosa y muy sociable, tiene un año y medio se encuentra castrada y vacunada.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/460222111_18337974130123102_3128833552057579382_n.jpg", 
        enlace: "#",
        tipo: "gato",
        id:12
    }, 
    { 
        nombre: "Zoe",
        genero: "Hembra", 
        personalidad: "Le gusta jugar y es muy sociable hacia las demas mascotas, tiene entre 5 y 6 años.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462296667_18340540984123102_804872672611403875_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:13
    }, 
    { 
        nombre: "Frambuesa",
        genero: "Hembra", 
        personalidad: "Es muy cariñosa, tiene 2 meses, está desparasitada y próximamente podrá recibir su primera dosis de vacuna.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462225264_18340397848123102_1965690615897421196_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:14
    }, 
    { 
        nombre: "Bruse",
        genero: "Macho", 
        personalidad: "Es de tamaño grande, ya está vacunado y también castrado. Convive con otros perros y se lleva excelente con niños.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461832015_18339723544123102_8340968647441187683_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:15
    }, 
    { 
        nombre: "Perla",
        genero: "Hembra", 
        personalidad: "perrita de 9 meses de tamaño mediano en adopción. Ya está castrada y vacunada. Por demás de buena, mimosa, juguetona y sociable con todo el mundo!", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461752511_18339630961123102_5960822779553827209_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:16
    }, 
    { 
        nombre: "Angel",
        genero: "Macho", 
        personalidad: "Es un perrito mediano de unos 10kg. Castrado y vacunado de 1 año, año y medio. Más que bueno, dulce, juguetón y mimoso.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461680692_18339576448123102_3443778367602574943_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:17
    }, 
    { 
        nombre: "Colombia",
        genero: "Hembra", 
        personalidad: "Perrita cachorrona de 9 meses con carácter, de tamaño mediano. Ya está castrada y vacunada. Sociable, juguetona, ama dormir sus siestas al sol y jugar con sus chiches.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461189036_18339286918123102_1765558771755466759_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:18
    }, 
    { 
        nombre: "Evaristo",
        genero: "Macho", 
        personalidad: "Bebé de 2 meses ya desparasitado. Será medianito a chico a futuro, ideal para departamento Lo damos con compromiso de vacunación y castración a temprana edad.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461357177_18339087928123102_4060915994247113653_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:19
    }, 
    { 
        nombre: "Odin",
        genero: "Macho", 
        personalidad: "Este hermoso bebé busca familia para siempre! Tiene 2 meses y medio, está desparasitado, listo para su primera dosis de vacuna.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461053603_18338893165123102_285678623511516243_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:20
    }, 
    { 
        nombre: "Lucho",
        genero: "Macho", 
        personalidad: "Presentamos a este negro divino! Tiene 1 año y medio, ya está castrado y vacunado. De tamaño mediano y ya no crece más.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461154185_18338890171123102_3349081002290349340_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:21
    }, 
    { 
        nombre: "Goyo",
        genero: "Macho", 
        personalidad: "Es muy cariñoso y compañero Tiene 6 años y es tamaño mini, con tan solo 6 kg de amor.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461064711_18338641402123102_6711860474620812247_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:22
    }, 
    { 
        nombre: "Charlie",
        genero: "Macho", 
        personalidad: "Es muy cariñoso y jugueton, tiene 6 años y es tamaño mini, con tan solo 6 kg de amor.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461053263_18338623726123102_7591293666508358335_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:23
    }, 
    { 
        nombre: "Roco",
        genero: "Macho", 
        personalidad: " bebé de unos 3 a 4 meses, ya desparasitado.Jugueton y muy compañero, Ya listo para su primera dosis de vacuna.  Será tamaño grande a futuro.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461064460_18338567386123102_309189571861795088_n.jpg", 
        enlace: "#",
        tipo: "perro",
        id:24
    }, 
    { 
        nombre: "Lupita",
        genero: "Hembra", 
        personalidad: " Es muy tranquila y le gusta dormir mucho.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462149691_8671762499553974_1529807625001570255_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:25
    }, 
    { 
        nombre: "Paris",
        genero: "Hembra", 
        personalidad: " Tiene 3 meses, es pequeña, mimosa y súper tranquila.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462300457_122182251590199009_489431254452299026_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:26
    }, 
    { 
        nombre: "Lupe",
        genero: "Hembra", 
        personalidad: " Tiene 7 meses, es muy tranquila y cariñosa.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/462532828_1047487787170829_5437302686072033013_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:27
    }, 
    { 
        nombre: "Copito",
        genero: "Macho", 
        personalidad: " Es muy cariñoso y busca una nueva familia, tiene 2 meses.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/459787828_1078998613737363_7434420118090677893_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:28
    }, 
    { 
        nombre: "Pia",
        genero: "Hembra", 
        personalidad: " Tiene 6 meses, es muy tranquila y mimosa.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461053954_526553503650665_5053553327037018933_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:29
    }, 
    { 
        nombre: "Lima",
        genero: "Hembra", 
        personalidad: "Tiene tan solo 2 meses, es muy mimosa y busca una nueva familia.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/459462258_9117777161571271_5901823526531123204_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:30
    }, { 
        nombre: "Coco",
        genero: "Maho", 
        personalidad: " Tiene 2 meses y busca una nueva familia, le gusta jugar mucho y es muy curioso.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/460185344_9117778741571113_3947304850470309722_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:30
    }, 
    { 
        nombre: "Luna",
        genero: "Hembra", 
        personalidad: "Es terrestre y acuática y le gusta mucho la naturaleza, es muy tranquila.", 
        ubicacion: "CABA", 
        imagen: "../assets/img/461966561_1824750705030320_6472229329092947305_n.jpg", 
        enlace: "#",
        tipo: "novedades",
        id:31
    }, 


    
];

let carrito = [];

function mostrarMascotas(FILTRADO_MASCOTAS) {
    const MASCOTAS_SECTION = document.getElementById('grid-container-mascotas'); 
    MASCOTAS_SECTION.innerHTML = ''; 
    FILTRADO_MASCOTAS.forEach(mascota => { 
    const CARD_DIV = document.createElement("div");
    CARD_DIV.className = 'grid-container-mascotas'; 
    CARD_DIV.innerHTML = ` 
    <div class="mascotas-gatos"> 
    <img src="${mascota.imagen}" alt="mascota"> 
    <ul class="info-mascotas"> 
    <li><strong>Nombre:</strong> ${mascota.nombre}</li>
    <li><strong>Género:</strong> ${mascota.genero}</li> 
    <li><strong>Personalidad:</strong> ${mascota.personalidad}</li>
    <li><strong>Ubicación:</strong> ${mascota.ubicacion}</li> 
    </ul> 
    <div class="contenedor-boton"> 
    <button class="boton-segundo" onclick="adoptarMascota(${mascota.id})">Adoptar</button>
    </div> 
    </div> 
    `;
    MASCOTAS_SECTION.appendChild(CARD_DIV);
});
} function filtrarMascotas(tipo)
{ let filtradoMascotas; 
    if (tipo) { filtradoMascotas = MASCOTAS.filter(mascota => mascota.tipo === tipo);
    } else { filtradoMascotas = MASCOTAS;
    } mostrarMascotas(filtradoMascotas);
} 



// Función para adoptar una mascota y agregarla al carrito
function adoptarMascota(id) {
const mascota = MASCOTAS.find((mascota) => mascota.id === id);
carrito.push(mascota);
actualizarCarrito();
}


// Función para actualizar el carrito en el ícono y el total de mascotas adoptadas
function actualizarCarrito() {
// Actualizar el contador en el ícono del carrito
document.getElementById('cart-count').innerText = carrito.length;

// Calcula el total de mascotas adoptadas
const totalMascotas = carrito.length;
document.getElementById('cart-total').innerText = totalMascotas; 

// Guardar el carrito en localStorage 
localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para mostrar el contenido del carrito en el modal
function mostrarCarrito() {
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');

// Limpiar el contenido 
cartItems.innerHTML = ""; 

// Recorrer el carrito y mostrar cada mascota en la lista
carrito.forEach((item) => {
const li = document.createElement('li');
li.textContent = item.nombre;

// Botón para eliminar mascota del carrito
const eliminarBtn = document.createElement('button');
eliminarBtn.textContent = 'x';
eliminarBtn.className = "boton-x";
eliminarBtn.onclick = () => eliminarDelCarrito(item.nombre);

li.appendChild(eliminarBtn);
cartItems.appendChild(li);
});

// Mostrar el modal
cartModal.style.display = 'flex';
}

// Función para eliminar una mascota del carrito
function eliminarDelCarrito(nombre) {
const index = carrito.findIndex((item) => item.nombre === nombre);
if (index !== -1) {
carrito.splice(index, 1);

// Actualizar el localStorage con el carrito actualizado
localStorage.setItem("carrito", JSON.stringify(carrito));

actualizarCarrito(); // Actualizar el contador y el total en el modal

mostrarCarrito();
}

}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
document.getElementById('cart-modal').style.display = 'none';
}

function filtrarCarrito(tipo) {
const carritoFiltrado = carrito.filter((mascota) => mascota.tipo === tipo);
mostrarCarritoFiltrado(carritoFiltrado);
}

function mostrarCarritoFiltrado(carritoFiltrado) {
const carritoSection = document.getElementById("carrito-items");
carritoSection.innerHTML = ""; 

carritoFiltrado.forEach((item) => {
const li = document.createElement("li");
li.textContent = `${item.nombre} - ${item.tipo}`;
carritoSection.appendChild(li);
});

}

document.addEventListener("DOMContentLoaded", () => {


if (document.querySelector(".principal-perros")) {
filtrarMascotas("perro");
}
if (document.querySelector(".principal-gatos")) {
filtrarMascotas("gato");
}
if (document.querySelector(".principal-novedades")) {
filtrarMascotas("novedades");
}
if (localStorage.getItem("carrito")) {
carrito = JSON.parse(localStorage.getItem("carrito"));
actualizarCarrito();
}


});


