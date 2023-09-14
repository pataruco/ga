# .center[Version Control]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

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

## Git for final projects

## GitHub

- Open an account on [GitHub](https://github.com/join)
- Sign up
- Download [GitHub desktop](https://desktop.github.com/)
- Associate your GitHub account with GitHub desktop

---

## GitHub desktop workflow

### Steps

**Creating your repo**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/add-repo.png)]

Either click the **Add a local repository** button on the homescreen or select `File > Add Local Repository` from the menu.

---

### Steps

**Select project folder**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/select-project-folder.png)]

Select the project folder for your assignment. Then click the **create a repository** link in the sentence `Would you like to create a repository here instead?`

---

### Steps

**Add repo details**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/add-repo-details.png)]

---

### Steps

**Review files**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/review-changes.png)]

Review the files that have been changed since your last commit.

---

### Steps

**Commit**

When you commit your changes, you are creating a unique **snapshot** of your code. So be sure to write a meaningful commit message to help you find the correct **snapshot** if you ever need to come back to this commit.

---

### Steps

**Commit**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/commit-message.png)]

---

### Steps

**Publish**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/publish-repo.png)]
Once you've committed your first changes, you can 'publish' your repo. This will push it up to Github.

_Note: Always be sure to untick the 'Keep project private' checkbox so that we can review it._

---

### Steps

**Push**

.image-third[![](https://mattstuddert.github.io/ga-fewd/dist/images/week-2/sync-repo.png)]

Once your repo has been published, you'll then only be able to 'push' your changes. Every time you push after a commit, it will update the remote repo with your latest code.
