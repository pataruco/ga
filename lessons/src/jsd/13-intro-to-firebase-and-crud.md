class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>13 Firebase lab &#x1F9EA;</h1>

</div>

---

## Learning objectives

- Understanding CRUD
- Intro to Firebase
- Writing data to Firebase
- Retrieving and updating data in Firebase

---

## What is CRUD

- Databases are used to persist data
- In computer programming, **create**, **read**, **update**, and **delete** (CRUD) are the four basic functions of persistent storage

---

## CRUD and HTTP

| CRUD   | HTTP      | Operation             |
| ------ | --------- | --------------------- |
| Create | POST      | Create a new resource |
| Read   | GET       | Read a resource       |
| Update | PUT/PATCH | Update a resource     |
| Delete | DELETE    | Delete a resource     |

---

## Firebase

Is a Google Cloud Services that include:

- Hosting
- Realtime Database
- Authentication

and much more

---

# Firebase realtime database

- Automatically sends updates to all clients
- Provides an SDK (software development kit) for connecting to the database with methods for CRUD operations
- Each record has a unique ID that we use to reference the data
- The Realtime database stores data in a document database
- Stores data in formats that resemble JavaScript objects and JSON

---

# Firebase realtime

| CRUD   | HTTP      | Firebase method         |
| ------ | --------- | ----------------------- |
| Create | POST      | `push()`                |
| Read   | GET       | `ref()` / `onValue()`   |
| Update | PUT/PATCH | `set()` / `update()`    |
| Delete | DELETE    | `remove()` / `update()` |

---

## Steps to create a new Firebase application

1. Go to your Google Firebase console.
2. Create a new project.
3. Create a new web app.
4. After your app is registered copy the SDK script and configuration and add them to your JavaScript file.
5. Enable **Anonymous login**.
6. Go to the Database section and create a new Realtime Database. Make sure to start in **test mode**.

---

## Steps to create a new Firebase application

**1.** Go to your Google Firebase console.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/1.png" alt="Go to your Google Firebase console">
<picture>

---

## Steps to create a new Firebase application

**2.** Create a new project.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/2.png" alt="Create a new project">
<picture>

---

## Steps to create a new Firebase application

**3.** Create a new web app.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/3.png" alt="Create a new web app">
<picture>

---

## Steps to create a new Firebase application

**3.** Create a new web app.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/3-5.png" alt="Create a new web app">
<picture>

---

## Steps to create a new Firebase application

**4.** After your app is registered copy the SDK script and configuration and add them to your JavaScript file.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/4.png" alt="After your app is registered copy the SDK script and configuration and add them to your html file">
<picture>

---

## Steps to create a new Firebase application

**5.** Enable **Anonymous login**.

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/6.png" alt="Enable Anonymous login">
<picture>

---

## Steps to create a new Firebase application

**6.** Go to the Database section and create a new Realtime Database. Make sure to start in **test mode**..

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/7.png" alt="Go to the Database section and create a new Realtime Database. Make sure to start in test mode">
<picture>

---

## Steps to create a new Firebase application

**7.** Go to the Database section and create a new Realtime Database. Make sure to start in **test mode**..

<picture style="max-width: 90%; margin: 0 auto; display: block;">
  <img src="https://pataruco.s3.amazonaws.com/ga/jsd/7-5.png" alt="Go to the Database section and create a new Realtime Database. Make sure to start in test mode">
<picture>

---

class: lab

# Code along

Download [starter code](https://github.com/pataruco/jsd/raw/master/labs/crud-firebase/crud-firebase-starter-code.zip)

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
