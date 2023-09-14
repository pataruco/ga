# .center[Welcome to JS & Installest]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

### Agenda

.table[

| Timing | Type         | Topic                                  |
| ------ | ------------ | -------------------------------------- |
| 10 min | Opening      | Opening & Introductions                |
| 10 min | Structure    | Structure & Benchmarks                 |
| 50 min | Fundamentals | Fundamentals of JS & Web Development   |
| 15 min | Install      | Set Up Slack                           |
| 45 min | Install      | Brew, Git, GitHub, Node & Text Editors |
| 25 min | Exercise     | Thinking Like a Programmer: Pseudocode |
| 10 min | Conclusion   | Final Questions & Exit Tickets         |

]

---

### Learning Objectives

- Get to know your classmates, instructors, and staff members.
- Differentiate between the Internet and the World Wide Web.
- Summarize the client-server model and explain how a DNS Lookup works.
- Explain the structure of the course and tools that will be used.
- Discuss the benchmarks for assessments in terms of class participation, homework, and unit projects.
- Install and configure Node.js, npm, Git, and other command line tools.
- Identify common issues that might arise and solutions that will be used during the course.
- Practice programmatic thinking by writing pseudocode.

---

### Structure & Benchmarks

This course has 20 classes. It will begin with the fundamentals of JavaScript, including programming concepts such as data types, variables, and loops—the core concepts of programming. We'll then move into OOP and learn how to exchange information and functionality within our programs. From there, we'll learn how JavaScript can be used to manipulate websites and applications.

In addition to in-class participation, students are expected to complete three projects at the end of Units 1, 2, and 4.

.table[

| Class     |             Title             |     |     Class     | Title                                 |
| --------- | :---------------------------: | --- | :-----------: | ------------------------------------- |
| Lesson 0  |          Installfest          |     |   Lesson 11   | Advanced APIs                         |
| Lesson 1  |    JS on the Command Line     |     |   Lesson 12   | Lab Time                              |
| Lesson 2  |          Data Types           |     | **Project 2** | Feedr - Your Personalized Feed Reader |
| Lesson 3  |    Conditionals and Loops     |     |   Lesson 13   | Prototypal Inheritance                |
| Lesson 4  |      Functions and Scope      |     |   Lesson 14   | Closures and This                     |
| Lesson 5  |  **Project 1 Lab:** Slackbot  |     |   Lesson 15   | Intro to Crud and Firebase            |
| Lesson 6  |       Objects and JSON        |     |   Lesson 16   | Deploying Your App                    |
| Lesson 7  |     Intro to DOM & jQuery     |     |   Lesson 17   | Instructor Student Choice             |
| Lesson 8  |    DOM & jQuery Continued     |     |   Lesson 18   | Lab Time                              |
| Lesson 9  |         AJAX and APIs         |     | **Project 3** | Your Single Page                      |
| Lesson 10 | Asynchronous JS and Callbacks |     |   Lesson 19   | Final Project Presentations           |

]

---

### Fundamentals of JS & Web Development

#### JS & Web Tech

Let's start by defining a few terms and situating JavaScript in the broader Web ecosystem:

- **Web Development**: The process of building sites and applications for the Web.
- **Front-End Development**: The development of client / browser code (HTML, CSS, JS), i.e., what the user sees and interacts with.
- **Back-End Development**: The development of server-side code that handles such functions as routing, data handling, and databases (Ruby, Python, Java, Javascript), i.e., the “stuff behind the scenes” that makes Web applications work.

In this class, you will be learning both functional and object-oriented programming (OOP). Understanding the core differences between these two programming paradigms is essential to understanding the concepts in this class and, ultimately, becoming a more efficient programmer.

---

### Object Oriented & Functional Programming

- OOP focuses on structuring imperative code. It creates models of various concepts in a given problem area, then applies them. These models ("objects") are given functionality ("methods") that enable them to perform various actions; each object can also hold information. The fundamental unit in OOP is the object, which can itself contain further objects, like a Russian Matryoshka doll. The idea is to make it easier for human programmers to visualize the program by tying the program to concrete things, which helps the programmer group things logically. **The fundamental thing to remember is that in object-oriented programming, _everything_ is an object and every object has methods that allow the programmer to access its functionality.**

- Functional programming treats the problem area as a sequence of equations ("functions")--essentially, a progression of definitions that lead to the answer. The information begins as a number of axioms and culminates in the answer. (Think of it as a logical argument that ends in what you see on the screen.) Functional programming borrows many concepts from formal mathematics, and, as in mathematics (and unlike imperative programming or OOP), it usually does not save data between steps. **The fundamental unit in functional programming is the function, which can perform operations as well as produce further functions.**

Citation: [Quora](https://www.quora.com/What-is-the-core-difference-in-laymans-terms-between-procedural-programming-and-object-oriented-programming)

---

### Internet vs. World Wide Web

The Internet and the World Wide Web are very different entities; however, the terms are often used interchangeably. We will clarify some of the misconceptions about the two. Try to answer the following questions first:

- What do you think the World Wide Web is? How is it different from the Internet?
- Can you think of an analogy to describe the difference between the two?
- Who controls the Internet?

---

### The Internet is a Big Collection of Computers and Cables

_"Internet"_ is short for **"interconnection of computer networks"** It consists of millions of personal, business, and government computers, all connected like roads and highways. In essence, it's an infrastructure that connects millions of computers around the world together. The Internet as you know it ultimately boils down to a series of requests and responses; you send information out to the Web, and you receive corresponding information back.

No single person owns the Internet, and no single government has authority over its operations. Some technical rules and hardware/software standards enforce how people plug into the Internet, but for the most part, the Internet is a free and open broadcast medium.

---

### The Web Is a Big Collection of HTML Pages on the Internet

The World Wide Web, or "Web" for short, is a massive collection of digital documents in the form of HTML pages. The Web is viewed by using free software called Web browsers. Created in 1989, the Web is based on hypertext transfer protocol (HTTP), the language which allows us to "jump" from one public Web page to another via links. There are more than 65 billion public Web pages on the Web today.

The World Wide Web is, in essence, the conduit through which most of us access information over the Internet. It is software that runs on top of the Internet, enabling us to access HTML content.

Citation: [About Tech](http://netforbeginners.about.com/od/i/f/What-Is-The-Internet.htm)

---

#### Client - Server Model

**_Question: How exactly does communication between computers and networks take place?_**

Communication between a host (such as a computer) and a client (a requesting program, such as a browser) occurs via a request/response pair. The client initiates an HTTP request message, which is serviced through an HTTP response message. Simply put, the client makes a request and the server responds accordingly.

A server may receive requests from many different clients in a very short period of time. Because the computer can perform only a limited number of tasks at any moment, it relies on a scheduling system to prioritize and accommodate incoming requests in turn. To prevent abuse and maximize uptime, the server's software limits how a client can use the server's resources. Even so, a server is not immune to abuse. A denial of service attack exploits a server's obligation to process requests by bombarding it with requests incessantly. This inhibits the server's ability to respond to legitimate requests.

Of course, this is a somewhat abstract explanation of how this all works. Getting your request message to the right place and delivering the intended information is a highly complex process involving many intricacies.

---

.image-third[![WebStack](https://git.generalassemb.ly/JSD/JSD-course-materials/blob/master/curriculum/lesson-plans/00-installfest/img/Client-server-model.png?raw=true)]

- **Host** - A computer or other device connected to a computer network; the host may offer information resources, services, and applications (via computer code) to users or other computers on the network.
  - Ex: servers and Web services

* **Client** - The requesting program in the client/host relationship; the client initiates an HTTP request message, which is serviced through an HTTP response message in return.
  - Ex: browsers, terminals, mobile devices

- **HTTP (Hyper Text Transfer Protocol)** - Because this is a protocol, it enables communication among various computers and supports an array of network configurations. To make this possible, HTTP assumes very little about a particular system.
  - Read this as: "HTTP makes it easy for many different computers to talk to each other."

_Text From [Tuts +](http://code.tutsplus.com/tutorials/http-the-protocol-every-Web-developer-must-know-part-1--net-31177)_

---

### IP Addresses and Domains: Reaching a Specific Server

All computers connected to the Internet have a unique numeric address composed of four bytes of data, separated by periods (see example below). This is how computers “find” one another on the Internet.

```sh
123.123.123.123
```

Of course, humans and computers communicate in different types of languages, so these numbers have to be translated into words. This is where domain registrars come in. Simply put, a domain registrar creates a link between a unique IP address (numbers) with the chosen domain name (words). When a domain name is entered into a browser, the browser performs a Domain Name System (DNS) Lookup to match the letters with the IP address.

| Domain Name  | IP Address    |
| ------------ | ------------- |
| apple.com    | 17.172.224.47 |
| facebook.com | 31.13.65.1    |
| google.com   | 216.58.192.46 |

Every Internet provider has a cached list of all registered domains and their corresponding IP addresses. So when you type something like “apple.com” into the browser, the browser in essence asks the DNS server, "What is the IP address of the characters ‘apple.com’?" The DNS server responds, "17.172.224.47," and the browser then connects to IP address 17.172.224.47.

The process is similar to using street addresses for finding a house, rather than using Latitude and Longitude coordinates.

---

# Installfest

# 🛠 💻 💥 🎉

---

## Set Up Slack 

We'll be using Slack to register attendance and communicate during class. Follow the instructions below to sign up for Slack.

- Visit the following [site](https://slack.com/downloads) to download the application.
- Sign up using your email and join your class Slack channel.
- Upload a profile picture to Slack.

---

## GitHub

We will be using the [GitHub](https://github.com/) service to share some of our code. We will learn
about the underlying technology of GitHub known as `git` in the next lesson.

Please, open an account.

---

## Developers tools

You will need to install certain tools that will be used throughout the course. The installation instructions vary depending on whether you have a Mac, Windows, or Linux machine.

---

## Mac OS X | Windows | Ubuntu

---

## Pre-install

1. Identify which version of OSX you're using - ideally you should have Mojave or newer (10.14.x)
2. Ensure you've got [Xcode installed](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)
3. Ensure that you've uninstalled any antivirus software you may have, as it can prevent some of the tools from installing properly

---

## Text editor

[Visual Studio](https://code.visualstudio.com/Download) Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js

1. Download Visual Studio
2. Move the app from downloads folder to application folder
3. Open Visual studio
4. Press `shift` + `⌘ (cmd)` + `p`
5. Type `shell` to and select `Shell Command` to install shell command 'code' in PATH.

---

## Command Line Tools

Xcode is a large suite of software development tools and libraries from Apple. The Xcode Command Line Tools are part of XCode. Installation of many common Unix-based tools requires the [GCC compiler](https://en.wikipedia.org/wiki/GNU_Compiler_Collection). The Xcode Command Line Tools include a GCC compiler.

1. Run from the command line: `xcode-select --install`
2. Choose `install tools` from the prompt and `agree` to the terms
3. If you recieve a message saying "Can't install the software because it is not currently available from the Software Update server"... it's probably because the command line tools are already installed...
4. Agree to the license by typing `sudo xcodebuild -license`
5. Press enter, then `q`
6. Then on the next prompt, type `agree`

---

## Homebrew Package Manager

Homebrew is a package manager for OS X.

#### What are packages?

Packages are bundles of source code distributed by developers of software, which can be compiled and installed on your machine.

#### Install

1. The package manager allows us to install and update software (like NVM, Git, MongoDB, etc) from the command line:
2. Open [http://brew.sh/](http://brew.sh/), scroll down to Install Homebrew and copy+paste the command into the terminal.
3. Ensure that Homebrew is raring to brew and fix any issues: `brew doctor`
4. Update Homebrew: `brew update`

---

## Zsh

#### What is a shell?

We will go into a bit more detail about the shell later on in the course but a shell is a very basic user interface for accessing an operating system's services.

#### bash vs zsh

Macs come shipped with a shell called 'bash' by default. Bash stands for **'Bourne-again shell'**, referring to its objective as a free replacement for the Bourne shell which was developed by [Steven Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne).

We are going to use another shell called zsh because it has some extra features to make our web-development easier.

The American English pronunciation of Z is "zee", so Z shell rhymes with C shell, which sounds like seashell. zsh was also the login of the original developer Paul Falstad's Yale professor Zhong Shao.

---

#### Install

1. Type `brew install zsh` Type `0` if the prompt ask you about .zshrc
2. Type `zsh` . You should have a different prompt
3. Type `exit` to return to bash
4. Type `which zsh` to determine where your new shell has installed
5. Type `code /etc/shells` and add `/YOUR/PATH/TO/zsh`. (Lists trusted shells. The chsh command allows users to change their login shell only to shells listed in this file)
6. In a new tab, type `chsh -s /YOUR/PATH/TO/zsh`, then close and reopen your terminal application to This will enable zsh by default.
7. Type `echo $SHELL`. this should return `/YOUR/PATH/TO/zsh`

---

## Oh-My-Zsh

Oh My Zsh is an open source, community-driven framework for managing your zsh configuration. Here is the link to the [Github](https://github.com/robbyrussell/oh-my-zsh).

The `PATH` environment variable is a colon-delimited list of directories that your shell searches through when you enter a command.

Type `curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh`

Add following to `.zshrc` file to make Visual Studio Code the default text editor:

Type `code ~/.zshrc`

and paste this

```sh
export EDITOR='code -w -n'
export PAGER='less -f'
```

Close your terminal and open a new one - the prompt should be an arrow and tilde, and in colour.

---

## Install nvm

Open a terminal window and type:
`curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash`

This will install `nvm` in your system.

Type `source ~/.zshrc` to include the new folders to the current `$PATH`

Now that nvm is installed, we want to list the available versions, type:

```sh
nvm ls-remote
```

And you will be shown a list of all the available versions of node.js

```sh
nvm install <LAST_VERSION>
```

If you type:

```sh
node --version
```

You should see the last version number that you've installed 🎉

---

## Install Git

Git is the version control system that we will use throughout the course. It is one of the most powerful tools you will use as a developer.

1. This ensures we can upgrade Git more easily:
   `brew install git`
2. Ensure you're not using **Apple Git** from the path `/usr/bin/git` by checking `which git` and `git --version`
3. Configure your name and email address for commits (be sure to use the email address you have registered with Github):

```sh
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
```

---

## Global `.gitignore`

There are a few files that we don't want Git to track. We can specifically ignore them by adding the files to a global `.gitignore` file.

#### `.DS_Store files`

`.DS_Store` files are used by Mac OS X to store folder specific metadata information. They are different for every mac, it means that they often cause conflicts in version controlled folders.

Since we never want to track `.DS_Store` files, we can make a global `.gitignore` file, and tell git to use it for all repositories:

```sh
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

---

## `public/uploads` & `node_modules`

In the same way, we want to never track the contents of our uploads folder in Rails (which usually contain images or media that we have uploaded during testing) or our node_modules .

```sh
echo "/public/uploads/\nnode_modules/" >> ~/.gitignore_global
```

---

## Configure SSH access to Github

GitHub is a web-based Git repository hosting service. It allows us to keep a remote version of our version-controlled projects. When we push and pull from Git, we don't want to always have to login to verify who we are. Therefore, what we can do is generate and use something called an SSH key. SSH keys are a way to identify trusted computers, without involving passwords.

1. First, we need to check for existing SSH keys on your computer. Open up your Terminal and type:
   `ls -al ~/.ssh`
   Check the directory listing to see if you have files named either id_rsa.pub or id_dsa.pub. If you have either of those files you can skip to the step 'add your SSH key to Github'.
2. Generate a new SSH key
   `ssh-keygen -t rsa -C "your_email@example.com"`
3. You'll be prompted for a file to save the key, and a passphrase. Press enter for both steps (default name, and no passphrase)
4. Then add your new key to the ssh-agent:
   `ssh-add ~/.ssh/id_rsa`
5. Add your SSH key to GitHub by logging into Github, visiting `account settings` and clicking `SSH keys`. Click `Add SSH key`
6. Copy your key to the clipboard with the terminal command:
   `pbcopy < ~/.ssh/id_rsa.pub`
7. On Github, create a descriptive title for your key, an paste into the `key` field - _do not add or remove and characters or whitespace to the key_
8. Click `Add key` and check everything works in the terminal by typing:
   `ssh -T git@github.com`

---

## Speed up your cursor

During the course, we will be doing a lot of navigating using our keyboards. By default, the speed of the curson on a Mac is a little too slow. Let's increase the speed of the cursor by going to:

```
System Preferences > Keyboard
```

Move both up to maximum.

---

## Thinking Like a Programmer

In order to become a great programmer, you have to think like a computer. Essentially, you have to think in code. The first step, is to write down whatever you want your computer to do in plain English or pseudocode.

Pseudocode is an outline of a program, written in a form that can easily be converted into real programming statements. Pseudocode can be neither compiled nor executed, and there are no real formatting or syntax rules. It is simply the critical first step in producing the final code. The benefit of pseudocode is that it enables the programmer to concentrate on the flow of a program without being distracted by the syntactic details of a particular programming language. In fact, a programmer can write pseudocode before even knowing which programming language will be used for the final implementation.

---

### Pseudocode Exercise

Write the pseudocode for a program that controls a light that changes color based on user input. Imagine the light has three different-colored buttons—red, blue, and yellow. When a user touches one of the buttons, the light changes to the corresponding color. If the selected color is touched again, the light turns off. You do not have to write any actual JavaScript for this exercise.

---
