# Sitio Web Test IT

**Desarrollo y Diseño de un sitio web acerca de test en el área IT utilizando Bootstrap, JS Nativo y JQuery para consumo de la API de un Calendario.**

</br>

**Link del Sitio: https://gestion-test-it.netlify.app/**


</br>

## Vista Inicio del Sitio Web

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/SitioTestIt/Captura%20de%20pantalla%20(319).png)

</br>

<hr>

| Tecnologías | Versión |
| ------------- | ------------- |
| HTML |   5 |
| CSS | 3  |
| JavaScript | -  |
| Bootstrap | 4.5.x  |
| Netlify | -  |
| Visual Studio Code | 1.51.1 |
| Git | 2.29.1.windows.1  |
| FullCalendar API | 5.5.0  |

</br>

## Repositorios Oficiales(documentación)

#### Bootstrap:   https://getbootstrap.com/
#### HTML5:     https://angular.io/tutorial/toh-pt0
#### CSS3:         https://www.w3schools.com/css/default.asp
#### JS:        https://www.w3schools.com/js/default.asp
#### Git:         https://git-scm.com/docs
#### Visual Studio Code:        https://code.visualstudio.com/download
#### Netlify:          https://www.netlify.com/
#### FullCalendar API: https://fullcalendar.io/docs/getting-started

</br>

<hr>

## Más Información


## Subir el proyecto al repositorio con git desde el bash de visual studio Code 

#### 1)Inicializamos nuestro repositorio local .git
* git init

#### 2)Agregamos lo desarrollado a nuestro repo local
* git add *

#### 3)Agregamos lo que tenemos en nuestro repo local al área de Trabajo.
* git commit -m "agrega un comentario entre comillas"

#### 4)Le indicamos a git donde se va a almacenar nuestro proyecto(fijate en tu repositorio de github cual es el enlace de tu proyecto(esta en code)).
* git remote add origin https://github.com/andresWeitzel/SitioWebTest_IT.git

#### 5)Subimos nuestro proyecto.
* git push -u origin master


</br>


## Actualización del repositorio del proyecto con git desde el bash de visual studio code

#### 1)Visualizamos las modificaciones realizadas en local
* git status

#### 2)Agregamos lo modificado al area de trabajo
* git add *

#### 3)Confirmamos las modificaciones realizadas
* git commit -m "tu commit entre comillas"

#### 4)Sincronizamos y traemos todos los cambios del repositorio remoto a la rama en la que estemos trabajando actualmente.
##### (Desconozco porqué tengo que ejecutar este comando, supongo que será porque en el local tengo otros proyectos o porque mi master no es un branch, sino el main por defecto de gitHub(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/SitioWebTest_IT.git

#### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/SitioWebTest_IT.git

</br>

## Uso de la Api de FullCalendar

#### Contenedor en html para el calendario
* {div id='calendar'} {/div} ```( REEMPLAZAR LOS { } POR < > , ya que github no permite algunos tags en sus readmes. También asegurate de darle margen para la correcta visualización del encabezado del calendario)```

### Usando los CDN de FullCalendar ( Incorporar en la pagina deseada lo siguiente )

#### Maquetado
* {link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.css'} ```( REEMPLAZAR LOS { } POR < > , ya que github no permite algunos tags en sus readmes )```

#### Funcionalidad
*  <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.js'></script>
*  <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/locales-all.min.js'></script>
*  <script type="text/javascript" src="../js/utilidades/calendario.js"></script> ( Nuestro Script JQuery para el consumo de la api )


#### Script base en JQuery para la implementacion de la Api de FullCalendar ( calendario.js )
```
document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2020-12-07',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },

        events: [{
                title: 'All Day Event',
                start: '2020-12-01'
            },
            {
                title: 'Long Event',
                start: '2020-12-07',
                end: '2020-12-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2020-12-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2020-12-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2020-12-11',
                end: '2020-12-13'
            },
            {
                title: 'Meeting',
                start: '2020-12-12T10:30:00',
                end: '2020-12-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2020-12-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2020-12-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2020-12-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-12-28'
            }
        ]
    });

    calendar.render();
});

```
