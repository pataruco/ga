# .center[Installfest]

## .center[MacOS]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## Installfest

Durante este curso, utilizaremos una variedad de herramientas para desarrollar aplicaciones web, sin embargo, es importante que todos comencemos a utilizar tecnologías similares para que podamos centrarnos en el aprendizaje

---

## Pre instalación

Identifica qué versión de MacOS estás utilizando: idealmente debería tener Catalina o una versión más reciente (10.15.x)

- Asegúrate de tener [Xcode](https://apps.apple.com/gb/app/xcode/id497799835) instalado.
- Asegúrate de haber desinstalado cualquier software antivirus, ya que puede evitar que algunas de las herramientas se instalen correctamente.

---

## Editor de texto

[Visual Studio Code](https://code.visualstudio.com/Download) es un editor de código fuente ligero pero potente que se ejecuta en tu computadora y está disponible para Windows, MacOS y Linux. Viene con soporte incorporado para JavaScript, TypeScript y Node.js

1. Descarga Visual Studio
2. Mueve la aplicación de la carpeta de descargas a la carpeta de aplicaciones

---

## Editor de texto (continuación)

2.  Ahora instalaremos algunas extensiones para VSCode, en tu terminal, pegue las siguientes líneas y presione <kbd>Enter</kbd>.

    ```sh
    code --install-extension naumovs.color-highlight
    code --install-extension zhuangtongfa.material-theme
    code --install-extension wayou.vscode-todo-highlight
    code --install-extension vscode-icons-team.vscode-icons
    code --install-extension dbaeumer.vscode-eslint
    code --install-extension mikestead.dotenv
    code --install-extension esbenp.prettier-vscode
    code --install-extension ritwickdey.liveserver
    ```

---

## Editor de texto (continuación)

5.  Presiona <kbd>shift</kbd> + <kbd>command </kbd> + <kbd>p</kbd>
6.  Escribe **Open Settings (JSON)** y se abrirá una pestaña, pega lo siguiente:

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll": true
      },
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.detectIndentation": false,
      "editor.formatOnSave": true,
      "editor.formatOnPaste": true,
      "editor.formatOnType": true,
      "editor.minimap.enabled": false,
      "editor.tabSize": 2,
      "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe",
      "workbench.colorTheme": "One Dark Pro",
      "workbench.iconTheme": "vscode-icons"
    }
    ```

7.  Salva el archivo presionando <kbd>command</kbd> + <kbd>s</kbd>

---

## Herramientas de Linea de Comando

> _(CLI en inglés)_

Xcode es un gran conjunto de herramientas de desarrollo de software y bibliotecas de Apple. Las herramientas de línea de comandos de Xcode son parte de XCode. La instalación de muchas herramientas comunes basadas en Unix requiere el compilador **[GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection)**. Las herramientas de línea de comandos de Xcode incluyen un compilador GCC.

- Ejecuta desde la línea de comando: `xcode-select --install`.
- Elije `install tools` en el indicador y acepte (`agree`) los términos.
  - Si recibes un mensaje que dice _"Can't install the software because it is not currently available from the Software Update server"_ ... probablemente sea porque las herramientas de línea de comando ya están instaladas.
- Acepta la licencia escribiendo `sudo xcodebuild -license`
- Presiona <kbd>enter</kbd>, luego <kbd>q</kbd>
- Luego, en el siguiente mensaje, escribe `agree`

---

## Homebrew Package Manager

Homebrew es un administrador de paquetes para OSX y Linux.

### ¿Qué son los paquetes?

Son paquetes de código fuente distribuidos por desarrolladores de software, que pueden compilarse e instalarse en tu máquina.

---

## Homebrew Package Manager

### Instalación

El administrador de paquetes nos permite instalar y actualizar software (como Ruby, Git, MongoDB, etc.) desde la línea de comandos:

1. Abre [http://brew.sh/](http://brew.sh/), desplásate hacia abajo, copia y pega el comando en el terminal.
2. Asegúrate de que Homebrew está preparado para preparar y solucionar cualquier problema: `brew doctor`
3. Actualiza Homebrew: `brew update`

> Nota: las rutas absolutas no se utilizarán después del siguiente paso, pero podrían no ser necesarias si ya tienen `/usr/local/bin` en tu `$ PATH`

---

## Zsh

### ¿Qué es el Shell?

Entraremos un poco más en detalles sobre el shell más adelante en el curso, pero un shell es una interfaz de usuario muy básica para acceder a los servicios de un sistema operativo.

---

## Zsh

### bash vs zsh

Las Mac anteriores a OSX Catalina tienen un shell llamado **bash** de forma predeterminada. Bash significa _Bourne-again shell_, refiriéndose a su objetivo como un reemplazo para el Bourne shell que fue desarrollado por Steven Bourne.

### ⚠️ ¡Si está utilizando OSX Catalina o una versión superior, omite los siguientes pasos para instalar Zsh!

---

## Zsh

Vamos a utilizar otro shell llamado **zsh** porque tiene algunas características adicionales para facilitar nuestro desarrollo web.

La pronunciación de Z en inglés americano es "_si_", por lo que **Z shell** rima con **C shell**, que suena como **seashell**.

---

## Zsh

### Instalación

1. Escribe `brew install zsh`
   - Escribe `0` si el mensaje te pregunta sobre `.zshrc`
2. Escribe `zsh`
   - El _prompt_ debe cambiar
3. Escribe `exit` para volver a bash
4. Escribe `which zsh` para determinar dónde se ha instalado tu nuevo shell
   - Copia en un lugar seguro el path donde se instaló zsh, ejemplo `/TU/RUTA/HACIA/zsh.`
5. Escribe `code /etc/shells` y agrega `/TU/RUTA/HACIA/zsh.`.
   - Para listar los shells de confianza tipea `chsh`.
   - El comando `chsh` permite a los usuarios cambiar su shell de inicio de sesión
   - Solo se puede cambiar los shells instalados en `/etc/shells`
6. En una pestaña nueva, escribe `chsh -s /TU/RUTA/HACIA/zsh`, luego cierra y vuelve a el terminal, esto habilitará **zsh** por defecto.
7. Escribe `echo $SHELL`. esto debería devolver `/TU/RUTA/HACIA/zsh`

---

## Oh-My-Zsh

Oh My Zsh es un programa de código abierto para administrar tu configuración de **zsh**. Aquí está el enlace a [GitHub](https://github.com/ohmyzsh/ohmyzsh).

1. En el terminal escribe
   ```sh
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```
2. Reinicia el terminal
3. Escribe
   ```sh
   code ~/.zshrc
   ```
4. Añade lo siguiente en el archivo `.zshrc` para hacer VS Code tu editor de text predeterminado
   ```sh
   export EDITOR='code -w -n'
   export PAGER='less -f'
   ```
5. Reinicia el terminal (cierra y abre) y el indicador debe ser una tilde (`~`) y en colores.

---

## NVM

### Instalación

[NVM](https://github.com/nvm-sh/nvm) es un programa que permite instalar en tu computadora varias versiones de Node

1. En el terminal escribe
   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
   ```
2. Una vez installado, escribe lo siguiente
   ```sh
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
   ```
3. Para cargar NVM en el terminal, escribe `source ~/.nvmrc`
4. Lista las versiones de node disponibles, escribiendo `nvm ls-remote`
5. Instala la última version de soporte de largo plazo (**LTS**) `nvm install --lts`
6. Chequea que node está instalado `node --version`

---

## NVM

### Instalación (continuación)

7. Para usar **nvm** automáticamente en un directorio con un archivo `.nvmrc` agrega el script descrito en el paso número **9** a tu archivo `.zshrc`
8. Abre archivo `.zshrc` en VS Code: `code ~/.zshrc`
9. Copia y pega el siguiente [script](https://github.com/nvm-sh/nvm#zsh) dentro del archivo `.zshrc`

---

## Git

Git es el sistema de control de versiones que utilizaremos a lo largo del curso. Es una de las herramientas más poderosas que usará como desarrollador.

### Instalación

1. Esto asegura que podamos actualizar Git más fácilmente: `brew install git`
2. Reinicia el terminal
3.
4. Configura tu nombre y dirección de correo electrónico para los `commits` (asegúrate de usar la dirección de correo electrónico que has registrado en GitHub)
   ```sh
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
   ```

---

## Git

### `git show` plugin ([Delta](https://github.com/dandavison/delta))

#### Instalación

1. Escribe `brew install git-delta`
2. Abre el archivo `.gitconfig`, escribiendo `code ~/.gitconfig`
3. Añade lo siguiente al archivo

   ```toml
   [core]
      pager = delta
   [interactive]
      diffFilter = delta --color-only
   [delta]
      features = decorations
      whitespace-error-style = 22 reverse
   [delta "decorations"]
      commit-decoration-style = bold yellow box ul
      file-style = bold yellow ul
      file-decoration-style = none
   ```

---

## Git

### `.gitignore` global

Hay algunos archivos que no queremos que **Git** rastree.

Podemos ignorarlos específicamente agregando los archivos a un archivo global `.gitignore`.

### Archivos `.DS_Store`

Mac OS X utiliza los archivos `.DS_Store` para almacenar información de metadatos específica de la carpeta. Son diferentes para cada mac, lo que significa que a menudo causan conflictos en las carpetas controladas por **git**.

Como nunca queremos rastrear archivos `.DS_Store`, podemos hacer un archivo global `.gitignore` y decirle a **git** que lo use para todos los repositorios

```sh
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## Git

### Archivos `public/uploads/`, `node_modules` & `bower_components`

De la misma manera, nunca queremos rastrear el contenido de nuestra carpeta de cargas (que generalmente contiene imágenes o medios que hemos cargado durante las pruebas) o nuestros `node_modules` o `bower_components`.

```sh
echo "/public/uploads/\nnode_modules/\nbower_components/" >> ~/.gitignore_global
```

---

## Git

### Configurar el acceso SSH a GitHub

[GitHub](https://www.github.com) es un servicio de alojamiento de repositorios **git** basado en la web. Nos permite mantener una versión remota de nuestros proyectos controlados por **git** . Cuando empujamos (`push`) y tiramos (`pull`) de Git, no queremos tener que iniciar sesión para verificar quiénes somos. Por lo tanto, lo que podemos hacer es generar y usar algo llamado clave **SSH**. Las claves SSH son una forma de identificar computadoras confiables, sin involucrar contraseñas.

1. Primero, necesitamos verificar las claves SSH existentes en tu computadora.
   ```sh
   ls -al ~/.ssh
   ```
2. Verifique el listado del directorio para ver si tienes archivos llamados `id_rsa.pub` o `id_dsa.pub`. Si tiene alguno de esos archivos, puede saltar al paso **'Agregar su clave SSH a Github'**.
3. Genera una llave SSH
   ```sh
    ssh-keygen -t rsa -C "your_email@example.com"
   ```

---

## Git

### Configurar el acceso SSH a GitHub (continuación)

4. Se te solicitará un archivo para guardar la clave y una frase de contraseña. Presiona <kbd>Enter</kbd> para ambos pasos (nombre predeterminado y sin frase de contraseña)
5. Añade la nueva llave al **ssh-agent**
   ```sh
    ssh-add ~/.ssh/id_rsa
   ```
6. Agrega tu clave **SSH** a GitHub iniciando sesión en Github, visitando **account settings** y haciendo clic **SSH keys**. Haga clic en **Add SSH key**
7. Copia tu clave al portapapeles con el comando:
   ```sh
    pbcopy < ~/.ssh/id_rsa.pub
   ```

---

## Git

### Configurar el acceso SSH a GitHub (continuación)

8. En GitHub, crea un título descriptivo para tu clave, pega la clave
   - ⚠️ **_no agregue ni elimine caracteres ni espacios en blanco a la clave_**
9. Haz clic en **Add key**
10. Comprueba que todo funciona:
    ```sh
     ssh -T git@github.com
    ```

---

## Yarn package manager

Yarn es un administrador de paquetes nos permite instalar y actualizar software en Node

## Instalación

```sh
brew install yarn
```

---

## ESLint

### Crear un archivo `.eslintrc.`

- Vamos a definir una serie de reglas para `eslint`

      ```sh
      code ~/.eslintrc
      ```

- Copia y pega el siguiente [texto](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-eslintrc-json) en el archivo `.eslintrc`
- Salva el archivo con <kbd>command</kbd> + <kbd>S</kbd>.
  ⚠️ Puede ser que veas un error en VScode, no te preocupes que los vamos arreglar pronto

---

## ESLint

### Instalar paquetes `eslint`

Instala los siguientes pacquetes de **eslint** con **yarn**

```sh
yarn global add eslint@^7 eslint-plugin-react babel-eslint eslint-config-prettier
```

---

## Prettier

### Crear un archivo `.prettierrc`

- Vamos a definir una serie de reglas para `prettier`

      ```sh
      code ~/.prettierrc
      ```

- Copia y pega el siguiente [texto](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-prettierrc-json) en el archivo `.eslintrc`
- Salva el archivo con <kbd>command </kbd> + <kbd>S</kbd>.
  ⚠️ Puede ser que veas un error en VScode, no te preocupes que los vamos arreglar pronto

---

## Prettier

### Instalar paquetes `prettier`

Instala los siguientes pacquetes de **eslint** con **yarn**

```sh
yarn global add prettier
```

---

## Navegador

<img src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/developer/logo-word-hor-lg.977a1e574948.png" alt="Firefox Developer Edition" style="max-width: 200px;">

Para este curso recomendamos [Firefox Developer Edition](https://www.mozilla.org/en-GB/firefox/developer/)

---

## Acelera tu cursor

Durante el curso, navegaremos mucho en el teclado. Por defecto, la velocidad del cursor en una Mac es demasiado lenta. Aumentemos la velocidad del cursor yendo a **System Preferences > Keyboard** .

Mover ambos al máximo.

### Ejemplo

<input type="range" min="0" max="100" value="100" >

---

## Cierre

No te preocupes sino recuerdas cómo hacer todo esto. Si necesita configurar una nueva máquina en el futuro, ¡podemos enviarte estas instruccciones!
