class: frontpage

<div>
   <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Windows Installfest</h1>
</div>

---

## Installfest

Durante este curso, utilizaremos una variedad de herramientas para desarrollar aplicaciones web, sin embargo, es importante que todos comencemos a utilizar tecnologías similares para que podamos centrarnos en el aprendizaje

---

## Pre instalación

Identifica qué versión de Windows estás utilizando: idealmente debería tener Windows 10 o una versión más reciente.

⚠️**Ten las actualizaciones al día**

---

## Windows en modo de desarrollo

- En tu PC navega a

  - **Settings** > **Update & security** y en la barra izquierda haz `clic` en **For Developers** y elige en la derecha **Developer mode**, luego acepta el mensaje de advertencia que aparece

- Tomará un tiempo en generar los cambios para Developer mode 💤

- Reinicia Windows 💤

---

## Editor de texto

[Visual Studio Code](https://code.visualstudio.com/Download) es un editor de código fuente ligero pero potente que se ejecuta en tu computadora y está disponible para Windows, MacOS y Linux. Viene con soporte incorporado para JavaScript, TypeScript y Node.js

1. Descarga Visual Studio
2. Ve a la carpeta de descargas y haz doble clic en `VSCodeUserSetup.exe`
3. El _Wizard_ preguntará:
   - Donde instalarlo, selecciona programas
   - Opciones adicionales, **selecciona todas**

---

## Editor de texto (continuación)

Instala los siguientes plugins

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Utilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight/" 
          class="external-link" 
          target="_blank" 
          rel="noopener">
          Color Highlight
        </a>
      </td>
      <td>
        Esta extensión colorea las definiciones de colores css/web
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://nodejs.org/es/" 
          class="external-link" 
          target="_blank" 
          rel="noopener">
          VS Code icons
        </a>
      </td>
      <td>
        Trae íconos  a de Visual Studio
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" 
          class="external-link" 
          target="_blank" 
          rel="noopener">
           ESLint
        </a>
      </td>
      <td>
       Integra ESLint en VS Code
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" 
          class="external-link" 
          target="_blank" 
          rel="noopener">
         Prettier
        </a>
      </td>
      <td>
        Integra Prettier en VS Code  
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver" 
          class="external-link" 
          target="_blank" 
          rel="noopener">
         Live Server
        </a>
      </td>
      <td>
        Servidor de desarrollo local con función de recarga en vivo
      </td>
    </tr>
  <tbody>
</table>

---

## Editor de texto (continuación)

5.  Presiona <kbd>shift</kbd> + <kbd>ctrl </kbd> + <kbd>p</kbd>
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
      "workbench.iconTheme": "vscode-icons"
    }
    ```

7.  Salva el archivo presionando <kbd>ctrl</kbd> + <kbd>S</kbd>
8.  Ahora sal de VS Code

---

## NVM

### Instalación

.row[
.col[

1. Descarga el [instalador](https://github.com/coreybutler/nvm-windows/releases)
2. Corre el instalador
3. Abre PowerShell e instala node

```powershell
nvm install lts/gallium

```

]
.col[
![instalador](https://github.com/coreybutler/staticassets/raw/master/images/nvm-installer.jpg)
]
]

---

## Git

Git es el sistema de control de versiones que utilizaremos a lo largo del curso. Es una de las herramientas más poderosas que usará como desarrollador.

### Instalación

1. Descarga el [instalador](https://git-scm.com/download/win)
2. Corre el instalador
3. En PowerShell cnfigura tu nombre y dirección de correo electrónico para los `commits` (asegúrate de usar la dirección de correo electrónico que has registrado en GitHub)
   ```powershell
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
   ```

---

## Git

### Configurar el acceso SSH a GitHub

[GitHub](https://www.github.com) es un servicio de alojamiento de repositorios **git** basado en la web. Nos permite mantener una versión remota de nuestros proyectos controlados por **git** . Cuando empujamos (`push`) y tiramos (`pull`) de Git, no queremos tener que iniciar sesión para verificar quiénes somos. Por lo tanto, lo que podemos hacer es generar y usar algo llamado clave **SSH**. Las claves SSH son una forma de identificar computadoras confiables, sin involucrar contraseñas.

1. Genera una llave SSH

```sh
 ssh-keygen -t rsa -C "your_email@example.com"
```

2. Se te solicitará un archivo para guardar la clave y una frase de contraseña. Presiona <kbd>Enter</kbd> para ambos pasos (nombre predeterminado y sin frase de contraseña)
3. Añade la nueva llave al **ssh-agent**,
   > Si creaste tu clave con un nombre diferente, o si está agregando una clave existente que tiene un nombre diferente, reemplaza `id_ed25519` en el comando con el nombre de tu archivo de clave privada.

```powershell
eval "$(ssh-agent -s)"
# > Agent pid 59566
ssh-add ~/.ssh/id_ed25519
```

> [Más información](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) de como crear llaves SSH
