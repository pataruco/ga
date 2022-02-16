# .center[Dev Tools]

## .center[Herramientas de desarrollo del navegador]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## Intro

Para este curso utilizaremos

![](https://www.mozilla.org/media/protocol/img/logos/firefox/browser/developer/logo-word-hor-lg-high-res.a18e90a71b15.png)

---

## ¿Qué son las herramientas de desarrollo?

La mayoría de los navegadores modernos incluyen un conjunto de herramientas que permiten a los desarrolladores monitorear y explorar lo que sucede en una página web.

Las herramientas de desarrollo del navegador, que a menudo denominamos **Dev tools**, son un conjunto de herramientas de depuración (_debuggging_) integradas al navegador

Podemos hacer muchas cosas útiles con estas herramientas, pero algunas de las más útiles son :

- Podemos ver el HTML y CSS como el navegador los ha entendido
- Podemos ver las solicitudes (_request_) y respuestas (_response_) a medida que se realizan y reciben
- Podemos observar que JavaScript se está ejecutando
- Podemos depurar (_debug_) problemas con nuestro código.
- Podemos emitir comandos JavaScript en una consola o en la línea de comandos del navegador.

Tener un conjunto tan poderoso de herramientas de navegador a nuestra disposición es increíblemente valioso, y deberás acostumbrarse a utilizarlas en todo tu potencial.

---

## Abre Dev Tools - Demo

Primero, naveguemos a [http://generalassemb.ly](http://generalassemb.ly).

Ahora para acceder a DevTools, podemos presionar:

- <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd> para abrir DevTools (se abrirá en la última pestaña que había abierto)
- <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>K</kbd> para abrir DevTools en la pestaña de la consola
- <kbd>⌘</kbd>+<kbd>⌥</kbd> + <kbd>C</kbd> para abrir DevTools con el inspector

Si olvida estos comandos, siempre puede ir a **Tools** > **Web developer** > **Tools** pero intenta memorizar el atajo de teclado.

---

### Pestañas Dev Tools

En general, hay ocho herramientas principales disponibles en las Herramientas para desarrolladores. Es posible que vea personas con algunos más, ya que puede agregar otros personalizados mediante extensiones.

- [**Inspector de Página**](https://developer.mozilla.org/es/docs/Tools/Page_Inspector): Edición de estilos y DOM
- [**Monitor de Red**](https://developer.mozilla.org/es/docs/Tools/Monitor_de_Red): evaluación del rendimiento de la red
- [**Accesabilidad**](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector): información importante expuesta a tecnologías de asistencia en la página actual a través del árbol de accesibilidad
- [**Rendimiento**](https://developer.mozilla.org/es/docs/Tools/Desempe%C3%B1o): perfil de rendimiento con la línea de tiempo
- [**Consola Web**](https://developer.mozilla.org/es/docs/Tools/Web_Console): la consola de JavaScript

No utilizaremos todas estas pestañas durante el curso, las claves con las que nos vamos a familiarizar son:

- **Inspector de Página**
- **Monitor de Red**
- **Consola Web**

---

### Inspector de Página

Puede usar el panel inspector de Página para una variedad de tareas:

- Inspeccionar el HTML y CSS de una página web
- Probar el sitio en diferentes diseños
- CSS de edición en vivo sobre la marcha

Avancemos y juguemos con algunas de estas herramientas.

---

## Modificación de CSS sobre la marcha

Para modificar y editar tu CSS, las herramientas de desarrollo han hecho que sea muy fácil probar y editar CSS rápidamente antes de incorporarlo nuevamente a tu aplicación. En [http://generalassemb.ly](http://generalassemb.ly) haz lo siguiente:

- Presiona <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd> para abrir la vista del inspector
  - También puede hacer esto abriendo las herramientas de desarrollo con cualquier otro acceso directo, luego presionando la lupa
  - O bien, intente hacer clic derecho en la página y seleccione "Inspeccionar elemento" en la parte inferior
- Seleccione todo el cuerpo
- Mira los nodos DOM en el lado izquierdo
- Mira el CSS responsable de un elemento renderizado en el navegador.

Cuando esté seguro de que tiene el cuerpo seleccionado, en el editor en vivo de CSS, desmarque la propiedad CSS `background-image` y debajo agregue:

```css
element {
  background: rojo;
}
```

---

## Modificación de CSS sobre la marcha (continuación)

¿Que pasó? Bueno, dado que tenemos este archivo CSS localmente, ¡podemos hacer lo que queramos para cambiarlo! Eliminamos la `imagen de fondo` y la reemplazamos con un`color de fondo` rojo sólido. Pero ten en cuenta que si actualizas tu página, ¡todo se habrá ido! tu navegador envió una nueva solicitud y obtuvo una nueva respuesta

Algunas otras cosas para probar:

- Observe que a medida que comienza a escribir el fondo, las propiedades de CSS se completan automáticamente
- Después de elegir tu color, aparecerá un pequeño cuadro de color (si Firefox reconoció el color que escribió)
- Si presiona <kbd>Shift</kbd> y hace clic en el cuadro de color, puede ver que el color cambia de formato RGBA, Hex, etc.
- Si hace clic en el cuadro de color, también verá un selector de color.
- Si arrastra el mouse y pasa el mouse sobre la pantalla, también obtendrá un selector de color.

---

## Modificación de CSS sobre la marcha (continuación)

Dentro de este editor de CSS, también puedes:

- Copiar y pegar estilos
- Use la flecha arriba / abajo para aumentar / disminuir los valores en uno
- Utilice <kbd>⌥</kbd> + <kbd>↑</kbd> o <kbd>⌥</kbd> + <kbd>↓</kbd> para incrementar / disminuir en 0,1
- Use <kbd>Shift</kbd> + <kbd>↑</kbd> o <kbd>Shift</kbd> + <kbd>↓</kbd> para aumentar / disminuir en 10

Probémoslo: inspeccione el logotipo de la Asamblea General en la esquina superior izquierda y cambia los valores del margen utilizando los trucos anteriores.

Solo estamos tratando de que te sientas cómodo editando y manipulando el DOM en tu navegador, ya que estos serán útiles para cada uno de sus proyectos.

---

## Modificación de elementos DOM

Dentro de la vista de árbol DOM, podemos ver una representación del Modelo de Objetos del Documento (**DOM**, por sus siglas en inglés) tal como lo interpreta el navegador.

Podemos editar estos elementos.

- Seleccione el elemento `body`
- Eliminarlo presionando el botón `Eliminar`
- Luego deshaga esto presionando <kbd>⌘</kbd> + <kbd>Z</kbd>

#### Visualización de propiedades calculadas

En la pestaña CSS, además de ver las propiedades CSS de cualquier elemento inspeccionado, también podemos ver una representación visual del modelo de caja (_box model_) junto con los valores calculados. Dado que CSS carga estilos secuencialmente, es posible que un estilo en una hoja de estilo sea sobrescrito por otra hoja de estilo que se cargó después.

La pestaña _Computed_ nos permite ver los estilos de cualquier página o elemento **exactamente como el navegador ha interpretado todos los estilos CSS colectivamente**.

---

### Monitor de Red

El panel de Red registra información sobre cada operación de red en su aplicación, incluidos datos detallados de tiempo, encabezados de solicitud y respuesta HTTP, cookies, datos de WebSocket y más.

- Actualiza la página y echa un vistazo a las solicitudes que realiza la página.
  - Nota que el estado de muchos de los recursos es **304** (no modificado)
- Seleccione 'Desactivar caché' para que las solicitudes se procesen como nuevas cada vez que solicitemos un recurso del servidor
  - Actualiza la página y deberías ver que ahora todo está **200** (ok)

---

### Pestaña Consola Web - Codealong

Por último, echemos un vistazo a la pestaña de la consola (practica el acceso directo - <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>K</kbd>).

La consola de JavaScript proporciona dos funciones principales para los desarrolladores que prueban las páginas web y las aplicaciones. Es un lugar para:

- Registre información de diagnóstico en el proceso de desarrollo utilizando la [API de consola](https://developer.mozilla.org/en-US/docs/Web/API/console)
- Un indicador de shell que se puede utilizar para interactuar con el documento y DevTools.

Cuando escribimos JavaScript que pretendemos procesar en un navegador, podemos usar comandos como `console.log ()` para registrar valores desde nuestro Javascript directamente en esta pestaña, a medida que se ejecuta el código.

Esto es inmensamente útil cuando estamos tratando de averiguar si ciertos valores se están recuperando o pasando entre funciones. Utilizaremos mucho esta función en las próximas semanas.

---

### Pestaña Consola Web (continuación)

El shell de la consola también nos permite ejecutar Javascript e interactuar con el DOM actual usando Javascript, tal como lo haríamos con un archivo JavaScript que cargamos con la página.

Intentemos esto:

```js
$ 1 + 1
> 2

$ var a = 1;
> undefined;
```

---

## Práctica independiente

Echa un vistazo a esta captura de pantalla:

<img src="https://i.imgur.com/5ruzGhc.png" alt="General Assmbly google" style="width: 500px">

Con las herramientas de desarrollo, intente volver a crear esta captura de pantalla de [Google.com](http://www.google.com).

¡Esto está destinado a ser exploratorio! Por lo tanto, tendrás que explorar algunos elementos HTML y su CSS para que esto funcione. Por ejemplo, tendrás que modificar la propiedad `float` de la imagen en la barra de búsqueda, algo que no hemos tocado todavía.
