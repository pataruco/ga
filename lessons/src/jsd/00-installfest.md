class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>00 Welcome and Installfest</h1>
</div>

---

## Learning Objectives

In this lesson, you will:

- Get to know your classmates, instructors, and staff members.
- Differentiate between the Internet and the World Wide Web.
- Summarize the client-server model and explain how a DNS Lookup works.
- Explain the structure of the course and tools that will be used.
- Discuss the benchmarks for assessments in terms of class participation, homework, and unit projects.
- Install and configure Node.js, Yarn, Git, and other command line tools.
- Identify common issues that might arise and solutions that will be used during the course.
- Practice programmatic thinking by writing pseudocode.

---

## Meet the Team - Pedro Martin

- [Software engineer at Red Badger.](https://red-badger.com/people/pedro-martin/)
- Former science teacher.
- General Assembly alumni 2015.
- [Teaching courses and workshops at General Assembly since 2015.](https://generalassemb.ly/instructors/pedro-martin/7012)
- Originally from Caracas, Venezuela 🇻🇪.
- [Former Rope Access Technician (RAT 🐀).](https://www.theguardian.com/artanddesign/2015/jul/20/hanging-by-thread-rats-keep-skyscrapers-standing)
- Hardcore Star Wars fan.

---

## Tell us a highlight from a random year

- [Go to the random year generator](https://pataruco.github.io/ga-fewd-assets/random-year/index.html)
- Enter your year of birth
- Tell us your name?
- Tell us a highlight from your life that happened that year
- Where are you in the world?
- One thing you’re hoping to get out of this course?
- Your favourite ice cream flavour?
- Popcorn 🍿

---

## The Student Experience

- Open and friendly learning environment
- Supportive, collaborative
- Friendly yet challenging
- Learn by doing - and making mistakes!
- Be curious - ask lots of questions
- Remember: no question is a stupid question

---

## Our Promise

- We’ll focus on practical skills
- We’ll teach you how to continue learning

---

## Learn by Doing

- Throughout the course we'll be creating lots of small projects to learn the various languages and techniques.

- The goal is to work towards creating a final project of your choosing and presenting it to the class on the final session

---

## Process First, Syntax Second

- This course is very practical but aims to teach you a process so you can replicate the material in your own projects.

- You don't need to remember everything we cover in detail. You just need to remember the gist of it so you look things up online and in the notes.

---

## Curriculum 📔

<div class="row">
  <div>
    <h3>Unit 1</h3>
    <ul>
      <li> 00 Installfest</li>
      <li> 01 The Command Line & Data Types</li>
      <li> 02 Collections & Loops</li>
      <li> 03 Conditionals & Functions</li>
      <li> 04 Scope & Variables</li>
      <li> 05 Objects & JSON</li>
    </ul>
  </div>
  <div>
    <h3>Unit 2</h3>
    <ul>
      <li> 06 Slackbot Lab</li>
      <li> 07 The DOM & jQuery</li>
      <li> 08 Javascript Events</li>
      <li> 09 AJAX & APIs</li>
      <li> 10 Asynchronous JavaScript & Callbacks</li>
      <li> 11 Advanced APIs</li>
      <li> 12 APIs Lab</li>
    </ul>
  </div>
</div>

---

## Curriculum 📔

<div class="row">
  <div>
    <h3>Unit 3</h3>
    <ul>
      <li> 13 Prototypal Inheritance</li>
      <li> 14 Closures & this</li>
      <li> 15 Intro to CRUD and Firebase Lab</li>
    </ul>
  </div>
  <div>
    <h3>Unit 4</h3>
    <ul>
      <li> 16 Deploying Your App</li>
      <li> 17 Student Choice</li>
      <li> 18 Final Project Lab</li>
      <li> 19 Final Project Presentations</li>
    </ul>
  </div>
</div>

---

## Getting a certificate 🔖

1. Complete 80% of the homework
2. Don't miss more than 3 classes
3. Present your final project

---

## Homework 📚

- Assigned every **Thursday**, starting this week
- Due end of day **Monday**
- Expect feedback within 5 days
- Grading is complete/incomplete
- Late assignments will not receive feedback

---

## Tips for success 🚀

- Ask questions
- Challenge yourself
- Complete homework on time
- Brush up on HTML/CSS

---

## Classroom norms for a remote class 🏗

- Keeping your video on and your mic muted is a great way to feel present in the group without background noise disturbing others.
- If you have a question - unmute yourself and chime in!
- If you need to step away for a few minutes, send your instructor a slack message and turn your video off.

---

## Group discussion

- What do you need from your instructional team to be successful?
- What do you need from your classmates?
- How can we create a supportive learning environment online?

---

## Installfest

Click in either logo to navigate to the corresponding machinge setup

<div class="row">
  <a href="/bonus-lessons/installfest-macos">
    <picture class="image-half">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/21/MacOS_wordmark_%282017%29.svg"
        alt="mac logo"
      />
    </picture>
  </a>
  <a href="/bonus-lessons/installfest-windows">
    <picture class="image-half">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Windows_logo_and_wordmark_-_2021.svg"
        alt="windows logo"
      />
    </picture>
  </a>
</div>

---

## Tell the difference...

Please, tell us the difference between:

### Frontend vs Backend

---

## Frontend vs. Backend

The development process can be broken into two areas:

<div class="row">
   <div>
      <h3>Front-End</h3>
      <ul>
         <li> How things look to the user</li>
         <li> Involves: images, content, structure</li>
         <li> HTML, CSS, and <strong>JavaScript</strong></li>
      </ul>
   </div>
   <div>
      <h3>Back-End</h3>
      <ul>
         <li>How things work</li>
         <li>Involves: “business logic” and “data”</li>
         <li>Ruby, PHP, C++, Java, <strong>JavaScript</strong> etc.</li>
      </ul>
   </div>
</div>

---

## Tell the difference...

Please, tell us the difference between:

### Website vs Webpage vs Web server

---

## How the Web Works?

<div class="row">
  <div>
    <picture>
      <img
        src="https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png"
        alt="Request and response cycle"
      />
    </picture>
  </div>
  <div>
    <ol>
      <li>Browser send a HTTP request to the server</li>
      <li>
        Requests for dynamic resources are forwarded to server-side code
        (application)
      </li>
      <li>
        Application interprets the request, reads required information from the
        database
      </li>
      <li>Combines the retrieved data with HTML templates</li>
      <li>Sends back a response containing the generated HTML</li>
      <li>Browser read response and re render</li>
    </ol>
  </div>
</div>

---

## Pseudo code

- A great way to break down a problem into small chunks is to use pseudo code.
- Pseudo code is usually typed in comments so it has no effect on the program being written.
- It is typically written in a mixture of natural language and high-level programming constructs.
- It can make your code very understandable and even simplify debugging.

---

## Comments in JavasScript

To comment out a line hit <kbd>cmd</kbd> + <kbd>/</kbd>

```js
// Comment on a single line can be created by two forward slashes

// Comments are greyed out by the editor

/* 
I am a line

Multi line comments are created by using a different syntax 

I am a line
  
*/
```

---

## Pseudo code lab

### Task:

Imagine we have 3 different coloured buttons (red 🔴, blue 🔵 and yellow 🟡). If a user taps a button, the light changes to that colour. If the selected colour is tapped again, the light turns off.

Write the pseudo code for a programme that controls a light that can changed based on user input.

---

## Learning objectives - Review

- Differentiate between the Internet and the World Wide Web.
- Summarise the client-server model & explain how DNS lookup works.
- Write pseudocode and explain how it relates to programmatic thinking.

---

## Next session: JavaScript on the command line

At the end of next class, we'll cover:

- Understanding JavaScript in the browser vs. the command line
- Running JavaScript code on the command line using Node.js
- Introduction to variables and data types

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
