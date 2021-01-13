const contenedorTestAvanzadoProgramacion = document.getElementById("contenedorTestAvanzadoProgramacion");
const botonComprobarResultadoTestAvanzadoProgramacion = document.getElementById("botonComprobarResultadoTestAvanzadoProgramacion");
const botonSalirTestAvanzadoProgramacion = document.getElementById("botonSalirTestAvanzadoProgramacion");
const resultadoTestAvanzadoProgramacion = document.getElementById("resultadoTestAvanzadoProgramacion");


//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestAvanzadoProgramacion() {

    const arrayPreguntasRespuestas = [];

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestAvanzadoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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

    } else {

        preguntasTestAvanzadoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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
    }

    contenedorTestAvanzadoProgramacion.innerHTML = arrayPreguntasRespuestas.join('');

}

mostrarTestAvanzadoProgramacion();






function mostrarResultadoTestAvanzadoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestAvanzadoProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestAvanzadoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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

            resultadoTestAvanzadoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestAvanzadoProgramacion01.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestAvanzadoProgramacion01.length) {
                resultadoTestAvanzadoProgramacion.innerHTML = 'EXCELENTE!! :) <br> ( Ya no quedan más niveles!! )';

            }

        });

    } else {

        preguntasTestAvanzadoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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

            resultadoTestAvanzadoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestAvanzadoProgramacion02.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestAvanzadoProgramacion02.length) {
                resultadoTestAvanzadoProgramacion.innerHTML = 'EXCELENTE!! :) <br> ( Ya no quedan más niveles!! )';

            }

        });
    }


}

botonComprobarResultadoTestAvanzadoProgramacion.addEventListener('click', mostrarResultadoTestAvanzadoProgramacion);








function resetTestAvanzadoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestAvanzadoProgramacion.querySelectorAll(".respuestas");


    if (contadorTestParImpar == 'par') {

        preguntasTestAvanzadoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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

    } else {

        preguntasTestAvanzadoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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

    }

    resultadoTestAvanzadoProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestAvanzadoProgramacion();

}


botonSalirTestAvanzadoProgramacion.addEventListener('click', resetTestAvanzadoProgramacion);