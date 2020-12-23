const contenedorTestAvanzadoProgramacion = document.getElementById("contenedorTestAvanzadoProgramacion");
const botonComprobarResultadoTestAvanzadoProgramacion = document.getElementById("botonComprobarResultadoTestAvanzadoProgramacion");
const botonSalirTestAvanzadoProgramacion = document.getElementById("botonSalirTestAvanzadoProgramacion");
const resultadoTestAvanzadoProgramacion = document.getElementById("resultadoTestAvanzadoProgramacion");

//Uso de arrays, creacion de objetos dentro de otros objetos
const preguntasTestAvanzadoProgramacion = [

    {
        pregunta: "1.¿Qué es un Árbol en TDA?",

        respuestas: {
            a: "Una estructura de datos de árbol se puede definir de forma recursiva (localmente) como una colección de nodos (a partir de un nodo raíz), donde cada nodo es una estructura de datos con un valor, junto con una lista de referencias a los nodos (los hijos) , con la condición de que ninguna referencia esté duplicada ni que ningún nodo apunte a la raíz.",
            b: "Un árbol se puede definir de una manera no abstracta en su conjunto como un árbol no ordenado, con un valor asignado a cada nodo",
            c: "Ninguna de las anteriores."
        },

        solucion: "a"
    },

    {
        pregunta: "2.¿Qué es un Algoritmo del Tipo Búsqueda de Profundidad?",

        respuestas: {
            a: "Un Búsqueda en profundidad es un algoritmo que solamente nos permite reformar un procesamiento de imagenes de forma directa.",
            b: "Una Búsqueda en profundidad es un algoritmo de búsqueda no informada utilizado para recorrer todos los nodos de un grafo o árbol (teoría de grafos) de manera ordenada, pero no uniforme.",
            c: "Una Búsqueda en profundidad es un algoritmo de búsqueda no informada utilizado para recorrer todos los nodos de un grafo o árbol.Cuando ya no quedan más nodos que visitar en dicho camino, regresa (Backtracking), de modo que solo repite el mismo proceso una sola vez."
        },

        solucion: "b"
    },
    {
        pregunta: "3.Propiedades de Sockets con protocolo TCP",

        respuestas: {
            a: "Son orientados a la conexión, se garantiza la transmisión de todos los octetos sin errores ni omisiones, se garantiza que todo octeto llegará a su destino en el mismo orden en que se ha transmitido.",
            b: "Son orientados a la conexión, pero no se garantiza la transmisión de todos los octetos sin errores ni omisiones",
            c: "No son orientados a la conexión, pero si se garantiza la transmisión de todos los octetos sin errores ni omisiones y que todo octeto llegara a su destino en el mismo orden en el que se ha transmitido."
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué Ventajas existen en una Nube Pública?",

        respuestas: {
            a: "No integración probada de servicios Red, poca implementación y mayor riesgo, presenta actualizaciones automáticas y constituyen un poblema al usuario.",
            b: "Integración probada de servicios Red, Prestación de servicios a nivel mundial, Implementación más rápida y con menos riesgos, Contribuye al uso eficiente de la energía.",
            c: "La disponibilidad de las aplicaciones está sujeta a la disponibilidad de acceso a Internet, gran escalabilidad a largo plazo "
        },

        solucion: "b"
    },
    {
        pregunta: "5.¿Como se produce un desbordamiento de memoria-buffer?",

        respuestas: {
            a: "Un desbordamiento de búfer ocurre cuando los datos que se escriben en un búfer no corrompen aquellos datos en direcciones de memoria adyacentes a los destinados para el búfer, sino que se produce por el consumo excesivo del componente.",
            b: "Se produce solamente por un fallo fisico del dispositivo",
            c: "Se produce cuando un programa no controla adecuadamente la cantidad de datos que se copian sobre un área de memoria reservada a tal efecto (buffer) y constituye un fallor de programacion"
        },

        solucion: "c"
    }


];

//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestAvanzadoProgramacion() {

    const arrayPreguntasRespuestas = [];

    preguntasTestAvanzadoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    contenedorTestAvanzadoProgramacion.innerHTML = arrayPreguntasRespuestas.join('');

}

mostrarTestAvanzadoProgramacion();






function mostrarResultadoTestAvanzadoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestAvanzadoProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    preguntasTestAvanzadoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestAvanzadoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestAvanzadoProgramacion.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

    if (contadorRespuestasCorrectas === preguntasTestAvanzadoProgramacion.length) {
        resultadoTestAvanzadoProgramacion.innerHTML = 'EXCELENTE!! :) <br> ( Ya no quedan más niveles!! )';

    }
}

botonComprobarResultadoTestAvanzadoProgramacion.addEventListener('click', mostrarResultadoTestAvanzadoProgramacion);








function resetTestAvanzadoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestAvanzadoProgramacion.querySelectorAll(".respuestas");



    preguntasTestAvanzadoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestAvanzadoProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestAvanzadoProgramacion();

}


botonSalirTestAvanzadoProgramacion.addEventListener('click', resetTestAvanzadoProgramacion);