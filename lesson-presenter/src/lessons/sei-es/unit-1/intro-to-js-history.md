# .center[Intro JavaScript]

## .center[Historia]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Intro JavaScript

JavaScript se ha convertido en un lenguaje extremadamente importante. Es omnipresente en los dispositivos con capacidad web, un pilar de la plataforma web y la base de la mayoría de las aplicaciones web y móviles. Gracias a [Node.js](https://nodejs.org/), también funciona en el servidor

Sin embargo, para entender JavaScript, debemos desviarnos un poco y volver a la historia de los navegadores y la Web.

---

## La guerra de los navegadores

Tim Berners-Lee inventó la Web (1990), el primer servidor web, el primer navegador web (llamado WorldWideWeb), el primer editor web (WorldWideWeb que también funcionó como editor web) y las primeras páginas web, que describieron el proyecto.

---

### Mosaic

Sin embargo, Tim Berners-Lee (y muchos otros) vieron la Web como una herramienta para que científicos e investigadores intercambiaran información. Afortunadamente para nosotros, algunas personas tenían planes distintos.

Un grupo de estudiantes de la Universidad de Illinois Urbana-Champaign crearon Mosaic, que es el navegador que popularizó la World Wide Web.

Las razones pueden ser muchas, pero la principal fue que ignoraron por completo a Berners-Lee y siguieron adelante y crearon la etiqueta `<img>`, que permitió a los autores hacer que las cosas se vieran como querían.

---

### Mosaic

![1993_mosaic_browser_large](https://cloud.githubusercontent.com/assets/40461/8239877/a153716a-15f6-11e5-9760-5d02cb984a2e.jpg)

(Mosaic 1993).

---

### Netscape Navigator

[Netscape](https://en.wikipedia.org/wiki/Netscape) tomó a los autores de Mosaic, les hizo reimplementar un navegador al que llamaron Navigator, y construyó un negocio a su alrededor, ganando mucho dinero.

La razón por la que la gente pagaría por Netscape Navigator era que Netscape ignoró a Berners-Lee aún más e implementó muchas cosas inútiles que la gente quería, como fuentes (letras) y otras cosas que ahora damos por sentado.

---

### Microsoft

Netscape fue realmente genial. Se veía exactamente igual en todos los sistemas operativos. Otra gran característica con la que estaban experimentando era un sistema basado en la web que permitía a los usuarios editar archivos a través de la red, independientemente del sistema operativo que estuviera usando.

Por supuesto, a Microsoft no le gustó esto, ya que socavó su negocio de Windows.

Entonces, lanzaron Internet Explorer, lo regalaron y comenzaron las infames [guerras de navegadores](https://en.wikipedia.org/wiki/Browser_wars).

---

## La historia de JavaScript

Para avanzar en el juego de los navegadores, JavaScript se desarrolló en Netscape e inicialmente se llamó **LiveScript**.

### Brenden Eich

[Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) fue contratado por Netscape para construir su nuevo lenguaje en 1995. Fue lanzado por primera vez con Netscape 2, a principios de 1996.

#### ¿Borracho?

Brendan Eich escribió el código original de Javascript en 10 días. Hay muchos rumores sobre el hecho de que estaba borracho o potencialmente drogado cuando lo escribió ...

---

## La historia de JavaScript

#### ¿Java está relacionado con Javascript?

**Respuesta:** No.

JavaScript originalmente iba a llamarse LiveScript, pero fue renombrado en una mala decisión de marketing en un intento de capitalizar la popularidad del lenguaje Java de Sun Microsystem, a pesar de que los dos tienen muy poco en común. Esto ha sido una fuente de confusión desde entonces.

#### JScript de Microsoft

Por supuesto, Microsoft había tomado represalias para tener un lenguaje de scripting en su navegador, así que cambiaron JavaScript (bastante bien, en realidad) y lo pusieron en Internet Explorer.

Debido a la marca registrada “Java”, tuvieron que nombrarla JScript, pero era exactamente lo mismo.

---

## La historia de JavaScript

#### ECMAScript

Al principio, JavaScript era un desastre y necesitaba estandarizarse. Entonces, Netscape buscó un organismo que hiciera precisamente eso. El W3C se negó a hacerlo y, finalmente, terminaron en la ECMA europea (🤷‍♂️).

> **_Nota:_** _The World Wide Web Consortium (W3C) es la principal organización de estándares internacionales para la World Wide Web_

> **_Nota:_** _ECMA International es una asociación industrial fundada en 1961, dedicada a la estandarización de sistemas de información y comunicación._

ECMA estandarizó el lenguaje, pero no corrigió el nombre **"JavaScript"** obviamente horrible y confuso. La cuestión es que no sabían cómo llamarlo. Entonces, simplemente lo publicaron con su nombre de trabajo: **ECMAScript**.

A veces se piensa que JavaScript, JScript y ECMAScript son cosas diferentes, pero son simplemente tres nombres diferentes que significan lo mismo: JavaScript.

---

## Un lenguaje de programación extraño

A diferencia de la mayoría de los lenguajes de programación, JavaScript no tiene un concepto de entrada (_input_) o salida (_output_). Está diseñado para ejecutarse como un lenguaje de secuencias de comandos en un entorno anfitrión (_host environment_), y es el entorno anfitrión quien debe proporcionar los mecanismos para comunicarse con el mundo exterior.

El entorno anfitrión más común es un navegador web, pero los intérpretes de JavaScript también se pueden encontrar en una gran lista de otros lugares, incluidos Adobe Acrobat, Abobe Photoshop, imágenes SVG, entornos del lado del servidor como [Node.js](http://nodejs.org/), bases de datos NoSQL como el código abierto [Apache CouchDB](http://couchdb.apache.org/), computadoras integradas, entornos de escritorio completos como [GNOME](http://www.gnome.org/) (una de las GUI más populares para los sistemas operativos GNU / Linux), y la lista continúa.

---

## ES6 y transpilación

Es un momento interesante para los desarrolladores de JavaScript en este momento. ECMA se ha comprometido a lanzar una actualización importante de JavaScript cada año.

En última instancia, esto es bueno para los desarrolladores, ya que cada nueva versión hace que la codificación en JavaScript sea más sencilla y directa. Sin embargo, debido a que JavaScript debe existir dentro de un host, como el navegador o servidor, todos estos otros entornos también deben actualizarse para que la nueva versión de JS esté disponible.

Para asegurarnos de que el código que escribimos se ejecutará en cualquier entorno, necesitamos **transpilarlo** de nuevo a una versión anterior del idioma.

Podemos hacer esto usando una herramienta llamada [Babel](https://babeljs.io/)
