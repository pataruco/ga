class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>HTML tables</h1>
</div>

---

## Tables

### Agenda:

- Everything about tables
- Lab

---

## Tables

### Historical layouts

In the days before smartphones and tablets, websites were typically
built using tables. This allowed for structured fixed layouts.

But it is hard to re-format a table's layout, so developers moved
away from this technique once accessing web pages from different
sized devices became the norm.

---

## Tables

### Modern day usage

The move away from tables for layout purposes has meant that tables
can be used for what they were originally intended to be used for...

...presenting tabular data!

---

## Tables

### Basics

Tables are structured using columns and rows in order to present data
to the user.

The core HTML elements for a table are <code>&lt;table&gt;</code>,
<code>&lt;tr&gt;</code> (table row) and <code>&lt;td&gt;</code> (table data).

Table rows contain the table data elements, which make up the columns.

---

## Tables

### Basics

The first element in any HTML table is the <code>&lt;table&gt;</code> element.
This wraps all other table-related HTML elements.

<code>&lt;tr&gt;</code> tags then define each table row.

Within the <code>&lt;tr&gt;</code> tags sit the <code>&lt;td&gt;</code> tags, which each define a new column.

Corresponding <code>&lt;td&gt;</code> tags within a row sit in the same column.

```html
<table>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
</table>
```

---

## Tables

### Headings

If needed, headings can be added to provide context to the data.

The <code>&lt;th&gt;</code> tag is used for this and they sit within a row.

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Gender</th>
  </tr>
  <tr>
    <td>Pedro</td>
    <td>43</td>
    <td>Male</td>
  </tr>
</table>
```

---

## Tables

### Captions

To add a caption or title to a table, the <code>&lt;caption&gt;</code> element can be placed just inside the opening <code>&lt;table&gt;</code> tag.

```html
<table>
  <caption>
    FEWD instructors
  </caption>
  <!-- Table code here -->
</table>
```

---

## Tables

### Structure

More structure can be added inside the <code>&lt;table&gt;</code>, with the addition of <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> and <code>&lt;tfoot&gt;</code> tags.

---

## Tables

### Head

The <code>&lt;thead&gt;</code> tag can be added to separate the head row of the table.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
</table>
```

---

## Tables

### Body

The <code>&lt;tbody&gt;</code> tag is used to wrap the body of the data.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Banana</td>
      <td>4</td>
      <td>£0.25</td>
    </tr>
  </tbody>
</table>
```

---

## Tables

### Foot

The <code>&lt;tfoot&gt;</code> tag is used finally to present any extra data.

```html
<table>
  <thead>
    <!-- thead code -->
  </thead>
  <tbody>
    <!-- tbody code -->
  </tbody>
  <tfoot>
    <tr>
      <td>Total:</td>
      <td></td>
      <td>£1.00</td>
    </tr>
  </tfoot>
</table>
```

---

## Tables

### Elements

| Element | Description                                       |
| ------- | ------------------------------------------------- |
| `table` | Contains all child elements.                      |
| `thead` | Contains the headings for the table columns.      |
| `th`    | An individual column heading inside the thead.    |
| `tbody` | The body of the table containing all of the rows. |
| `tr`    | A row inside of the table body.                   |
| `td`    | An individual cell of table data inside of a row. |
| `tfoot` | set of rows summarizing the columns of the table  |

---

## Tables

### Lab &#x1F9EA;

Try building out your own table of the best NBA superteams of all time.

[starter code](https://github.com/pataruco/fewd/raw/master/labs/table/table-starter-code.zip)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>HTML tables</h1>
</div>
