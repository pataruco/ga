# .center[Terminal & CLI]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## Introducción al terminal

Durante Installfest aprendimos a ejecutar algunos scripts en la línea de comando.

Pronto descubrirás que la línea de comando es el corazón de su sistema operativo.

Casi todo lo que puede hacer desde una **GUI** (interfaz gráfica de usuario), también puede hacerlo desde la línea de comandos, **¡pero más rápido!**.

Aprenderemos cómo navegar por los archivos y carpetas de la computadora usando el terminal.

---

## Conceptos básicos de la línea de comando

Aquí hay algunos comandos importantes de UNIX para saber mientras trabaja en el terminal.

| Comando | Descripción                                                          |
| ------- | -------------------------------------------------------------------- |
| `ls`    | _(**L**i**s**t)_ lista los contenidos de un directorio               |
| `cd`    | _(**C**hange **d**irectory)_ Cambia a directorio                     |
| `mkdir` | _(**M**a**k**e **dir**ectory)_ Crea un directorio                    |
| `rmdir` | _(**R**e**m**ove empty **dir**ectories)_ Borra directorios vacios    |
| `rm`    | _(**R**e**m**ove)_ Borra archivos                                    |
| `touch` | Crea un archivo vacio                                                |
| `echo`  | Retorna un _String_                                                  |
| `code`  | Abre VS Code                                                         |
| `pwd`   | _(**P**rint **w**orking **d**irectory)_ Imprime el actual directorio |
| `./`    | El actual directorio                                                 |
| `../`   | Una carpeta encima del directorio actual                             |
| `~/`    | El directorio **Home**                                               |

---

## Línea de comando

### macOS

- Abre la aplicación `Terminal` (Aplicaciones> Utilidades> Terminal)
- Opcionalmente, descarga e instala [iTerm 2](https://www.iterm2.com/)

---

### Windows

- Abre Hyper

---

### Práctica conjunta (_Codealong_)

1. Crea un directorio llamado `development`
2. Cambia a este directorio. `cd development`
3. Cree un directorio llamado **practica-terminal**. `mkdir practica-terminal`
4. Cambia a este directorio. `cd practica-terminal`
5. Cree un archivo llamado **index.html** con el comando **touch**. `touch index.html`
6. Abre **index.html** en VS Code desde el terminal. `code .`
7. Crea un directorio vacío dentro de la carpeta practica-terminal y elimínelo. `mkdir test-folder` y `rm -rf test-folder`

---

## Practica individual

En el terminal completa las siguientes instrucciones a

1. Cree una carpeta en tu `~/development/` carpeta titulada **objetivos**.
2. Una vez dentro de esa carpeta, cree tres archivos vacíos:

   - objetivos.html
   - preocupaciones.html
   - index.html

3. Abre VS Code `code .`
4. En los archivos respectivos (objetivos.html y preocupaciones.html), escribe sus tres objetivos principales y sus tres preocupaciones principales para este curso.
5. Pegue los siguientes contenidos en index.html:

---

### Practica individual (continuación)

```html
<html>
  <head> </head>
  <body>
    <a href="goals.html">
      <img src="http://i.imgur.com/dosK05U.gif" />
    </a>
    <a href="worries.html">
      <img src="http://i.imgur.com/2s0HwpM.gif" />
    </a>
  </body>
</html>
```

6. Abre **index.html** con tu navegador y aseguráte de ver tus objetivos y preocupaciones.

---

### Práctica de bono

Desde su directorio `development`, cree una carpeta llamada **mis-cosas-favoritas**; usarás esta carpeta para hacelos siguientes ejercicios:

#### Organiza tus libros favoritos

1.  En la carpeta `mis-cosas-favoritas`, cree una carpeta llamada `libros`
2.  Crea una carpeta en libros con el nombre de tu autor favorito (por ejemplo, `miguel-cervantes`)
3.  Crea archivos con el nombre de algunos de los libros del autor en la carpeta del autor
4.  Abre la carpeta de libros VS Code
5.  Edita cada archivo para poner una breve descripción del libro

---

### Práctica de bono (continuación)

#### Organiza tus películas favoritas

1.  En la carpeta `mis-cosas-favoritas`, cree una carpeta llamada `peliculas`
2.  Crea una carpeta en películas con el nombre de tu actor favorito
3.  Crea una carpeta en la carpeta del actor que lleva el nombre de la película famosa del actor
4.  Crea un archivo de texto con el nombre del personaje del actor en la película famosa en el directorio de `películas` en la carpeta de nivel superior
5.  Mueve el archivo de texto a la carpeta de la película famosa
6.  Vuelve a VS Code y edita ese archivo de texto con una descripción del papel del personaje en la película

---

### Práctica de bono (continuación)

#### Organiza tu música favorita

1.  En la carpeta `mis-cosas-favoritas`, cree una carpeta llamada `musica`
2.  Navega a la carpeta `musica`
3.  Creaa una carpeta llamada `disco`
4.  Crea un archivo de texto en `disco` llamado `ymca`
5.  Elimina la carpeta `disco`
6.  Crea una carpeta llamada `creed`
7.  Elimina la carpeta `creed`
8.  Crear carpetas llamadas `one-direction`, `the-strokes` y `rihanna` (o artistas de tu interés)
9.  Crea un archivo de texto en `una dirección` llamado `what-makes-you-beautiful.txt`
10. haga dos copias `what-does-you-beautiful-txt`, una en `the-strokes` y otra en `rihanna` y cambie el nombre de esos archivos con canciones de esos artistas

---

### Práctica de bono (continuación)

#### Reorganiza todo

1.  En la carpeta `mis-cosas-favoritas`, cree una carpeta llamada `medios`
2.  Mueve `libros`, `películas` y `música` a la carpeta `medios`

---

### Práctica de bono (continuación)

#### Organiza la mejor música, películas y libros de 2020.

1. Muevete a la carpeta `mis-cosas-favoritas` y copie la carpeta `medios`, luego, renómbrela `2020-media`
2. En la carpeta de `2020-media`, cambie el nombre de cada carpeta para que tenga `2020-` antes del título
3. Elimina el contenido de `2020-musica`, `2020-peliculas` y `2020-libros`
4. Crea un archivo llamado `top-ten-peliculas.html` en `2020-movies`
5. Crea un archivo llamado `top-ten-musica.html` en `2020-music`
6. Crea un archivo llamado `top-ten-libros.html` en `2020-books`
7. crea una lista ordenada `<ol>`, ¡usando HTML! - de las 10 mejores películas, canciones y libros en cada uno de los archivos apropiados

---

## Atajos de teclado

| Teclas                         | Acción                                                                  |
| ------------------------------ | ----------------------------------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Ir al comienzo de la línea                                              |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Ir al final de la línea                                                 |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Borra la pantalla, similar al comando `clear`                           |
| <kbd>Ctrl</kbd> + <kbd>U</kbd> | Borra la línea antes de la posición del cursor.                         |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Igual que `backspace`                                                   |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | Permite buscar comandos utilizados anteriormente                        |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Termina lo que sea que estés corriendo                                  |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Sale del shell actual                                                   |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Pone lo que estás ejecutando en un proceso en segundo plano suspendido. |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Eliminar la palabra antes del cursor                                    |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Borrar la línea después del cursor                                      |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | Cambia los dos últimos caracteres antes del cursor                      |
| <kbd>Tab</kbd>                 | Autocompleta archivos y nombres de carpetas                             |
