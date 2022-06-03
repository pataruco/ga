class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Redux</h1>
</div>

---

## Redux

.row[
.col[
![logo](https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png)
]
.col[

Redux es un contenedor de gestión de estado y predecible para aplicaciones JavaScript. Originalmente fue inspirado por Flux (desarrollado por Facebook). A veces, es posible que escuches que se refiere simplemente a una **store**. Nos permite escribir aplicaciones que se comportan de manera consistente y en diferentes entornos (cliente, servidor y nativo).
]
]

---

## Por que usar Redux?

Como hemos aprendido, React es bastante bueno en la gestión de estado sin herramientas adicionales. Entonces, ¿por qué usar Redux también?

- A medida que su aplicación crece, se vuelve cada vez más difícil y confuso administrar el estado en múltiples componentes compartidos
- Ten en cuenta que los componentes son reutilizables, por lo que es posible que los use en varias páginas o pantallas dentro de su aplicación.

Imagina múltiples componentes que necesitan comunicarse entre sí, pero por diferentes razones. Es posible que tenga dificultades para entender dónde debería vivir el estado (`state`). En un mundo perfecto, los datos de los componentes deberían estar aislados de ese componente en particular. Ahora considere los componentes hermanos y cómo compartiría esos datos.

Como has aprendido hasta ahora, para compartir datos entre hermanos, un estado tiene que vivir en el componente _padre_. El método para actualizar este estado lo proporciona este componente principal y se pasa como `props` a estos componentes hermanos.

---

## Por que usar Redux?

![](https://blog.logrocket.com/wp-content/uploads/2020/04/codecentric.png)

---

## Como funciona

Aunque es difícil de entender al principio, Redux es bastante simple.

_Un almacén central contiene todo el estado de la aplicación._ Cada componente puede acceder al **estado** sin pasar `props` de un componente a otro.

### Pero, ¿cómo?

- **Actions:** Las acciones son _eventos_. Son la única forma en que puede enviar información desde su aplicación a su tienda Redux. Estos datos enviados generalmente se basan en eventos de la interfaz de usuario, llamadas a la API o controladores de eventos.

- **Reducers:** Los reductores son _funciones puras_ que toman el estado actual de una aplicación, completan una acción y luego devuelven un nuevo estado.

- **Store:** La tienda simplemente _almacena el estado de la aplicación_.

---

## Como funciona

![](https://innovationm.co/wp-content/uploads/2018/12/redux1.png)

---

## Beneficios de usar Redux

- **Redux proporciona un estado predecible**

- **Ayuda a mantener el código limpio y mantenible**

- **Proporciona una fácil solución de problemas y depuración**

- **¡Es fácil de testear!**

- **Redux tiene una gran comunidad de apoyo**

- Además, Redux puede conservar el estado de la aplicación en el almacenamiento local o incluso restaurarla después de una actualización.

- Se puede utilizar para la representación del lado del servidor.

---

## Instalación y configuración

En los ultimos años la configración y el API han cambiado mucho, por eso es importante que sigas las instrucciones de la documentacion, https://redux.js.org/tutorials/quick-start

Otra forma rápida de instalación y configuración es utilizar `create-react-app` con la plantilla de Redux

```sh
# Redux + Plain JS template
yarn create react-app my-app --template redux
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>
