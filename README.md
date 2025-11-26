📘 README — Proyecto React: Gestión de Tareas

Este proyecto es una aplicación construida en React que permite gestionar una lista de tareas. A lo largo del desarrollo se han aplicado varios conceptos fundamentales de React, desde el manejo del estado hasta la comunicación entre componentes.

🚀 Tecnologías y librerías utilizadas

    • React como framework para la interfaz.

    • uuid para generar identificadores únicos por cada tarea renderizada.

    • sweetalert2 para mostrar alertas visuales al usuario.

    • Archivos JSON como fuente inicial de datos.

    • Archivos CSS para estilos específicos de cada componente.


📌 Conceptos aprendidos con React

🔹 Importaciones en React

Aprendí a importar:

    • Componentes propios.

    • JSON con datos.

    • Librerías externas.

    • Hojas CSS.

    • Hooks como useState.

Todo esto permite organizar el proyecto de forma modular y escalable.


🔹 Manejo del estado con useState

Se utiliza useState para:

    • Guardar la lista de tareas.

    • Controlar el formulario de creación.

    • Controlar el formulario de edición dentro del componente hijo.

    • Mostrar u ocultar partes de la interfaz, como el modo edición.

Gracias a esto aprendi cómo React vuelve a renderizar los componentes cuando cambia el estado.


🔹 Formularios controlados

En este proyecto se aprendí a:

    • Mantener los valores del formulario en el estado.

    • Escuchar cambios con eventos.

    • Controlar inputs y textareas.

    • Resetear formularios tras enviar.

Esto permite tener un control total sobre lo que el usuario escribe.


🔹 Renderizado dinámico

La lista de tareas se genera recorriendo el array y mostrando un componente por cada elemento.
Has aprendido cómo React crea elementos repetidos automáticamente a partir de datos dinámicos.


🔹 Comunicación entre componentes (props)

Un componente padre envía al hijo:

    • Los datos de cada tarea.

    • La función para borrar una tarea.

    • La función para editar una tarea.

Y el componente hijo devuelve los cambios usando esas funciones.
Esto se conoce como "lifting state up", o elevar el estado.


🔹 Renderizado condicional

Dentro del componente hijo aprendí a:

    • Mostrar el formulario de edición solo cuando el usuario lo solicita.

    • Ocultar o mostrar elementos dependiendo de variables booleanas.


🔹 CRUD completo en React

Este proyecto representa un CRUD funcional:

    • Crear una nueva tarea.

    • Leer y mostrar todas las tareas.

    • Actualizar una tarea desde el componente hijo.

    • Borrar una tarea individualmente.

    • Resetear toda la lista o cargar los valores iniciales.


🔹 Manejo de arrays y objetos en React

Aprendí a:

    • Añadir elementos a un array sin mutarlo.

    • Eliminar elementos con filtrado.

    • Editar elementos copiando el array y reemplazando solo uno.

    • Trabajar con objetos que representan formularios.


