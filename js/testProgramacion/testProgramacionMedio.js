const contenedorTestMedio = document.getElementById("contenedorTestMedioProgramacion");
const botonComprobarResultadoTestMedioProgramacion = document.getElementById("botonComprobarResultadoTestMedioProgramacion");
const botonSalirTestMedioProgramacion = document.getElementById("botonSalirTestMedioProgramacion");
const resultadoTestMedioProgramacion = document.getElementById("resultadoTestMedioProgramacion");

//Uso de arrays, creacion de objetos dentro de otros objetos
const preguntasTestMedioProgramacion = [

    {
        pregunta: "1.Paradigma Imperativo",

        respuestas: {
            a: " Es una forma de determinar qué datos son requeridos para el cálculo, asociar a estos direcciones de memoria y efectuar, paso a paso, una secuencia de transformaciones en los datos almacenados de forma tal que el estado final represente el resultado correcto.",
            b: "Es una funcion logica que nos permite hacer consultas solamente a la base de datos",
            c: "Los lenguajes imperativos pueden resolver solamente problemas que no sean cálculos matemáticos."
        },

        solucion: "a"
    },

    {
        pregunta: "2.Paradigma Funcional",

        respuestas: {
            a: "La programación funcional no tiene sus raíces en el cálculo lambda.",
            b: "Basado en el uso de verdaderas funciones matemáticas. En este estilo de programación las funciones son ciudadanas de primera clase, porque sus expresiones pueden ser asignadas a variables como se haría con cualquier otro valor; además de que pueden crearse funciones de orden superior",
            c: "Pardigma Obsoleto."
        },

        solucion: "b"
    },
    {
        pregunta: "3.¿En que consiste la Recursividad?",

        respuestas: {
            a: "La recursividad consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores.",
            b: "La recursividad consiste concretamente en el uso de bucles y otros iteradores.",
            c: "La recursividad consiste en el manejo de datos y no puede generar un desbordamiento de pila en el interprete."
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿A qué refiere el Polimorfismo?",

        respuestas: {
            a: "Refiere a el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.",
            b: "El polimorfismo se refiere a la propiedad por la que es no es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. No presenta ningún requisito por parte de los Objetos",
            c: "El polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía."
        },

        solucion: "c"
    },
    {
        pregunta: "5.¿Para que sirve una memoria ram?",

        respuestas: {
            a: "En la memoria RAM se almacenan todos los datos e instrucciones de los programas que se están ejecutando, estas son enviadas desde las unidades de almacenamiento antes de su ejecución. De esta forma podremos tener disponibles todos los programas que ejecutamos.",
            b: "Sirve para almacenar datos y no es un componente critico para el rendimiento de nuestro programa",
            c: "Este tipo de memoria de acceso nos sirve unicamente para el renderizado de imágenes."
        },

        solucion: "a"
    }


];

//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestMedioProgramacion() {

    const arrayPreguntasRespuestas = [];

    preguntasTestMedioProgramacion.forEach((preguntaActual, nroPregunta) => {

        //Accedemos a todas las respuestas
        const respuestas = [];

        //
        for (letraRespuesta in preguntaActual.respuestas) {

            respuestas.push(
                `
                <label>
                    
                    <input type="radio"  style="height:25px; width:25px; vertical-align: middle;" name="${nroPregunta}" value="${letraRespuesta}" >
                   

                        ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}

                 </label>

                 <br><br>
        
                `
            );

        }
        //Por cada iteraccion se nos crea el div en donde se nos agrega la pregunta y respuestas
        arrayPreguntasRespuestas.push(

            `
            <strong>
            <div class="pregunta">
                <h5>
                 ${preguntaActual.pregunta}
                 </h5>
            </div>
        </strong>
        <br>

        <div class="respuestas">
            <h6>
            ${respuestas.join('')}
            </h6>
        </div>

        <hr>
        <br>
            `
        );
    });

    contenedorTestMedioProgramacion.innerHTML = arrayPreguntasRespuestas.join('');

}

mostrarTestMedioProgramacion();





function mostrarResultadoTestMedioProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestMedioProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    preguntasTestMedioProgramacion.forEach((preguntaActual, nroPregunta) => {

        //Acedemos a cada una de las respuestas
        const totalRespuestas = respuestas[nroPregunta];

        //Cadena de texto que nos posibilita acceder a los input checkbox, con el checked comprobamos cual es la casilla marcada
        const checkboxRespuestas = `input[name='${nroPregunta}']:checked`;

        //Comprobamos el valor de este input
        // con la funcion logica OR (||) nos aseguramos de que no se haya seleccionado nada
        const respuestaSeleccionado = (totalRespuestas.querySelector(checkboxRespuestas) || {}).value;

        //Si el usuario seleccionado la respuesta correcta aumenta el contador
        if (respuestaSeleccionado === preguntaActual.solucion) {

            contadorRespuestasCorrectas++;

            respuestas[nroPregunta].style.color = 'blue';
        } else {
            respuestas[nroPregunta].style.color = 'red';

        }

    });

    resultadoTestMedioProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestMedioProgramacion.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

    if (contadorRespuestasCorrectas === preguntasTestMedioProgramacion.length) {
        resultadoTestMedioProgramacion.innerHTML = 'GENIAL!! :) <br> ( Intentá realizar el Test Nivel Avanzado!! )';

    }
}

botonComprobarResultadoTestMedioProgramacion.addEventListener('click', mostrarResultadoTestMedioProgramacion);








function resetTestMedioProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestMedioProgramacion.querySelectorAll(".respuestas");



    preguntasTestMedioProgramacion.forEach((preguntaActual, nroPregunta) => {

        //Acedemos a cada una de las respuestas
        const totalRespuestas = respuestas[nroPregunta];

        //Cadena de texto que nos posibilita acceder a los input checkbox, con el checked comprobamos cual es la casilla marcada
        const checkboxRespuestas = `input[name='${nroPregunta}']:checked`;

        //Comprobamos el valor de este input
        // con la funcion logica OR (||) nos aseguramos de que no se haya seleccionado nada
        const respuestaSeleccionado = (totalRespuestas.querySelector(checkboxRespuestas) || {}).value;

        //Si el usuario seleccionado la respuesta correcta aumenta el contador
        if (respuestaSeleccionado === preguntaActual.solucion) {

            respuestas[nroPregunta].style.color = 'black';
        } else {
            respuestas[nroPregunta].style.color = 'black';

        }

    });

    resultadoTestMedioProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestMedioProgramacion();

}


botonSalirTestMedioProgramacion.addEventListener('click', resetTestMedioProgramacion);