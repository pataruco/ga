class: frontpage

<div>
  <h2>macOS</h2>
  <hr/>
  <h1>Installfest</h1>
</div>

---

## 💻 macOS Installfest

### Pre-install

1. Identify which version of OSX you're using - ideally you should have Big Sur or newer (11.14.x)
2. Ensure you've got [Xcode installed](https://apps.apple.com/gb/app/xcode/id497799835)
3. Ensure that you've uninstalled any antivirus software you may have, as it can prevent some of the tools from installing properly
4. Open an account on [GitHub](https://www.github.com)

---

## 💻 macOS Installfest

### Text editor

<div class="row">
   <div>
      <p>
        <a href="https://code.visualstudio.com/Download" class="external-link">Visual Studio</a> Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js
      </p>
      <ol>
         <li>Download Visual Studio</li>
         <li>Move the app from downloads folder to application folder</li>
         <li>Open Visual studio</li>
         <li>Turn on <strong>Settings sync<strong></li>
      </ol>
   </div>
   <div>
      <picture class="image-half">
        <img src="https://code.visualstudio.com/assets/docs/editor/settings-sync/turn-on-sync.png" alt="Visual Studio code settings">
      </picture>
   </div>
</div>

---

## 💻 macOS Installfest

### Text editor

5. Install `code` command in `PATH`:

- Press <kbd>Shift</kbd> + <kbd>command</kbd> + <kbd>P</kbd>
- Write in the prompt: **path**
- Select **Shell Command: Install 'code' command in the PATH**

---

## 💻 macOS Installfest

### Text editor

.row[
.column[
Install some VS Code extensions, open your terminal and paste the following and then press <kbd>Enter</kbd>
]
.column[

```sh
code --install-extension mikestead.dotenv
code --install-extension zhuangtongfa.material-theme
code --install-extension esbenp.prettier-vscode
code --install-extension vscode-icons-team.vscode-icons
code --install-extension dbaeumer.vscode-eslint
```

]
]

---

## 💻 macOS Installfest

### Text editor

7. Set settings

.row[
.column[

- Press <kbd>Shift</kbd> + <kbd>command</kbd> + <kbd>P</kbd>
- Write in the prompt: **Open Settings (JSON)**
- A new tab should open, paste the following
  ]
  .column[

```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "eslint.format.enable": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons"
}
```

]
]

---

## 💻 macOS Installfest

### Command Line Tools

Xcode is a large suite of software development tools and libraries from Apple. The Xcode Command Line Tools are part of XCode. Installation of many common Unix-based tools requires the [GCC compiler](https://en.wikipedia.org/wiki/GNU_Compiler_Collection). The Xcode Command Line Tools include a GCC compiler.

1. Run from the command line: `xcode-select --install`
2. Choose `install tools` from the prompt and `agree` to the terms
3. If you recieve a message saying "Can't install the software because it is not currently available from the Software Update server"... it's probably because the command line tools are already installed...
4. Agree to the license by typing `sudo xcodebuild -license`
5. Press enter, then `q`
6. Then on the next prompt, type `agree`

---

## 💻 macOS Installfest

### Homebrew Package Manager

Homebrew is a package manager for ~~OSX~~ **Linux**.

#### What are packages?

Packages are bundles of source code distributed by developers of software, which can be compiled and installed on your machine.

#### Install

1. The package manager allows us to install and update software (like Ruby, Git, MongoDB, etc) from the command line:
2. Open [http://brew.sh/](http://brew.sh/), scroll down to Install Homebrew and copy+paste the command into the terminal.
3. Ensure that Homebrew is raring to brew and fix any issues: `brew doctor`
4. Update Homebrew: `brew update`

(**Note**: the absolute paths will not be used after the next step, but might not be needed if they already have `/usr/local/bin` in their \$PATH)

---

## 💻 macOS Installfest

### Zsh

#### What is a shell?

We will go into a bit more detail about the shell later on in the course but a shell is a very basic user interface for accessing an operating system's services.

##### bash vs zsh

Macs before OSX Catalina came shipped with a shell called 'bash' by default. Bash stands for **'Bourne-again shell'**, referring to its objective as a free replacement for the Bourne shell which was developed by [Steven Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne).

We are going to use another shell called zsh because it has some extra features to make our web-development easier.

The American English pronunciation of Z is "zee", so Z shell rhymes with C shell, which sounds like seashell. zsh was also the login of the original developer Paul Falstad's Yale professor Zhong Shao

---

## 💻 macOS Installfest

### Oh-My-Zsh 🌈

Oh My Zsh is an open source, community-driven framework for managing your zsh configuration. Here is the link to the [Github](https://github.com/robbyrussell/oh-my-zsh).

The `PATH` environment variable is a colon-delimited list of directories that your shell searches through when you enter a command.

1. Type

   ```sh
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```

2. Restart the terminal (close and open)

---

## 💻 macOS Installfest

### Oh-My-Zsh 🌈

3. Type this in your terminal

   ```sh
   code ~/.zshrc
   ```

4. Add following to `.zshrc` file to make VSCode the default text editor:

   ```sh
   export EDITOR='code -w -n'
   export PAGER='less -f'
   ```

5. Restart the terminal (close and open) the prompt should be a tilde (**~**), and in colours.

---

## 💻 macOS Installfest

### Install nvm

1. Open a terminal window and type:

   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
   ```

2. Once is installed type this:

   ```sh
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"

   ```

3. Type `source ~/.nvmrc` to include the new folders to the current `$PATH`

4. Now that nvm is installed, we want to list the available versions, type:

   ```sh
   nvm ls-remote
   ```

   - And you will be shown a list of all the available versions of node

---

## 💻 macOS Installfest

### Install nvm

5. Install the latest version of node and the current **Long term support** (_LTS_)
   ```sh
   nvm install node
   nvm install --lts
   ```
6. Check that Node is installed, type

   ```sh
   node --version
   ```

   - You should see the last version number that you've installed

7. To use `nvm use` automatically in a directory with a `.nvmrc` file add [this script](https://github.com/nvm-sh/nvm#zsh) to `.zshrc`

---

## 💻 macOS Installfest

### Yarn

1. Install Yarn

   ```sh
   brew install yarn
   ```

---

## 💻 macOS Installfest

### ESLint

#### Create `.eslintrc.json` file

- Let define some rules for `eslint`

  ```sh
  code ~/.eslintrc.json
  ```

- Copy and paste this [text](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-eslintrc-json) in the file `.eslintrc.json`
- Save file <kbd>command</kbd> + <kbd>S</kbd>.

#### Install `eslint` packages

Install the following **eslint** packages

```sh
yarn global add eslint@latest eslint-config-prettier@latest
```

---

## 💻 macOS Installfest

### Prettier

#### Create `.prettierrc.json` file

- Let define some rules for `prettier`

  ```sh
  code ~/.prettierrc.json
  ```

- Copy and paste this [text](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-prettierrc-json) in the file `.prettierrc.json`
- Save file <kbd>command </kbd> + <kbd>S</kbd>.

#### Install `prettier` packages

Install the following **prettier** packages

```sh
yarn global add prettier
```

---

## 💻 macOS Installfest

### Install Git

Git is the version control system that we will use throughout the course. It is one of the most powerful tools you will use as a developer.

1. This ensures we can upgrade Git more easily:
   `brew install git`
2. Restart the terminal
3. Ensure you're not using "Apple Git" from the path `/usr/bin/git` by checking `which git` and `git --version`
4. Configure your name and email address for commits (be sure to use the email address you have registered with Github):

```sh
 git config --global user.name "Your Name"
 git config --global user.email "you@example.com"
```

---

## 💻 macOS Installfest

### Global `.gitignore`

There are a few files that we don't want Git to track. We can specifically ignore them by adding the files to a global `.gitignore` file.

#### `.DS_Store` files

are used by macOS to store folder specific metadata information. They are different for every mac, it means that they often cause conflicts in version controlled folders.

Since we never want to track `.DS_Store` files, we can make a global `.gitignore` file, and tell git to use it for all repositories:

```sh
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## 💻 macOS Installfest

### Global `.gitignore`

#### `public/uploads/`, `node_modules` & `bower_components`

In the same way, we want to never track the contents of our uploads folder in Rails (which usually contain images or media that we have uploaded during testing) or our node_modules or bower_components.

```sh
echo "/public/uploads/\nnode_modules/\nbower_components/" >> ~/.gitignore_global
```

---

## 💻 macOS Installfest

### Configure SSH keys on Github

GitHub is a web-based Git repository hosting service. It allows us to keep a remote version of our version-controlled projects. When we push and pull from Git, we don't want to always have to login to verify who we are. Therefore, what we can do is generate and use something called an SSH key. SSH keys are a way to identify trusted computers, without involving passwords.

1. First, we need to check for existing SSH keys on your computer. Open up your Terminal and type:
   ```sh
   ls -al ~/.ssh
   ```
   Check the directory listing to see if you have files named either **id_rsa.pub** or **id_dsa.pub**. If you have either of those files you can skip to the step 'add your SSH key to Github'.
2. Generate a new SSH key
   ```sh
    ssh-keygen -t rsa -C "your_email@example.com"
   ```

---

## 💻 macOS Installfest

### Configure SSH keys on Github

3. You'll be prompted for a file to save the key, and a passphrase. Press enter for both steps (default name, and no passphrase)
4. Then add your new key to the ssh-agent:
   ```sh
    ssh-add ~/.ssh/id_rsa
   ```
5. Add your SSH key to GitHub by logging into Github, visiting **account settings** and clicking **SSH keys**. Click **Add SSH key**
6. Copy your key to the clipboard with the terminal command:
   ```sh
    pbcopy < ~/.ssh/id_rsa.pub
   ```

---

## 💻 macOS Installfest

### Configure SSH keys on Github

7. On Github, create a descriptive title for your key, an paste into the `key` field - _do not add or remove and characters or whitespace to the key_
8. Click `Add key` and check everything works in the terminal by typing:
   ```sh
    ssh -T git@github.com
   ```

---

## 💻 macOS Installfest

### Speed up your cursor

During the course, we will be doing a lot of navigating using our keyboards. By default, the speed of the curson on a Mac is a little too slow. Let's increase the speed of the cursor by going to:

```
System Preferences > Keyboard
```

Move both up to maximum.

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
