const contenedorTestMedio = document.getElementById("contenedorTestMedioProgramacion");
const botonComprobarResultadoTestMedioProgramacion = document.getElementById("botonComprobarResultadoTestMedioProgramacion");
const botonSalirTestMedioProgramacion = document.getElementById("botonSalirTestMedioProgramacion");
const resultadoTestMedioProgramacion = document.getElementById("resultadoTestMedioProgramacion");

//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestMedioProgramacion() {

    const arrayPreguntasRespuestas = [];

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestMedioProgramacion01.forEach((preguntaActual, nroPregunta) => {

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

        preguntasTestMedioProgramacion02.forEach((preguntaActual, nroPregunta) => {

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
    contenedorTestMedioProgramacion.innerHTML = arrayPreguntasRespuestas.join('');
}

mostrarTestMedioProgramacion();





function mostrarResultadoTestMedioProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestMedioProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestMedioProgramacion01.forEach((preguntaActual, nroPregunta) => {

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
            resultadoTestMedioProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestMedioProgramacion01.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestMedioProgramacion01.length) {
                resultadoTestMedioProgramacion.innerHTML = 'GENIAL!! :) <br> ( Intentá realizar el Test Nivel Avanzado!! )';

            }

        });

    } else {

        preguntasTestMedioProgramacion02.forEach((preguntaActual, nroPregunta) => {

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
            resultadoTestMedioProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestMedioProgramacion02.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestMedioProgramacion02.length) {
                resultadoTestMedioProgramacion.innerHTML = 'GENIAL!! :) <br> ( Intentá realizar el Test Nivel Avanzado!! )';

            }

        });
    }

}

botonComprobarResultadoTestMedioProgramacion.addEventListener('click', mostrarResultadoTestMedioProgramacion);








function resetTestMedioProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestMedioProgramacion.querySelectorAll(".respuestas");


    if (contadorTestParImpar == 'par') {

        preguntasTestMedioProgramacion01.forEach((preguntaActual, nroPregunta) => {

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


        preguntasTestMedioProgramacion02.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestMedioProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestMedioProgramacion();

}


botonSalirTestMedioProgramacion.addEventListener('click', resetTestMedioProgramacion);