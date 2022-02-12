# Command line exercise

## Complete the following instructions in the Terminal

1. Within your **JSD** folder, create a folder titled **goals**
2. Navigate into the goals folder, then create three empty files:

   - `goals.html`
   - `worries.html`
   - `index.html`

3. Open Visual Studio Code, click **File > Open**, navigate to your newly created `JSD/goals` folder, then open it. All 3 files you created should be displayed in your editor's sidebar.

In the respective files (`goals.html` and `worries.html`), write your top three goals and top three worries for this course.

**Reminder**: to create an ordered list in HTML, use the following structure:

```html
<ol>
  <li>Item 1 content</li>
  <li>Item 2 content</li>
</ol>
```

4. Paste the following contents into index.html:

```html
<html>
  <head></head>
  <body>
    <p>
      <a href="goals.html">
        <img src="http://i.imgur.com/dosK05U.gif" />
      </a>
    </p>

    <p>
      <a href="worries.html">
        <img src="http://i.imgur.com/2s0HwpM.gif" />
      </a>
    </p>
  </body>
</html>
```

5. Save your changes to all 3 files.

6. Open `index.html` with your browser (**Right Click > Open** In Default Browser). Each image is a link to one of the other files you created.

7. Follow each link, then make sure you see your goals and worries in the linked files.
