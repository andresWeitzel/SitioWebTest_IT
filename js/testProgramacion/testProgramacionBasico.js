const contenedorTestBasicoProgramacion = document.getElementById("contenedorTestBasicoProgramacion");
const botonComprobarResultadoTestBasicoProgramacion = document.getElementById("botonComprobarResultadoTestBasicoProgramacion");
const botonSalirTestBasicoProgramacion = document.getElementById("botonSalirTestBasicoProgramacion");
const resultadoTestBasicoProgramacion = document.getElementById("resultadoTestBasicoProgramacion");

//Creamos una funcion que nos inserte en el html estas preguntas

function mostrarTestBasicoProgramacion() {

    const arrayPreguntasRespuestas = [];

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestBasicoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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
        //Si el contador del local Storage no es par cargamos el segundo test
        preguntasTestBasicoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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

    contenedorTestBasicoProgramacion.innerHTML = arrayPreguntasRespuestas.join('');

}

mostrarTestBasicoProgramacion();




//Mediante un bucle compruebe uno a uno cual seria el checkbox marcado, en caso de que lo sea colocamos un contador que ira aumentado, sino no aumenta.Luego nos mostrara el resultado
function mostrarResultadoTestBasicoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestBasicoProgramacion.querySelectorAll(".respuestas");

    let contadorRespuestasCorrectas = 0;

    //Si el contador del local Storage es par cargamos el primer test
    if (contadorTestParImpar == 'par') {

        preguntasTestBasicoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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
            resultadoTestBasicoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestBasicoProgramacion01.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestBasicoProgramacion01.length) {
                resultadoTestBasicoProgramacion.innerHTML = 'FELICITACIONES!! :) <br> ( Intentá realizar el Test Nivel Medio!! )';

            }

        });

    } else {
        //Si el contador del local storage no es par reCargamos el segundo test
        preguntasTestBasicoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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
            resultadoTestBasicoProgramacion.innerHTML = 'Has acertado ' + contadorRespuestasCorrectas + '/' + preguntasTestBasicoProgramacion02.length + ' respuestas correctas!! <br> (Encontrá las correctas)';

            if (contadorRespuestasCorrectas === preguntasTestBasicoProgramacion02.length) {
                resultadoTestBasicoProgramacion.innerHTML = 'FELICITACIONES!! :) <br> ( Intentá realizar el Test Nivel Medio!! )';

            }

        });

    }


}

botonComprobarResultadoTestBasicoProgramacion.addEventListener('click', mostrarResultadoTestBasicoProgramacion);








function resetTestBasicoProgramacion() {

    //capturamos el div con las respuestas, nos devuelve un array
    const respuestas = contenedorTestBasicoProgramacion.querySelectorAll(".respuestas");


    if (contadorTestParImpar == 'par') {

        preguntasTestBasicoProgramacion01.forEach((preguntaActual, nroPregunta) => {

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

        preguntasTestBasicoProgramacion02.forEach((preguntaActual, nroPregunta) => {

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

    resultadoTestBasicoProgramacion.innerHTML = '';

    //Reinvocamos a la funcion inicial para NO mostrar el ultimo etado cargado, nos limpia todo lo seleccionado
    mostrarTestBasicoProgramacion();

}


botonSalirTestBasicoProgramacion.addEventListener('click', resetTestBasicoProgramacion);