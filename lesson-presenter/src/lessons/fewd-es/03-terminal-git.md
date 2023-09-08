class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Terminal, Git & GitHub</h1>
</div>

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

---

## Conceptos básicos de la línea de comando

Continuación

| Comando | Descripción                              |
| ------- | ---------------------------------------- |
| `./`    | El actual directorio                     |
| `../`   | Una carpeta encima del directorio actual |
| `~/`    | El directorio **Home**                   |

---

## Línea de comando

.row[
.col[

### macOS

- Abre la aplicación `Terminal` (Aplicaciones> Utilidades> Terminal)
- Opcionalmente, descarga e instala <a href="https://www.iterm2.com" class="download-link">iTerm 2</a>
  ]
  .col[

  ### Windows

- Descarga e instala <a href="https://gitforwindows.org" class="download-link">Windows Git SCM</a>
  ]
  ]

---

## Práctica conjunta (_Codealong_)

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
      <img src="https://i.imgur.com/dosK05U.gif" />
    </a>
    <a href="worries.html">
      <img src="https://i.imgur.com/2s0HwpM.gif" />
    </a>
  </body>
</html>
```

6. Abre **index.html** con tu navegador y aseguráte de ver tus objetivos y preocupaciones.

---

## Atajos de teclado

| Teclas                         | Acción                                           |
| ------------------------------ | ------------------------------------------------ |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> | Ir al comienzo de la línea                       |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Ir al final de la línea                          |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Borra la pantalla, similar al comando `clear`    |
| <kbd>Ctrl</kbd> + <kbd>U</kbd> | Borra la línea antes de la posición del cursor.  |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Igual que `backspace`                            |
| <kbd>Ctrl</kbd> + <kbd>R</kbd> | Permite buscar comandos utilizados anteriormente |

---

## Atajos de teclado

Continuación

| Teclas                         | Acción                                                                  |
| ------------------------------ | ----------------------------------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> | Termina lo que sea que estés corriendo                                  |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> | Sale del shell actual                                                   |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Pone lo que estás ejecutando en un proceso en segundo plano suspendido. |
| <kbd>Ctrl</kbd> + <kbd>W</kbd> | Eliminar la palabra antes del cursor                                    |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Borrar la línea después del cursor                                      |
| <kbd>Ctrl</kbd> + <kbd>T</kbd> | Cambia los dos últimos caracteres antes del cursor                      |
| <kbd>Tab</kbd>                 | Autocompleta archivos y nombres de carpetas                             |

---

class: frontpage

<div>
  <hr/>
  <h1>Git & GitHub</h1>
</div>

---

## Version control

Have you ever lost or overwritten some work that took you ages?

---

## Version control

**Version control** is a system that enables you to take regular _snapshots_ of your work in progress called _commits_. This enables:

- Recording the history of a project
- Constant backups of your work
- A more organised development workflow
- A safer way to collaborate with others
- Tools for publishing your work online

---

## Version control

- Keeping your code organised helps you be more efficient.
- Keeping your work backed up helps you stay sane.
- Going back over the history of a project helps you learn.

---

## Git

Git is a version control system (VCS) that saves the state of your project's files and folders; basically, it takes a **'snapshot'** of what all your files look like at a given moment and stores a reference to that **'snapshot'**.

---

## GitHub

GitHub is a platform that makes it easy to manage git repositories. It provides a graphical interface to help you review and manage your code repos.

The files are hosted in the cloud so you can share the finished product with other people.

---

## Why are Git & GitHub valuable?

- Stores a history of the code, which allows developers to go back in time if something breaks
- Allows multiple developers to work on the same project
- GitHub tracks changes so you can see who worked on what (and who broke what)
- GitHub allows for feedback to be given on the code, which can increase code quality

---

## The lingo

- **Repository/Repo**: a central location in which data - typically about a project - is stored and managed
- **Clone**: download data/code from the cloud to your local machine (laptop, computer, etc.)
- **Commit**: save a version of your project to git
- **Branch**: create an additional track for the code that is separate from the 'master' branch. This allows you to work on a feature/issue without affecting the main code until your feature is finished.

---

## Commits

Think of each commit as if you copied your whole project folder and saved it somewhere safe.

This folder is labeled with a unique ID and recorded in a chronological timeline.

If you want to view what a file looked like at any point in history you can open up the folder with a certain commit ID and take a look at the files inside.

---

## Commits

Instead of making a complete copy of your project for every snapshot, Version control systems can just save the differences between files.

This keeps the history small in file size and quick to work with.

---

## Version control process

A typical git workflow goes like this:

- Create a project folder
- Initialize it as a git project
- Write some code
- Check the status of what files/folders have changed
- Mark one or more files to be added into the next snapshot

---

## Version control process

- Take a snapshot and write a message describing what you did and why
- Write some more code
- Create the next snapshot
- Rinse and repeat often
- Push your changes to an online repository

---

## Version control process

Commit often even as you experiment.

Push regularly once everything is in good shape.

---

## Commit messages

Think of each commit message like an email. You have a brief subject and (an optional) longer description to describe what you did and why

---

## GitHub

- Open an account on [GitHub](https://github.com/join)
- Sign up
- Download [GitHub desktop](https://desktop.github.com/)
- Associate your GitHub account with GitHub desktop

---

## Práctica guiada

Hagamos nuestro primer repositorio de Git.

- Primero, cree un directorio en tu escritorio:

  ```sh
  cd ~/Desktop
  mkdir hola-mundo
  ```

- Puede colocar este directorio bajo control de revisión Git usando el comando:

  ```git
  git init
  ```

  - Git responderá:

    ```sh
    Initialized empty Git repository in <location>
    ```

---

## Práctica guiada (continuación)

Ahora ha inicializado el directorio de trabajo. 🚀

### La carpeta `.git`

Si miramos el contenido de esta carpeta vacía usando:

```sh
ls -lah
```

Deberíamos ver que ahora hay una carpeta oculta llamada `.git` aquí es donde se almacena toda la información sobre tu repositorio. No es necesario que realices ningún cambio en esta carpeta. Puedes controlar todo el flujo de git usando los comandos `git`.

---

## Práctica guiada (continuación)

### Agregar un archivo

- Creemos un nuevo archivo:

  ```sh
  $ touch a.txt
  ```

- Si ejecutamos `git status` deberíamos obtener:

  ```sh
  On branch master

  Initial commit

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    a.txt

  nothing added to commit but untracked files present (use "git add" to track)
  ```

---

## Práctica guiada (continuación)

- Esto significa que hay un nuevo archivo **sin seguimiento** (_untracked_).

- A continuación, dile a Git que tome una instantánea (_snapshot_) del contenido de todos los archivos en el directorio actual (tenga en cuenta el `.`)

  ```bash
  $ git add .
  ```

Esta instantánea ahora se almacena en un área de preparación temporal que Git llama el "índice" (_index_).

---

## Práctica guiada (continuación)

### Commit

- Para almacenar permanentemente el contenido del índice (_index_) en el repositorio, (commit estos cambios en HEAD), debe ejecutar:

  ```bash
  $ git commit -m "Por favor recuerda este archivo en este momento"
  ```

  - Ahora deberías obtener:

    ```sh
    [master (root-commit) b4faebd] Please remember this file at this time
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 a.txt
    ```

---

## Práctica guiada (continuación)

### Comprobando el registro (_log_)

Si queremos ver el historial de confirmación, podemos ejecutar:

```sh
git log
```

Deberías ver:

```sh
b4faebd (HEAD, master) Please remember this file at this time
```

---

## Práctica guiada (continuación)

### Realizar cambios en el archivo

- Ahora abramos `a.txt` en un editor de texto.
- Dentro del archivo, escribe algo.
- Si presiona <kbd>Enter</kbd> en la terminal, ahora verás que tiene cambios sin seguimiento.
- Ejecutar `git status` nuevamente te mostrará que `a.txt` ha sido **modificado** (_modified_).

---

## Práctica guiada (continuación)

#### Volver a un commit anterior

- Ahora hagamos una segundo commit.

  ```sh
  git add.
  git commit -m "Segundo commit"
  ```

- Escribe `git log` y te mostrará 2 commits con diferentes identificadores:

  ```sh
   6e78569 (HEAD, master) Segundo commit
  b4faebd Recuerde este archivo en este momento
  ```

- Podemos revertir el archivo a la primera confirmación utilizando tu identificación (_id_) de confirmación específica con:

  ```sh
  git reset --soft b4faebd
  ```

---

## Práctica guiada (continuación)

#### Volver a un commit anterior

- Esto hará un restablecimiento parcial, donde los cambios en el archivo que hicimos todavía están allí: los cambios están en _staging_ pero ya no se han hecho _commit_

- Si queremos revertir el archivo y descartar cualquier cambio (¡peligroso!), Podemos usar:

  ```sh
  $ git reset --hard b4faebd
  ```

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

Hagamos esto juntos:

1. Ve a tu cuenta de GitHub
2. En la esquina superior izquierda, presione el botón `+` y seleccione `Nuevo repositorio`

  <img src="https://help.github.com/assets/images/help/repository/repo-create.png" alt="repo create" style="width: 200px">

3. Nombra tu repositorio `hello-world`

4. **Inicialice este repositorio con un archivo README** (para que podamos `git pull`)

5. Haga clic en el botón verde grande Crear repositorio

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

### (continación)

Ahora necesitamos conectar nuestro repositorio local de Git con nuestro repositorio remoto en GitHub.

Tenemos que agregar un repositorio "remoto", una dirección donde podemos enviar nuestros archivos locales para ser almacenados.

```sh
git remote add origin git@github.com:github-name/hello-world.git
```

Puede encontrar esta dirección haciendo clic en el botón "Conectar o descargar":

<img src="https://i.imgur.com/PNyQ2YW.png" alt="git repo address" style="width: 300px">

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

### (continación)

### Empujando a GitHub (_push_)

Para enviar archivos desde nuestra máquina local a nuestro repositorio remoto en GitHub, necesitamos usar el comando `git push`.

Sin embargo, también debemos agregar el nombre del remoto, en este caso lo llamamos `origin` y el nombre de la rama, o "copia" del código, en este caso `master`. (¡No te preocupes por las ramas todavía!)

```sh
git push origin master
```

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

### (continación)

### Empujando a GitHub (_push_)

En otras palabras: "Hola Git, toma el código que tengo localmente y envíalo a la copia **maestra** ubicada en la dirección web **origen**".

Esto debería fallar debido a los nuevos archivos en el repositorio remoto.

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

### (continación)

### Halando desde GitHub (_pull_)

A medida que agregamos el archivo README.md en nuestro repositorio, primero debemos halar (_pull_)ese archivo a nuestro repositorio local para verificar que no tenemos un conflicto o una diferencia entre nuestro código remoto y local.

```sh
git pull origin master
```

En otras palabras: "Hola Git, dame el código actual de la copia **maestra** ubicada en la dirección web **origen**.

Una vez que hayamos hecho esto, debería ver el archivo README en tu computadora. Ahora puede empujar sus cambios:

---

## Práctica guiada: creación y clonación de repositorios (_clone_)

### (continación)

### Halando desde GitHub (_pull_)

```sh
git push origin master
```

Actualiza tu página web de GitHub y los archivos deberían estar allí.

---

## Introducción: ¿Qué es bifurcación? (_fork_)

El modelo `fork` y `pull` te permite a cualquiera bifurcar un repositorio existente y enviar cambios a tu bifurcación personal sin que se requiera acceso al repositorio fuente.

Por lo general, las bifurcaciones se utilizan para proponer cambios en el proyecto de otra persona o para utilizar el proyecto de otra persona como punto de partida para tu propia idea.

---

## Introducción: ¿Qué es bifurcación? (_fork_)

### Clonación vs bifurcación

Cuando bifurca un repositorio, crea un nuevo repositorio **remoto** que es exactamente el mismo que el original, excepto que tu eres el propietario. Luego puede 'clonar' tu nueva bifurcación y 'empujar' y 'tirar' hacia ella sin necesidad de ningún permiso especial.

Cuando clonas un repositorio, a menos que haya sido agregado como colaborador, ¡no podrá enviar sus cambios al repositorio remoto original porque no es tu repositorio GitHub!

---

## Introducción: ¿Qué es bifurcación? (_fork_)

### Solicitudes de extracción (_pull requests_)

Cuando deseas proponer un cambio en un repositorio (el proyecto original) que hayas bifurcado, puedes emitir una solicitud de extracción. Básicamente, estás diciendo:

- > He realizado algunos cambios en tu repositorio, si desea incluirlos en tu repositorio original, ¡puede sacarlos de mi bifurcación!

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>
