# .center[Formularios]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## Formularios

Los formularios son la única forma (sin JavaScript) de que el usuario interactúe con un sitio web.

Creamos el formulario en HTML, al igual que el resto de nuestro contenido.

---

## La etiqueta `form`

```html
<form action="/register" method="get">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>
```

---

## La etiqueta `form`

La etiqueta `form` es un contenedor para una serie de entradas (`input`).
Cuando se envía el formulario, todos los datos se envían al servidor y se procesan en el back-end.

Los atributos de la etiqueta del formulario determinan:

- Dónde se envían los datos (`action`)
- Qué método se envían los datos por `method`

---

## Las etiquetas `input`s

- `text`
- `textarea`
- `email`, `password`, `url`, `search`, `number`, `tel`, `color`, `date` `file`
- `range`
- `select` menu (dropdown)
- `checkboxes`
- `radio` buttons
- `submit`, `reset`, `button`

[CodePen](https://codepen.io/pataruco/pen/BjoQRK)

---

## Las etiquetas `input`s

Un ejemplo de una entrada de formulario (`input`) y algunos de los atributos disponibles

```html
<input
  id="quantity"
  max="10"
  min="1"
  name="qty"
  placeholder="How many?"
  type="number"
  value="1"
/>
```

---

# Las etiquetas `input`s

Los atributos de las entradas determinan:

- El **tipo** (`type`) de entrada
- El **nombre** (`name`) de la entrada utilizada en el back-end
- Un `id` para la entrada - usado para vincular las entradas a sus etiquetas
- El **valor** (`value`) inicial de la entrada (opcional)
- valores `min`imo o`max`imo (opcional para tipos numéricos)
- Un mensaje de \*marcador de posición\*\* (`placeholder`) (opcional)

---

# `text`, `email`, `password`

- `text`: entrada de texto normal
- `email`: elije el teclado correcto en el móvil y valida automáticamente las direcciones de correo electrónico
- `password`: oculta los caracteres tal como se escriben

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

---

## Botones

Botones especiales

```html
<input type="submit" value="Go!" /> <input type="reset" value="Reset" />
```

Crea un elemento de carga de archivos

```html
<input type="file" />
```

Crea un botón en el que se puede hacer clic

```html
<input type="button" /> <button>I am a button<button></button></button>
```

---

## Selección y opciones (`select` y `option`)

Un menú desplegable `select` está lleno de muchas opciones `option`

```html
<select id="country" name="country">
  <option value="AF">Afghanistan</option>
  <option value="AX">Åland Islands</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AS">American Samoa</option>
  ...
</select>
```

---

## Selección y opciones

Podemos agrupar opciones comunes para una mejor experiencia de usuario (UX).

```html
<select>
  <optgroup>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
  </optgroup>
  <optgroup>
    <option value="AF">Afghanistan</option>
    <option value="AX">Åland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    ...
  </optgroup>
</select>
```

---

## Etiquetas (`label`)

Cada `<input>` debe tener una etiqueta `<label>` correspondiente para que el usuario sepa lo que debe rellenarse.
La etiqueta y su entrada están vinculadas con un atributo `for` en el `<label>` que coincide con el `<input>` `id`

```html
<label for="first-name">First Name</label> <input type="text" id="first-name" />
```

---

## Validación

### ¿Qué pasa si los usuarios nos dan datos incorrectos? ¿O no completan los campos que queremos?

Podemos verificar si todos los campos obligatorios se han completado con el tipo correcto de información mediante la validación.

- ¡La validación HTML5 está disponible de forma gratuita!
- Podemos diseñar los estados de validación con pseudo clases `:valid` y `:invalid`
- La validación también es posible con JavaScript o en el servidor.

---

## Soluciones de terceros

¿Qué pasa si realmente quiero que alguien pueda enviarme la información del formulario?

Hay un puñado de soluciones de terceros que le permiten poner un formulario funcional en un sitio web estático.

- [Wufoo](https://www.wufoo.com)
- [Kontactr](https://kontactr.com/)
- [Google Forms](https://docs.google.com/forms)
- [FormSpree](formspreee.io)

---

# Lab

[Starter code](https://github.com/pataruco/ga-fewd-assets/raw/master/forms/starter-code.zip)
