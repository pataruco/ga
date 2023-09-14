# .center[Audio en HTML]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Audio en HTML

Al principio había HTML y era bueno. Excepto que no tenía soporte para la transmisión de medios como audio o video, por eso recurrimos al uso de Flash. El principal problema con Flash era que requería que el usuario lo instalara. Se invirtió mucho tiempo en encontrar soluciones para los no lo habían instalado o que no sabían qué era. Entonces Apple decidió que no les gustaba y murió lentamente.

Luego llegó HTML5 con nuevas etiquetas como:

- `<audio>`
- `<video>`

Cada navegador ahora tiene su propio reproductor de audio y video incorporado. Como desarrolladores, solo tenemos que configurarlos correctamente y nuestro trabajo está hecho.

---

## `audio`

La etiqueta `audio` Es relativamente sencilla de configurar:

```html
<audio
  controls
  src="http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3"
></audio>
```

El atributo `controls` muestra controles que permiten al usuario reproducir / pausar y limpiar el audio. Sin él, el jugador está oculto a la vista.

---

### Atributos comunes

| Attribute  | Value      | Description                                                                                                            |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| `autoplay` | N/A        | El audio comenzará a reproducirse tan pronto como esté listo                                                           |
| `controls` | N/A        | Los controles deben mostrarse                                                                                          |
| `loop`     | N/A        | el audio comenzará de nuevo cuando termine                                                                             |
| `muted`    | N/A        | La salida está silenciada                                                                                              |
| `preload`  | `audio`    | Cómo se debe cargar el audio. `audio` cargará el archivo de audio inmediatamente al cargar la página                   |
| `preload`  | `metadata` | Cómo se debe cargar el audio. `metadata` cargará la información de la pista de audio pero no el archivo de audio real. |
| `preload`  | `none`     | Cómo se debe cargar el audio. `none`                                                                                   |
| `src`      | URL        | Un enlace al archivo de audio                                                                                          |

---

### Atributos comunes

También puede configurarlo de manera ligeramente diferente ofreciendo un respaldo si ciertos formatos de audio no son compatibles o si el navegador no admite audio en absoluto:

```html
<audio controls>
  <!-- This will be displayed if audio is not supported -->
  <!-- The audio files to play, the browser will play the first one that it is able -->
  <source
    src="http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3"
    type="audio/mp3"
  />
</audio>
```

---

## Agregar JavaScript

Podemos interactuar con el reproductor de audio con las siguientes propiedades y métodos:

| **Property / Method** | **Description**                                         |
| --------------------- | ------------------------------------------------------- |
| `audio.src`           | Obtener o establecer el `src` del audio                 |
| `audio.load()`        | Vuelve a cargar el archivo de audio                     |
| `audio.play()`        | Iniciar la reproducción                                 |
| `audio.pause()`       | Pausar reproducción                                     |
| `audio.currentTime`   | Obtener o establecer la posición de reproducción actual |
| `audio.paused`        | Indica si la reproducción está actualmente en pausa.    |
| `audio.onended`       | Se activa cuando el audio ha terminado                  |

---

## Otras lecturas

- [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
- [HTML - Audio](https://tutorialehtml.com/en/html-tutorial-embed-audio/)
- [Create a Customized HTML5 Audio Player](https://webdesign.tutsplus.com/tutorials/create-a-customized-html5-audio-player--webdesign-7081)
