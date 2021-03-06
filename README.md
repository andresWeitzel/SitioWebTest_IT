# Sitio Web Test IT

**Desarrollo y Diseño de un sitio web acerca de Test en el Área IT utilizando Bootstrap, JS Nativo y consumo de la API FullCalendar.**

</br>

### Link del Sitio: https://gestion-test-it.netlify.app/


</br>

## Vista de Inicio del Sitio Web 1/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/SitioTestIt/Captura%20de%20pantalla%20(319).png)

## Vista de Inicio del Sitio Web 2/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/SitioTestIt/Captura%20de%20pantalla%20(324).png)

## Vista de Inicio del Sitio Web 3/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/SitioTestIt/Captura%20de%20pantalla%20(325).png)

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

#### 1)Creamos un nuevo repositorio en GitHub

#### 2)Inicializamos nuestro repositorio local .git
* git init

#### 3)Agregamos lo desarrollado a nuestro repo local
* git add *

#### 4)Agregamos lo que tenemos en nuestro repo local al área de Trabajo.
* git commit -m "agrega un comentario entre comillas"

#### 5)Le indicamos a git donde se va a almacenar nuestro proyecto(fijate en tu repositorio de github cual es el enlace de tu proyecto(esta en code)).
* git remote add origin https://github.com/andresWeitzel/SitioWebTest_IT.git

#### 6)Subimos nuestro proyecto.
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
##### (Desconozco porqué tengo que ejecutar este comando, supongo que será porque no estoy trabajando con branchs en mi proyecto, el main por defecto de gitHub ahora es mi master(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/SitioWebTest_IT.git

#### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/SitioWebTest_IT.git

</br>

## Uso de la Api de FullCalendar

#### Contenedor en html para el calendario (Incorporar en la página deseada)
 ```<div id='calendar'></div> (También asegurate de darle margen para la correcta visualización del encabezado del calendario)```

#### Usando los CDN de FullCalendar ( Incorporar en la misma pagina donde se aplico el contenedor para el calendario lo siguiente )

* Maquetado
```
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.css'> 
```
* Themes de Full Calendar
```
<link href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.css' rel='stylesheet'>
```
* Funcionalidad
```
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/main.min.js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/fullcalendar@5.5.0/locales-all.min.js'></script>
<script type="text/javascript" src="../js/utilidades/calendario.js"></script> ( Nuestro Script JQuery para el consumo de la api )
```

#### Script Personalizado para la implementacion de la Api de FullCalendar ( calendario.js )
```
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth',
        initialDate: '2020-12-07',

        themeSystem: 'bootstrap',

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },

        events: [{
                title: 'Se creo este proyecto',
                start: '2020-12-22',


            },
            {
                start: '2020-12-22',
                overlap: false,
                display: 'background',
                color: '#7d93a6'
            },
            {
                title: 'Creación de contenido al Proyecto',
                start: '2020-12-25',
                end: '2020-12-28'
            },

            {
                title: 'Ocurrencia de este Proyecto',
                start: '2020-12-19T03:00:00',
                end: '2020-12-19T03:30:00'
            },
            {
                title: 'Planificacion',
                start: '2020-12-19T04:00:00'
            },
            {
                title: 'Link del repo',
                url: 'https://github.com/andresWeitzel/SitioWebTest_IT',
                start: '2020-12-29'
            },
            {
                title: 'STAND BY',
                start: '2020-12-31',
                end: '2021-01-05'
            },
            {
                start: '2020-12-31',
                end: '2021-01-05',
                overlap: false,
                display: 'background',
                color: '#00ced1'
            }
        ]
    });

    calendar.setOption('locale', 'es');


    calendar.render();


});

```
