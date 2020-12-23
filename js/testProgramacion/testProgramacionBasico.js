const contenedorTestBasicoProgramacion = document.getElementById("contenedorTestBasicoProgramacion");
const botonComprobarResultadoTestBasicoProgramacion = document.getElementById("botonComprobarResultadoTestBasicoProgramacion");
const botonSalirTestBasicoProgramacion = document.getElementById("botonSalirTestBasicoProgramacion");
const resultadoTestBasicoProgramacion = document.getElementById("resultadoTestBasicoProgramacion");

//Uso de arrays, creacion de objetos dentro de otros objetos
const preguntasTestBasicoProgramacion = [

    {
        pregunta: "1.¿Qué es SQL?",

        respuestas: {
            a: "Un Sistema de Programación que nos permite estructurar nuestro código",
            b: "Es un lenguaje de consulta estructurada que nos permite visualiazar imagenes Jpg ",
            c: "Es un lenguaje de consulta estructurada que nos permite  recuperar información de sistemas de gestión de bases de datos relacionales"
        },

        solucion: "c"
    },

    {
        pregunta: "2.¿Qué es una GUI?",

        respuestas: {
            a: "Un Sistema de Modelado de imágenes",
            b: "Es una interfaz gráfica de usuario, proporcionar un entorno visual sencillo para permitir la comunicación con el sistema operativo o programas de una máquina o computador.",
            c: "Es una constante."
        },

        solucion: "b"
    },
    {
        pregunta: "3.¿Cúal es la diferencia entre una variable y una constante?",

        respuestas: {
            a: "Una variable predefinida solamente se podrá cambiar una vez y la constante no",
            b: "Una constante solo se puede cambiar una vez y una variable dos veces ",
            c: "Los datos de las constantes no podrán cambiar durante la ejecución del programa. En cambio, las variables podrán cambiar su contenido tantas veces sea necesario."
        },

        solucion: "c"
    },
    {
        pregunta: "4.¿Qué es una Función?",

        respuestas: {
            a: "Una función no es más que un conjunto de líneas de código que hacen una tarea en concreto, y esta función puede retornar un valor",
            b: "Un dato no estructurado ",
            c: "Conjunto de numeros primos ordenados"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es un Algoritmo?",

        respuestas: {
            a: "Conjunto ordenado de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un tipo de problemas.",
            b: "Un conjunto de operaciones de forma no ordenada que nos permiten almacenar datos",
            c: "Secuencia de instrucciones no definidas y desarrolladas de forma aleatoriamente"
        },

        solucion: "a"
    }

];






//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestBasicoProgramacion() {

    const arrayPreguntasRespuestas = [];

    preguntasTestBasicoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    contenedorTestBasicoProgramacion.innerHTML = arrayPreguntasRespuestas.join('');

}
mostrarTestBasicoProgramacion();








//Mediante un bucle compruebe uno a uno cual seria el checkbox marcado, en caso de que lo sea colocamos un contador que ira aumentado, sino no aumenta.Luego nos mostrara el resultado
function mostrarResultadoTestBasicoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestBasicoProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    preguntasTestBasicoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestBasicoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestBasicoProgramacion.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

    if (contadorRespuestasCorrectas === preguntasTestBasicoProgramacion.length) {
        resultadoTestBasicoProgramacion.innerHTML = 'FELICITACIONES!! :) <br> ( Intentá realizar el Test Nivel Medio!! )';

    }
}

botonComprobarResultadoTestBasicoProgramacion.addEventListener('click', mostrarResultadoTestBasicoProgramacion);








function resetTestBasicoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestBasicoProgramacion.querySelectorAll(".respuestas");


    preguntasTestBasicoProgramacion.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestBasicoProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestBasicoProgramacion();

}


botonSalirTestBasicoProgramacion.addEventListener('click', resetTestBasicoProgramacion);