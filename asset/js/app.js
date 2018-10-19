
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;

var bitacoras=[];

var formulario = document.getElementById("bitacora");

// ¿Qué contienen la variable formulario ? 
//El formulario que se muestra en la pagina con los campos fecha de la actividad, descripcion y cantidad de horas


formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 

//¿Qué hace el método evt.preventDefault() ? 
//previene que los datos del formulario se envien automaticamente

//¿Qué es lo que contiene formulario[x]? 
//los datos que se ingresan en los atributos indicados

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 

//¿Qué contienen las variables tr y td ? 
//contiene un elemento de una tabla obtenidos del documento HTML

//¿Qué contienen la variable content ? 
//content contiene todos los valores de input es decir cada item

//¿Qué valor tendra tbody al finalizar la iteración? 
//no tendra ningun valor

//Describa en pocas palabras lo que realizara esta función 
//crea una casilla en una tabla y  agrega los elementos de los campos de estos

/*Eliminar nodo */

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
//¿Qué es lo que hace .firstChild? 
//Mientras tenga un elemento al inicio, recorra los elementos de tbody

//Después de realizar el while ¿Comó quedara el elemento tbody ? 
//Queda vacio

/* Funcion agregar*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 

//¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; 
//
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
//¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;
//almacena los datos de cada campo



/* Validacion Formulario */



var fecha = document.getElementById("fecha");
var desc = document.getElementById("descp");
var cant = document.getElementById("cant");

var valor = fecha.value;
var valor2 = desc.value;
var valor3 = cant.value;

fecha.oninput = ()=>{

    if(valor == "" || valor == null){
        fecha.style.borderColor = "red";
    }else{
        fecha.style.borderColor = "green";
    }
}

desc.oninput = ()=>{

    if(valor2 == "" || valor2 == null){
        desc.style.borderColor = "red";
    }else{
        desc.style.borderColor = "green";
    }
}

cant.oninput = ()=>{

    if(valor3 == "" || valor3 == null){
        cant.style.borderColor = "red";
    }else{
        cant.style.borderColor = "green";
    }
}

function validar(){
    
    if(valor == "" || valor == null){
        alert('El campo Fecha debe estar lleno');
        return false;
    }else if(valor2 == "" || valor2 == null){
        alert('El campo desc  debe estar lleno');
        return false;
    }else if(valor3 == "" || valor3 == null){
        alert('El campo cant debe estar lleno');
        return false;
    }

    return true;
}


