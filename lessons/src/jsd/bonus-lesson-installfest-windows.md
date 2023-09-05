class: frontpage

<div>
  <h2>Windows</h2>
  <hr/>
  <h1>Installfest</h1>
</div>

---

## 💻 Windows Installfest

### Pre-install

The only reason Web development on Windows is suddenly so feasible is because of Microsoft's work on the Windows Linux subsystem, giving you a full Ubuntu installation on the command line.

Identify which version of Windows you are using - ideally you should have Windows 10 or newer.

⚠️**Keep updates up to date**

---

## 💻 Windows Installfest

### Windows in development mode

- On your PC navigate to

  - **Settings** > **Update & security** on ythe left hand side `click` **For Developers** and choose on the right side **Developer mode**, then accept the warning message that appears

- It will take a while to generate the changes for Developer mode 💤

- Restart Windows 💤

---

## 💻 Windows Installfest

### Installing the Windows Subsystem for Linux

- Open **PowerShell** as administrator, with right click
- Install Windows Subsystem for Linux (**WSL**)
  ```powershell
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```
- Upgrade from **WSL 1** to **WSL 2**
  ```powershell
  dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  ```
- Restart Windows 💤
- Go to this address [address](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) and download the kernel for **WSL2**
- Open **Downloads** and double click on `wsl_update_x64.exe`
- Open PowerShell as administrator, with right click
- Set WSL 2 as default
  ```powershell
  wsl --set-default-version 2
  ```

---

## 💻 Windows Installfest

### Linux Ubuntu installation

- Open Windows store and search por **Ubuntu**
- Select the latest LTS (Long term support), e.g. **Ubuntu 20.04 LTS**
- Once is installed the terminal ask for a username and password, please create it
- Update and upgrade packages

  ```sh
  sudo apt update && sudo apt upgrade
  ```

---

## 💻 Windows Installfest

### Linux Ubuntu installation

- Close Ubuntu terminal

* Check that is installed
  ```powershell
  wsl --list --verbose
  ```
  - You should see `Ubuntu`
* Set the Linux version to be supported by WSL
  ```powershell
  <!-- In this example is Ubuntu-20.04 change your version if is different -->
  wsl --set-version Ubuntu-20.04 2
  wsl --set-default-version 2
  ```

---

## 💻 Windows Installfest

### Text editor

<a href="https://code.visualstudio.com/Download" class="external-link">Visual Studio</a> Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js

1. Go to the download folder and double-click `VSCodeUserSetup.exe`
2. The _Wizard_ will ask:
   - Where to install it, select programs
   - Additional options, **select all**

---

## 💻 Windows Installfest

### Text editor

3. Install `code` command in `PATH`:

- Press <kbd>Shift</kbd> + <kbd>ctrl</kbd> + <kbd>P</kbd>
- Write in the prompt: **path**
- Select **Shell Command: Install 'code' command in the PATH**

---

## 💻 Windows Installfest

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

## 💻 Windows Installfest

### Text editor

7. Set settings

.row[
.column[

- Press <kbd>Shift</kbd> + <kbd>ctrl</kbd> + <kbd>P</kbd>
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
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons"
}
```

]
]

---

## 💻 Windows Installfest

### Homebrew Package Manager

Homebrew is a package manager for ~~OSX~~ **Linux**.

#### What are packages?

Packages are bundles of source code distributed by developers of software, which can be compiled and installed on your machine.

---

## 💻 Windows Installfest

### Homebrew Package Manager

#### Install

- Open [http://brew.sh/](http://brew.sh/), scroll down, copy and paste the command in the terminal.
- To add `brew` to `$PATH`:

  - open `.bashrc` in VSCode

    ```sh
    code ~/.bashrc
    ```

  - Add the following line to the end of the file:
    ```sh
    PATH=$PATH:/home/linuxbrew/.linuxbrew/bin
    ```

---

## 💻 Windows Installfest

### Homebrew Package Manager

- Verify that it is installed
  ```sh
  sudo apt-get install build-essential
  echo 'eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)' >> /home/<Ubuntu username>/.profile
  eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
  brew install gcc
  brew doctor
  brew update
  ```

---

## 💻 Windows Installfest

### Zsh

#### What is a shell?

We will go into a bit more detail about the shell later on in the course but a shell is a very basic user interface for accessing an operating system's services.

##### bash vs zsh

Ubuntu shipped with a shell called 'bash' by default. Bash stands for **'Bourne-again shell'**, referring to its objective as a free replacement for the Bourne shell which was developed by [Steven Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne).

We are going to use another shell called zsh because it has some extra features to make our web-development easier.

The American English pronunciation of Z is "zee", so Z shell rhymes with C shell, which sounds like seashell. zsh was also the login of the original developer Paul Falstad's Yale professor Zhong Shao.

---

## 💻 Windows Installfest

### Zsh

#### Install

- Type `brew install zsh`
- Type `zsh`
  - the _prompt_ should change
  - Type `0` if they asked for `.zshrc`
- Type `exit` to return back to bash
- Type `which zsh` to determine where your new shell has been installed
  - Copy in a safe place the path where zsh was installed, example `/ROOT/TO/SHELL/zsh.`
- Type `sudo vi /etc/shells` and add `/ROOT/TO/SHELL/zsh.`.
  - You can only change the shells installed in `/etc/shells`
- In a new tab, Type `chsh -s /ROOT/TO/SHELL/zsh`, then open an close the terminal

---

## 💻 Windows Installfest

### Zsh

#### Install

- Open bash profile `code ~/.bashrc`
- Add the following code to the end of the file
  ```bash
  if [ -t 1 ]; then
  exec zsh
  fi
  ```
- Open and close the terminal, this will enable **zsh** by default.

---

## 💻 Windows Installfest

### Oh-My-Zsh 🌈

Oh My Zsh is an open source, community-driven framework for managing your zsh configuration. Here is the link to the [Github](https://github.com/robbyrussell/oh-my-zsh).

The `PATH` environment variable is a colon-delimited list of directories that your shell searches through when you enter a command.

- Type

  ```sh
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  ```

- Restart the terminal (close and open)

---

## 💻 Windows Installfest

### Oh-My-Zsh 🌈

- Type this in your terminal

  ```sh
  code ~/.zshrc
  ```

- Add following to `.zshrc` file to make VSCode the default text editor:

  ```sh
  export EDITOR='code -w -n'
  export PAGER='less -f'
  ```

- Restart the terminal (close and open) the prompt should be a tilde (**~**), and in colours.

---

## 💻 Windows Installfest

### Install nvm

- Open a terminal window and type:

  ```sh
  brew install nvm
  ```

- Open **zsh** profile `code ~/.zshrc` and paste the following:

  ```sh
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  ```

- Then under the above, copy and paste this [code](https://github.com/nvm-sh/nvm#zsh)
- List the available node versions, by typing `nvm ls-remote`
- Install the latest version of long-term support (**LTS**) `nvm install --lts`
- Check that node is installed `node --version`

---

## 💻 Windows Installfest

### Yarn

- Install Yarn

  ```sh
  brew install yarn
  ```

---

## 💻 Windows Installfest

### ESLint

#### Create `.eslintrc.json` file

- Let define some rules for `eslint`

  ```sh
  code ~/.eslintrc.json
  ```

- Copy and paste this [text](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-eslintrc-json) in the file `.eslintrc.json`
- Save file <kbd>ctrl</kbd> + <kbd>S</kbd>.

#### Install `eslint` packages

Install the following **eslint** packages

```sh
yarn global add eslint@latest eslint-config-prettier@latest
```

---

## 💻 Windows Installfest

### Prettier

#### Create `.prettierrc.json` file

- Let define some rules for `prettier`

  ```sh
  code ~/.prettierrc.json
  ```

- Copy and paste this [text](https://gist.github.com/pataruco/353b75f87ad809dc96b64174b2201f60#file-prettierrc-json) in the file `.prettierrc.json`
- Save file <kbd>ctrl </kbd> + <kbd>S</kbd>.

#### Install `prettier` packages

Install the following **prettier** packages

```sh
yarn global add prettier
```

---

## 💻 Windows Installfest

### Install Git

Git is the version control system that we will use throughout the course. It is one of the most powerful tools you will use as a developer.

- This ensures we can upgrade Git more easily:
  `brew install git`

- Type `rehash`
- Make sure you have the latest version `git --version` installed
- Configure your name and email address for commits (be sure to use the email address you have registered with Github):

```sh
 git config --global user.name "Your Name"
 git config --global user.email "you@example.com"
```

---

## 💻 Windows Installfest

### Global `.gitignore`

#### `public/uploads/`, `node_modules` & `bower_components`

In the same way, we want to never track the contents of our uploads folder in Rails (which usually contain images or media that we have uploaded during testing) or our node_modules or bower_components.

```sh
echo "/public/uploads/\nnode_modules/\nbower_components/" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## 💻 Windows Installfest

### Configure SSH keys on Github

GitHub is a web-based Git repository hosting service. It allows us to keep a remote version of our version-controlled projects. When we push and pull from Git, we don't want to always have to login to verify who we are. Therefore, what we can do is generate and use something called an SSH key. SSH keys are a way to identify trusted computers, without involving passwords.

- First, we need to check for existing SSH keys on your computer. Open up your Terminal and type:
  ```sh
  ls -al ~/.ssh
  ```
  Check the directory listing to see if you have files named either **id_rsa.pub** or **id_dsa.pub**. If you have either of those files you can skip to the step 'add your SSH key to Github'.
- Generate a new SSH key
  ```sh
   ssh-keygen -t rsa -C "your_email@example.com"
  ```

---

## 💻 Windows Installfest

### Configure SSH keys on Github

- You'll be prompted for a file to save the key, and a passphrase. Press enter for both steps (default name, and no passphrase)

- Start the **ssh-agent**
  ```sh
  eval "$(ssh-agent -s)"
  ```
- Then add your new key to the ssh-agent:
  ```sh
   ssh-add ~/.ssh/id_rsa
  ```
- Add your SSH key to GitHub by logging into Github, visiting **account settings** and clicking **SSH keys**. Click **Add SSH key**
- Copy your key to the clipboard with the terminal command:
  ```sh
    clip.exe < ~/.ssh/id_rsa.pub
  ```

---

## 💻 Windows Installfest

### Configure SSH keys on Github

- On Github, create a descriptive title for your key, an paste into the `key` field - _do not add or remove and characters or whitespace to the key_
- Click `Add key` and check everything works in the terminal by typing:
  ```sh
   ssh -T git@github.com
  ```

---

## 💻 Windows Installfest

### Speed up your cursor

During the course, we will be doing a lot of navigating using our keyboards. By default, the speed of the curson on a Mac is a little too slow. Let's increase the speed of the cursor by going to:

- Go to **Control panel > Keyboard > Speed**.

### Example

<input type="range" min="0" max="100" value="100" >

Move up to maximum.

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
