# HTML Tables

Try laying this out into an HTML table. NOTE - you also have a table sample HTML file in this folder to help you out.

```txt
RANK SEASON TEAM
1 1995-96 Chicago Bulls
2 1996-97 Chicago Bulls
3 2015-16 Golden State Warriors
4 2014-15 Golden State Warriors
5 1985-86 Boston Celtics
6 2015-16 San Antonio Spurs
7 2008-09 Los Angeles Lakers
8 1991-92 Chicago Bulls
9 1997-98 Chicago Bulls
10 1990-91 Chicago Bulls
```

| RANK | SEASON  | TEAM                  |
| ---- | ------- | --------------------- |
| 1    | 1995-96 | Chicago Bulls         |
| 2    | 1996-97 | Chicago Bulls         |
| 3    | 2015-16 | Golden State Warriors |
| 4    | 2014-15 | Golden State Warriors |
| 5    | 1985-86 | Boston Celtics        |
| 6    | 2015-16 | San Antonio Spurs     |
| 7    | 2008-09 | Los Angeles Lakers    |
| 8    | 1991-92 | Chicago Bulls         |
| 9    | 1997-98 | Chicago Bulls         |
| 10   | 1990-91 | Chicago Bulls         |

Source:
[FiveThirtyEight.com](http://fivethirtyeight.com/features/after-all-that-the-warriors-arent-even-the-second-best-team-ever/)

## Example

```html
<table>
  <caption>
    Table Sample
  </caption>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>Item 2</td>
      <td>Item 3</td>
    </tr>
    <tr>
      <td>Item 4</td>
      <td>Item 5</td>
      <td>Item 6</td>
    </tr>
  </tbody>
</table>
```
