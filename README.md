# vue-sheets

> A vue component library based on the [JUI components](http://uiplay.jui.io) available in vuejs.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)

## Installation

### NPM
```bash
npm install --save vue-sheets
```

### Browser (Legacy)
If you are using an existing JUI style, Just download `dist/vue-sheets.base.js` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-sheets.base.js"></script>
<link rel="stylesheet" href="jui-grid.classic.css" />
<!--<link rel="stylesheet" href="jui-grid.dark.css" />-->
```

### Browser
Download the `dist/vue-sheets.classic.js` and `dist/vue-sheets.css` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-sheets.classic.js"></script>
<!--<script src="dist/vue-sheets.dark.js"></script>-->
<link rel="stylesheet" href="dist/vue-sheets.css" />
```

### ES Modules

##### Plug-In

```js
import Vue from 'vue'
import VueSheets from 'vue-sheets'

Vue.use(VueSheets, { theme: 'classic' })
```

##### Components (Legacy)
If you are using an existing JUI style, You must load a non-styled view component.

```js
import Vue from 'vue'
import SheetsTable from 'vue-sheets/src/components/table'

Vue.component(SheetsTable.name, SheetsTable);
```

##### Components

```js
import Vue from 'vue'
import SheetsTable from 'vue-sheets/src/components/table.classic'
// import SheetsTable from 'vue-sheets/src/components/table.dark'

Vue.component(SheetsTable.name, SheetsTable);
```

## Implemented components

- [Table](https://codepen.io/seogi1004/pen/dgjLRd)
- [X-Table](https://codepen.io/seogi1004/pen/pQxEvy)


## Props

### Common

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| tableType | String | false | false | `classic` | Table style type (**simple, simple headline, expand**) |
| tableSize | String | false | false | `normal` | Table size type (**small, large**) |
| tableEffect | String | false | false | `hover` | Table effect type (**stripeless, borderless**) |
| tableWidth | Number, String | false | false | `100%` | Table width |
| columns | Array | true | false | `undefined` | Properties of a column object, Required are key and name (**key, name, width, sort, active**) |
| data | Array | false | true | `undefined` | Table row data, The column key must be the same as the row object's key |
| scroll | String | false | false | `vscroll` | Table scroll type (**page, s-page, scroll**) |
| scrollHeight | Number | false | true | 200 | The maximum height of the tbody tag |
| resize | Boolean | false | false | false | Use resizing of table columns |
| sortKey | String | false | false | `null` | Column key to sort by default |
| sortOrder | String | false | false | `asc` | Sort order type for default sorting (**desc**) |
| activeMenu | Boolean | false | false | false | Show or hide the drop-down menu for column activation |
| menuLeft | Number | false | false | 0 | Left coordinate of the drop-down menu |
| menuTop | Number | false | false | 0 | Top coordinate of the drop-down menu |
| selectRowEffect | Boolean | false | false | false | When clicking on a row, apply the selection effect to the row |
| selectRowIndex | Number, String | false | false | false | The index of the row to select when the data is first updated |
| templateRow | String | false | false | `null` | Table row template |
| templateNone | String | false | false | `null` | If there are no rows, the displayed template |
| templateExpand | String | false | false | `null` | Template for table row extension area |
| templateMenu | String | false | false | `null` | Template for drop-down menu for column activation |

### Table

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| dragRow | Boolean | false | false | false | Option to change table rows by dragging the mouse |

### X-Table

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| scrollWidth | Number | false | false | 0 | The maximum width of the table tag |
| sortType | String | false | false | 'single' | Only X-Table components support multiple sorting (**multi**) |
| sortCache | Boolean | false | false | false | Options that maintain column sorting when new data is updated |
| xssFilter | Boolean | false | false | false | Options to enable the xss filter |
| rowHeight | Number | false | false | 26 | When using table virtual scrolling, set the row height for precise calculations |
| pageCount | Number | false | false | 100 | When table scrolling is not used, the number of rows per page |


## Events

### Common

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| click | Row, Event | Events that occur when a table row is clicked |
| rclick | Row, Event | Events that occur when right-clicking a table row |
| dblclick | Row, Event | Events that occur when double-clicking a table row |
| sort | Row, Event | When sorting starts after clicking on a table column |
| sortend | Row, Event | When sorting is completed after clicking on a table column |
| expand | Row, Event | Events that occur when an extension is opened after clicking a table row |
| expandend | Row, Event | Events that occur when an extension is closed after clicking on a table row |
| showcolumn | Column, Event | The event that occurs when the column is shown |
| hidecolumn | Column, Event | The event that occurs when the column is hidden |
| columnmenu | Column, Event | The event that occurs when the drop-down is shown |

### Table

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| drag | Row, Event | Events that occur when dragging a table row begins |
| dragend | Row, Event | Events that occur when a table row ends dragging |
| edit | Row, Event | Events that occur when you modify a table row |
| editend | Row, Event | Events that occur when the table row is modified |
